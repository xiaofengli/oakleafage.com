var express = require('express');
var router = express.Router();

// This is controller, which is index.html's root url endpoint

router.get('/', (req, res) => {
  var data = req.app.get('i18n') === 'CN' ?  req.app.get('cnData') : req.app.get('enData');
  var pagePhotos = [];
  var pageServices = data.dropdown;
  // Functional programing, lambda calculus
  pageServices.forEach(function(item) {
    pagePhotos = pagePhotos.concat(item.image);
  });

  res.render('index', {
    pageTitle: 'Home',
    image: pagePhotos,
    services: pageServices,
    pageID: 'home'
  });
 
});

module.exports = router;