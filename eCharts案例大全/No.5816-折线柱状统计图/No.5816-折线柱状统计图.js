 var option = {
     backgroundColor: 'black',
     color: ['#2adecf'],
     textStyle: {
         color: 'rgb(222,222,222)',
     },
     tooltip: {
         trigger: 'axis',
         axisPointer: {
             type: 'shadow'
         }
     },
     legend: {
         data: ['报警次数', '累计百分比'],
         textStyle: {
             color: '#FFFFFF'
         }
     },
     grid: {
         left: '3%',
         right: '3%',
         bottom: '3%',
         top: '15%',
         containLabel: true
     },
     xAxis: [{
         data: [
             "202001",
             "202002",
             "202003",
             "202004",
             "202005",
             "202006",
             "202007",
             "202008",
             "202009",
             "202010"
         ],
         axisLine: {
             show: true
         },
         splitLine: {
             show: false
         },
         axisTick: {
             show: false
         },
         axisLabel: {
             interval: 0,
             rotate: 0
         }
     }],
     yAxis: [{
             type: 'value',
             name: '报警次数',
             axisLine: {
                 show: false
             },
             axisTick: {
                 show: false
             },
             splitLine: {
                 show: false
             },
             axisLabel: {}
         },
         {
             type: 'value',
             name: '累计百分比(%)  ',
             axisLine: {
                 show: false
             },
             axisTick: {
                 show: false
             },
             splitLine: {
                 show: false
             },
             axisLabel: {}
         }
     ],
     series: [{
         name: '报警次数',
         type: 'bar',
         barWidth: '20%',
         itemStyle: {
             normal: {
                 barBorderRadius: [30, 30, 0, 0],
                 color: new echarts.graphic.LinearGradient(
                     0, 1, 0, 0, [{
                         offset: 0,
                         color: '#719aff'
                     }, {
                         offset: 1,
                         color: '#51c3ff'
                     }]
                 )
             }
         },
         data: [
             140,
             110,
             100,
             90,
             80,
             70,
             50,
             40,
             30,
             20
         ]
     }, {
         name: '累计百分比',
         type: 'line',
         yAxisIndex: 1,
         itemStyle: {
             normal: {
                 color: '#ffe898',
                 barBorderRadius: [30, 30, 0, 0],
                 lineStyle: {
                     color: '#ffe898'
                 },
             }
         },
         data: [
             10,
             11,
             10,
             12,
             13,
             15,
             16,
             10,
             20,
             10
         ],
         markLine: {
             symbol: 'none',
             itemStyle: {
                 normal: {
                     lineStyle: {
                         type: 'dashed',
                         color: 'red'
                     },
                     label: {
                         show: true,
                         position: 'left'
                     }
                 }
             },
             large: true,
             effect: {
                 show: false,
                 loop: true,
                 period: 0,
                 scaleSize: 2,
                 color: null,
                 shadowColor: null,
                 shadowBlur: null
             },
             data: [
                 [{
                         name: '',
                         xAxis: '',
                         yAxis: ''
                     },
                     {
                         name: '',
                         xAxis: '',
                         yAxis: ''
                     }
                 ]
             ]
         }
     }]
 }


 var option = {
     backgroundColor: '#fff', //背景颜色
     color: ['#2adecf'],
     textStyle: {
         color: '#999' //侧边字体颜色
     },
     tooltip: {
         trigger: 'item',
         backgroundColor: `rgba(255, 255, 255, 0.9)`,
         textStyle: {
             color: '#000000',
             fontSize: 14
         }
         // trigger: 'axis'
         // axisPointer: {
         //     type: 'shadow'
         // }
     },
     legend: {
         data: ['盘点数据总量', '稽核通过率'],
         textStyle: {
             color: '#999', //标题：对应图标字体颜色
             fontSize: '16'
         },
         x: 'center',
         y: 'bottom'
     },
     grid: {
         left: '6%',
         right: '6%',
         bottom: '12%',
         top: '15%',
         containLabel: true
     }, //折线柱状图位置
     xAxis: [{
         data: [
             "1444",
             "2444",
             "3444",
             "4444",
             "5444",
             "6444",
             "7444",
             "8444",
             "9444",
             "10444"
         ], //横坐标数据
         axisLine: {
             show: true
         },
         splitLine: {
             show: false
         },
         axisTick: {
             show: false
         },
         axisLabel: {
             interval: 0,
             rotate: 0
         }
     }],
     yAxis: [{
             type: 'value',
             name: '盘点数据总量',
             axisLabel: {},
             splitLine: {
                 lineStyle: {
                     // type: 'dashed'
                     color: '#ededed'
                 }
             },
             axisLine: {
                 show: false
             },
             axisTick: {
                 show: false
             }
         },
         {
             type: 'value',
             name: '稽核通过率(%)  ',
             axisLine: {
                 show: false
             },
             axisTick: {
                 show: false
             },
             splitLine: {
                 show: false
             },
             axisLabel: {}
         }
     ],
     series: [{
             name: '盘点数据总量',
             type: 'bar',
             barWidth: '50%',
             itemStyle: {
                 normal: {
                     // barBorderRadius: [30, 30, 0, 0],
                     color: '#61a5e8' //柱状图颜色
                 }
             },
             data: [
                 140,
                 110,
                 100,
                 90,
                 80,
                 70,
                 50,
                 40,
                 30,
                 20
             ] //数据总量数据
         },
         {
             name: '稽核通过率',
             type: 'line',
             yAxisIndex: 1,
             symbol: 'circle', //折线图，节点形状
             symbolSize: 15, //折线图，节点圆圈大小
             itemStyle: {
                 normal: {
                     color: '#7ecf51', //折线图点的颜色
                     barBorderRadius: [30, 30, 0, 0],
                     lineStyle: {
                         color: '#7ecf51' //折线颜色
                     }
                 }
             },
             label: {
                 show: true,
                 position: 'top',
                 formatter: '{c} %',
                 color: '#333',
                 fontSize: '14'
             },
             data: [
                 10,
                 11,
                 10,
                 12,
                 13,
                 15,
                 16,
                 10,
                 20,
                 10
             ], //稽核通过率数据
             markLine: {
                 symbol: 'none',
                 itemStyle: {
                     normal: {
                         lineStyle: {
                             type: 'dashed',
                             color: 'red'
                         },
                         label: {
                             show: true,
                             position: 'left'
                         }
                     }
                 },
                 large: true,
                 effect: {
                     show: false,
                     loop: true,
                     period: 0,
                     scaleSize: 2,
                     color: null,
                     shadowColor: null,
                     shadowBlur: null
                 },
                 data: [
                     [{
                             name: '',
                             xAxis: '',
                             yAxis: ''
                         },
                         {
                             name: '',
                             xAxis: '',
                             yAxis: ''
                         }
                     ]
                 ]
             }
         }
     ]
 }