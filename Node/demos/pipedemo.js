fs=require("fs")
http=require("http")
function processRequest(req,resp){
	src=fs.createReadStream("mybigdata.txt");
	src.pipe(resp);
	
}


s=http.createServer(processRequest);
s.listen(3000);
//src=fs.createReadStream("mybigdata.txt");
//dest=fs.createWriteStream("myanotherbid.txt");
