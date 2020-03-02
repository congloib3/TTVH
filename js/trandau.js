//import moment from 'moment';
//Vue.prototype.moment = moment;
var aseData = new Vue({
    el: '#aselist',

    data: {
        list: [],
        list2: [],
        info : {tieuDe : "Tuần này"}
    },

    created: function () {
        this.getData("?tuannay=true");
    },        

    methods: {
        saveData: function() {
            console.log(this.list);
            axios.put( aseUrl.aseCauThu + '/List', this.list,
            {'headers':{'Content-Type': 'application/json'}}
            )
            .then((response) => {console.log(response.data);})
            },

        getTuanNay: function () {   
            this.getData("?tuannay=true");
        },
        getThangNay: function () {   
            alert("123");
            this.getData("?thangnay=true");
        },
        getNamNay: function () {   
            this.getData("?tuannay=true");
        },

        getData: function (param) {
            
            //this.$http.get('http://api.football.agroupad.com/api/AseCauThu/GetAll?Page=0&Count=0')
            //this.$http.get(aseUrl.tyle +'0')// '154065')
            this.$http.get(aseUrl.trandau +param)
                      .then(response => {
                         this.list = response.data.Data;
                         this.list2 = response.data.Data;
                         //this.info = response.data.Info;
                         //ProcessTranDauInfo(this.info)
                         //console.log(this.info);
                         //console.log(this.list.length);
                         //console.log(aseUrl.trandau +"/tuannay=true");
                         console.log(this.list);
                         console.log(this.list2);
                         
                      })
        },

        formatDay(value){
            if (value) {
              return moment(String(value)).format('DD-MM-YY')
             }
         },
         showValue(value){
            if (value !='') {
              return ', ' + value;
             }
         },

    }

})
;
