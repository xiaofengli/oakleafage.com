var express = require('express');
var router = express.Router();

router.get('/termofuse', function(req, res) {
  var data = req.app.get('appData');
  
  var Term=data.TermOfUse;
  

  res.render('termofuse', {
    pageTitle: 'termofuse',
    term:Term,
    pageID: 'termofuse'
  });

});

module.exports = router;
