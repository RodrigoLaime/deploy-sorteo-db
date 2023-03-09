var express = require('express');

var sorteoController = require('../controller/sorteoController');

// llamamos al objeto router express
var router = express.Router();

router.post('/sorteo', sorteoController.save);
router.get('/winner', sorteoController.getSorteo);
router.patch('/update/:id', sorteoController.update);

// router.delete('./delete/id', sorteoController.deleteSorteo);

module.exports = router;