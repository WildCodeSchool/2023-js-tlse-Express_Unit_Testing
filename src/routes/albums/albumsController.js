const connexion = require('../../../db-config');
const db = connexion.promise();

const getAll = (req, res) => {
  db.query('SELECT * from albums').then(([albums]) => {
    if (albums.length > 0) {
      res.status(200).json(albums);
    } else {
      res.status(404).send('No album found');
    }
  });
};

const getOne = (req, res) => {
  const id = parseInt(req.params.id);

  db.query('SELECT * from albums WHERE id = ?', [id])
    .then(([albums]) => {
      if (albums[0] != null) {
        res.status(200).json(albums[0]);
      } else {
        res.status(404).send('Album not found');
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error retrieving data from database');
    });
};

const getTracksByAlbumId = (req, res) => {
  const id = parseInt(req.params.id);

  db.query('SELECT * from track WHERE id_album = ?', [id]).then(([tracks]) => {
    if (tracks.length > 0) {
      res.status(200).json(tracks);
    } else {
      res.status(404).send('No track found for this album');
    }
  });
};

const postAlbums = (req, res) => {
  const { title, genre, picture, artist } = req.body;
  db.query(
    'INSERT INTO albums (title, genre, picture, artist) VALUES (?, ?, ?, ?)',
    [title, genre, picture, artist]
  ).then(([result]) => {
    res
      .location('/api/albums/' + result.insertId)
      .status(201)
      .json({ id: result.insertId, ...req.body });
  });
};

const updateAlbums = (req, res) => {
  const id = parseInt(req.params.id);
  const { title, genre, picture, artist } = req.body;

  db.query(
    'UPDATE albums SET title = ?, genre = ?, picture = ?, artist = ? WHERE id = ?',
    [title, genre, picture, artist, id]
  ).then(([result]) => {
    if (result.affectedRows === 0) {
      res.status(404).send('Album not found');
    } else {
      res.sendStatus(204);
    }
  });
};

const deleteAlbums = (req, res) => {
  const id = parseInt(req.params.id);

  db.query('DELETE FROM albums WHERE id = ?', [id]).then(([result]) => {
    if (result.affectedRows === 0) {
      res.status(404).send('Album not found');
    } else {
      res.sendStatus(204);
    }
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
