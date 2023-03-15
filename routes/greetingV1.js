var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const name = req.query.name  || "";
  res.send('Hello '+name);
});

module.exports = router;
