var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Travel Page' });
});

router.get('/register', (req,res,next)=>{
  res.render('register',{
    title:'Register',
    layout:'layout'
  })
 })

 router.get('/login', (req,res,next)=>{
  res.render('login',{
    title:'Login',
    layout:'layout'
  })
 })

module.exports = router;
