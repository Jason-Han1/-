 var xdata = ['06.01', '06.02', '06.03', '06.04', '06.05', '06.06', '06.07', '06.08', '06.09', '06.10', '06.11'];
 var dataArr = [14, 13, 15, 11, 15, 19, 17, 14, 13, 17, 14];
 var option = {
     backgroundColor: '#323a5e',
     tooltip: { // 提示框组件
         trigger: 'axis',
         axisPointer: { // 坐标轴指示器，坐标轴触发有效
             type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
         },
         show: true,
         formatter: function(params) {
             return params[0].name + "<br>" + params[0].data + 'min';
         }
     },
     grid: {
         left: '2%',
         right: '4%',
         bottom: '14%',
         top: '16%',
         containLabel: true
     },
     xAxis: {
         type: 'category',
         data: xdata,
         axisLine: {
             lineStyle: {
                 color: 'rgba(255,255,255,.2)',
             },
         },
         axisTick: {
             show: false
         },
         axisLabel: {
             show: true,
             textStyle: {
                 color: "#fff",
                 fontSize: 14
             }
         },
     },

     yAxis: {
         type: 'value',
         axisTick: {
             show: false
         },
         axisLine: {
             show: false,
         },
          splitLine: {
             show: true,
             lineStyle: {
                 color: 'rgba(255,255,255,0.2)',
                 width: 3
             }
         },
         axisLabel: {
             show: true,
             textStyle: {
                 color: "#00E4FF",
                 fontSize: 14
             },
             formatter: '{value}min',
         },
     },
     "dataZoom": [{
         "show": true,
         "height": 12,
         "xAxisIndex": [
             0
         ],
         bottom: '10%',
         "start": 0,
         "end": 90,
         handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
         handleSize: '110%',
         handleStyle: {
             color: "rgba(255,255,255,0)",

         },
         textStyle: {
             color: "#fff"
         },
         borderColor: "#087890",
         fillerColor: "rgba(7,126,148,.8)",
     }, {
         "type": "inside",
         "show": true,
         "height": 15,
         "start": 1,
         "end": 35
     }],
     series: [{
         name: '1',
         type: 'bar',
         barWidth: '15%',
         itemStyle: {
             normal: {
                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                     offset: 0,
                     color: 'rgba(0,156,255,.8)'
                 }, {
                     offset: 1,
                     color: 'rgba(11,32,53,.3)'
                 }]),
                 // barBorderRadius: 12,
             },
         },
         data: dataArr
     }, ]
 };