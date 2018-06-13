var express = require('express');
var router = express.Router();

router.get('/services', (req, res) => {
  var data = req.app.get('i18n') === 'CN' ?  req.app.get('cnData') : req.app.get('enData');
  var pagePhotos = [];
  var pageServices = data.dropdown;

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
  var data = req.app.get('i18n') === 'CN' ?  req.app.get('cnData') : req.app.get('enData');
  var pagePhotos = [];
  var pageServices = [];
  var services = data.dropdown;

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