 var lineData = [110, 132, 91, 150, 70, 180, 120, 170, 110, 132, 91, 150, 70, 180, 120, 170, 110, 132, 91, 150, 70, 180, 120, 170, 110, 132, 91, 150, 70, 180, 120, 170];
 var countData = lineData.map(function(item) {
     item = ' '
 });
 var pointData = [{
         name: ['2015 ', '建设社会主义\n我爱中国话'],
         coord: [1, 132],
         label: {
             normal: {
                 position: 'top'
             }
         }
     }, {
         name: ['2016', '哇啊啊啊啊啊啊'],
         coord: [2, 91],
         label: {
             normal: {
                 position: 'bottom'
             }
         }
     },
     {
         name: ['2017', "xxxxxxxxx"],
         coord: [3, 150],

         label: {
             normal: {
                 position: 'top'
             }
         }
     }, {
         name: ['2018', '建设社会主义\n我爱中国话'],
         coord: [4, 70],

         label: {
             normal: {
                 position: 'bottom'
             }
         }
     },
 ];
 option = {

     color: ['#58606C'],
     legend: {
         show: false
     },
     tooltip: {
         show: false,
         trigger: 'axis'
     },
     grid: {
         left: '0%',
         right: '0%',
         bottom: '8%',
         top: '18%',
         containLabel: true
     },

     xAxis: {
         show: false,
         type: 'category',
         boundaryGap: false,
         data: countData,
         splitLine: { // 设置X轴的网格
             show: true,
             interval: 'auto'
         },
         axisLine: { // 设置X轴的颜色
             lineStyle: {
                 color: 'blue'
             }
         }
     },
     yAxis: {
         show: false,
         type: 'value',
         axisLine: { // 设置y轴的颜色
             lineStyle: {
                 color: 'blue'
             }
         },
         max: 200,
     },
     dataZoom: [{
             type: 'slider',
             show: false, // 隐藏底部滚动条

             start: 0,
             end: 23,
             handleSize: 0,
             // backgroundColor:"",
             dataBackground: {
                 lineStyle: {
                     //  type:"dotted",
                     color: {
                         type: 'radial',
                         width: 10,
                         x: 0.5,
                         y: 0.5,
                         r: 0.5,
                         colorStops: [{
                             offset: 0,

                             color: '#fff' // 0% 处的颜色
                         }, {
                             offset: 1,
                             color: '#fff' // 100% 处的颜色
                         }],
                         globalCoord: true // 缺省为 false
                     }
                 },
                 areaStyle: {
                     color: 'blue',
                     opacity: 0
                 },

             },
             fillerColor: '#1B1E25',
             borderColor: 'none',
             showDetail: false, // 显示文字
             left: 800, // 距离容器左边的距离
             right: 800,
             bottom: 40,
             textStyle: {
                 color: 'blue',
                 height: 2,
                 width: 10,
                 textBorderWidth: 10
             }
         },
         {
             type: 'inside',

             show: false,
             zoomOnMouseWheel: 'ctrl', // true,fase,shift,ctrl,alt .四种缩放形式
             // moveOnMouseMove:false,  // 鼠标不能平移滑动

         }
     ],
     series: [{
         name: '1',
         type: 'line',
         stack: '总量',
         symbol: 'none',
         smooth: true, // 点与点之间的幅度,false为直线
         label: { // 设置点数据的提示
             normal: {
                 show: true,
                 position: 'bottom'
             }
         },

         data: lineData,
         markPoint: {
             symbol: "circle",
             symbolSize: 15,
             label: {
                 normal: {
                     show: true,
                     position: 'bottom',
                     formatter(params) {
                         const a = `{blue|${params.data.name[0]}}` + '\n\n' + `{white|${params.data.name[1]}}`;

                         return a;
                     },
                     textStyle: {
                         color: '#000',
                         fontFamily: 'sans-serif',
                         fontSize: 12,
                         lineHeight: 16

                     },
                     rich: {
                         blue: {
                             color: '#4950BD',
                             fontSize: 22,
                             padding: [0, 0, 0, 0],
                             textAlign: 'center'
                         },
                         white: {
                             color: '#bac1c9',
                             fontSize: 16
                         }
                     }
                 }
             },
             data: pointData
         }

     }]
 };