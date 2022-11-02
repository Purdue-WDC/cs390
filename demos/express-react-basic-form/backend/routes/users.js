var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

//

const responses = {}; // ??
router.post("/", (req, res) => {
  console.log("do something??");
});

module.exports = router;
