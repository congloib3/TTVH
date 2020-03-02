        
        // var isMobile = false; //initiate as false
        // if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) 
        // {
        //   isMobile=true;
        // }else{
        //     parent.document.location.replace("test-detect-mobile.html");
        // }
// -----------------Phát hiện thiết bị---------------------------
function menuTTVHlink(link, label) {
    localStorage.setItem("storageName", link);
    //document.getElementById("Nav3").innerHTML="";
}
function menuTTVHlable(label) {
    localStorage.setItem("label", label);
    //document.getElementById("Nav3").innerHTML="";
}
var aseData = new Vue({
    el: '#aselist',

    data: {
        list: [],
        listHot: [],
        userInfo: userInfo
    },

    created: function () {
        this.getListHot("danhsachSoiKeo.json");
        this.getList("hot.json");
    },

    methods: {


        getList: function (param) {

            this.$http.get(aseUrl.list + param)
                .then(response => {
                    this.list=response.data;

                })
        },
        getListHot: function (param) {

            this.$http.get(aseUrl.listHot + param)
                .then(response => {
                    var data;
                    //data = response.data.Data;
                    data = response.data;
                    this.listHot = data.splice(0, 1);



                })
        },

        formatDay(value) {
            if (value) {
                return moment(String(value)).format('DD-MM-YY')
            }
        },
        showValue(value) {
            if (value != '') {
                return ', ' + value;
            }
        },
        fMoTa(str) {

            var k = 0, x = 0, m = 120, n = 50, l = 0;
            l = str.length;
            k = str.indexOf(".", n);
            if ((k < m) && (k < l))
                k = str.indexOf(".", k + 1);

            if (k == -1 || k > m)
                k = str.indexOf(" ", m - 10);

            if (k == -1) k = l;
            return str.slice(0, k);
        },

    }

})
    ;
    //------------------------------------------------------------------
// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}    
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }