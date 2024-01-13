const connexion = require('../../db-config');
const db = connexion.promise();

const getAllPays = (req, res) => {
  db.query('SELECT * FROM pays')
    .then(([result]) => {
      if (result.length) {
        res.status(200).json(result);
      } else {
        res.status(404);
      }
    })
    .catch(res.status(500));
};

const getOnePays = (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM pays WHERE idpays=?', [id])
    .then(([result]) => {
      if (result[0]) {
        res.status(200).json(result);
      } else {
        res.status(404);
      }
    })
    .catch(res.status(500));
};

const postPays = (req, res) => {
  const { idpays, nompays } = req.body;
  db.query('INSERT INTO pays (idpays, nompays) VALUES (?, ?)', [
    idpays,
    nompays,
  ])
    .then(([result]) => {
      if (result.affectedRows) {
        res.status(201).json({
          idpays: idpays,
          nompays: nompays,
        });
      }
    })
    .catch(res.status(500));
};

const updatePays = (req, res) => {
  const { id } = req.params;
  const { nompays } = req.body;
  db.query('UPDATE pays SET nompays=? WHERE idpays=?', [nompays, id])
    .then(([result]) => {
      if (result.affectedRows) {
        res.sendStatus(204);
      } else {
        res.status(404);
      }
    })
    .catch(res.status(500));
};

const deletePays = (req, res) => {
  const id = parseInt(req.params.id);
  db.query('DELETE FROM pays WHERE idpays=?', [id])
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
  getOnePays,
  getAllPays,
  postPays,
  updatePays,
  deletePays,
};
