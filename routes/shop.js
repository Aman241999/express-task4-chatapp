const express = require('express');

const router = express.Router();

router.get('/',(req,res,next)=>{
    res.send('<h1>welcome to express.js</h1>')
})

module.exports = router;