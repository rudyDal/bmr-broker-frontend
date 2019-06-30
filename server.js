const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/MBR-Login.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/apply',function(req,res){
  res.sendFile(path.join(__dirname+'/MBR-Request-Form.html'));
});

router.get('/signup',function(req,res){
  res.sendFile(path.join(__dirname+'/MBR-Signup-Form.html'));
});

//add the router
app.use('/', router);
app.listen(process.env.port || 9090);
