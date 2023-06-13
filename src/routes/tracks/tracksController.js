const models = require('../models');

const getOne = (req, res) => {
  const { id } = req.params;

  models.track
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

const getAll = (req, res) => {
  models.track
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

const postTracks = (req, res) => {
  const { title, youtube_url, id_album } = req.body;

  models.track
    .insert({ title, youtube_url, id_album })
    .then(([result]) => {
      if (result.affectedRows) {
        res.status(201).json({
          title: title,
          youtube_url: youtube_url,
          id_album: id_album,
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

const updateTracks = (req, res) => {
  const { title, youtube_url, id_album } = req.body;
  const { id } = req.params;

  models.track
    .update({ title, youtube_url, id_album, id })
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

const deleteTracks = (req, res) => {
  const { id } = req.params;

  models.track
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

module.exports = { getOne, getAll, postTracks, updateTracks, deleteTracks };
