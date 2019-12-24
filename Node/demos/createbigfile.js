fs=require("fs");
f=fs.createWriteStream("mybigdata.txt");
for(i=0;i<1000;i++){
f.write("2.Design a form to display a text box and a button if user sends url  then display the html file.after user clicks on button in the form  display myfile.txt");
}
f.end();