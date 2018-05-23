var express = require('express');
var router = express.Router();
var multer  = require('multer')
var path = require('path')

//var uploadProfileImgs = multer({dest : './uploads/'}).single('photo');


var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));


router.get('/survey', function(req, res) {
  res.render('survey', {
    pageTitle: 'Survey',
    pageID: 'feedback'
  });

});


module.exports = router;
