var vanhoa = new Vue({
    el: "#video",
  
    data: {
      list: []
    },
  
    created: function() {
      this.getList("danhsachVideo.json");
    },
  
    methods: {
      getList: function(param) {
        this.$http.get(aseUrl.list + param).then(response => {
          //this.list = response.data.Data;
          this.list = response.data;
          
          for (i = 0; i < this.k; i++) list[i].mota = fMoTa(list[i].mota);
        });
      },
    formatDay(value) {
        if (value) {
          return moment(String(value)).format("DD-MM-YY");
        }
      },
      showValue(value) {
        if (value != "") {
          return ", " + value;
        }
      },
      fMoTa(str) {
        var k = 0,
          x = 0,
          m = 120,
          n = 50,
          l = 0;
        l = str.length;
        k = str.indexOf(".", n);
        if (k < m && k < l) k = str.indexOf(".", k + 1);
  
        if (k == -1 || k > m) k = str.indexOf(" ", m - 10);
  
        if (k == -1) k = l;
        return str.slice(0, k);
      }
    }
  });
  