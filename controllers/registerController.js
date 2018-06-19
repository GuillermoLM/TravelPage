const Controller = require('./controller');
const UserModel = require ('../models/usersModel');

class registerController extends Controller
{
   constructor(req, res, next)
   {
       super(req, res ,next)
   }

    register()
    {        
        let username = this.req.body.user;
        let email = this.req.body.mail;
        let pass = this.req.body.passW;
        let userModel = new UserModel();
        
        userModel.insertUser(username, email, pass, (info)=>
        {
            if(info.length === 1)
            {                
                this.req.flash("info","El usuario ya existe");
            }
            else
            {
               this.res.redirect('/login');
            }
        })
    }

    index()
    {
        this.res.render('register', {title: 'Register',layout: 'layout-small'})
    }
}

module.exports = registerController;