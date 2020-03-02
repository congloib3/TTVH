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
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.5.0/css/all.css' integrity='sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU' crossorigin='anonymous'>
<link rel="stylesheet" href="css/ttvh.css">
            <script src="js/ttvh.js"></script>
            
            
            </head>    
<style>
* {box-sizing: border-box;}

/* Style the input container */
.input-container {
  display: flex;
  width: 100%;
  margin-bottom: 15px;
}

/* Style the form icons */
.icon {
  padding: 10px;
  background: dodgerblue;
  color: white;
  min-width: 50px;
  text-align: center;
}

/* Style the input fields */
.input-field {
  width: 100%;
  padding: 10px;
  outline: none;
}

.input-field:focus {
  border: 2px solid dodgerblue;
}


button {
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

button:hover {
  opacity:1;
}

/* Extra styles for the cancel button */
.cancelbtn {
  padding: 14px 20px;
  background-color: #f44336;
}

/* Float cancel and signup buttons and add an equal width */
.cancelbtn, .signupbtn {
  float: left;
  width: 50%;
}



</style>
<body>
        <header class="header" id ="headerTTVH">
            </header>        
            <nav class="topnav" id="navTTVH">
            </nav>
<div id ="Msg" class="Msg"></div>
<div id ="Err" class="Err"></div>

<?php
//echo "Hello World!";

$username = $_POST['username'];
$password = $_POST['password'];

$str = file_get_contents("data/account.json");
$list = json_decode($str);

/*
$rs = array_filter($list->account, function($acc) {
    if ($acc->username == $username)
      return acc;
  });


*/
$x = null;
$k=1;
foreach($list->account as $acc)
{
    if($acc->username == $username)
    {
        $k=2;
        if($acc->password == $password)
        {
            $k=0;
            $x = $acc;
        }
        else
            $k+=4;
        
        //echo $item->id;
    }
}
//var_dump($x);
$msg="";
switch ($k) {
  case 0:  $msg=""; 
  break;
  case 1:  $msg="Sai user hoặc pass"; break;
  case 2:  $msg="Sai user hoặc pass"; break;
  case 7:  $msg="Sai user hoặc pass"; break;
      
  default:$msg="";;
}

if($msg !="")
{
    session_start();
    
    setcookie("msg", $msg, time() + (86400), "/"); // 86400 = 1 day
    //header('Location: login.html');
}
else
{

    if($x != null)  
    {
      $_SESSION["userid"] = $x->id;
    }
    header('Location: index.html');
}
?>
              
<footer class="footer" id="footerTTVH">
</footer>
<script>
    showErr('<?php  echo $msg ?>', 5000);
    
</script>
</body>
</html>
