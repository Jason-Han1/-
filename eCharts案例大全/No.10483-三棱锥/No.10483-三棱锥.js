 option = {
     backgroundColor: "#111c4e",

     grid: {
         left: '3%',
         right: '3%',
         bottom: '45%',
         top: '40%',
         containLabel: true
     },
     yAxis: [{
         type: 'value',
         axisLabel: {
             show: false,

         },
         splitLine: {
             show: false
         },
         axisLine: {
             show: false
         },
         axisTick: {
             show: false
         }
     }],
     xAxis: [{
         type: 'category',
         axisTick: {
             show: false
         },
         data: ['SQL 注入', '网页篡改', 'C&C攻击', 'DNS 劫持', 'CGI 攻击'],
         axisLabel: {
             margin: 17,
             color: '#828491',
             fontSize: 36
         },
         axisTick: {
             show: false
         },
         splitLine: {
             show: false
         },
         axisLine: {
             show: false
         },
         splitArea: {
             show: true,
             areaStyle: {
                 color: ["rgba(250,250,250,0.05)", "rgba(250,250,250,0.0)"],

             }
         }
     }],
     series: [{
             type: 'pictorialBar',
             symbol: 'path://M35,0L35,70L0,70z M35,0L35,70L70,70z',
             data: [29318, 27159, 23259, 20116, 18682],

             barWidth: '50%',
             // barGap: 1, //柱子之间间距
             symbolOffset: [0, -15],

             z: 99,

             label: {
                 show: true,
                 position: 'top',
                 color: '#fff',
                 fontSize: 36,
                 formatter: function(params) {
                     return parseFloat(params.value).toLocaleString();
                     console.log(params.value);

                 }
             },
             itemStyle: {
                 normal: {
                     color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                             offset: 0,
                             color: 'rgba(10,92,176,1)'
                         },
                         {
                             offset: 0.5,
                             color: 'rgba(10,92,176,1)'
                         },
                         {
                             offset: 0.5,
                             color: 'rgba(51,189,216,1)'
                         },
                         {
                             offset: 1,
                             color: 'rgba(51,189,216,1)'
                         }
                     ]),
                     opacity: 1,
                 }
             }
         },
         {
             name: '',
             type: 'pictorialBar',
             symbol: 'diamond',
             barWidth: '50%',
             symbolSize: ['100%', 30],

             z: 99,
             itemStyle: {
                 normal: {
                     color: new echarts.graphic.LinearGradient(0, 1, 1, 1, [{
                             offset: 0,
                             color: 'rgba(10,92,176,1)'
                         },
                         {
                             offset: 0.5,
                             color: 'rgba(10,92,176,1)'
                         },

                         {
                             offset: 0.5,
                             color: 'rgba(51,189,216,1)'
                         },
                         {
                             offset: 1,
                             color: 'rgba(51,189,216,1)'
                         }
                     ]),
                     opacity: 1,
                 }
             },
             data: [29318, 27159, 23259, 20116, 18682],
         }
     ]
 };