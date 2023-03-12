// 参考大佬 https://www.makeapie.com/editor.html?c=xZvv5T7_R6
var xdata = ['BUD','Feb 20','Mar 20','Apr 20','May 20','Jan 20','Jul 20',
'Aug 20','Sep 20',];
var ydata = ['A产品 ','B产 ','C产 ','D产 ','E产','F产 ','G产','H产'];
var data1 = [[0,0,95],[7,0,86.7],[8,0,87.69]];
var data2 = [[0,1,92.50],[2,1,90.26],[3,1,90,02]];
var data3 = [[0,2,91],[1,2,92.01],[2,2,92.33],[3,2,92.24],[4,2,92.68],[5,2,91.24],
[7,2,92.53],8,2,93.11];
var data4 = [[0,3,90],[2,3,91.60],[3,3,90.68],[6,3,86.74],[8,3,90.87]]
var data5 =[[0, 4, 93],[7, 4, 93.13]];
var data6 =[[0, 5, 91],[2, 5, 92.19],[3, 5, 91.25],[4, 5, 92.59],
[5, 5, 92.29],[7, 5, 91.24],[8, 5, 92.08],];
var data7 = [[0, 6, 90],[4, 6, 90.81],[5, 6, 91.15],[6, 6, 90.52],[7, 6, 90.17],
[8, 6, 90.83],];
var data8 = [[0, 7, 85],[6, 7, 80.90],[7, 7, 84.26],[8, 7, 79.70]];


