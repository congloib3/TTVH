
// var slideIndex = 2;
// showSlides(slideIndex);
var aseData = new Vue({
  el: '#aselist',

  data: {
    list: [],
    listHot: [],
    lista: [],
    listgt:[],
    listvh:[],
    hot:[],
    currentIndex: 0,
    current: 0,
    speed: 3000,
    timer: null
  },
  created: function () {
    this.getListHot("danhsachSoiKeo.json");
    this.getList("danhsach1.json");
    this.getListA("danhsachAnh.json");
    this.getListGT("danhsachGiaiTri.json");
    this.getListVH("danhsachVanHoa.json");
    this.getHot("hot.json");

  },
  mounted: function () {
    this.startRotation();
  },
  methods: {



    /*-----------------slide image--------------*/
    startRotation: function () {
      this.timer = setInterval(this.next, this.speed);
    },
    stopRotation: function () {
      clearTimeout(this.timer);
      this.timer = null;
    },
    next: function () {
      var current = this.current;
      var next = current + 1;

      if (next > this.listHot.length - 1) {
        next = 0;
      }
      this.current = next;
      this.setActive(this.current);
    },
    prev: function () {
      var current = this.current;
      var prev = current - 1;

      if (prev < 0) {
        prev = this.listHot.length -1;
      }

      this.current = prev;
      this.setActive(this.current);
    },
    isActive: function (slide) {
      return this.current === slide;
    },
    setActive: function (slide) {
      this.current = slide;
    },


    /*--------------------------*/
    getHot: function(param){
      this.$http.get(aseUrl.list+param)
      .then(response=>{
        var data;
          //this.list = response.data.Data;
          data = response.data;
          this.hot = data.splice(0, 2);
          for (i = 0; i < this.k; i++)
          hot[i].mota = fMoTa(hot[i].mota);
      })
    },
    getListVH: function (param) {

      this.$http.get(aseUrl.list + param)
        .then(response => {
          var data;
          //this.list = response.data.Data;
          data = response.data;
          this.listvh = data.splice(0, 3);
          for (i = 0; i < this.k; i++)
          listvh[i].mota = fMoTa(listvh[i].mota);

        })
    },
    getListGT: function (param) {

      this.$http.get(aseUrl.list + param)
        .then(response => {
          var data;
          //this.list = response.data.Data;
          data = response.data;
          this.listgt = data.splice(0, 3);
          for (i = 0; i < this.k; i++)
          listgt[i].mota = fMoTa(listgt[i].mota);

        })
    },
    getListA: function (param) {

      this.$http.get(aseUrl.list + param)
        .then(response => {
          var data;
          //this.list = response.data.Data;
          data = response.data;
          this.lista = data.splice(0, 3);
          for (i = 0; i < this.k; i++)
          lista[i].mota = fMoTa(lista[i].mota);

        })
    },
    getList: function (param) {

      this.$http.get(aseUrl.list + param)
        .then(response => {
          var data;
          //this.list = response.data.Data;
          data = response.data;
          this.list = data.splice(0, 3);
          for (i = 0; i < this.k; i++)
            list[i].mota = fMoTa(list[i].mota);

        })
    },
    getListHot: function (param) {

      this.$http.get(aseUrl.listHot + param)
        .then(response => {
          var data;
          //data = response.data.Data;
          data = response.data.splice(0, 2);
          this.listHot = data;

        })
    },

    formatDay(value) {
      if (value) {
        return moment(String(value)).format('DD-MM-YY')
      }
    },
    showValue(value) {
      if (value != '') {
        return ', ' + value;
      }
    },
    fMoTa(str) {

      var k = 0, x = 0, m = 120, n = 50, l = 0;
      l = str.length;
      k = str.indexOf(".", n);
      if ((k < m) && (k < l))
        k = str.indexOf(".", k + 1);

      if (k == -1 || k > m)
        k = str.indexOf(" ", m - 10);

      if (k == -1) k = l;
      return str.slice(0, k);
    },

  }

})
















