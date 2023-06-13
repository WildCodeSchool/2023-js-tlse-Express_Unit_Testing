const connexion = require('../../../db-config');
const db = connexion.promise();

const getOne = (req, res) => {
  const id = parseInt(req.params.id);
  db.query(`select * from track where id = ?`, [id])
    .then(([track]) => {
      const tracks = track.find((tracks) => tracks.id === id);
      if (tracks != null) {
        res.json(track);
      } else {
        res.status(404).send('Not Found');
      }
    })
    .catch((err) => {
      console.error(err);
    });
};

const getAll = (req, res) => {
  db.query('select * from track')
    .then(([track]) => {
      res.json(track);
    })
    .catch((err) => {
      console.error(err);
    });
};

const postTracks = (req, res) => {
  const { title, youtube_url, id_album } = req.body;
  db.query('INSERT INTO track(title, youtube_url, id_album) VALUES (?, ?, ?)', [
    title,
    youtube_url,
    id_album,
  ])
    .then(([result]) => {
      res.location(`/api/tracks/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error saving the tracks');
    });
};

const updateTracks = (req, res) => {
  const id = parseInt(req.params.id);
  const { title, youtube_url, id_album } = req.body;

  db.query(
    'update track set title = ?, youtube_url = ?, id_album = ? where id = ?',
    [title, youtube_url, id_album, id]
  )
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send('Not Found');
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error editing the tracks');
    });
};

const deleteTracks = (req, res) => {
  const id = parseInt(req.params.id);
  db.query('delete from track where id = ?', [id])
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send('Not Found');
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error deleting the tracks');
    });
};

module.exports = { getOne, getAll, postTracks, updateTracks, deleteTracks };
