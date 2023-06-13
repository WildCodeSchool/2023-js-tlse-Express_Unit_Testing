const connexion = require('../../../db-config');
const db = connexion.promise();

const getAll = (req, res) => {
  db.query('SELECT * FROM albums')
    .then(([results]) => {
      res.status(200).json(results);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error retrieving albums from db.');
    });
};

const getOne = (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM albums WHERE id = ?', [id])
    .then(([results]) => {
      if (!results || results.length === 0) {
        res.status(404).send('Album not found.');
      } else {
        res.status(200).json(results[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error retrieving this album from the database.');
    });
};

const getTracksByAlbumId = (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM track WHERE id_album= ?', [id])
    .then(([results]) => {
      res.status(200).json(results);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error retrieving tracks from db.');
    });
};

const postAlbums = (req, res) => {
  const { title, genre, picture, artist } = req.body;
  db.query(
    'INSERT INTO albums (title, genre, picture, artist) VALUES (?, ?, ?, ?)',
    [title, genre, picture, artist]
  ).then(([result]) => {
    const id = result.insertId;
    res.status(201).json({ id, title, genre, picture, artist });
  });
};

const updateAlbums = (req, res) => {
  const { id } = req.params;
  const { title, genre, picture, artist } = req.body;

  let query = 'UPDATE albums SET';
  const values = [];

  if (title) {
    query += ' title = ?,';
    values.push(title);
  }
  if (genre) {
    query += ' genre = ?,';
    values.push(genre);
  }
  if (picture) {
    query += ' picture = ?,';
    values.push(picture);
  }
  if (artist) {
    query += ' artist = ?,';
    values.push(artist);
  }

  // Remove the trailing comma
  query = query.slice(0, -1);

  query += ' WHERE id = ?';
  values.push(id);

  db.query(query, values)
    .then(([result]) => {
      if (result.affectedRows) {
        res.status(204).send();
      } else {
        res.status(404).send('Album not found.');
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error updating this album from db.');
    });
};

const deleteAlbums = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM albums WHERE id = ?', [id]).then(([result]) => {
    if (result.affectedRows) {
      res.status(204).send('Deleted');
    } else {
      res.status(404).send('Album not found.');
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
