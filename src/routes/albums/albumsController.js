const connexion = require('../../../db-config');
const db = connexion.promise();

const getAll = (req, res) => {
  db.query('select * from albums')
    .then(([albums]) => {
      res.json(albums);
      res.status(200).send('Get All route is OK');
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error retrieving data from database');
    });
};

const getOne = (req, res) => {
  const id = parseInt(req.params.id);

  db.query('select * from albums where id = ?', [id])
    .then(([albums]) => {
      if (albums[0] != null) {
        res.json(albums[0]);
        res.status(200).send('Get One route is OK');
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

  db.query(
    'select t.title, t.youtube_url from albums as a JOIN track as t ON t.id_album=a.id where a.id = ? ',
    [id]
  )
    .then(([albums]) => {
      if (albums != null) {
        res.json(albums);
        res.status(200).send('Get Albums route is OK');
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
      res.location(`/api/albums/${result.insertID}`);
      res.status(201).send('Post route is OK');
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
    'update albums set title = ?, genre = ?, picture = ?, artist = ? where id = ?',
    [title, genre, picture, artist, id]
  )
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send('Not Found');
      } else {
        res.status(204).send('Update route is OK');
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
        res.status(204).send('Delete route is OK');
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error deleting the album');
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
