const User = require('../models/User');
async function addUser(req,res){
  try{
      console.log(req.body);
      let user = new user(req.body);
      await user.save();
      res.end("<h1> Data has been inserted sucessfully..</h1>")
  } catch(err){
      console.log(err);
  }
}
async function getUsers(req,res){
  try{
      let users = await User.find({});
     // res.send(students)
     res.render('userlist',{
      users: users
     })
  }catch(err){
      console.log(err.message);
  }
}

module.exports={
  addUser,
  getUsers
}