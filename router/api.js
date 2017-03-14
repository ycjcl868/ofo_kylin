const express = require('express');
const md5 = require('md5');
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
    res.json({info:{status:-1}});
    return;
  }
  sqlTool.select(number,function (data) {
      res.json(data);
  });
});

router.post('/add',(req,res)=>{
   const number = req.body.number;
   const password = req.body.password;
   console.log(req.body.adminPass);
   const adminPass = md5(req.body.adminPass+'kylinKing');
   console.log(adminPass);
   
   if(number == '' || password == '' || adminPass == ''){
       res.json({info:{status:-1}});
       return;
   }
   if(adminPass !== '26ea29d6b5b89a2a7e0b68fb8abfaaf6'){
       res.json({info:{status:0}});
       return;
   }
   sqlTool.add(number,password,function (data) {
       res.json({info:data});
   })
   
   
});

module.exports = router;
