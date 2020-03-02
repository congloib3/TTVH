var parsedUrl = new URL(window.location.href);
var id = parsedUrl.searchParams.get("id"); // 123
var aseData = new Vue({
    el: '#aselist',

    data: {
        list: [],
        info: {},
        userInfo: userInfo,
        article: []
    },

    created: function () {
        this.getData();
        this.getData2(id + ".json");
    },

    methods: {
        alert:function(){
            alert('Bạn chưa đăng nhập!');
        },
        saveData: function () {
            //console.log(this.list);
            //axios.defaults.withCredentials = false;
            axios.post(aseUrl.dudoan + "Save", this.list,
                { 'headers': { 'Content-Type': 'application/json' } }
            )
                .then((response) => {
                    console.log(response.data);
                    alert('Đã lưu dự đoán của bạn');
                })

        },

        getData: function () {
            var query = window.location.search.substring(1);
            var parsedUrl = new URL(window.location.href);
            var id = parsedUrl.searchParams.get("id"); // 123


            //this.$http.get('http://api.football.agroupad.com/api/AseCauThu/GetAll?Page=0&Count=0')
            //this.$http.get(aseUrl.tyle +'0')// '154065')
            //alert(aseUrl.tyle + id);
            //this.$http.get(aseUrl.dudoan + id)
            //axios.defaults.withCredentials = true;
            axios.defaults.withCredentials = false;
            //res.setHeader('Access-Control-Allow-Credentials',true);
            console.log(aseUrl.dudoan + "TranDau/" + id);
            axios.get(aseUrl.dudoan + "TranDau/" + id, { withCredentials: false })

                .then(response => {
                    this.list = response.data.Data;
                    this.info = response.data.Info;
                    ProcessTranDauInfo(this.info)
                    //console.log(this.info);
                    //console.log(this.list.length);

                })

        },
        getData2: function (param) {

            this.$http.get(aseUrl.winlose + param)
                .then(response => {
                    //this.article = response.data.Data;
                    this.article = response.data;
                })
        },
        getScore(val) {
            return val.toFixed(2);
        }
    }

})
    ;
function ProcessTranDauInfo(info) {
    //console.log(info.tranDau);
    //console.log(info.ten);
    if (info.vong != '')
        info.giaiDau = info.giaiDau + ", ";
    if (info.luot != '')
        info.vong = info.vong + ", ";

}