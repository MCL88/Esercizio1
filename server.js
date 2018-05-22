let express = require("express");
let path = require("path");
let handlebars = require("express3-handlebars").create({defaultLayout:"main"});
let app = express();


app.set('port', process.env.PORT || 3000);

//Setting Handlebars engine
app.engine('handlebars', handlebars.engine);
app.set("view engine", "handlebars");


//File Statici
app.use("/",express.static(__dirname + "/public/img"));
//Routes Personali
app.get("/",(req, res, next)=>{
    res.render("home");
});

app.get("/about",(req, res, next)=>{
    res.render("about");
});

app.get("/contact",(req, res, next)=>{
    res.render("contact");
});

//Custom 404
app.use((req, res)=>{
    res.status(404);
    res.render("404");
});

//Custom 500
app.use((err,req, res, next)=>{

    console.log(err.stack);
    res.status(500);
    res.render("500");
});



app.listen(app.get('port'), (req, res) =>{
    console.log("Server inizialzzato su : https:\\localhost:" + app.get('port'));
});