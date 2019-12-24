express=require("express");
app=express();

//handles / request
app.get("/",function(req,resp){
   resp.send("<h1>Hello world!</h1>");
});

//handle about request
app.get("/about",function(req,resp){
	resp.send("<h1>about us</h1>");
});

app.listen(2000);