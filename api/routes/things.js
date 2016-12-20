var express = require('express');
var router = express.Router();

/* GET things listing. */
router.get('/', function(req, res, next) {
  res.json({things: [{draft: true, userId: 3}]});
});

module.exports = router;
