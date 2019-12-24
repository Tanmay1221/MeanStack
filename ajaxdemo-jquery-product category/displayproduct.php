<?php
include_once("myconnection.php");
header('Content-Type: text/html');
echo "<table border='1'>";
echo "<tr><th>Product id</th><th>Name</th><th>Quantity</th></tr>";
$catid=$_GET['cat'];
$sql="select * from product where categoryid=".$catid;
//echo $sql;
$plist=mysqli_query($conn,$sql);
while($row=mysqli_fetch_assoc($plist)){
echo "<tr>";
echo "<td>".$row['id']."</td><td>".$row['pname']."</td><td>".$row['qty']."</td>";
echo "<td><a href='editform.php?pid=".$row['id']."'>edit</a>/<a href='delete.php?pid=".$row['id']."'>delete</a></td>";

echo "</tr>";


}
echo "</table>";
?>

