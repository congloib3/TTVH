        
//         var isMobile = false; //initiate as false
//         if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) 
//         {
//           isMobile=true;
//         }else{
//             parent.document.location.replace("test-detect-mobile.html");
//         }
// // -----------------Phát hiện thiết bị---------------------------

var parsedUrl = new URL(window.location.href);
var id = parsedUrl.searchParams.get("id"); // 123
var obj;
var aseData = new Vue({
    el:"#aseArticle",
    data:{
        article: {}
    },
    created: function () {
        //this.getData("?id=" +id);
        this.getData(id + ".json");
    },        

    methods: {
        getData: function (param) {
            
            //this.$http.get('http://api.football.agroupad.com/api/AseCauThu/GetAll?Page=0&Count=0')
            //this.$http.get(aseUrl.tyle +'0')// '154065')
            this.$http.get(aseUrl.view +param)
                      .then(response => {
                         //this.article = response.data.Data;
                         this.article = response.data;
                         console.log(this.article);
                         
                         
                      })
        },

        formatDay(value){
            if (value) {
              return moment(String(value)).format('DD-MM-YY')
             }
         },
         

    }
});
  /*--------------------------------------------------*/
window.onscroll = function() {
  scrollFunction();
  scrollFunction1();
}
function menuTTVHlink(link,label) {
  localStorage.setItem("storageName",link);
  //document.getElementById("Nav3").innerHTML="";
}
function menuTTVHlable(label) {
  localStorage.setItem("label",label);
  //document.getElementById("Nav3").innerHTML="";
}
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}
var prevScrollpos = window.pageYOffset;
function scrollFunction1() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("menu").style.top = "85%";
  } else {
    document.getElementById("menu").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
  /*--------------------------------------------------*/
  var menuItem=null;
  window.addEventListener('mouseup', e => {
    menuItem=document.getElementById("menuitem");
    if (e.target != menuItem && e.target.parentNode != menuItem) {
      menuViewclose();
        
    }
})
 /*--------------------------------------------------*/
function goBack() {
  window.history.back();
}
function menuView() {
  var x = document.getElementById("menuitem");
  var y = document.getElementById("menuitem-detail");
  var z = document.getElementById("menu"); 
  var z1 = document.getElementById("menu1"); 
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.display = "none";

  } else {
    x.style.display = "block";
    y.style.display = "block";
    z.style.display = "none";
    z1.style.display="block";
  }
}
function menuViewclose() {
  var x = document.getElementById("menuitem");
  var y = document.getElementById("menuitem-detail");
  var z = document.getElementById("menu"); 
  var z1 = document.getElementById("menu1"); 
  if(x!=null)
  {
    if (x.style.display == "block") {
           x.style.display = "none";
           y.style.display = "none";
           z.style.display = "block";
           z1.style.display = "none";
      //alert("22");
    }
  }
}
/*
var burgerBtn = document.getElementById('burgerBtn');
burgerBtn.addEventListener('click', function() {
  mobile.classList.toggle('navigation');
}, false);
var burgerBtn1 = document.getElementById('burgerBtn1');
burgerBtn1.addEventListener('click', function() {
  mobile.classList.toggle('navigation');
}, false);
*/