const express = require('express');
const router = express.Router();
var sqlTool = require('../model/sqlTool');

router.get('/init',(req,res) => {

});

router.get('/', (req,res) => {
    let data = {
        a:1,
        b:2
    };
    res.json(data);


});
router.post('/search',(req,res)=>{
  const number = req.body.number;
  console.log(number);
  if(number == ''){
    res.json({info:{length:-1}});
  }
  sqlTool.select(number,function (data) {
      res.json(data);
  });


});

module.exports = router;
