var express = require('express');
var router = express.Router();


// Use http get to post a form and use fs package to save it to the file system.
router.get('/survey', (req, res) => {
	  res.render('survey', {
	    pageTitle: 'Survey',
	    pageID: 'feedback'
	  });

	});

/*
var multer  = require('multer')
var path = require('path')
var uploadProfileImgs = multer({dest : './uploads/'}).single('photo');
var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

var storage = multer.diskStorage({
	destination: function(req, file, callback) {
		callback(null, './uploads')
	},
	filename: function(req, file, callback) {
		console.log(file)
		callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
	}
})



router.post('/survey', function(req,res){
	var upload = multer({
		storage: storage,
		fileFilter: function(req, file, callback) {
			var ext = path.extname(file.originalname)
			console.log(ext);
			if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
				return callback(res.end('Only images are allowed'), null)
			}
			callback(null, true)
		}
	}).single('photo')
	upload(req, res, function(err) {
		res.end('File is uploaded')
	})
	res.status(204).end();
});

*/

module.exports = router;
