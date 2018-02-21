var express = require('express');
var router = express.Router();

router.get('/privacy', function(req, res) {
  var privacyJson = req.app.get('privacy');
  res.render('privacy', {
    pageTitle: 'Privacy',
    privacy:privacyJson.Privacy,
    pageID: 'privacy'
  });

});

module.exports = router;
