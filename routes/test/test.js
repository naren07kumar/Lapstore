var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/1', function(req, res, next) {
  res.render(path.join('test','test1'));
});

router.get('/2', function(req, res, next) {
  res.render('test/test2');
});

router.get('/3',function(req,res,nect){
	res.render('./views/test/test3');
});

router.get('/4',function(req,res,nect){
	res.render('../../views/test/test4');
});

router.get('/5',function(req,res,nect){
	res.render('/views/test/test5');
});
module.exports = router;