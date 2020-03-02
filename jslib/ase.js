var aseUrlroot = "http://localhost:6780/api/";
// var aseUrlroot = "http://127.0.0.1:6780/api/";

//var aseUrlroot = "http://football.com.vn:6780/api/";
var aseUrl  = {
     
     login : aseUrlroot +"User/Login",
     register :aseUrlroot +"User/Register",
     init : aseUrlroot +"User/Init",
     view :"baiviet/noidung/",    //aseView :"baiviet/noidung/",
     winlose:"baiviet/winlose/",
     info:aseUrlroot +"UserInfo/GetFull",
     listHot :"baiviet/",
     list :"baiviet/",
     aseCauThu: "http://localhost:6780/api/AseCauThu",
     tyle : aseUrlroot +"AseTyle/TranDau/",
     dudoan : aseUrlroot +"AseDuDoan/",
     trandau : aseUrlroot + "AseTranDau/TheoNgay",
     schoolJson : "https://mxh-apis.herokuapp.com/dsKhoiLop",//"https://mxh-apis.herokuapp.com/dsLopHoc",//"https://saigonmaster.herokuapp.com/lopHoc",
     school :"http://localhost:6780//api/KhoiLop",

     //tyle : aseUrlroot +"AseTyle/Getall?Page=0&Count=0&TranDauId="
     //tyle : "http://localhost:6780/api/AseTyle/Getall?Page=0&Count=0&TranDauId="
     url :    "http://localhost:6780/api/"
    };
 var userInfo = {
 }   

function aseInit()
{

    function addHttp(str) {
        if(str.indexOf("http")!=-1)
            return aseUrl + str;
         return str;   
    }
    if(sessionStorage.userInfo!=null)
      userInfo=JSON.parse(sessionStorage.userInfo); 
    else
    userInfo= {name :'Đăng nhập'}
    //alert(sessionStorage.userInfo)  
    aseUrl.aseCauThu = addHttp(aseUrl.aseCauThu);

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

aseInit();