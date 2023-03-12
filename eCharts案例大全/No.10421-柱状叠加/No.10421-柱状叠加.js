 var option = {
     backgroundColor: '#323a5e',
     tooltip: {
         trigger: 'axis',
         axisPointer: { // 坐标轴指示器，坐标轴触发有效
             type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
         }
     },
     grid: {
         left: '2%',
         right: '4%',
         bottom: '14%',
         top: '16%',
         containLabel: true
     },
     legend: {
         data: ['1', '2', '3'],
         right: 10,
         top: 12,
         textStyle: {
             color: "#fff"
         },
         itemWidth: 12,
         itemHeight: 10,
         // itemGap: 35
     },
     xAxis: [{
         type: 'category',
         data: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
         axisLine: {
             lineStyle: {
                 color: 'white'

             }
         },
         axisLabel: {
             // interval: 0,
             // rotate: 40,
             textStyle: {
                 fontFamily: 'Microsoft YaHei'
             }
         },
     }, {
         //  type: 'category',
         data: [...Array(100).keys()],
         axisLine: {
             lineStyle: {
                 color: 'white'

             }
         },
         offset: 20,
         position: 'bottom',
         axisLabel: {
             // interval: 0,
             // rotate: 40,
             textStyle: {
                 fontFamily: 'Microsoft YaHei'
             }
         },
     }],

     yAxis: [{
         type: 'value',
         axisLine: {
             show: false,
             lineStyle: {
                 color: 'white'
             }
         },
         splitLine: {
             show: true,
             lineStyle: {
                 color: 'rgba(255,255,255,0.3)'
             }
         },
         axisLabel: {}
     }, {
         type: 'value',
         axisLine: {
             show: false,
             lineStyle: {
                 color: 'white'
             }
         },
         splitLine: {
             show: true,
             lineStyle: {
                 color: 'rgba(255,255,255,0.3)'
             }
         },
         axisLabel: {}
     }],
     graphic: {
         elements: [{
             type: 'rect',
             shape: {
                 x: 10,
                 y: 0,
                 width: 8,
                 height: 40,
             },
             style: {
                 fill: '#a40000',
             },
         }]
     },
     series: [{
             name: '2',
             type: 'pictorialBar',
             stack: 'type2',
             barGap: '-100%',
             barWidth: '25%',
             xAxisIndex: 1,
             yAxisIndex: 1,
             itemStyle: {
                 normal: {
                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                         offset: 0,
                         color: '#8bd46e'
                     }, {
                         offset: 1,
                         color: '#09bcb7'
                     }]),
                     barBorderRadius: 11,
                 }

             },
             data: [...Array(100).keys()].map((v) => {
                 return Math.random() * 1000
             })
         },
         {
             name: '1',
             type: 'bar',
             stack: 'type1',
             barWidth: '15%',
             xAxisIndex: 0,
             yAxisIndex: 0,
             itemStyle: {
                 normal: {
                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                         offset: 0,
                         color: '#fccb05'
                     }, {
                         offset: 1,
                         color: '#f5804d'
                     }]),
                     barBorderRadius: 12,
                 },
             },
             data: [1400, 400, 1300, 300, 300, 400, 400, 2400, 300]
         }
     ]
 };