const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
  res.render('index');
});
router.get('/help',(req,res)=>{
	res.send('Help');
});

module.exports = router;