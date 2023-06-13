const connexion = require('../../../db-config');
const db = connexion.promise();

const getAll = (req, res) => {
  db.query('select * from albums')
    .then(([albums]) => {
      res.json(albums);
    })
    .catch((err) => {
      console.error(err);
    });
};

const getOne = (req, res) => {
  const id = parseInt(req.params.id);
  db.query(`select * from albums where id = ?`, [id])
    .then(([albums]) => {
      const album = albums.find((album) => album.id === id);
      if (album != null) {
        res.json(album);
      } else {
        res.status(404).send('Not Found');
      }
    })
    .catch((err) => {
      console.error(err);
    });
};

const getTracksByAlbumId = (req, res) => {
  const id = parseInt(req.params.id);
  db.query('select * from track where id_album = ?', [id])
    .then(([tracks]) => {
      res.json(tracks);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Erreur lors de la récupération ');
    });

};

const postAlbums = (req, res) => {
  const { title, genre, picture, artist } = req.body;
  db.query(
    'INSERT INTO albums(title, genre, picture, artist) VALUES (?, ?, ?, ?)',
    [title, genre, picture, artist]
  )
    .then(([result]) => {
      res.location(`/api/albums/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error saving the albums');
    });
};

const updateAlbums = (req, res) => {
  const id = parseInt(req.params.id);
  const { title, genre, picture, artist } = req.body;

  db.query(
    'update albums set title = ?, genre = ?,picture = ?, artist = ? where id = ?',
    [title, genre, picture, artist, id]
  )
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send('Not Found');
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error editing the albums');
    });
};

const deleteAlbums = (req, res) => {
  const id = parseInt(req.params.id);
  db.query('delete from albums where id = ?', [id])
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send('Not Found');
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error deleting the albums');
    });
};

module.exports = {
  getAll,
  getOne,
  getTracksByAlbumId,
  postAlbums,
  updateAlbums,
  deleteAlbums,
};
