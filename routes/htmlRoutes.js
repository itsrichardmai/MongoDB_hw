var express = require("express");
var router = express.Router();
var Article = require("../models/index");

router.get("/", function(req, res) {
  
    res.render("index");
 
});

module.exports = router;