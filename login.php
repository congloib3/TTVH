<?php include 'lib/login_lib.php';?>              
<?php if($rsLogin!=0) 
{
?>
<!DOCTYPE html>
<html>
        <head>
                <meta charset="UTF-8">
                <meta name="description" content="Thể thao & Văn hóa">
                <meta name="keywords" content="Thể thao,Văn hóa">
                <meta name="author" content="TTVH">    
                <meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.5.0/css/all.css' integrity='sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU' crossorigin='anonymous'>
<link rel="stylesheet" href="css/ttvh.css">
            <script src="js/ttvh.js"></script>
            
            
            </head>    
<style>
* {box-sizing: border-box;}


.input-container {
  display: flex;
  width: 100%;
  margin-bottom: 15px;
}


.icon {
  padding: 10px;
  background: dodgerblue;
  color: white;
  min-width: 50px;
  text-align: center;
}


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

.cancelbtn {
  padding: 14px 20px;
  background-color: #f44336;
}

.cancelbtn, .signupbtn {
  float: left;
  width: 50%;
}
.fbbtn {
  width: 50%;
  background-color: #4267b2;
}


.login-button {
  display: inline-block;
  cursor: pointer;
}

.login-button:hover {
  background: rgba(59, 89, 152, .1);
}

.login-facebook-icon {
  background-color: #3b5998;
  color: #fff;
  font-family: Arial, sans-serif;
  font-weight: 400;
  font-size: 36px;
  line-height: 48px;
  text-align: center;
  height: 48px;
  width: 58px;   
  float: left;
}

.login-facebook-text {
  color: #3b5998;
  font-family: HelveticaNeueW01-55Roma, HelveticaNeueW02-55Roma, HelveticaNeueW10-55Roma, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 46px;
  text-align: center;
  width: 239px;
  height: 46px;
  padding-left: 58px;
  border: 1px solid #3b5998;
}

</style>
<body>
            <div id ="Msg" class="Msg"></div>
            <div id ="Err" class="Err"></div>
            
            <form action="login.php" name ="frmLogin" method="POST">
                <h1>Đăng nhập</h1>
                
                <p>Vui lòng nhập đủ thông tin.</p>
                <hr>
                <div class="input-container">
                  <i class="fa fa-user icon"></i>
                  <input class="input-field" type="text" placeholder="Username" name="uname" 
                  required  title="Phải nhập UserName" data-errormessage-value-missing="Phải có UserName"
                  oninvalid="this.setCustomValidity('Nhập User Name')"
                  oninput="setCustomValidity('')"
                  />
                </div>
              
                <div class="input-container">
                  <i class="fa fa-key icon"></i>
                  <input class="input-field" type="password" placeholder="Mật khảu" name="psw"
                  required   data-errormessage-value-missing="Phải có password"
                  
                  oninvalid="this.setCustomValidity('Nhập password, tối thiểu 6 ký tự')"


                  />
                  <!--pattern=".{6,}" title="Phải trên 6 ký tự"-->
                </div>

                <div class="input-container">
                  <button type="submit" class="signupbtn">Đăng nhập</button>
                  <button type="button" class="cancelbtn"  onclick="menuTTVHclose();window.location.href='index.html';">Bỏ qua</button>
                </div>
                <div class="input-container">
                  Hoặc đăng nhập bằng <br />
                  <div class="login-button">
  <div class="login-facebook-icon">f</div>
  <div class="login-facebook-text">Continue with Facebook</div>
</div>
                  <button type="button" onclick="window.location.href='https://m.facebook.com/';" class="fbbtn">Facebook</button>
                  
                </div>

                <div class="input-container">
                  Chưa có tai khoản ? <a href ="signup.php"> Đăng ký </a>  
                </div>
                
              </form>

              
<script>
    showErr('<?php  echo $msgLogin ?>', 5000);
</script>
</body>
</html>
<?php 
}
?>
