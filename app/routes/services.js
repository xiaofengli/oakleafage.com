var express = require('express');
var router = express.Router();

router.get('/services', (req, res) => {
  var data = req.app.get('appData');
  var pagePhotos = [];
  var pageServices = req.app.get('i18n') === 'CN' ? data.services.cn : data.services.en;
  console.log(req.app.get('i18n'));
  pageServices.forEach(function(item) {
    pagePhotos = pagePhotos.concat(item.image);
  });

  res.render('services', {
    pageTitle: 'Services',
    image: pagePhotos,
    services: pageServices,
    pageID: 'serviceList'
  });
});

router.get('/services/:serviceid', (req, res) => {
  var data = req.app.get('appData');
  var pagePhotos = [];
  var pageServices = [];
  var services = req.app.get('i18n') === 'CN' ? data.services.cn : data.services.en;
  console.log(req.app.get('i18n'));
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
    pageID: 'serviceDetail'
  });
});

module.exports = router;