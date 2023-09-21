const express = require('express');

const router = express.Router();
//admin/add-product --> Get
router.get('/add-product', (req,res,next)=>{
    console.log('in the middleware');
    res.send('<form action="/admin/add-product" method="POST" ><lable>product</lable><input type="text"  name="title"><br><br><lable>size</lable><input type="number" name="size" min="1" max="10"><button type="submit">add product</button> </form>')
})

//admin/add-product --> post 
router.post('/add-product',(req,res, next) =>{
    console.log(req.body);
    res.redirect('/');
})
module.exports =router;