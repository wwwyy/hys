var vm = new Vue({
  el: "#app",
  data: {
    datas: []
  },
  methods: {
    initial(){
      this.datas = [];
      this.datas = 
      [
        {
          year: 2017,
          brief: [
            {tag: "打電動學攝影"}
          ]
        },
        {
          year: 2016,
          brief: [
            {tag: "打雜掃地擦窗戶"},
            {tag: "打醬油路人甲乙丙丁"}
          ]
        },  
        {
          year: 2015,
          brief: [
            {tag: "做點心大雜燴"}
          ]
        },  
        {
          year: 2014,
          brief: [
            {tag: "逛街吃美食大血拼"}
          ]
        },   
      ]
    },
  }
});