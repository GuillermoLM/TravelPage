const Controller = require('./controller');
const UserModel = require('../models/usersModel');

class loginController extends Controller {
    constructor(req, res, next) 
    {
        super(req, res, next)
    }
    
    login()
    {
        console.log(this.req.body);
        let username = this.req.body.user;
        let pass = this.req.body.passW;
        let userModel = new UserModel();
        userModel.findUser(username, (info)=>
        {    
            if(info.length === 0)
            {
                this.req.flash("info","El usuario no existe");
                this.index();
            }
            else
            {
                if(pass == info[0].password)
                {
                    // this.index();
                    this.res.render('perfil',{layout:'layout',user:username});
                }
                else
                {
                    this.req.flash("info","El pass es incorrecto");
                    this.index();
                }
            }
        })
    }

    index() {
        let info = this.req.flash("info");
        if(info=="")
        {
            console.log("NO Existe info");
            this.res.render("login",{title: "Login", layout: "layout"});
        }
        else
        {
            console.log("Existe info");
            this.res.render("login",{title: "Login", layout: "layout", info: info});
            info="";
        }
    }
}

module.exports = loginController;