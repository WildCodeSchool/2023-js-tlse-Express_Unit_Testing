const connexion = require('../../db-config');
const db = connexion.promise();

const getAllLocalite = (req, res) => {
  db.query('SELECT * FROM localite')
    .then(([result]) => {
      if (result.length) {
        res.status(200).json(result);
      } else {
        res.status(404);
      }
    })
    .catch(res.status(500));
};

const getOneLocalite = (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM localite WHERE idlocalite=?', [id])
    .then(([result]) => {
      if (result[0]) {
        res.status(200).json(result);
      } else {
        res.status(404);
      }
    })
    .catch(res.status(500));
};

const getTotalLocalite = (req, res) => {
  db.query(
    'SELECT idlocalite, nomlocalite, r.nomregion, p.nompays FROM localite AS l JOIN regions AS r ON idregions=id_region JOIN pays AS p ON idpays=id_pays'
  )
    .then(([result]) => {
      if (result[0]) {
        res.status(200).json(result);
      } else {
        res.status(404);
      }
    })
    .catch(res.status(500));
};
const getTotalLocaliteById = (req, res) => {
  const { id } = req.params;
  db.query(
    'SELECT idlocalite, nomlocalite, r.nomregion, p.nompays FROM localite AS l JOIN regions AS r ON idregions=id_region JOIN pays AS p ON idpays=id_pays WHERE idlocalite=?',
    [id]
  )
    .then(([result]) => {
      if (result[0]) {
        res.status(200).json(result);
      } else {
        res.status(404);
      }
    })
    .catch(res.status(500));
};

const postLocalite = (req, res) => {
  const { idlocalite, nomlocalite, id_region } = req.body;
  db.query(
    'INSERT INTO localite (idlocalite, nomlocalite, id_region) VALUES (?, ?, ?)',
    [idlocalite, nomlocalite, id_region]
  )
    .then(([result]) => {
      if (result.affectedRows) {
        res.status(201).json({
          nomlocalite: nomlocalite,
          id_region: id_region,
          id: result.insertId,
        });
      }
    })
    .catch(res.status(500));
};

const updateLocalite = (req, res) => {
  const { id } = req.params;
  const { nomlocalite, id_region } = req.body;
  db.query(
    'UPDATE localite SET nomlocalite=?, id_region=? WHERE idlocalite=?',
    [nomlocalite, id_region, id]
  )
    .then(([result]) => {
      if (result.affectedRows) {
        res.sendStatus(204);
      } else {
        res.status(404);
      }
    })
    .catch(res.status(500));
};

const deleteLocalite = (req, res) => {
  const id = parseInt(req.params.id);
  db.query('DELETE FROM localite WHERE idlocalite=?', [id])
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
  getOneLocalite,
  getAllLocalite,
  getTotalLocalite,
  getTotalLocaliteById,
  postLocalite,
  updateLocalite,
  deleteLocalite,
};
