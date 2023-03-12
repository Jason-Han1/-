 var option = {
     grid: {
         top: '5.9%',
         left: '19.55%',
         bottom: 0
     },
     xAxis: [{
         show: false,
     }],
     yAxis: [{
             axisTick: 'none',
             axisLine: 'none',
             offset: '10',
             axisLabel: {
                 margin: 27.5,
                 textStyle: {
                     color: '#9E9E9E',
                     fontSize: '14',
                 }
             },
             data: ['碑林区', '雁塔区', '未央区', '莲湖区', '新城区', '灞桥区', '长安区', '临潼区']
         },
         {
             axisTick: 'none',
             axisLine: 'none',
             type: 'category',
             axisLabel: {
                 margin: -31,
                 formatter: function(value) {
                     if (value.includes('90%')) {
                         return '{a|' + value + '}'
                     } else if (value === '0%') {
                         return '{c|' + value + '}'
                     }
                     return '{b|' + value + '}'
                 },
                 rich: {
                     a: {
                         color: '#46F6AD'
                     },
                     b: {
                         color: '#FF2F2F'
                     },
                     c: {
                         color: '#999999'
                     }
                 },
                 textStyle: {
                     fontSize: '16',
                 }
             },
             data: ['90% ↑', '25%  ↑', '40% ↓', '0%', '30% ↓', '50% ↓', '60% ↓', '20%  ↓'],
         },
     ], 
     series: [{
         name: '', // blue bar
         type: 'bar',
         barWidth: 15,
         itemStyle: {
             normal: {
                 color: new echarts.graphic.LinearGradient(
                     0, 0, 1, 0,
                     [{
                             offset: 0,
                             color: '#FFA866'
                         },
                         {
                             offset: 1,
                             color: '#FF5959'
                         }, //柱图渐变色
                     ]
                 )
             },
         },
         data: [56, 30, 45, 36, 27, 40, 30, 90],
         label: {
             normal: {
                 show: false,
             }
         },
         animationEasing: 'elasticOut',
     }]
 }