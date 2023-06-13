const connexion = require('../../../db-config');
const db = connexion.promise();

const getOne = (req, res) => {
  const id = parseInt(req.params.id);

  db.query('SELECT * from track WHERE id = ?', [id])
    .then(([tracks]) => {
      if (tracks[0] != null) {
        res.status(200).json(tracks[0]);
      } else {
        res.status(404).send('Track not found');
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error retrieving data from database');
    });
};

const getAll = (req, res) => {
  db.query('SELECT * from track').then(([tracks]) => {
    if (tracks.length > 0) {
      res.status(200).json(tracks);
    } else {
      res.status(404).send('No track found');
    }
  });
};

const postTracks = (req, res) => {
  const { title, youtube_url, id_album } = req.body;

  db.query(
    'INSERT INTO track (title, youtube_url, id_album) VALUES (?, ?, ?)',
    [title, youtube_url, id_album]
  ).then(([result]) => {
    res
      .location('/api/tracks/' + result.insertId)
      .status(201)
      .json({ id: result.insertId, ...req.body });
  });
};

const updateTracks = (req, res) => {
  const id = parseInt(req.params.id);
  const { title, youtube_url, id_album } = req.body;

  db.query(
    'UPDATE track SET title = ?, youtube_url = ?, id_album = ? WHERE id = ?',
    [title, youtube_url, id_album, id]
  ).then(([result]) => {
    if (result.affectedRows === 0) {
      res.status(404).send('Track not found');
    } else {
      res.sendStatus(204);
    }
  });
};

const deleteTracks = (req, res) => {
  const id = parseInt(req.params.id);

  db.query('DELETE FROM track WHERE id = ?', [id]).then(([result]) => {
    if (result.affectedRows === 0) {
      res.status(404).send('Track not found');
    } else {
      res.sendStatus(204);
    }
  });
};

module.exports = { getOne, getAll, postTracks, updateTracks, deleteTracks };
