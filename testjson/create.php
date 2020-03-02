<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="description" content="Thể thao & Văn hóa">
    <meta name="keywords" content="Thể thao,Văn hóa">
    <meta name="author" content="TTVH">    
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
<?php header ('Content-type: text/html; charset=utf-8'); ?>
<?php

$obj = new stdClass();//new stdObject();
$obj->username = "mit";
$obj->password = "123mit";
$obj->email ="khoaimit@outlook.com";
$obj->name ="Lê Minh Kiệt";
$obj->id=1;
$obj->role=7;
$list = array();
array_push($list,$obj);


//array_push($list, $obj);
file_put_contents("account.json", json_encode($list, JSON_UNESCAPED_UNICODE));

var_dump($list);
var_dump($obj);
?>
</body>
</html>