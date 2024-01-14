const connexion = require('../../db-config');
const db = connexion.promise();

const getAllRegion = (req, res) => {
  db.query('SELECT * FROM regions')
    .then(([result]) => {
      if (result.length) {
        res.status(200).json(result);
      } else {
        res.status(404);
      }
    })
    .catch(res.status(500));
};

const getOneRegion = (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM regions WHERE idregions=?', [id])
    .then(([result]) => {
      if (result[0]) {
        res.status(200).json(result);
      } else {
        res.status(404);
      }
    })
    .catch(res.status(500));
};

const postRegion = (req, res) => {
  const { idregions, nomregion, id_pays } = req.body;
  db.query(
    'INSERT INTO regions (idregions, nomregion, id_pays) VALUES (?, ?, ?)',
    [idregions, nomregion, id_pays]
  )
    .then(([result]) => {
      if (result.affectedRows) {
        res.status(201).json({
          nomregion: nomregion,
          id_pays: id_pays,
        });
      }
    })
    .catch(res.status(500));
};

const updateRegion = (req, res) => {
  const { id } = req.params;
  const { nomregion, id_pays } = req.body;
  db.query('UPDATE regions SET nomregion=?, id_pays=? WHERE idregions=?', [
    nomregion,
    id_pays,
    id,
  ])
    .then(([result]) => {
      if (result.affectedRows) {
        res.sendStatus(204);
      } else {
        res.status(404);
      }
    })
    .catch(res.status(500));
};

const deleteRegion = (req, res) => {
  const id = parseInt(req.params.id);
  db.query('DELETE FROM regions WHERE idregions=?', [id])
    .then(([result]) => {
      if (result.affectedRows) {
        res.sendStatus(204);
      } else {
        res.status(404);
      }
    })
    .catch(res.status(500));
};
const getCountRegions = (req, res) => {
  db.query('SELECT COUNT(*) FROM regions')
    .then(([result]) => {
      if (result.length) {
        res.status(200).json(result);
      } else {
        res.status(404);
      }
    })
    .catch(res.status(500));
};

module.exports = {
  getOneRegion,
  getAllRegion,
  postRegion,
  updateRegion,
  deleteRegion,
  getCountRegions,
};
