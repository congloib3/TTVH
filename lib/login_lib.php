<?php

$uname = "";
$psw = "";
$msgLogin="";
$accLogin = null;
$rsLogin=1;

if ($_SERVER['REQUEST_METHOD'] == 'POST')    
//if(isset( $_POST['$uname'] ))
{
    
    try {
        $uname = $_POST['uname'];$psw = $_POST['psw'];
      }
      
      
      catch(Exception $e) {
        echo 'Message: ' .$e->getMessage();
      }
}



function login($u, $p) {
    global $accLogin, $msgLogin;
    $str = file_get_contents("data/account.json");
    $list = json_decode($str);
    
    $k=1;
    foreach($list as $x)
    {
        if($x->username == $u)
        {
            $k=2;
            if($x->password == $p)
            {
                $k=0;
                $accLogin = $x;
                
                
            }
        }
    }    
    switch ($k) {
        case 0:  $msgLogin=""; 
        break;
        case 1:  $msgLogin="Sai user hoặc pass"; break;
        case 2:  $msgLogin="Sai user hoặc pass"; break;
        
            
        default:$msgLogin="";;
      }
    return $k;
}

if ($uname!= "")
{
    $rsLogin=1;
    $rsLogin = login($uname,$psw);
    if($rsLogin==0)
    {
        
        session_start();
       

        if($accLogin != null)  
        {
          $_SESSION["userid"] = $accLogin->id;
          $_SESSION["name"] = $accLogin->name;
        }
        
        ob_start();
        //header("location:./");
        header('Location: index.html');
        echo "<script>location.href='index.html';</script>";
        ob_end_flush();
        exit();

    }
}



?>