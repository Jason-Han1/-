 var legendData = ["北京", "上海", "广州", "深圳", "香港"]
 var option = {
     backgroundColor: '#000',
     tooltip: {
         trigger: 'axis',
     },
     color: ["#5BF2FF", "#07B0FF", "#FEF848", "#FF4B33", "#1934FF"],
     legend: {
         top: "5%",
         data: legendData,
         itemGap: 20,
         itemWidth: 10,
         itemHeight: 10,
         textStyle: {
             color: "#ffffff",
             fontSize: 14
         },
     },
     grid: {
         left: '10%',
         right: '10%',
         bottom: '10%',
         top: "18%",
         containLabel: true
     },
     xAxis: [{
         type: "category",
         axisTick: {
             show: false
         },
         axisLabel: {
             color: "#ffffff",
             fontSize: 16
         },
         axisLine: {
             show: true,
             lineStyle: {
                 color: '#353638'
             }
         },
         data: [2015, 2016, 2017, 2018, 2019],
     }],
     yAxis: [{
         type: "value",
         name: "",
         interval: 5,
         axisTick: {
             show: false
         },
         splitLine: { //网格线
             "show": false
         },
         axisLabel: {
             color: "#ffffff",
             fontSize: 16
         },
         axisLine: {
             show: false,
             lineStyle: {
                 show: false,
                 color: '#ffffff'
             }
         },
     }],
     series: [{
         data: [5, 2, 5, 7, 5],
         name: "北京",
         stack: "one",
         barWidth: 30, //柱图宽度
         type: "bar",
         itemStyle: {
             color: 'rgba(91,242,255, 0.2)',
             borderWidth: 2,
             borderColor: new echarts.graphic.LinearGradient(
                 0, 0, 0, 1,
                 [{
                         offset: 0,
                         color: '#5BF2FF'
                     },
                     {
                         offset: 1,
                         color: '#5BF2FF'
                     },
                 ]
             ),
         },
         label: {
             show: true
         }
     }, {
         data: [2, 5, 7, 5, 6],
         name: "上海",
         stack: "one",
         type: "bar",
         barWidth: 30, //柱图宽度
         itemStyle: {
             color: 'rgba(7,176,255, 0.2)',
             borderWidth: 2,
             borderColor: new echarts.graphic.LinearGradient(
                 0, 0, 0, 1,
                 [{
                         offset: 0,
                         color: '#07B0FF'
                     },
                     {
                         offset: 1,
                         color: '#07B0FF'
                     },
                 ]
             ),
         },
         label: {
             show: true
         }
     }, {
         data: [5, 7, 5, 6, 5],
         name: "广州",
         stack: "one",
         type: "bar",
         barWidth: 30, //柱图宽度
         itemStyle: {
             color: 'rgba(254,248,72, 0.2)',
             borderWidth: 2,
             borderColor: new echarts.graphic.LinearGradient(
                 0, 0, 0, 1,
                 [{
                         offset: 0,
                         color: '#FEF848'
                     },
                     {
                         offset: 1,
                         color: '#FEF848'
                     },
                 ]
             ),
         },
         label: {
             show: true
         }
     }, {
         data: [7, 5, 6, 5, 2],
         name: "深圳",
         stack: "one",
         type: "bar",
         barWidth: 30, //柱图宽度
         itemStyle: {
             color: 'rgba(255,75,51, 0.2)',
             borderWidth: 2,
             borderColor: new echarts.graphic.LinearGradient(
                 0, 0, 0, 1,
                 [{
                         offset: 0,
                         color: '#FF4B33'
                     },
                     {
                         offset: 1,
                         color: '#FF4B33'
                     },
                 ]
             ),
         },
         label: {
             show: true
         }
     }, {
         data: [5, 6, 5, 2, 5],
         name: "香港",
         stack: "one",
         type: "bar",
         barWidth: 30, //柱图宽度
         itemStyle: {
             color: 'rgba(25,52,255, 0.2)',
             borderWidth: 2,
             borderColor: new echarts.graphic.LinearGradient(
                 0, 0, 0, 1,
                 [{
                         offset: 0,
                         color: '#1934FF'
                     },
                     {
                         offset: 1,
                         color: '#1934FF'
                     },
                 ]
             ),
         },
         label: {
             show: true
         }
     }]
 };