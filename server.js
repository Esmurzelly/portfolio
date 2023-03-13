const express = require("express");
const router = express.Router();
const cors = require('cors');
const nodemailer = require('nodemailer');

// server used to send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);
app.listen(5000, () => console.log('server running'));


app.get("/", (req, res) => {
    res.send("Hello world")
});

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'adamsuper148@gmail.com',
        pass: 'ktqatzxduhovzsci'
    },
    tls: {
        rejectUnauthorized: false,
    }
});

contactEmail.verify((error) => {
    if(error) {
        console.log(error);
    } else {
        console.log('ready to send');
    }
});

router.post('/contact', (req, res) => {
    const name = req.body.firstName + req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;
    const mail = {
        from: name,
        to: 'adamsuper148@gmail.com',
        subject: 'Contact Form Submission - Portfolio',
        html: ` <p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Phone: ${phone}</p>
                <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
        if(error) {
            res.json(error);
        } else {
            res.json({code: 200, status: "Message sent"})
        }
    }) 
})


// const express = require('express');
// const router = express.Router();
// const cors = require('cors');
// const nodemailer = require("nodemailer");

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use('/', router);

// let PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`server running on port ${PORT}`));



// let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'adamsuper148@gmail.com',
//         pass: 'ktqatzxduhovzsci'
//     },
//     tls: {
//         rejectUnauthorized: false,
//     }
// });


// let mailOption = {
//     from: 'adamsuper148@gmail.com',
//     to: 'elephants54706@gmail.com',
//     subject: 'Testing mail',
//     text: "Second email sent from nodejs using nodemailer"
// }

// transporter.sendMail(mailOption)
//     .then(function(res) {
//         console.log('email sent', res)
//     })
//     .catch(function(err) {
//         console.log(err)
//     });


// app.get("/", (req, res) => {
//     res.send("Hello world")
// });

