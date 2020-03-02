var bxh = new Vue({
    el: ".content",
    data: {
        historys:[],
        userInfo: userInfo,
    },
    created: function () {
        this.getHistory("lichsu.json");
      },
    methods: {
        getHistory: function (param) {

            this.$http.get(aseUrl.list + param)
              .then(response => {
                //this.list = response.data.Data;
                this.historys = response.data;
              })
          },
    },
})