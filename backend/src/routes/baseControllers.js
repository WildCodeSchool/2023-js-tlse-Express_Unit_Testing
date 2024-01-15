const connexion = require('../../db-config');
const db = connexion.promise();

const getAll = (req, res) => {
  db.query('SELECT * FROM base')
    .then(([result]) => {
      if (result.length) {
        res.status(200).json(result);
      } else {
        res.status(404);
      }
    })
    .catch(res.status(500));
};

const getOne = (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM base WHERE idbase=?', [id])
    .then(([result]) => {
      if (result[0]) {
        res.status(200).json(result);
      } else {
        res.status(404);
      }
    })
    .catch(res.status(500));
};
// JOIN urltable AS u ON idurl=url            u.nomurl, u.commenturl,
const getTotal = (req, res) => {
  db.query(
    'SELECT idbase, cartes, annee, couleur, ville, campagne, mer, montagne, personnes, animaux, ete, automne, hiver, printemps, is_liked, comment, l.nomlocalite, r.nomregion, p.nompays, u.nomurl, u.commenturl FROM base AS b JOIN localite AS l ON idlocalite=localite JOIN regions AS r ON idregions=id_region JOIN pays AS p ON idpays=id_pays JOIN urltable AS u ON idurl=b.url;'
  )
    .then(([result]) => {
      if (result.length) {
        res.status(200).json(result);
      } else {
        res.status(404);
      }
    })
    .catch(res.status(500));
};

const getTotalById = (req, res) => {
  const { id } = req.params;
  db.query(
    'SELECT idbase, cartes, annee, couleur, ville, campagne, mer, montagne, personnes, animaux, ete, automne, hiver, printemps, is_liked, comment, l.nomlocalite, r.nomregion, p.nompays, u.nomurl, u.commenturl FROM base AS b JOIN localite AS l ON idlocalite=localite JOIN regions AS r ON idregions=id_region JOIN pays AS p ON idpays=id_pays JOIN urltable AS u ON idurl=b.url WHERE idbase=?',
    [id]
  )
    .then(([result]) => {
      if (result.length) {
        res.status(200).json(result);
      } else {
        res.status(404);
      }
    })
    .catch(res.status(500));
};
const postBase = (req, res) => {
  const {
    cartes,
    annee,
    couleur,
    ville,
    campagne,
    mer,
    montagne,
    personnes,
    animaux,
    ete,
    automne,
    hiver,
    printemps,
    localite,
  } = req.body;
  db.query(
    `INSERT INTO base (cartes, annee, couleur, ville, campagne, mer, montagne, personnes, animaux, ete, automne, hiver, printemps, localite) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      cartes,
      annee,
      couleur,
      ville,
      campagne,
      mer,
      montagne,
      personnes,
      animaux,
      ete,
      automne,
      hiver,
      printemps,
      localite,
    ]
  )
    .then(([result]) => {
      if (result.affectedRows) {
        res.status(201).json({
          id: result.insertId,
        });
      }
    })
    .catch(res.status(500));
};

const updateBase = (req, res) => {
  const { id } = req.params;
  const {
    cartes,
    annee,
    couleur,
    ville,
    campagne,
    mer,
    montagne,
    personnes,
    animaux,
    ete,
    automne,
    hiver,
    printemps,
    localite,
  } = req.body;
  db.query(
    'UPDATE base SET cartes=?, annee=?, couleur=?, ville=?, campagne=?, mer=?, montagne=?, personnes=?, animaux=?, ete=?, automne=?, hiver=?, printemps=?, localite=? WHERE idbase=?',
    [
      cartes,
      annee,
      couleur,
      ville,
      campagne,
      mer,
      montagne,
      personnes,
      animaux,
      ete,
      automne,
      hiver,
      printemps,
      localite,
      id,
    ]
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

const deleteBase = (req, res) => {
  const id = parseInt(req.params.id);
  db.query('DELETE FROM base WHERE idbase=?', [id])
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
  getAll,
  getOne,
  getTotal,
  getTotalById,
  postBase,
  updateBase,
  deleteBase,
};
