var express = require('express');
var router = express.Router();

router.get("/login", function(req, res, next) {
  console.log(req.body);
});

module.exports = router;
