http=require("http");
url=require("url");
fs=require("fs");
query=require("querystring");
fact=require("./demo1");
function processRequest(req,res)
{
	u=url.parse(req.url);
	console.log(u);
	switch(u.pathname)
	{
		case "/":
			fs.readFile("form.html",function(err,data){
				if(err)
				{
					res.end("error occurred");
				}
				else
				{
					res.end(data);
				}
			});
			break;
			case "/factorial":
				data=query.parse(u.query);
				//console. 5:50 PM 10/20/2019log(data);
				res.end("factorial : "+fact.f1(data.num1));
		
	}
}



s=http.createServer(processRequest);
s.listen(2000);
console.log("server started at port number 2000");