option = {
    tooltip: {
        position: 'top',
        formatter: function(params) {
            return option.yAxis.data[params.value[1]] + '<br />' + params.marker + option.xAxis.data[params.value[0]]  +'&nbsp&nbsp'+ params.value[2]+'%';
        }
    },
    // tooltip: {
    //     trigger: "axis",
    //     axisPointer:{
    //         lineStyle:{
    //             type:'dashed',
    //             width:2,
    //             color:'#4B941A'
    //         },
    //         animation: true
    //     },
        
    // },
    // legend: {
    //     left: 'center'
    // },
     grid: {
        containLabel: true,
        show: true,
        right: 35,
        left: 20,
        bottom: 20,
        top: 50
    },
    xAxis: {
        // name: "公开年份",
        nameLocation: "center",
        nameGap: 50,
        offset:5,
        type: 'category',
         axisLabel: {
             interval:0, //设置成 0 强制显示所有标签。
              // rotate:5 //刻度标签旋转的角度，在类目轴的类目标签显示不下的时候可以通过旋转防止标签之间重叠。
          },
        data: xdata,
        boundaryGap: false,
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        }
    },
    yAxis: {
        // name: "IPC分类号",
        // nameLocation: "center",
        nameGap: 35,
        type: 'category',
        data: ydata,
        axisLabel: {
            margin: 40
        },
        splitLine: {
            show:false,
            lineStyle: {
                type: "dashed"
            }
        },
        axisLine: {
            show: false
        }
    },
    series: [{
            name: "1.56 Corfu",
            type: "scatter",
            symbol:'rect',
            symbolSize: [55,30],
            label: {
                color: '#333',
                textStyle: {
                    fontSize: 16, //字体大小
                    textAlign:'center'
                },
                formatter: '{@[2]}',
                show: true
            },
            data:data1,
            // itemStyle:{
            //   normal:{
            //     color:'pink'
            //   },
            // },
            // data: [[0, 0, 444],[2, 0, 10],[3, 0, 1126],[4, 0, 1347],[5, 0, 1993],[6, 0, 3096],[7, 0, 5196],[8, 0, 1750],[9, 0, 222]],
            animationDelay: function (idx) {
              return idx * 5;
            },
          },
          {
            name: "G06Q",
            type: "scatter",
            symbol:'rect',
            symbolSize: [55,30],
            data:data2,
            label: {
                color: '#333',
                textStyle: {
                    fontSize: 16, //字体大小
                },
                formatter: '{@[2]}',
                show: true
            },
            // data: [[0, 1, 484],[1, 1, 0],[2, 1, 351],[3, 1, 126],[4, 1, 347],[5, 1, 993],[6, 1, 2096],[7, 1, 5196],[8, 1, 1750],[9, 1, 222]],
            animationDelay: function (idx) {
              return idx * 5;
            },
          },
          {
            name: "G10L",
            type: "scatter",
            symbol:'rect',
            symbolSize: [55,30],
            label: {
                color: '#333',
                textStyle: {
                    fontSize: 16, //字体大小
                },
                formatter: '{@[2]}',
                show: true
            },
            data:data3,
            // data: [[0, 2, 44],[1, 2, 69],[2, 2, 1951],[3, 2, 116],[4, 2, 147],[5, 2, 993],[6, 2, 3096],[7, 2, 596],[9, 2, 222]],
            animationDelay: function (idx) {
              return idx * 5;
            },
          },
          {
            name: "G06K",
            type: "scatter",
            symbol:'rect',
            symbolSize: [55,30],
            label: {
                color: '#333',
                textStyle: {
                    fontSize: 16, //字体大小
                },
                formatter: '{@[2]}',
                show: true
            },
            data:data4,
            // data: [[0, 3, 1444],[1, 3, 1699],[2, 3, 1951],[3, 3, 1126],[4, 3, 147],[5, 3, 1993],[6, 3, 396],[7, 3, 5196],[8, 3, 150],[9, 3, 2212]],
            animationDelay: function (idx) {
              return idx * 5;
            },
          },
          {
            name: "H04L",
            type: "scatter",
            symbol:'rect',
            symbolSize: [55,30],
            label: {
                color: '#333',
                textStyle: {
                    fontSize: 16, //字体大小
                },
                formatter: '{@[2]}',
                show: true
            },
            data:data5,
            // data: [[0, 4, 444],[1, 4, 699],[2, 4, 951],[3, 4, 0],[4, 4, 1347],[5, 4, 1993],[6, 4, 3096],[7, 4, 5196],[8, 4, 1750],[9, 4, 222]],
            animationDelay: function (idx) {
              return idx * 5;
            },
          },
          {
            name:"G16H",
            type: "scatter",
            label: {
                color: '#333',
                textStyle: {
                    fontSize: 16, //字体大小
                },
                formatter: '{@[2]}',
                show: true
            },
            symbol:'rect',
            symbolSize: [55,30],
            data:data6,
            // data: [[0, 5, 444],[1, 5, 699],[2, 5, 951],[3, 5, 1126],[4, 5, 1347],[5, 5, 1993],[6, 5, 3096],[7, 5, 5196],[8, 5, 1750],[9, 5, 222]],
            animationDelay: 30,
          },
          {
            name: "G05B",
            type: "scatter",
            symbol:'rect',
            symbolSize: [55,30],
            label: {
                color: '#333',
                textStyle: {
                    fontSize: 16, //字体大小
                },
                formatter: '{@[2]}',
                show: true
            },
            data:data7,
            // data: [[0, 6, 444],[1, 6, 699],[2, 6, 951],[3, 6, 1126],[4, 6, 1347],[5, 6, 1993],[6, 6, 3096],[7, 6, 5196],[8, 6, 1750],[9, 6, 222]],
            animationDelay: 30,
          },
          {
            name: "G08C",
            type: "scatter",
            symbol:'rect',
            symbolSize: [55,30],
            label: {
                color: '#333',
                textStyle: {
                    fontSize: 16, //字体大小
                },
                formatter: '{@[2]}',
                show: true
            },
            data:data8,
            // data: [[0, 7, 444],[1, 7, 699],[2, 7, 951],[3, 7, 1126],[4, 7, 1347],[5, 7, 1993],[6, 7, 3096],[7, 7, 5196],[8, 7, 1750],[9, 7, 222]],
            animationDelay: 30,
          },
          {
            name: "H04N",
            type: "scatter",
            symbol:'rect',
            symbolSize: [55,30],
            label: {
                color: '#333',
                textStyle: {
                    fontSize: 16, //字体大小
                },
                formatter: '{@[2]}',
                show: true
            },
             data: [[0, 8, 444],[1, 8, 699],[2, 8, 951],[3, 8, 1126],[4, 8, 1347],[5, 8, 1993],[6, 8, 3096],[7, 8, 5196],[8, 8, 1750],[9, 8, 222]],
            animationDelay: function (idx) {
              return idx * 5;
            },
          },
          {
            name: "H04M",
            type: "scatter",
            label: {
                color: '#333',
                textStyle: {
                    fontSize: 16, //字体大小
                },
                formatter: '{@[2]}',
                show: true
            },
            symbolSize: 30,
             data: [[0, 9, 444],[1, 9, 699],[2, 9, 951],[3, 9, 1126],[4, 9, 1347],[5, 9, 1993],[6, 9, 3096],[7, 9, 5196],[8, 9, 1750],[9, 9, 222]],
            animationDelay: function (idx) {
              return idx * 5;
            },
          }]
};