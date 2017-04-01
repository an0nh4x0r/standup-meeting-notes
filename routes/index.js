var express = require('express');
var router = express.Router();
var standupCtrl = require('../controller/standup.controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// GET new notes page
router.get('/newnote', function (req, res) {
    return standupCtrl.getNote(req, res);
});

// POST new note page
router.post('/newnote', function (req, res) {
    return standupCtrl.create(req, res);
});

module.exports = router;
