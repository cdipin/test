var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('v1/greet', function(req, res, next) {
  res.render('Hello World');
});

module.exports = router;
