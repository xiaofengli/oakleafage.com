var express = require('express');
var router = express.Router();

router.get('/services', (req, res) => {
  var data = req.app.get('appData');
  var pagePhotos = [];
  var pageServices = req.i18n_lang === 'cn' ? data.services.cn : data.services.en;
  pageServices.forEach(function(item) {
    pagePhotos = pagePhotos.concat(item.image);
  });

  res.render('services', {
    pageTitle: 'Services',
    image: pagePhotos,
    services: pageServices,
    pageID: 'serviceList',
    lang: req.i18n_lang
  });
});

router.get('/services/:serviceid', (req, res) => {
  var data = req.app.get('appData');
  var pagePhotos = [];
  var pageServices = [];
  var services = req.i18n_lang === 'cn' ? data.services.cn : data.services.en;
   services.forEach(function(item) {
    if (item.shortname == req.params.serviceid) {
    	pageServices.push(item);
      pagePhotos = pagePhotos.concat(item.image);
    }
  });

  res.render('services', {
    pageTitle: 'Service Info',
    image: pagePhotos,
    services: pageServices,
    pageID: 'serviceDetail',
    lang: req.i18n_lang
  });
});

module.exports = router;