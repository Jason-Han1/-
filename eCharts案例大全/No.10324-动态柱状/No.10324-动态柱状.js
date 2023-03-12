   option = {
       baseOption: {
           timeline: {
               left: 40,
               right: 40,
               axisType: 'category',
               autoPlay: true,
               playInterval: 1000,
               data: ['肺1','肺2','肺3','肺4','肺5'],
               lineStyle: {
                   color: '#53fcfe'
               },
               label: {
                   color: '#000',
               },
               itemStyle: {
                   color: '#53fcfe'
               },
               controlStyle: {
                   color: '#53fcfe',
                   borderColor: '#53fcfe',
                   emphasis: {
                       color: '#53fcfe',
                       borderColor: '#53fcfe',
                   }
               },
               checkpointStyle: {
                   color: '#53fcfe',
                   borderColor: '#53fcfe'
               },
               emphasis: {
                   label: {
                       color: '#000',
                       fontWeight: 'bolder'
                   }
               }
           },
           tooltip: {},
           legend: {
               data: ['0-6岁', '7-17岁', '18-40岁', '41-65岁', '66岁以上'],
               itemGap: 5,
               itemWidth: 15,
               right: 60,
               textStyle: {
                   color: '#000'
               }
           },
           calculable: true,
           grid: {
               top: 35,
               bottom: 70,
               tooltip: {
                   trigger: 'axis',
                   axisPointer: {
                       type: 'shadow',
                       label: {
                           show: true,
                           formatter: function(params) {
                               return params.value.replace('\n', '');
                           }
                       }
                   }
               }
           },
           xAxis: [{
               type: 'category',
               axisLabel: {
                   'interval': 0
               },
               splitLine: {
                   show: false
               },
               axisLine: {
                   lineStyle: {
                       color: '#000'
                   }
               },
               axisLabel: {
                   color: '#000'
               }
           }],
           yAxis: [{
               type: 'value',
               name: '人次',
               splitLine: {
                   lineStyle: {
                       color: '#000'
                   }
               },
               axisLine: {
                   lineStyle: {
                       color: '#000'
                   }
               },
               axisLabel: {
                   color: '#000'
               }
           }],
           series: [{
                   name: '0-6岁',
                   type: 'bar',
                   itemStyle: {
                       color: '#fb6a0f'
                   }
               },
               {
                   name: '7-17岁',
                   type: 'bar',
                   itemStyle: {
                       color: '#c8f6c7'
                   }
               },
               {
                   name: '18-40岁',
                   type: 'bar',
                   itemStyle: {
                       color: '#82d0e4'
                   }
               },
               {
                   name: '41-65岁',
                   type: 'bar',
                   itemStyle: {
                       color: '#2ecb70'
                   }
               },
               {
                   name: '66岁以上',
                   type: 'bar',
                   itemStyle: {
                       color: '#f8cb17'
                   }
               }
           ]
       },
       options: [{
           xAxis: {
               data: ['肺1']
           },
           series: [{
                   data: [520]
               },
               {
                   data: [1210]
               },
               {
                   data: [20]
               },
               {
                   data: [220]
               },
               {
                   data: [320]
               }
           ]
       }, {
           xAxis: {
               data: ['肺2']
           },
           series: [{
                   data: [520]
               },
               {
                   data: [110]
               },
               {
                   data: [20]
               },
               {
                   data: [220]
               },
               {
                   data: [320]
               }
           ]
       }, {
           xAxis: {
               data: ['肺3']
           },
           series: [{
                   data: [20]
               },
               {
                   data: [10]
               },
               {
                   data: [0]
               },
               {
                   data: [20]
               },
               {
                   data: [30]
               }
           ]
       }, {
           xAxis: {
               data: ['肺4']
           },
           series: [{
                   data: [420]
               },
               {
                   data: [1010]
               },
               {
                   data: [200]
               },
               {
                   data: [220]
               },
               {
                   data: [20]
               }
           ]
       }, {
           xAxis: {
               data: ['肺5']
           },
           series: [{
                   data: [520]
               },
               {
                   data: [510]
               },
               {
                   data: [200]
               },
               {
                   data: [20]
               },
               {
                   data: [380]
               }
           ]
       }],
   };