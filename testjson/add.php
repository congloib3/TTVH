<?php header ('Content-type: text/html; charset=utf-8'); ?>
<?php

$str = file_get_contents("account.json");
$list = json_decode($str);

$obj = new stdClass();//new stdObject();
$obj->username = "khoai";
$obj->password = "123khoai";
$obj->email ="khoaimit@outlook.com";
$obj->name ="Lê Minh Lâm";
$obj->id=2;
$obj->role=7;

/*
$obj = new stdClass();//new stdObject();
$obj->username = "ha";
$obj->password = "123123";
$obj->email ="khoaimit@outlook.com";
$obj->name ="Lê Hà";
$obj->id=3;
$obj->role=7;
*/

$k=0;
    foreach($list as $x)
    {
        if($x->username == $obj->username)
        {
            $k=1;
        }
    }    

if($k==0)
{
array_push($list,$obj);


//array_push($list, $obj);
file_put_contents("account.json", json_encode($list, JSON_UNESCAPED_UNICODE));
}
var_dump($list);
var_dump($obj);
?>
