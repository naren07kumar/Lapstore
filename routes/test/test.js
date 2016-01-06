var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',function(req,res,nect){
	res.render('guest/index');
});
module.exports = router;