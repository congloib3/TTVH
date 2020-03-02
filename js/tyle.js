var aseData = new Vue({
    el: '#aselist',

    data: {
        list: [],
        info : {}
    },

    created: function () {
        this.fetchData();
    },        

    methods: {
        saveData: function() {
            console.log(this.list);
            /*
            axios.put( aseUrl.aseCauThu + '/List', this.list,
            {'headers':{'Content-Type': 'application/json'}}
            )
            .then((response) => {console.log(response.data);})
            */
            },

        fetchData: function () {
            var query = window.location.search.substring(1);
            var parsedUrl = new URL(window.location.href);
            var id = parsedUrl.searchParams.get("id"); // 123
            
    
            //this.$http.get('http://api.football.agroupad.com/api/AseCauThu/GetAll?Page=0&Count=0')
            //this.$http.get(aseUrl.tyle +'0')// '154065')
            //alert(aseUrl.tyle + id);
            this.$http.get(aseUrl.tyle + id)
                      .then(response => {
                         this.list = response.data.Data;
                         this.info = response.data.Info;
                         ProcessTranDauInfo(this.info)
                         //console.log(this.info);
                         //console.log(this.list.length);
                         
                      })
        }
    }

})
;
function ProcessTranDauInfo(info)
{
    //console.log(info.tranDau);
    //console.log(info.ten);
    if(info.vong != '')
        info.giaiDau = info.giaiDau + ", ";
    if(info.luot != '')
        info.vong = info.vong  + ", ";
        
}