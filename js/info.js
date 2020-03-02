var aseData = new Vue({
    el: '#aselist',
    data: {
        list: [],
        info: {},
        userInfo: userInfo,
    },

    created: function () {
        this.getData();
    },

    methods: {
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
            console.log(aseUrl.info + id);
            axios.get(aseUrl.info+ id, { withCredentials: false })

                .then(response => {
                    this.list = response.data.Data;
                    this.info = response.data.Info;

                })

        }
    }

})
