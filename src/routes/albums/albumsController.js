const connexion = require('../../../db-config');
const db = connexion.promise();

const getAll = (req, res) => {
  db.query('SELECT * FROM albums')
    .then(([albumList]) => {
      res.json([albumList]);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const getOne = (req, res) => {
  const id = parseInt(req.params.id);
  db.query('SELECT * FROM albums WHERE id = ?', [id])
    .then(([album]) => {
      if (album[0] != null) {
        res.json(album[0]);
      } else {
        res.status(404).send('Album not found');
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const getTracksByAlbumId = (req, res) => {
  const id = parseInt(req.params.id);
  db.query('SELECT * FROM track WHERE id_album = ?', [id])
    .then(([trackList]) => {
      res.json([trackList]);
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
    .then(([result]) => {
      res.location(`/albums/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const updateAlbums = (req, res) => {
  const id = parseInt(req.params.id);
  const { title, genre, picture, artist } = req.body;
  db.query(
    'UPDATE albums SET title = ?, genre = ?, picture = ?, artist = ? WHERE id = ?',
    [title, genre, picture, artist, id]
  )
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send('Album not found');
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const deleteAlbums = (req, res) => {
  const id = parseInt(req.params.id);
  db.query('DELETE FROM albums WHERE id = ?', [id])
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send('Album not found');
      } else {
        res.sendStatus(204);
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
