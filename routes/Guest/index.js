var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Guest/index', { title: 'LapStore' });
});

module.exports = router;