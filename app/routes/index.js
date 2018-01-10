var express = require('express');
var router = express.Router();

// This is controller, which is index.html's root url endpoint

router.get('/', function(req, res) {
  var data = req.app.get('appData');
  var pagePhotos = [];
  var pageSpeakers = data.speakers;

  // Functional programing, lambda calculus
  data.speakers.forEach(function(item) {
    pagePhotos = pagePhotos.concat(item.artwork);
  });

  res.render('index', {
    pageTitle: 'Home',
    artwork: pagePhotos,
    speakers: pageSpeakers,
    pageID: 'home'
  });

});

module.exports = router;
