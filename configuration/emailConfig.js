const email = require("nodemailer");

let mailer = {};

    mailer.transporter = email.createTransport({
        service:"Gmail",
        auth:{
            user:"gallo.elcau@gmail.com",
            pass:"bender69"
        }
    },
    {
        from: "gallo.elcau@gmail.com",
        header:{

        }
    });


module.exports = mailer;