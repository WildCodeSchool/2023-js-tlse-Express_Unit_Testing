const connexion = require('../../../db-config');
const db = connexion.promise();

const getAll = (req, res) => {
  db.query(`SELECT * FROM  albums`)
    .then(([album]) => {
      res.status(200).json(album);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error retrieving data from database');
    });
};

const getOne = (req, res) => {
  const id = parseInt(req.params.id);

  db.query('SELECT * FROM albums where id = ?', [id])
    .then(([album]) => {
      if (album[0] != null) {
        res.status(200).json(album[0]);
      } else {
        res.status(404).send('Not Found');
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error retrieving data from database');
    });
};

const getTracksByAlbumId = (req, res) => {
  const id = parseInt(req.params.id);

  db.query('SELECT * FROM track where id_album = ?', [id])
    .then(([tracksFromAlbum]) => {
      if (tracksFromAlbum[0] != null) {
        res.status(200).json(tracksFromAlbum);
      } else {
        res.status(404).send('Not Found');
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error retrieving data from database');
    });
};

const postAlbums = (req, res) => {
  const { title, genre, picture, artist } = req.body;

  db.query(
    'INSERT INTO albums(title, genre, picture, artist) VALUES (?, ?, ?, ?)',
    [title, genre, picture, artist]
  )
    .then(([result]) => {
      res.location(`/albums/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error saving the movie');
    });
};

const updateAlbums = (req, res) => {
  const id = parseInt(req.params.id);
  const { title, genre, picture, artist } = req.body;

  db.query(
    'UPDATE albums SET title=?, genre=?, picture=?, artist=? WHERE id=?',
    [title, genre, picture, artist, id]
  )
    .then(([result]) => {
      if (result.affectedRows !== 0) {
        res.sendStatus(204);
      } else {
        res.status(404).send('Album not found...');
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('Error while updating Album');
    });
};

const deleteAlbums = (req, res) => {
  const id = parseInt(req.params.id);

  db.query('DELETE FROM albums WHERE id=?', [id])
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send('Album not found...');
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('Error while deleting album');
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
