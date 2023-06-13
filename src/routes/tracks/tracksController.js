const connexion = require('../../../db-config');
const db = connexion.promise();

const getOne = (req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM track WHERE id = ?', [id])
    .then((result) => {
      if (result[0] != null) {
        res.json(result);
      } else {
        res.status(404).send('Track not found');
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const getAll = (req, res) => {
  db.query('SELECT * FROM track')
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
const postTracks = (req, res) => {
  const { id, title, youtube_url, id_album } = req.body;
  db.query(
    'INSERT INTO track (id, title, youtube_url, id_album) VALUES (?, ?, ?, ?)',
    [id, title, youtube_url, id_album]
  )
    .then((result) => {
      res.location(`/api/tracks/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const updateTracks = (req, res) => {
  const id = req.params.id;
  const { title, youtube_url, id_album } = req.body;

  db.query(
    'UPDATE track SET title = ?, youtube_url = ?, id_album = ? WHERE id = ?',
    [id, title, youtube_url, id_album]
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

const deleteTracks = (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM track WHERE id = ?', [id])
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

module.exports = { getOne, getAll, postTracks, updateTracks, deleteTracks };
