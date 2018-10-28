var express = require('express');
var path = require('path');
var app = express();
var http = require('http').Server(app);

app.all("/",function(req, res){
    res.render('index')

})
app.all("/contact",function(req,res){
    res.render('Contact.ejs');
})
app.all("/yourchoice",function(req,res){
    res.render('yourchoice')
})


app.use(express.static(path.join(__dirname,'Public')));
app.set('views', path.join(__dirname, 'Views'));
app.set('view engine', 'ejs');

http.listen(8083, function(){
console.log("App is listening on http://127.0.0.1:8083/")
}
    )