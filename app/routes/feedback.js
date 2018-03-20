var express = require('express');
var router = express.Router();

router.get('/survey', function(req, res) {

  res.render('feedback', {
    pageTitle: 'Survey',
    pageID: 'servey'
  });

});

module.exports = router;
