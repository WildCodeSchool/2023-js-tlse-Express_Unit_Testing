/* eslint-disable no-console */
const connexion = require('../../../db-config');
const db = connexion.promise();

const getAll = (req, res) => {
  db.query('select * from albums')
    .then(([albums]) => {
      res.json(albums).status(200);
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
  db.query('select * from track where id_album = ?', [id])
    .then(([result]) => {
      if (result != null) {
        res.json(result);
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
      res.location(`/api/albums/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error saving the album');
    });
};

const updateAlbums = (req, res) => {
  const { title, genre, picture, artist } = req.body;

  db.query('UPDATE albums SET title = ?, genre = ?, picture = ?, artist = ?', [
    title,
    genre,
    picture,
    artist,
  ])
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send('Not Found');
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error saving the album');
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
