 // 上左下右
 const data = [30, -9, 8, 20];
 const indicators = [
     // 上
     {
         text: '支撑协同能力',
         max: 60,
         color: '#515151',
         index: 0,
     },
     // 左
     {
         text: '管理控制',
         max: 0,
         min: -10,
         color: '#515151',
         index: 1,
     },
     // 下
     {
         text: '成本管控',
         max: 20,
         color: '#515151',
         index: 2,
     },
     // 右
     {
         text: '支撑协同质量',
         max: 30,
         color: '#515151',
         index: 3
     },
 ];
 option = {
     title: {
         text: ''
     },
     tooltip: {
         show: false,
         trigger: 'axis'
     },
     radar: [{
         name: {
             formatter: function(value, indicator) {
                 return '{title|' + value + '}\n{value|' + data[indicator.index] + '}';
             },
             color: '#fff',
             rich: {
                 title: {
                     fontSize: 15,
                     borderRadius: 3,
                     padding: [6, 10]
                 },
                 value: {
                     fontSize: 15,
                     align: 'center',
                     backgroundColor: '#ffc000',
                     borderRadius: 3,
                     padding: [6, 10]
                 }
             }
         },
         // 坐标轴线
         axisLine: {
             lineStyle: {
                 color: '#b3ddfb'
             }

         },
         // 刻度
         axisTick: {
             show: true,
             length: 6,
         },
         // 刻度标签
         axisLabel: {
             show: true,
         },
         // 分割线
         splitLine: {
             lineStyle: {
                 color: '#c8e8fe'
             }
         },
         // 分割区域
         splitArea: {
             areaStyle: {
                 color: ['#e6f3fd', '#eff6fb'],
             },
         },
         indicator: indicators,
         center: ['50%', '50%'],
         radius: 200
     }, ],
     series: [{
         type: 'radar',
         tooltip: {
             trigger: 'item'
         },
         areaStyle: {},
         data: [{
             value: data,
             name: '考核指标',
             areaStyle: {
                 color: '#8dceff'
             },
             lineStyle: {
                 color: '#32aaff'
             },
             itemStyle: {
                 color: '#8dceff',
                 borderType: 'solid'
             }
         }]
     }, ],
     backgroundColor: '#fff'
 };