const models = require('../models');

const getAll = (req, res) => {
  models.albums
    .findAll()
    .then(([result]) => {
      if (result.length) {
        res.status(200).json(result);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

const getOne = (req, res) => {
  const { id } = req.params;

  models.albums
    .find(id)
    .then(([result]) => {
      if (result[0]) {
        res.status(200).json(result[0]);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

const getTracksByAlbumId = (req, res) => {
  const { id } = req.params;
  models.track
    .findLink(id)
    .then(([result]) => {
      if (result.length) {
        res.status(200).json(result);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

const postAlbums = (req, res) => {
  const { title, genre, picture, artist } = req.body;
  models.albums
    .insert({ title, genre, picture, artist })
    .then(([result]) => {
      if (result.affectedRows) {
        res.status(201).json({
          title: title,
          genre: genre,
          picture: picture,
          artist: artist,
          id: result.insertId,
        });
      } else {
        res.sendStatus(400);
      }
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

const updateAlbums = (req, res) => {
  const { title, genre, picture, artist } = req.body;
  const { id } = req.params;

  models.albums
    .update({ title, genre, picture, artist, id })
    .then(([result]) => {
      if (result.affectedRows) {
        res.sendStatus(204);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

const deleteAlbums = (req, res) => {
  const { id } = req.params;

  models.albums
    .delete(id)
    .then(([result]) => {
      if (result.affectedRows) {
        res.sendStatus(204);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
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
