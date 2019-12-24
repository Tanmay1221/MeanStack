<html>
<head>
<script src="../script/jquery-1.11.1.js"></script>
<script>
  $(document).ready(function(){
	  
	  
	  $('#btn1').click(function(){
		  str="displayproduct.php?cat="+$("#cat").val();
	  
	  $.ajax({
		  url:str,
		  method:'GET',
		  
		  success:function(d,s,x){
			  alert(d);
			  
			  $('#mydiv').html(d);
		  },
		  error:function(error,status,x){
			  alert(error);
			  $('#mydiv').html(status);
		  }
		  
	  });
	  });//end of click
	  
	  
  });

</script>
</head>
<body>
<form>
<select name="cat" id="cat">
<?php
include_once("myconnection.php");
$sql="select * from category";
$clist=mysqli_query($conn,$sql);
while($row=mysqli_fetch_assoc($clist))
{
  echo "<option value='".$row['catid']."'>".$row['cname']."</option>";
}
?>
</select>
<input type="button" name="btn" id="btn1" value="display Product">
<div id="mydiv">

</div>
</form>
</body>
</html>