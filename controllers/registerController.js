const Controller = require('./controller');
const UserModel = require ('../models/usersModel');

class registerController extends Controller
{
   constructor(req, res, next)
   {
       super(req, res ,next)
   }

   index()
   {
      let userModel = new UserModel();
      userModel.fetchAll((data)=>{
       console.log(data);
      });

       this.res.render('register', {
           title: 'Register',
           layout: 'layout'
       })
   }
}

module.exports = registerController;