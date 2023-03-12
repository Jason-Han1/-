  export default {
    name: "FirstEcharts",
    methods: {
      drawTable() {
        let myChart = this.$echarts.init(document.getElementById("echarts"))
        const option = {
          dataset: {
            source: [
              [121, 'XX', 442, 43.11],
              [663, 'ZZ', 311, 91.14],
              [913, 'ZZ', 312, 92.12]
            ]
          },
          yAxis: {},
          xAxis: {},
          tooltip: {},
          // 这里有多个系列，也是构成一个数组。
          series: [
            {type: 'bar', encode: {x: 1, y: 0}},
            {type: 'bar', encode: {x: 1, y: 2}},
            {type: 'scatter', encode: {x: 1, y: 3}}
          ]
        }
        myChart.setOption(option)
      }
    },
    mounted() {
      this.drawTable()
    }
  }


/*
    Vue中使用echart，使用上述代码可dataset里面的数据无法显示，
    页面运行之后只是单纯的图表，上面没有数据，只有纵坐标
    另外在main.js中已经导入了全部模块const echarts = require('echarts');
    
*/