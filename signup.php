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



</style>
<body>
<?php include 'lib/signup_lib.php';?>              

            <form action="signup.php" name ="frmSignup" method="POST">
                <h1>Đăng ký</h1>
                
                <p>Vui lòng nhập đủ thông tin.</p>
                <hr>
                <div class="input-container">
                  <i class="fa fa-user icon"></i>
                  <input class="input-field" type="text" placeholder="Username" name="user"
                  required  title="Phải nhập UserName" data-errormessage-value-missing="Phải có UserName"
                  oninvalid="this.setCustomValidity('Nhập User Name')"
                  oninput="setCustomValidity('')"

                  />
                </div>
              
                <div class="input-container">
                  <i class="fa fa-envelope icon"></i>
                  <input class="input-field" type="text" placeholder="Email" name="email"
                  required   data-errormessage-value-missing="Phải có email"
                  
                  oninvalid="this.setCustomValidity('Nhập email hợp lệ')"

                  />
                </div>
                <!--pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" title="phải đúng qui định"-->
                <div class="input-container">
                  <i class="fa fa-user icon"></i>
                  <input class="input-field" type="text" placeholder="Họ tên" name="name"
                  required  title="Phải nhập họ tên" data-errormessage-value-missing="Phải có họ tên"
                  oninvalid="this.setCustomValidity('Nhập họ tên')"
                  oninput="setCustomValidity('')"

                  />
                </div>

              
                <div class="input-container">
                  <i class="fa fa-key icon"></i>
                  <input class="input-field" type="password" placeholder="Mật khảu" name="pass"
                  required   data-errormessage-value-missing="Phải có password"
                   title="Phải trên 6 ký tự"
                  oninvalid="this.setCustomValidity('Nhập password, tối thiểu 6 ký tự')"

                  />
                </div>

                <div class="input-container">
                  <i class="fa fa-key icon"></i>
                  <input class="input-field" type="password" placeholder="Nhập lại mật khảu" name="pass2">
                </div>
                <p>Với việc tạo tài khoản này, bạn đã chấp thuận   <a href="#" style="color:dodgerblue">các điều khỏan và qui định của chúng tôi</a>.</p>
                <div class="input-container">
                    <button type="submit" class="signupbtn">Đăng ký</button>
                  <button type="button" class="cancelbtn"  onclick ="window.close();">Bỏ qua</button>
                  
                </div>
                
              </form>
              
</body>
</html>
