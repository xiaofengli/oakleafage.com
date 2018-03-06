var express = require('express');
var router = express.Router();

// This is controller, which is index.html's root url endpoint

router.get('/', function(req, res) {
  var data = req.app.get('appData');
  var pagePhotos = [];
  var pageServices = req.i18n_lang === 'cn' ? data.services.cn : data.services.en;
  // Functional programing, lambda calculus
  data.services.cn.forEach(function(item) {
    pagePhotos = pagePhotos.concat(item.image);
  });

  res.render('index', {
    pageTitle: 'Home',
    image: pagePhotos,
    services: pageServices,
    pageID: 'home'
  });
  //console.log(req.i18n_lang);
});

module.exports = router;