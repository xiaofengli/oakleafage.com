var express = require('express');
var router = express.Router();

router.get('/privacy', function(req, res) {
  var data = req.app.get('appData');
  res.render('privacy', {
    pageTitle: 'Privacy',
    privacy:data.Privacy,
    pageID: 'privacy'
  });

});

module.exports = router;
