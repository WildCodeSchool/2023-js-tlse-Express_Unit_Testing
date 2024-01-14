const connexion = require('../../db-config');
const db = connexion.promise();

const getAllUrl = (req, res) => {
  db.query('SELECT * FROM urltable')
    .then(([result]) => {
      if (result.length) {
        res.status(200).json(result);
      } else {
        res.status(404);
      }
    })
    .catch(res.status(500));
};

const getOneUrl = (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM urltable WHERE idurl=?', [id])
    .then(([result]) => {
      if (result[0]) {
        res.status(200).json(result);
      } else {
        res.status(404);
      }
    })
    .catch(res.status(500));
};

const postUrl = (req, res) => {
  const { idurl, nomurl, commenturl } = req.body;
  db.query('INSERT INTO urltable (idurl, nomurl, commenturl) VALUES (?, ?, ?)', [
    idurl,
    nomurl,
    commenturl,
  ])
    .then(([result]) => {
      if (result.affectedRows) {
        res.status(201).json({
          idurl: idurl,
          nomurl: nomurl,
        });
      }
    })
    .catch(res.status(500));
};

const updateUrl = (req, res) => {
  const { id } = req.params;
  const { nomurl, commenturl } = req.body;
  db.query('UPDATE urltable SET nomurl=? commenturl=? WHERE idurl=?', [nomurl, commenturl, id,])
    .then(([result]) => {
      if (result.affectedRows) {
        res.sendStatus(204);
      } else {
        res.status(404);
      }
    })
    .catch(res.status(500));
};

const deleteUrl = (req, res) => {
  const id = parseInt(req.params.id);
  db.query('DELETE FROM urltable WHERE idurl=?', [id])
    .then(([result]) => {
      if (result.affectedRows) {
        res.sendStatus(204);
      } else {
        res.status(404);
      }
    })
    .catch(res.status(500));
};

module.exports = {
  getAllUrl,
  getOneUrl,
  postUrl,
  updateUrl,
  deleteUrl
};
