var express = require('express');
var router = express.Router();

router.get('/cases', (req, res) => {
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


module.exports = router;