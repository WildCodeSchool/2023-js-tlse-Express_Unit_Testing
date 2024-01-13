const { Router } = require('express');

const base = require('./baseControllers');
const localite = require('./localiteControllers');
const regions = require('./regionsControllers');
const pays = require('./paysControllers');

const router = Router();

router.get('/base', base.getAll);
router.get('/base/:id', base.getOne);
router.get('/base-total', base.getTotal);
router.get('/base-total/:id', base.getTotalById);
router.post('/base', base.postBase);
router.put('/base/:id', base.updateBase);
router.delete('/base/:id', base.deleteBase);

router.get('/localite', localite.getAllLocalite);
router.get('/localite/:id', localite.getOneLocalite);
router.get('/localite-total', localite.getTotalLocalite);
router.get('/localite-total/:id', localite.getTotalLocaliteById);
router.post('/localite', localite.postLocalite);
router.put('/localite/:id', localite.updateLocalite);
router.delete('/localite/:id', localite.deleteLocalite);

router.get('/regions', regions.getAllRegion);
router.get('/regions/:id', regions.getOneRegion);
router.post('/regions', regions.postRegion);
router.put('/regions/:id', regions.updateRegion);
router.delete('/regions/:id', regions.deleteRegion);

router.get('/pays', pays.getAllPays);
router.get('/pays/:id', pays.getOnePays);
router.post('/pays', pays.postPays);
router.put('/pays/:id', pays.updatePays);
router.delete('/pays/:id', pays.deletePays);

module.exports = router;
