const connexion = require('../../../db-config');
const db = connexion.promise();

const getAll = (req, res) => {
  db.query('SELECT * FROM track')
    .then(([result]) => {
      if (result.length) {
        res.status(200).json(result);
      } else {
        res.status(404);
      }
    })
    .catch(res.status(500));
};

const getOne = (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM track WHERE id=?', [id])
    .then(([result]) => {
      if (result[0]) {
        res.status(200).json(result);
      } else {
        res.status(404);
      }
    })
    .catch(res.status(500));
};

const getTracksByAlbumId = (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM track WHERE id_album=?', [id]).then(([result]) => {
    if (result[0]) {
      res.status(200).json(result);
    } else {
      res.status(404);
    }
  });
};
const postTracks = (req, res) => {
  const { title, genre, picture, artist } = req.body;
  db.query(
    'INSERT INTO albums (title, youtube_url, id_album) VALUES (?, ?, ?)',
    [title, genre, picture, artist]
  )
    .then(([result]) => {
      if (result.affectedRows) {
        res.status(201).json({
          title: title,
          youtube_url: youtube_url,
          id: result.insertId,
        });
      }
    })
    .catch(res.status(500));
};

const updateTracks = (req, res) => {
  const { id } = req.params;
  const { title, genre, picture, artist } = req.body;
  db.query(
    'UPDATE albums SET title=?, genre=?, picture=?, artist=? WHERE id=?',
    [title, genre, picture, artist, id]
  )
    .then(([result]) => {
      if (result.affectedRows) {
        res.sendStatus(204);
      } else {
        res.status(404);
      }
    })
    .catch(res.status(500));
};

const deleteTracks = (req, res) => {
  const id = parseint(req.params.id);
  db.query('DELETE FROM albums WHERE id=?', [id])
    .then(([result]) => {
      if (result.affectedRows) {
        res.sendStatus(204);
      } else {
        res.status(404);
      }
    })
    .catch(res.status(500));
};

module.exports = { getOne, getAll, postTracks, updateTracks, deleteTracks };
