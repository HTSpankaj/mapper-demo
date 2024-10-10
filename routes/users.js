var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/get-url', function(req, res, next) {
  const url = req.query.url;
  const body = req.query.body;
  const headers = req.query.headers;
  const query = req.query.query;
  const param = req.query.param;
  const method = req.query.method;

  console.log(url, body, headers, query, param, method);
  console.log("~~~~~~~~~~~~~~");
  
  res.status(200).send({success: true});
});

router.post('/post-url', function(req, res, next) {
  const url = req.query.url;
  const body = req.query.body;
  const headers = req.query.headers;
  const query = req.query.query;
  const param = req.query.param;
  const method = req.query.method;

  console.log(url, body, headers, query, param, method);
  console.log("~~~~~~~~~~~~~~");

  res.status(200).send({success: true});
});



module.exports = router;
