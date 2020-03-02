//import moment from 'moment';
//Vue.prototype.moment = moment;
var aseData = new Vue({
    el: '#aselist',

    data: {
        list: [],
        info: { tieuDe: "Tuần này" },
        userInfo: userInfo
    },

    created: function () {
        this.getData("?tuannay=true");
    },

    methods: {
        getTuanNay: function () {
            this.getData("?tuannay=true");
            menuClick("a1Menu");
        },
        getThangNay: function () {
            this.getData("?thangnay=true");
            menuClick("a2Menu");
        },
        getNamNay: function () {
            this.getData("?tuannay=true");
            menuClick("a3Menu");
        },

        getData: function (param) {

            //this.$http
            /*
            axios.get(aseUrl.trandau +param,
                 {
                    headers: {
                        Cookie: document.cookie
                    },
                    credentials: 'same-origin'
                }
                )
                */
            axios.defaults.withCredentials = true;
            //res.setHeader('Access-Control-Allow-Credentials',true);
            axios.get(aseUrl.trandau + param, { withCredentials: false })
                .then(response => {
                    this.list = response.data.Data;
                    //console.log(this.list);

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

    }

})
    ;

function menuClick(id) {
    var a1 = document.getElementById("a1Menu");
    var a2 = document.getElementById("a2Menu");
    var a3 = document.getElementById("a3Menu");
    //console.log(a1);  console.log(a2);   console.log(a3);

    a1.className = "";
    a2.className = "";
    a3.className = "";
    document.getElementById(id).className = "active";
    //a2.className="active";
    //alert('12111');


}