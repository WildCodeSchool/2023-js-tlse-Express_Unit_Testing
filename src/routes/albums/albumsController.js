const connexion = require('../../../db-config');
const db = connexion.promise();

const getAll = (req, res) => {
  db.query(`SELECT * FROM albums`).then(([result]) => {
    if (result.length) {
      res.status(200).json(result);
    } else {
      res.sendStatus(404)
    }
  }).catch((error) => {res.sendStatus(500)})
};

const getOne = (req, res) => {
  const {id} = req.params

  db.query(`SELECT * FROM albums WHERE id = ?`, [id]).then(([result]) => {
    if (result[0]) {
      res.status(200).json(result[0]);
    } else {
      res.sendStatus(404)
    }
  }).catch((error) => {res.sendStatus(500)})
};

const getTracksByAlbumId = (req, res) => {
  const {id} = req.params
  db.query(`SELECT * FROM track WHERE id_album = ?`, [id]).then(([result]) => {
    if (result.length) {
      res.status(200).json(result);
    } else {
      res.sendStatus(404)
    }
  }).catch((error) => {res.sendStatus(500)})
};

const postAlbums = (req, res) => {
  const {title, genre, picture, artist} = req.body

  db.query(`INSERT INTO albums(title, genre, picture, artist) VALUES(?, ?, ?, ?)`, [title, genre, picture, artist]).then(([result]) => {
    if (result.affectedRows) {
      res.status(201).json({
        title: title,
        genre: genre,
        picture: picture,
        artist: artist,
        id: result.insertId
      })
    } else {
      res.sendStatus(400)
    } 
  }).catch((error) => {res.sendStatus(500)})
};

const updateAlbums = (req, res) => {
  const {title, genre, picture, artist} = req.body
  const {id} = req.params

  db.query(`UPDATE albums SET title = ?, genre = ?, picture = ?, artist = ? WHERE id = ?`, [title, genre, picture, artist, id]).then(([result]) => {
    if (result.affectedRows) {
      res.sendStatus(204)
    } else {
      res.sendStatus(404)
    }
  }).catch((error) => {res.sendStatus(500)})
};

const deleteAlbums = (req, res) => {
  const {id} = req.params

  db.query(`DELETE FROM albums WHERE id = ?`, [id]).then(([result]) => {
    if (result.affectedRows) {
      res.sendStatus(204)
    } else {
      res.sendStatus(404)
    }
  }).catch((error) => {res.sendStatus(500)})
};

module.exports = {
  getAll,
  getOne,
  getTracksByAlbumId,
  postAlbums,
  updateAlbums,
  deleteAlbums,
};
