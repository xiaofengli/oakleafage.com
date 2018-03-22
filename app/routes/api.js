var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var fs = require('fs');
//var feedbackData = require('../data/feedback.json');
/*
router.get('/api', function(req, res) {
  res.json(feedbackData);
});
*/

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.post('/api', function(req, res) {
  var feedbackData=[];
  feedbackData.unshift(req.body);
  console.log(req.file);

  fs.writeFile('app/data/feedbacks/'+feedbackData[0].firstname+Date()+'.json', JSON.stringify(feedbackData), 'utf8', function(err) {
    if (err) {
      console.log(err);
    }
  });
  fs.writeFile('app/data/feedbacks/'+feedbackData[0].firstname+Date()+'.PNG', req.file , 'utf8', function(err) {
    if (err) {
      console.log(err);
    }
  });
  //res.json(feedbackData);
});

/*
router.delete('/api/:id', function(req, res) {
  feedbackData.splice(req.params.id, 1);
  fs.writeFile('app/data/feedback.json', JSON.stringify(feedbackData), 'utf8', function(err) {
    if (err) {
      console.log(err);
    }
  });
  res.json(feedbackData);
});

*/

module.exports = router;
