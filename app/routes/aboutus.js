var express = require('express');
var router = express.Router();

router.get('/aboutus', function(req, res) {

  res.render('aboutus', {
    pageTitle: 'Aboutus',
    pageID: 'aboutus'
  });

});

module.exports = router;
