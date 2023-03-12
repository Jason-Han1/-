 option = {
         backgroundColor:"#112232",
     title: {
         text: '2019年当年水费回收率', // '标题',
         subtext: '截止：2019年08月15日，累计收往年欠费：6,435,306.59元', // '副标题',
     },
     tooltip: {
         trigger: 'axis',
         axisPointer: {
             type: 'shadow'
         }
     },
     legend: {
         type: 'scroll',
         orient: 'horizontal',
         x: 'center', //'center',
         y: 'bottom', // 'bottom',
         data: // ['图标数据']
             [{
                     name: '当年综合',
                     icon: 'circle'
                 },
                 {
                     name: '去年综合',
                     icon: 'circle'
                 },
                 {
                     name: '当年总表',
                     icon: 'circle'
                 },
                 {
                     name: '去年总表',
                     icon: 'circle'
                 },
                 {
                     name: '当年户表',
                     icon: 'circle'
                 },
                 {
                     name: '去年户表',
                     icon: 'circle'
                 },
                 {
                     name: '收往年欠费'
                 },
             ],
             textStyle: {
            color: "#fff"
        },
         selected: {
             '当年总表': false,
             '去年总表': false,
             '当年户表': false,
             '去年户表': false
         }
     },
     toolbox: {
         show: true,
         feature: {
             dataZoom: {
                 yAxisIndex: 'none'
             },
             //magicType: { type: ['line', 'bar'] },
             restore: {},
             saveAsImage: {}
         }
     },
     xAxis: {
         type: 'category', // 'category',
         boundaryGap: true, // false,
         data: [
             '1 月', '2 月', '3 月', '4 月', '5 月', '6 月', '7 月', '8 月'
         ]
     },
     yAxis: [{
         type: 'value',
         name: '',
         axisLabel: {
             formatter: function(s) {
                 return s + '%'
             }
         },
         max: 100,
         min: 60,
         splitLine: {
             lineStyle: {
                 type: 'solid'
             }
         }
     }, {
         type: 'value',
         name: '金额',
         axisLabel: {
             formatter: function(s) {
                 return (s / 10000) + '万'
             }
         },
         splitLine: {
             lineStyle: {
                 type: 'dotted'
             }
         }
     }],
     series: [{
         type: 'line',
         name: '当年综合',
         yAxisIndex: 0,
         lineStyle: {
             type: 'solid',
             width: 4,
         },
         data: [89.89, 90.92, 91.87, 93.21, 93.41, 94.42, 94.69, 86.83]
     }, {
         type: 'line',
         name: '去年综合',
         yAxisIndex: 0,
         lineStyle: {
             type: 'dotted',
             width: 4,
         },
         data: [88.23, 90.46, 91.72, 93.19, 93.53, 94.97, 94.69, 95.27]
     }, {
         type: 'line',
         name: '当年总表',
         yAxisIndex: 0,
         lineStyle: {
             type: 'solid',
             width: 2,
         },
         data: [95.80, 94.17, 94.84, 94.89, 95.54, 95.72, 96.22, 86.31]
     }, {
         type: 'line',
         name: '去年总表',
         yAxisIndex: 0,
         lineStyle: {
             type: 'dotted',
             width: 2,
         },
         data: [93.82, 93.26, 94.29, 95.00, 95.54, 96.51, 96.54, 96.54]
     }, {
         type: 'line',
         name: '当年户表',
         yAxisIndex: 0,
         lineStyle: {
             type: 'solid',
             width: 2,
         },
         data: [75.06, 81.59, 83.97, 88.42, 87.77, 90.85, 90.64, 88.26]
     }, {
         type: 'line',
         name: '去年户表',
         yAxisIndex: 0,
         lineStyle: {
             type: 'dotted',
             width: 2,
         },
         data: [74.05, 82.30, 84.55, 87.85, 87.93, 90.56, 89.52, 91.67]
     }, {
         type: 'bar',
         name: '收往年欠费',
         yAxisIndex: 1,
         data: [2589678.5600, 964501.5700, 852478.3700, 575804.5000, 437007.7500, 530239.9300, 376391.4300, 109204.4800]
     }]
 }