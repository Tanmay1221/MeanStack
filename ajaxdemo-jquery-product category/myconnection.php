<?php
$server="localhost";
$username="root";
$pass="";
$db="mydb2";
$conn=mysqli_connect($server,$username,$pass,$db);
if($conn)
{
   echo "connetction done!";
}
else{
   die ("connection error".mysqli_connect_error());
	//echo "connectin not done";
}
?>