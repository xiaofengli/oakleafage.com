var express = require('express');
var router = express.Router();

router.get('/services', function(req, res) {
  var data = req.app.get('appData');
  var pagePhotos = [];
  var pageServices = data.services;
  var sessionLang = req.i18n_lang;
  data.services.forEach(function(item) {
    pagePhotos = pagePhotos.concat(item.artwork);
  });

  res.render('services', {
    pageTitle: 'Services',
    artwork: pagePhotos,
    services: pageServices,
    pageID: 'serviceList',
    lang: sessionLang
  });
});

router.get('/services/:serviceid', function(req, res) {
  var data = req.app.get('appData');
  var pagePhotos = [];
  var pageServices = [];

  data.services.forEach(function(item) {
    if (item.shortname == req.params.serviceid) {
    	pageServices.push(item);
      pagePhotos = pagePhotos.concat(item.artwork);
    }
  });

  res.render('services', {
    pageTitle: 'Service Info',
    artwork: pagePhotos,
    services: pageServices,
    pageID: 'serviceDetail'
  });
});

module.exports = router;