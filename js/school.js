/*
{
  "id": 0,
  "tenKhoiLop": "string",
  "active": true,
  "pos": 0
}
*/
var aseData = new Vue({
    el: '#aselist',

    data: {
        list: [],
        info : {}
    },

    created: function () {
        this.getData();
    },        

    methods: {
        saveData: function() {
            console.log(this.list);
            for(i=0;i<this.list.length;i++)
            {
                axios.post( aseUrl.school, this.list[i],
                {'headers':{'Content-Type': 'application/json'}}
                )
                .then((response) => {console.log(response.data);})
                    alert("Dẵ lưu dữ liệu của bạn");
                }
            }
            ,

        getData: function () {
            var query = window.location.search.substring(1);
            var parsedUrl = new URL(window.location.href);
            var id = parsedUrl.searchParams.get("id"); // 123
            
    
            //this.$http.get('http://api.football.agroupad.com/api/AseCauThu/GetAll?Page=0&Count=0')
            //this.$http.get(aseUrl.tyle +'0')// '154065')
            //alert(aseUrl.tyle + id);
            //this.$http.get(aseUrl.dudoan + id)
            axios.defaults.withCredentials = true;
            //res.setHeader('Access-Control-Allow-Credentials',true);
            axios.get(aseUrl.schoolJson, {withCredentials: true})

                      .then(response => {
                         this.list = response.data;
                         //console.log(this.info);
                         //console.log(this.list.length);
                         
                      })
        }
    }

})
;
