var aseData = new Vue({
    el: '#aseSingup',
    data: {
        server : {},
        data :{},
        userReges: {userName : "", password :"",  name :"", email :"", tel :""}
    },
    created: function () {
        this.initData();
    },       
    methods: {
        doSignup: function() {
            console.log(this.userReges);
            axios.defaults.withCredentials = false;
            axios.post(aseUrl.register , this.userReges,
            {'headers':{'Content-Type': 'application/json'}}
            )
                alert("success");
            },
            initData: function () {
                this.userReges.userName ="loitran1325";
                this.userReges.password="123456";
                this.userReges.name ="loi";
                this.userReges.email ="loitran@gmail.com";
                this.userReges.tel ="0135484";
                console.log(this.userReges);
                axios.defaults.withCredentials = true;
                axios.get(aseUrl.init, {withCredentials: false})
    
                          .then(response => {
                            console.log(response.data.Data);
                          })
            }
    }

})
;