<?php
/*
$myObj->name = "John";
$myObj->age = 30;
$myObj->city = "New York";

$myJSON = json_encode($myObj);

echo $myJSON;
*/

$str = file_get_contents("account.json");
$list = json_decode($str, true);
//$acc = $list[1];
//echo $acc;
/*
$obj = new stdClass();//new stdObject();
$obj->username = "mit";
$obj->password = "123456";
$obj->email ="khoaimit@outlook.com";
$obj->name ="Lê Minh Kiệt";
$obj->id=3;
$obj->role=7;
*/

$obj = array(  
"username" => "mit",
"password" => "123456",
"email" =>"khoaimit@outlook.com",
"name" =>"Lê Minh Kiệt",
"id"=>3,
"role"=>7
);  
 


//$list[]=$obj;


//array_push($list, $obj);
//file_put_contents("account2.json", json_encode($list));

var_dump($list);
var_dump($obj);
?>