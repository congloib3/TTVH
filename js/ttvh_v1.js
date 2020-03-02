
  function menuTTVH() {
    var x = document.getElementById("menuItem");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  function menuTTVHclose() {
    var x = document.getElementById("menuItem");
    if (x.style.display === "block") {
      x.style.display = "none";
      //alert("22");
    }
  }

  function headerTTVH() {
    var header =`  <div class="menu">
    <a href="index.html" class="title">&nbsp;&nbsp;<i class="fa fa-home"></i>Thể thao & Văn hóa</a>
  <div id="menuItem">
      <a onclick ="login();"><i class="fas fa-user-circle iconAccount"></i>Đăng nhập</a>
      
      <hr />
      <a href="viet.html"><i class="fas fa-futbol iconItem"></i>Bóng đá Việt Nam</a>
      <a href="anh.html"><i class="fas fa-futbol iconItem"></i>Bóng đá quốc tế</a>
      <a href="soikeo.php"><i class="fas fa-futbol iconItem"></i>Soi kèo</a>
      <hr />
      <a href="giaitri.html"><i class="fas fa-futbol iconItem"></i>Giải trí</a>
      <a href="vanhoa.html"><i class="fas fa-futbol iconItem"></i>Văn hóa</a>
      <a href="xahoi.html"><i class="fas fa-futbol iconItem"></i>Xã hội</a>
      <a href="sao.html"><i class="fas fa-futbol iconItem"></i>Thế giới sao</a>
      <hr />
      <a href="video.html"><i class="fas fa-video iconItem"></i>Video clip</a>
      <a href="youtube.html"><i class="fab fa-youtube iconItem"></i>Kênh TT&VH</a>
      <a href=""><i class="fas fa-futbol iconItem"></i>Đánh giá</a>
      <a href=""><i class="fas fa-comment-alt iconItem"></i>Góp ý</a>
  </div>
  <a href="javascript:void(0);" class="icon" onclick="menuTTVH()">
    <i class="fa fa-bars"></i>
  </a>
</div>`;
document.getElementById("headerTTVH").innerHTML=header;

  }
  function navTTVH() {
    var nav=`
    <a href="index.html">Bài mới</a>
    <a href="video.html">Video</a>
    <a href="youtube.html">Kênh TT&VH</a>

    `;
    document.getElementById("navTTVH").innerHTML=nav;
  }
  function footerTTVH() {
    var footer=`
BÁO ĐIỆN TỬ THỂ THAO & VĂN HÓA - TTXVN
Tổng Biên tập:	Lê Xuân Thành
       
Liên hệ quảng cáo: 04.38254756. 
HOTLINE Miền Bắc: 0981.119.189; 
Miền Trung: 0981.118.618; 
Miền Nam: 0981.116.818

    `
    document.getElementById("footerTTVH").innerHTML=footer;
  }


  document.addEventListener('DOMContentLoaded', () => {headerTTVH();footerTTVH();navTTVH();});

  function signup() {
    menuTTVHclose();
    window.open("signup.html", "Đăng ký", '');
  }
  
  function login() {
    menuTTVHclose();
    window.open("login.php", "Đăng nhập", '');
  }
  

  function showMsg(Msg, t=0) {
    if(Msg!="")
    {
    var c = document.getElementById("Msg");
    c.innerHTML=Msg;
    if(t!=0)
      setTimeout(function(){ c.innerHTML=""; }, t);
    }  
  }
  function showErr(Err, t=0) {
    if(Err !="")
    {
    var c = document.getElementById("Err");
    c.innerHTML=Err;
    if(t!=0)
      setTimeout(function(){ c.innerHTML=""; }, t);
    } 
  }
  
  //------------------------------------------------------------------
function fTieuDe(str)
{
  var k=0, x=0, m=50, l=0;
  l = str.length;
  k = str.indexOf(".");
  
  if((k<m) && (k<l)) 
    k = str.indexOf(".", k+1);
  if((k<m) && (k<l)) 
    k = str.indexOf(".", k+1);
      
  if(k==-1)
    k = str.indexOf(" ", m-10);
  if(k==-1)  k=l;    
  return  str.slice(0, k); 
}
