new Vue({
    el:"#headerTTVH",
    data:{
        userInfo: userInfo
    }
  })
     /*--------------------------------------------------------------------------------------*/
function autoresize_frames() {
    var frm = document.getElementById("ifTTVH");
    frm.style.height = (frm.contentDocument.body.scrollHeight + 10) + 'px';
    //alert("hello");

  }

  var header = document.getElementById("headerTTVH");
  var sticky = header.offsetTop;

  function fScroll() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
   /*---view menu back to top-----------------------------------------------------------------------------------*/
  window.onscroll = function () {
    scrollFunction1();
    scrollFunction();
    fScroll()
  }
  var prevScrollpos = window.pageYOffset;
  function scrollFunction1() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("menu").style.top = "90%";
    }
     else {
      document.getElementById("menu").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
  }
  /*---back to top-----------------------------------------------------------------------------------*/
  var mybutton = document.getElementById("menu");
  function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  mybutton.style.display = "block";
} else {
  mybutton.style.display = "none";
}
}
function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}
/*--------------------------------------------------------------------------------------*/