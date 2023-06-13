const connexion = require('../../../db-config');
const db = connexion.promise();

const getAll = (req, res) => {

  db.query("SELECT * FROM albums")
    .then(([result]) => {
      res.status(200).json(result);
    })
    .catch((err) => { 
      console.error(err);
      res.status(500).send("Error getting all albums");
    });
};
  

const getOne = (req, res) => {
  const id = parseInt(req.params.id);
  db.query("SELECT * FROM albums WHERE id = ?", [id])
  .then(([result]) => {
    res.status(200).json(result);

  })
  .catch((err) => { 
    console.error(err);
    res.status(500).send("Error getting this albums");
  });
};

const getTracksByAlbumId = (req, res) => {
  const id = parseInt(req.params.id);
  db.query("SELECT * FROM track WHERE id_album = ?", [id])
  .then(([result]) => {
    res.status(200).json(result);
  })
  .catch((err) => { 
    console.error(err);
    res.status(500).send("Error getting tracks by album");
  });
};

const postAlbums = (req, res) => {
  const { title, genre, picture, artist } = req.body;

  db
    .query("INSERT INTO albums (title, genre, picture, artist) VALUES (?, ?, ?, ?)", [
      title, genre, picture, artist
    ])
    .then (([result])=> {
      res.location(`/api/albums/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error saving the album")
    })
};

const updateAlbums = (req, res) => {
  const id = parseInt(req.params.id);
  const { title, genre, picture, artist } = req.body;
  db
    .query("UPDATE albums SET title = ?, genre = ?, picture = ?, artist = ? WHERE id = ?", [title, genre, picture, artist, id])
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send("Not Found");
      } else {
        res.sendStatus(204);
      }})
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error editing the album")
    })
};


const deleteAlbums = (req, res) => {
  const id = parseInt(req.params.id);
  db
    .query("DELETE FROM albums WHERE id = ?", [id])
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send("Not Found");
      } else {
        res.sendStatus(204);
      }})
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error deleting the album")
    })
};

module.exports = {
  getAll,
  getOne,
  getTracksByAlbumId,
  postAlbums,
  updateAlbums,
  deleteAlbums,
};
