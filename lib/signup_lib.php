<?php

$user = "";
$pass = "";
$email ="";
$name="";
$pass2 = "";
$msg="";
$acc = null;
$rs=0;

if ($_SERVER['REQUEST_METHOD'] == 'POST')    
//if(isset( $_POST['$user'] ))
{
    try {
    
    $user = $_POST['user'];    $pass = $_POST['pass']; $pass2 = $_POST['pass2'];
    $name = $_POST["name"];$email = $_POST["email"];
    
    }
      
      
      catch(Exception $e) {
        echo 'Message: ' .$e->getMessage();
      }
    if ($user == "" || $pass == "" || $name == "" || $email == "") 
        $msg = "Vui lòng nhập đầy đủ thông tin. ";
    if($pass != $pass2)    
        $msg = $msg + "Mật khẩu khẳng định phải giống nhau. ";
    
        echo $user;

    
}
/*
function checkEmail(m)
{
    return true;
}
*/
function signup($u, $p, $e, $n) {
    global $acc, $msg;
    $str = file_get_contents("data/account.json");
    $list = json_decode($str);
    
    $k=0;
    foreach($list as $x)
    {
        if($x->username == $u)
        {
            $k=1;
        }
    }    
    if($k==0)
    {
        
        $obj = new stdClass();
        $obj->username = $u;
        $obj->password = $p;
        $obj->email =$e;
        $obj->name =$n;
        $obj->id= count($list) +1;
        $obj->role=7;    

        array_push($list,$obj);
        file_put_contents("data/account.json", json_encode($list, JSON_UNESCAPED_UNICODE));

    }  

    switch ($k) {
        case 0:  $msg=""; 
        break;
        case 1:  $msg="Đã có tài khoản này"; break;
        
            
        default:$msg="";;
      }

    return $k;
}


if ($name!= "")
if ($msg == "")
{
    
    $rs=0;
    $rs = signup($name,$pass,$email, $name);
    if($rs==0)
    {
        
        session_start();
       
        if($acc != null)  
        {
          //$_SESSION["userid"] = $acc->id;
        }
        //echo $_SESSION["userid"];
        header('Location: msg.html?id=1');

    }
}
?>