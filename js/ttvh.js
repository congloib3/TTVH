// function seacrhTTVH() {
//   var x = document.getElementById("searchform-wrap");
//   var y = document.getElementById("btn-search");
//   if (x.style.display === 'block') {
//     x.style.display = "none";
//     y.style.color="white";
//   } else {
//     x.style.display = "block";
//     y.style.color="#A00000";
//   }
// }

  function menuTTVH() {
    var x = document.getElementById("menuItem");
    var y = document.getElementById("icon-star");
    if (x.style.display === "block") {
      x.style.display = "none";
      y.style.display = "block";
    } else {
      x.style.display = "block";
      y.style.display = "none";
    }
  }
  function menuTTVHclose() {
    var x = document.getElementById("menuItem");
    var y = document.getElementById("icon-star");
    if(x!=null)
    {
      if (x.style.display == "block") {
             x.style.display = "none";
             y.style.display="block";
        //alert("22");
      }
    }
  }
  /*--------------------------------------------------*/
  var menuItem=null;
  window.addEventListener('mouseup', e => {
    menuItem=document.getElementById("menuItem");
    if (e.target != menuItem && e.target.parentNode != menuItem) {
      menuTTVHclose();
        
    }
})
 /*--------------------------------------------------*/
 
// function navTTVH(x) {
//   var list =["Nav2","Nav3"];
//   var i=0;
//   for(i=0;i<list.length;i++)
//       document.getElementById(list[i]).className = "navItem";
//   x.className = "navItemActive";
// }

 /*--------------------------------------------------*/
 

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

 //------------------------------------------------------------------
function menuTTVHlink(link) {
  if(link =="") return;
  
 var x = document.getElementById("Nav3");
  navTTVH(x);
  x.setAttribute('href', link);
  x.innerHTML=label;
  //document.getElementById("Nav3").innerHTML="";
}

