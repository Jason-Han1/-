 var xdata = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'];

 var dataArr = [300, 250, 290, 203, 255, 188, 156, 190, 230, 301, 280, 200, 330, 270, 203, 255, 188, 156, 283, 371, 293, 228, 239, 293, 203, 320, 395, 206, 280, 290];

 var option = {
     backgroundColor: '#354061',
     title: {
        text: "交易总量统计",
        x: "2%",
        y: "4%",
        textStyle: {
            color: '#fff',
            fontSize: '22'
        },
    },
     tooltip: {
         trigger: 'axis',
         axisPointer: {
             type: 'line',
             lineStyle: {
                 color: '#E8E093',
                 shadowColor: '#1E6262',
                 shadowBlur: 30,
                 shadowOffsetX: 10,
             }
         },
         splitLine: {
             show: true,
             lineStyle: {
                 type: 'dashed',
                 color: '#E8E093',
             }
         },
         show: true,
         formatter: function(params) {
             return params[0].name + '日' + "<br>" + params[0].data + '份';
         }
     },
     grid: {
         left: '2%',
         right: '4%',
         bottom: '10%',
         top: '14%',
         containLabel: true
     },
     xAxis: {
         type: 'category',
         data: xdata,
         axisTick: {
             show: false
         },
         axisLabel: {
             show: true,
             textStyle: {
                 color: "##DFDFDF",
                 fontSize: 14
             }
         },
         axisLine: {
             show: false
         },
     },

     yAxis: {
         type: 'value',
         axisTick: {
             show: false
         },
         axisLine: {
             show: false
         },
         axisLabel: {
             show: true,
             textStyle: {
                 color: "#DFDFDF",
                 fontSize: 14
             },
             formatter: '{value}',
         },
         splitLine: {
             show: true,
             lineStyle: {
                 color: 'rgba(255,255,255,0.2)',
             }
         },
     },
     series: [{
         name: '1',
         type: 'bar',
         barWidth: '60%',
         markLine: {
             silent: true,
             symblo: "none",
             label: {
                 position: "end",
             },
             data: [{
                 name: "目标值",
                 yAxis: 250,
                 lineStyle: {
                     color: "#E8E093",
                 },
                 label:{
                     position:"end",
                     formatter:"{b}\n {c}"
                 }
             }]
         },
         itemStyle: {
             normal: {
                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                     offset: 0,
                     color: 'rgba(78,197,163,1)'
                 }, {
                     offset: 1,
                     color: 'rgba(89,170,147,0.1)'
                 }]),
                 barBorderRadius: 20,
             },
         },
         data: dataArr
     }, ]
 };