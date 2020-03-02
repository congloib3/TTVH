<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="description" content="Thể thao & Văn hóa">
    <meta name="keywords" content="Thể thao,Văn hóa">
    <meta name="author" content="TTVH">    
    <meta name="viewport" content="width=device-width, initial-scale=1">
<style>

</style>
<link rel="stylesheet" href="css/ttvh.css">
<script src="js/ttvh.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<script src="list.js"></script>    
</head>
<body>


 <div id ="Msg" class="Msg"></div>
<div id ="Err" class="Err"></div>
<?php include 'lib/soikeo_lib.php';?>

  <section class="section" ng-app="TTVHApp" ng-controller="TTVHCtrl">
  <?php if ($userid ==0){ ?>
        Đang xây dựng....
  <?php } 
  else
  {
  ?>  
        Chức năng phải đăng nhập. Đang xây dựng....  Hẹn gặp lại  6/1/2019 
  <?php } 
  ?>      
  </section>
  

<script>
    showErr('<?php  echo $msg ?>', 5000);
</script>
</body>
</html>






