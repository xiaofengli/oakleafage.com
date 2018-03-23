var express = require('express');
var router = express.Router();

router.get('/news', function(req, res) {

  res.render('news', {
    pageTitle: 'News',
    pageID: 'news'
  });

});

module.exports = router;
