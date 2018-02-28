var express = require('express');
var router = express.Router();

router.get('/services', function(req, res) {
  var data = req.app.get('appData');
  var pagePhotos = [];
  var pageServices = req.i18n_lang === 'cn' ? data.services.cn : data.service.en;
  pageServices.forEach(function(item) {
    pagePhotos = pagePhotos.concat(item.artwork);
  });

  res.render('services', {
    pageTitle: 'Services',
    artwork: pagePhotos,
    services: pageServices,
    pageID: 'serviceList',
    lang: req.i18n_lang
  });
});

router.get('/services/:serviceid', function(req, res) {
  var data = req.app.get('appData');
  var pagePhotos = [];
  var pageServices = [];
  var services = req.i18n_lang === 'cn' ? data.services.cn : data.service.en;
   services.forEach(function(item) {
    if (item.shortname == req.params.serviceid) {
    	pageServices.push(item);
      pagePhotos = pagePhotos.concat(item.artwork);
    }
  });

  res.render('services', {
    pageTitle: 'Service Info',
    artwork: pagePhotos,
    services: pageServices,
    pageID: 'serviceDetail',
    lang: req.i18n_lang
  });
});

module.exports = router;