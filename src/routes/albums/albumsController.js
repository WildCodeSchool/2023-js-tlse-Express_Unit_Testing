const connexion = require('../../../db-config');
const db = connexion.promise();

const getAll = (req, res) => {
  db.query('SELECT * FROM albums')
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const getOne = (req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM albums WHERE id = ?', [id])
    .then((result) => {
      if (result[0] != null) {
        res.json(result);
      } else {
        res.status(404).send('Album not found');
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const getTracksByAlbumId = (req, res) => {
  const albumId = req.params.id;

  db.query('SELECT * FROM track WHERE album_id = ?', [albumId])
    .then((result) => {
      if (result.length > 0) {
        res.status(200).json(result);
      } else {
        res.status(404).send('No tracks found for the album');
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const postAlbums = (req, res) => {
  const { title, genre, picture, artist } = req.body;
  db.query(
    'INSERT INTO albums (title, genre, picture, artist) VALUES (?, ?, ?, ?)',
    [title, genre, picture, artist]
  )
    .then((result) => {
      res.location(`/api/albums/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const updateAlbums = (req, res) => {
  const id = req.params.id;
  const { title, genre, picture, artist } = req.body;

  db.query(
    'UPDATE albums SET title = ?, genre = ?, picture = ?, artist = ? WHERE id = ?',
    [id, title, genre, picture, artist]
  )
    .then((result) => {
      if (result.affectedRows > 0) {
        res.sendStatus(204);
      } else {
        res.sendStatus(404).send('Not found');
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const deleteAlbums = (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM albums WHERE id = ?', [id])
    .then((result) => {
      if (result.affectedRows > 0) {
        res.sendStatus(204);
      } else {
        res.sendStatus(404).send('Not found');
      }
    })
    .catch((err) => {
      res.status(500).send(err);
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
