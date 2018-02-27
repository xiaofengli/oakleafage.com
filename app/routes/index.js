var express = require('express');
var router = express.Router();

// This is controller, which is index.html's root url endpoint

router.get('/', function(req, res) {
  var data = req.app.get('appData');
  var pagePhotos = [];
  var pageServices = data.services;

  // Functional programing, lambda calculus
  data.services.forEach(function(item) {
    pagePhotos = pagePhotos.concat(item.artwork);
  });

  res.render('index', {
    pageTitle: 'Home',
    artwork: pagePhotos,
    services: pageServices,
    pageID: 'home'
  });
  //console.log(req.i18n_lang);
});

module.exports = router;