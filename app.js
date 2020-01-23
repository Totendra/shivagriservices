var express  = require("express");

//initialize express
const  app  = express();

//Using public folder
app.use(express.static("public"));

//setting up .ejs as a common file format 
app.set("view engine","ejs");

// Listening port 
const  PORT = 8080 || process.env.PORT ;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

//Routes to status page
app.get('/',function(req,res){
    res.render("home");

});

//Routes to freetrials page
app.get('/freetrials',function(req,res){
    res.render("freetrials");
});

//Routes to pulses page
app.get('/pulses',function(req,res){
    res.render("pulses");
});

//Routes to spices page
app.get('/spices',function(req,res){
    res.render("spices");
});

//Routes to veg oils page
app.get('/vegoils',function(req,res){
    res.render("vegoils");
});

//Routes to grains page
app.get('/grains',function(req,res){
    res.render("grains");
});

//Routes to cotton page
app.get('/cotton',function(req,res){
    res.render("cotton");
});

//Routes to contact us Page
app.get("/contactus",function(req,res){
    res.render("contactus");
});

