var bxh = new Vue({
    el: ".content",
    data: {
        users: [],
        userInfo: userInfo,
        currentSort:'name',
        currentSortDir:'asc',
        pageSize:10,
        currentPage:1
    },
    created: function () {
      this.getRank("bxh.json");
    },
    methods: {
      getRank: function (param) {

        this.$http.get(aseUrl.list + param)
          .then(response => {
            //this.list = response.data.Data;
            this.users = response.data;
          })
      },

        // sort arrayy
        // even: function (arr) {
        //     return arr.slice().sort(function (a, b) {
        //         return b.point - a.point;
        //     });
        // },

        // format number-------------------------------------------------------------------------------------------
        formatPoint(value) {
            let val = (value / 1).toFixed().replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        },

        // pagination-------------------------------------------------------------------------------------------
        sort:function(s) {
            //if s == current sort, reverse
            if(s === this.currentSort) {
              this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
            }
            this.currentSort = s;
          },
          nextPage:function() {
            if((this.currentPage*this.pageSize) < this.users.length) this.currentPage++;
          },
          prevPage:function() {
            if(this.currentPage > 1) this.currentPage--;
          }

    },
    computed:{
        sortedPoint:function() {
          return this.users.sort((a,b) => {
            return b.point - a.point;
          }).filter((row, index) => {
            let start = (this.currentPage-1)*this.pageSize;
            let end = this.currentPage*this.pageSize;
            if(index >= start && index < end) return true;
          });
        }
      },
    
})