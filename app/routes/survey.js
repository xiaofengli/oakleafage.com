var express = require('express');
var router = express.Router();

// Use http get to post a form and use fs package to save it to the file system.
router.get('/survey', (req, res) => {
	  res.render('survey', {
	    pageTitle: 'Survey',
	    pageID: 'feedback'      // This is how router works, it directs it to feedback.js
	  });

	});

var multer  = require('multer')
var path = require('path')
var bodyParser = require('body-parser');
var fs = require('fs');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

var storage = multer.diskStorage({
	destination: function(req, file, callback) {
		callback(null, './uploads')
	},
	filename: function(req, file, callback) {
		callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
	}
})

var upload=multer({ storage : storage}).single('photo');

router.post('/survey', function(req,res){	
	upload(req, res, function(err) {
		if (err){
			return res.end("Error uploading file.");
		}
		var feedbackData=[];
		feedbackData.unshift(req.body);
		fs.writeFile('app/data/survey/'+ feedbackData[0].firstname+ Date.now() +'.json', JSON.stringify(feedbackData), 'utf8', function(err) {
			if (err) {
			  console.log(err);
			}
		  });
		res.end('File is uploaded')
	});
});

module.exports = router;