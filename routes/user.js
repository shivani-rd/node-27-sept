const express = require('express');
const usercontroller = require('../controllers/usercontroller')
const router = express.Router();
router.use(express.urlencoded({extended:false}))
router.get('/',(req,res)=>{
    res.render('home')
})
router.post('/add/user',(req,res)=>{
    usercontroller.addUser(req,res)
})
router.get('/users',(req,res)=>{
    usercontroller.getUsers(req,res)
})

module.exports = router;