var express = require('express');
var router = express.Router();
var multer  = require('multer')
var uploadProfileImgs = multer({dest : './uploads/'}).single('avatar');
var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));



router.get('/survey', function(req, res) {

  res.render('survey', {
    pageTitle: 'Survey',
    pageID: 'feedback'
  });

});


router.post('/survey', function (req, res) {
  sadkjaskldjsakjdklasjdklasjldjaksljldkj
  uploadProfileImgs(req, res, function (err) {
    if (err) {
      console.log(err.message);
      // An error occurred when uploading
      return
    }
    console.log('Everything went fine');
    // Everything went fine
  })
})

module.exports = router;
