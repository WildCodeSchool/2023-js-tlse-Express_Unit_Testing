const connexion = require('../../../db-config');
const db = connexion.promise();

const getOne = (req, res) => {
  const id = parseInt(req.params.id);
  db.query("SELECT * FROM track WHERE id = ?", [id])
  .then(([result]) => {
    res.status(200).json(result);
  })
  .catch((err) => { 
    console.error(err);
    res.status(500).send("Error getting this tracks");
  });
};

const getAll = (req, res) => {
  db.query("SELECT * FROM track")
  .then(([result]) => {
  res.status(200).json(result);
})
.catch((err) => { 
  console.error(err);
  res.status(500).send("Error getting all tracks");
});

};

const postTracks = (req, res) => {
  const { title, youtube_url, id_album } = req.body;

  db
    .query("INSERT INTO track (title, youtube_url, id_album) VALUES (?, ?, ?)", [
      title,  youtube_url, id_album
    ])
    .then (([result])=> {
      res.location(`/api/tracks/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error saving the track")
    })
};



const updateTracks = (req, res) => {
  const id = parseInt(req.params.id);
  const { title, youtube_url, id_album } = req.body;
  db
    .query("UPDATE track SET title = ?, youtube_url = ?, id_album = ? WHERE id = ?", [title,  youtube_url, id_album, id])
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send("Not Found");
      } else {
        res.sendStatus(204);
      }})
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error editing the tracks")
    })
};

const deleteTracks = (req, res) => {
  const id = parseInt(req.params.id);
  db
    .query("DELETE FROM track WHERE id = ?", [id])
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send("Not Found");
      } else {
        res.sendStatus(204);
      }})
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error deleting the track")
    })
};

module.exports = { getOne, getAll, postTracks, updateTracks, deleteTracks };
