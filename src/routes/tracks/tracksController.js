const connexion = require('../../../db-config');
const db = connexion.promise();

const getOne = (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM track WHERE id = ?', [id])
    .then(([results]) => {
      if (results.length === 0) {
        res.status(404).send('Track not found.');
      } else {
        res.status(200).json(results[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error retrieving this track from the database.');
    });
};

const getAll = (req, res) => {
  db.query('SELECT * FROM track')
    .then(([results]) => {
      res.status(200).json(results);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error retrieving tracks from db.');
    });
};

const postTracks = (req, res) => {
  const { title, youtube_url, id_album } = req.body;
  db.query(
    'INSERT INTO track (title, youtube_url, id_album) VALUES (?, ?, ?)',
    [title, youtube_url, id_album]
  ).then(([result]) => {
    const id = result.insertId;
    res.status(201).json({ id, title, youtube_url, id_album });
  });
};

const updateTracks = (req, res) => {
  const { id } = req.params;
  const { title, youtube_url, id_album } = req.body;
  let query = 'UPDATE track SET';
  const params = [];

  if (title) {
    query += ' title = ?,';
    params.push(title);
  }
  if (youtube_url) {
    query += ' youtube_url = ?,';
    params.push(youtube_url);
  }
  if (id_album) {
    query += ' id_album = ?,';
    params.push(id_album);
  }

  // Remove the trailing comma if any
  query = query.replace(/,$/, '');

  query += ' WHERE id = ?';
  params.push(id);

  db.query(query, params)
    .then(([result]) => {
      if (result.affectedRows) {
        res.status(204).send();
      } else {
        res.status(404).send('Track not found.');
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error updating track in the database.');
    });
};

const deleteTracks = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM track WHERE id = ?', [id]).then(([result]) => {
    res.status(204).send('Delete route is OK');
  });
};

module.exports = { getOne, getAll, postTracks, updateTracks, deleteTracks };
