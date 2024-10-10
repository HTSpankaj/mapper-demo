var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/get-url', function(req, res, next) {
  const url = req.originalUrl;
  const body = req.body;
  const headers = req.headers;
  const query = req.query;
  const param = req.param;
  const method = req.method;

  console.log({url, body, headers, query, param, method});
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  
  res.status(200).send({success: true});
});

router.post('/post-url', function(req, res, next) {
  const url = req.url;
  const body = req.body;
  const headers = req.headers;
  const query = req.query;
  const param = req.param;
  const method = req.method;

  console.log({url, body, headers, query, param, method});
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

  res.status(200).send({success: true});
});



module.exports = router;
