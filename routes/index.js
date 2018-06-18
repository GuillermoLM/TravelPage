var express = require('express');
var router = express.Router();
let HomeController = require('../controllers/homeController');
let RegisterController = require('../controllers/registerController');
let Email = require("../configuration/emailConfig");
let Path = require("path");
let LoginController = require('../controllers/loginController');
let HbsEmail = require("nodemailer-express-handlebars");


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

// router.get("/email",(req,res,next)=>{
//   Email.transporter.use("compile", HbsEmail({
//       viewEngine: "hbs",
//       extName: ".hbs",
//       viewPath: Path.join(__dirname,"../views/emails")
//   }))
  
//   let message = {
//       to: 'gallo.elcau@gmail.com',
//       subject: 'Nueva Contraseña Travel Page',
//       template: "email",
//       context:{
//           text: "Te damos el enlace para crear tu nueva contraseña: ",
//           text2: "localhost:3000/newpass"
//       }
//   };
//   Email.transporter.sendMail(message, (error, info)=>{
//   if(error) {
//       res.status(500).send(error, message);
//       return
//   }
//   Email.transporter.close();
//       res.status(200).send('Respuesta "%s"' + info.response);
//   });
// })

module.exports = router;