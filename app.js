var express = require('express');
var path = require('path');
var app = express();
var http = require('http').Server(app);
var nodemailer = require('nodemailer');
const bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, 'Public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'Views'));
app.set('view engine', 'ejs');

app.get("/", function (req, res) {
    res.render('index')

})
app.get("/contact", function (req, res) {
    res.render('Contact.ejs');
})
app.get("/yourchoice", function (req, res) {
    res.render('yourchoice')
})

app.get(function (req, res) {
    res.render('404.ejs')
  })
  
app.post("/mail", function (req, res) {
    console.log(req.body.email1)

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'vinukonda.a03@gmail.com',
            pass: 'Project12345678'
        }
    });

    var mailOptions = {
        from: 'vinukonda.a03@gmail.com',
        to: req.body.email1,
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    res.render('Contact');
})


http.listen(process.env.PORT || 8083, function () {
    console.log("App is listening on http://127.0.0.1:8083/")
}
)