const Controller = require('./controller');
const UserModel = require('../models/usersModel');

class loginController extends Controller {
    constructor(req, res, next) {
        super(req, res, next)
    }

    index() {
        let userModel = new UserModel();
        userModel.fetchAll((data) => {
            console.log(data);
        });

        this.res.render('login', {
            title: 'Login',
            layout: 'layout'
        })

    }
}

module.exports = loginController;