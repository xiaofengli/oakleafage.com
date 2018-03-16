var express = require('express');
var router = express.Router();

// This is controller, which is index.html's root url endpoint

router.get('/', (req, res) => {
  var data = req.app.get('appData');
  var pagePhotos = [];
  var pageServices = req.app.get('i18n') === 'cn' ? data.services.cn : data.services.en;
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
 
});

module.exports = router;