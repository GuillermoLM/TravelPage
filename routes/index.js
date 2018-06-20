var express = require('express');
var router = express.Router();
let HomeController = require('../controllers/homeController');
let RegisterController = require('../controllers/registerController');
let LoginController = require('../controllers/loginController');
let NewpassController = require('../controllers/newpassController');
let AdministratorController = require('../controllers/administratorController');

/* GET home page. */
router.get('/', function (req, res, next) {
  let homeController = new HomeController(req, res, next);
  homeController.index();
});

router.get('/register', (req, res, next) => {
  let registerController = new RegisterController(req, res, next);
  registerController.index();
})

router.post('/register',(req, res, next)=>{
  let registerController = new RegisterController(req, res, next);
  registerController.register();
})

router.get('/login', (req, res, next) => {
  let loginController = new LoginController(req, res, next);
  loginController.index();
})

router.post('/login',(req, res, next)=>{
  let loginController = new LoginController(req, res, next);
  loginController.login();
})

router.post('/renew', (req, res, next) => {
  console.log("Entra en renew");
  let loginController = new LoginController(req, res, next);
  loginController.newPass();
})

router.get('/newpass', function (req, res, next) {
  let newpassController = new NewpassController(req, res, next);
  newpassController.index();
});

router.post('/newpass', (req, res, next) => {
  let newpassController = new NewpassController(req, res, next);
  newpassController.newpassUser();
})

router.get('/admin', function (req, res, next) {
  let administratorController = new AdministratorController(req, res, next);
  administratorController.index();
});

module.exports = router;