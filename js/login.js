var aseData = new Vue({
    el: '#aseLogin',

    data: {
        server : {},
        data :{},
        userLogin: {userName : "", password :"", save : true}
    },

    created: function () {
        this.initData();
    },        

    methods: {
        doLogin: function() {
            console.log(this.userLogin);
            axios.defaults.withCredentials = false;
            //axios.get(aseUrl.dudoan + id, {withCredentials: true})
            axios.post( "http://localhost/api/signin.inc.php" , this.userLogin,
            {'headers':{'Content-Type': 'application/json'}},
	    {headers:{'Access-Control-Allow-Origin': '*'}},
            )
            .then((response) => {
                //console.log(response.data);})
                this.server = response.data.Server;
                if(this.server.Code==0)
                    {
                     userInfo = response.data.Data;
                     sessionStorage.userInfo=JSON.stringify(userInfo);
                     //userInfo=JSON.parse(sessionStorage.userInfo); 
                     //alert(userInfo.userName);
                    //  parent.document.location.replace("forum.html");
                     window.history.back();
                     //window.location.href = "bet.html";
                    }
                else    
                    {
                        showErr(this.server.Err,0);       
                    }
                //console.log(this.server);
                })
            },
            doLogin1: function() {
                console.log(this.userLogin);
                axios.defaults.withCredentials = false;
                //axios.get(aseUrl.dudoan + id, {withCredentials: true})
                axios.post( aseUrl.login , this.userLogin,
                {'headers':{'Content-Type': 'application/json'}},
            {headers:{'Access-Control-Allow-Origin': '*'}},
                )
                .then((response) => {
                    //console.log(response.data);})
                    this.server = response.data.Server;
                    if(this.server.Code==0)
                        {
                         userInfo = response.data.Data;
                         sessionStorage.userInfo=JSON.stringify(userInfo);
                         //userInfo=JSON.parse(sessionStorage.userInfo); 
                         //alert(userInfo.userName);
                         parent.document.location.replace("forum.html");
                        // window.history.back();
                         //window.location.href = "bet.html";
                        }
                    else    
                        {
                            showErr(this.server.Err,0);       
                        }
                    //console.log(this.server);
                    })
                },

        initData: function () {
            this.userLogin.userName ="lehavn";
            this.userLogin.password="12345678";
            this.userLogin.save=true;
            console.log(this.userLogin);
            axios.defaults.withCredentials = true;
            axios.get(aseUrl.init, {withCredentials: false})

                      .then(response => {
                        console.log(response.data.Data);
                      })
        }
    }

})
;