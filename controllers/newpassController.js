const Controller = require('./controller');
const UserModel = require ('../models/usersModel');

class newpassController extends Controller
{
    constructor(req, res ,next)
    {
        super(req, res ,next)
    }
    newpassUser()
    {
        let newPass = this.req.body.nPassW;
        let userModel = new UserModel();
        
        userModel.updatePass(newPass, (info)=>{
            this.res.redirect('/');
        })
    }
    index()
    {
        this.res.render('newpass', {title: 'TravelPage'});
    }
}

module.exports = newpassController;