option = {
    tooltip: {
        position: 'top',
        formatter: function(params) {
            return option.yAxis.data[params.value[1]] + '<br />' + params.marker + option.xAxis.data[params.value[0]] + '年:' + params.value[2];
        }
    },
    legend: {
        left: 'center'
    },
    title: [],
    xAxis: {
        name: "公开年份",
        nameLocation: "center",
        nameGap: 30,
        type: 'category',
        data: ["2012","2013","2014","2015","2016","2017","2018","2019","2020","2021"],
        boundaryGap: false,
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        }
    },
    yAxis: {
        name: "IPC分类号",
        nameLocation: "center",
        nameGap: 50,
        type: 'category',
        data: ["G06F","G06Q","G10L","G06K","H04L","G16H","G05B","G08C","H04N","H04M"],
        axisLabel: {
            margin: 20
        },
        splitLine: {
            show:true,
            lineStyle: {
                type: "dashed"
            }
        },
        axisLine: {
            show: false
        }
    },
    series: [{
            name: "G06F",
            type: "scatter",
            symbolSize: function (val) {
              return val[2] % 40;
            },
            data: [[0, 0, 444],[1, 0, 699],[2, 0, 951],[3, 0, 1126],[4, 0, 1347],[5, 0, 1993],[6, 0, 3096],[7, 0, 5196],[8, 0, 1750],[9, 0, 222]],
            animationDelay: function (idx) {
              return idx * 5;
            },
          },
          {
            name: "G06Q",
            type: "scatter",
            symbolSize: function (val) {
              return val[2] % 40;
            },
             data: [[0, 1, 484],[1, 1, 239],[2, 1, 351],[3, 1, 126],[4, 1, 347],[5, 1, 993],[6, 1, 2096],[7, 1, 5196],[8, 1, 1750],[9, 1, 222]],
            animationDelay: function (idx) {
              return idx * 5;
            },
          },
          {
            name: "G10L",
            type: "scatter",
            symbolSize: function (val) {
              return val[2] % 40;
            },
             data: [[0, 2, 44],[1, 2, 69],[2, 2, 1951],[3, 2, 116],[4, 2, 147],[5, 2, 993],[6, 2, 3096],[7, 2, 596],[8, 0, 1750],[9, 2, 222]],
            animationDelay: function (idx) {
              return idx * 5;
            },
          },
          {
            name: "G06K",
            type: "scatter",
            symbolSize: function (val) {
              return val[2] % 40;
            },
             data: [[0, 3, 1444],[1, 3, 1699],[2, 3, 1951],[3, 3, 1126],[4, 3, 147],[5, 3, 1993],[6, 3, 396],[7, 3, 5196],[8, 3, 150],[9, 3, 2212]],
            animationDelay: function (idx) {
              return idx * 5;
            },
          },
          {
            name: "H04L",
            type: "scatter",
            symbolSize: function (val) {
              return val[2] % 40;
            },
             data: [[0, 4, 444],[1, 4, 699],[2, 4, 951],[3, 4, 1126],[4, 4, 1347],[5, 4, 1993],[6, 4, 3096],[7, 4, 5196],[8, 4, 1750],[9, 4, 222]],
            animationDelay: function (idx) {
              return idx * 5;
            },
          },
          {
            name:"G16H",
            type: "scatter",
            symbolSize: function (val) {
              return val[2] % 40;
            },
             data: [[0, 5, 444],[1, 5, 699],[2, 5, 951],[3, 5, 1126],[4, 5, 1347],[5, 5, 1993],[6, 5, 3096],[7, 5, 5196],[8, 5, 1750],[9, 5, 222]],
            animationDelay: function (idx) {
              return idx * 5;
            },
          },
          {
            name: "G05B",
            type: "scatter",
            symbolSize: function (val) {
              return val[2] % 40;
            },
             data: [[0, 6, 444],[1, 6, 699],[2, 6, 951],[3, 6, 1126],[4, 6, 1347],[5, 6, 1993],[6, 6, 3096],[7, 6, 5196],[8, 6, 1750],[9, 6, 222]],
            animationDelay: function (idx) {
              return idx * 5;
            },
          },
          {
            name: "G08C",
            type: "scatter",
            symbolSize: function (val) {
              return val[2] % 40;
            },
             data: [[0, 7, 444],[1, 7, 699],[2, 7, 951],[3, 7, 1126],[4, 7, 1347],[5, 7, 1993],[6, 7, 3096],[7, 7, 5196],[8, 7, 1750],[9, 7, 222]],
            animationDelay: function (idx) {
              return idx * 5;
            },
          },
          {
            name: "H04N",
            type: "scatter",
            symbolSize: function (val) {
              return val[2] % 40;
            },
             data: [[0, 8, 444],[1, 8, 699],[2, 8, 951],[3, 8, 1126],[4, 8, 1347],[5, 8, 1993],[6, 8, 3096],[7, 8, 5196],[8, 8, 1750],[9, 8, 222]],
            animationDelay: function (idx) {
              return idx * 5;
            },
          },
          {
            name: "H04M",
            type: "scatter",
            symbolSize: function (val) {
              return val[2] % 40;
            },
             data: [[0, 9, 444],[1, 9, 699],[2, 9, 951],[3, 9, 1126],[4, 9, 1347],[5, 9, 1993],[6, 9, 3096],[7, 9, 5196],[8, 9, 1750],[9, 9, 222]],
            animationDelay: function (idx) {
              return idx * 5;
            },
          }]
};