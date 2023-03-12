 option = {
     backgroundColor: '#0a1256',
     //浮动框
     tooltip: {},
     //图例
     legend: {
         right: '12%',
         bottom: '4%',
         textStyle: {
             color: '#fff',
             fontSize: '13'
         },
         itemGap: 20,
         itemWidth: 10,
         itemHeight: 10,
         icon: 'circle',
         data: ['PM2.5', 'CO2', 'SO']
     },
     grid: {
         left: '8%',
         top: '15%',
         bottom: '14%',
         width: '86%',
     },
     visualMap: [{
         type: 'piecewise',
         show: false,
         pieces: [{
             gt: 0,
             lte: 60,
             color: '#69dbf7'
         }, {
             gte: 60,
             color: '#e5421b'
         }],
         seriesName: 'SO',
         seriesIndex: 2
     }, {
         type: 'piecewise',
         show: false,
         pieces: [{
             gt: 0,
             lte: 60,
             color: '#1be57a'
         }, {
             gte: 60,
             color: '#e5421b'
         }],
         seriesName: 'CO2',
         seriesIndex: 1
     }, {
         type: 'piecewise',
         show: false,
         pieces: [{
             gt: 0,
             lte: 60,
             color: '#feb01e'
         }, {
             gte: 60,
             color: '#e5421b'
         }],
         seriesName: 'PM2.5',
         seriesIndex: 0
     }, {
         type: 'piecewise',
         show: false,
         pieces: [{
             gt: 0,
             lte: 60,
             color: '#69dbf7'
         }, {
             gte: 60,
             color: '#e5421b'
         }],
         seriesName: 'SO',
         seriesIndex: 5
     }, {
         type: 'piecewise',
         show: false,
         pieces: [{
             gt: 0,
             lte: 60,
             color: '#1be57a'
         }, {
             gte: 60,
             color: '#e5421b'
         }],
         seriesName: 'CO2',
         seriesIndex: 4
     }, {
         type: 'piecewise',
         show: false,
         pieces: [{
             gt: 0,
             lte: 60,
             color: '#feb01e'
         }, {
             gte: 60,
             color: '#e5421b'
         }],
         seriesName: 'PM2.5',
         seriesIndex: 3
     }],
     //x轴
     xAxis: {
         axisLine: {
             lineStyle: {
                 color: '#132987'
             }
         },
         axisLabel: {
             textStyle: {
                 color: '#FFF',
                 fontSize: 12
             },
         },
         //刻度线
         axisTick: {
             show: false
         },
         //坐标轴显示值
         data: ["1时", "2时", "3时", "4时", "5时", "6时", "7时", "8时"]
     },
     //y轴
     yAxis: {
         min: 0,
         max: 100,
         axisLabel: { //  改变y轴字体颜色和大小
             //formatter: '{value} m³ ', //  给y轴添加单位
             textStyle: {
                 color: '#fff',
                 fontSize: 12,
             },
         },
         //坐标轴线
         axisLine: {
             show: false,
         },
         //刻度线
         axisTick: {
             show: false
         },
         //在grid区域中的分隔线
         splitLine: {
             show: true,
             lineStyle: {
                 color: '#132987',
             }
         },
     },

     //
     series: [{
         name: 'PM2.5',
         type: 'line',
         symbolSize: [0, 0],
         itemStyle: {
             color: '#feb01e'
         },
         data: [43, 50, 41, 18, 28, 25, 26, 40],
     }, {
         name: 'CO2',
         type: 'line',
         symbolSize: [0, 0],
         itemStyle: {
             color: '#1be57a'
         },
         data: [21, 30, 37, 39, 23, 37, 5, 50]
     }, {
         name: 'SO',
         type: 'line',
         symbolSize: [0, 0],
         itemStyle: {
             color: '#69dbf7'
         },
         data: [76, 58, 60, 38, 49, 59, 78, 60]
     }, { //水波纹点
         name: 'PM2.5',
         type: 'effectScatter',
         symbolSize: [5, 5],
         rippleEffect: {
             period: 1,
             scale: 4,
             brushType: 'fill'
         },
         itemStyle: {
             color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                 offset: 0,
                 color: '#feb01e'
             }, {
                 offset: 1,
                 color: 'rgba(254,176,30,.3)'
             }])
         },
         data: [43, 50, 41, 18, 28, 25, 26, 40]

     }, { //水波纹点
         name: 'CO2',
         type: 'effectScatter',
         symbolSize: [5, 5],
         rippleEffect: {
             period: 1,
             scale: 4,
             brushType: 'fill'
         },
         itemStyle: {
             color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                 offset: 0,
                 color: '#1be57a'
             }, {
                 offset: 1,
                 color: 'rgba(27,229,122,.3)'
             }])
         },
         data: [21, 30, 37, 39, 23, 37, 5, 50]

     }, { //水波纹点
         name: 'SO',
         type: 'effectScatter',
         symbolSize: [5, 5],
         rippleEffect: {
             period: 1,
             scale: 4,
             brushType: 'fill'
         },
         itemStyle: {
             color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                 offset: 0,
                 color: '#69dbf7'
             }, {
                 offset: 1,
                 color: '#aefbc3'
             }])
         },
         markLine: {
             symbol: "none",
             label: {
                 normal: {
                     show: false,
                 }
             },
             lineStyle: {
                 type: "solid",
                 color: 'rgba(210,56,56,.6)',
                 width: 2
             },
             data: [{
                 yAxis: 60
             }]
         },
         data: [76, 58, 60, 38, 49, 59, 78, 60]

     }]
 };