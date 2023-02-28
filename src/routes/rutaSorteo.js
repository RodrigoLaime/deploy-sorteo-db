var express = require('express');

var sorteoController = require('../controller/sorteoController');

// llamamos al objeto router express
var router = express.Router();

router.post('/sorteo', sorteoController.save);
router.get('/winner', sorteoController.getSorteo);
/*
router.delete('./delete/id', sorteoController.deleteSorteo);
router.put('./update/id', sorteoController.updateSorteo); */

module.exports = router;