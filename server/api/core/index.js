'use strict';

var express = require('express');
var controller = require('./core.controller');

var router = express.Router();

router.get('/:apiName', controller.index);

module.exports = router;
