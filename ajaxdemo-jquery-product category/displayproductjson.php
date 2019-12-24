<html>
<head>
</head>
<body>
<table border="1">
<tr><th>Product id</th><th>Name</th><th>Quantity</th></tr>
<?php
include_once("myconnection.php");
//session_start();
if(isset($_SESSION['catid'])){
$catid=$_SESSION['catid'];	
}
else{
$catid=$_GET['cat'];
$_SESSION['catid']=$catid;
}
$sql="select * from product where categoryid=".$catid;
echo $sql;
$plist=mysqli_query($conn,$sql);
$data=array();
while($row=mysqli_fetch_assoc($plist)){
  $data[]=$row;
   
}
print_r($data);
$djson=json_encode($data);
print_r($djson);
?>

</body>
</html>