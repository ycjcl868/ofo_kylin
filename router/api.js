const express = require('express');
const router = express.Router();


router.get('/init',(req,res) => {

});

router.get('/', (req,res) => {
    let data = {
        a:1,
        b:2
    };
    res.json(data);


});
router.get('/help',(req,res)=>{
    res.send('Help');
});

module.exports = router;