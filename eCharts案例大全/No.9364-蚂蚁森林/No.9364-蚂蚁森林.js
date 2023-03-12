 option = {
     backgroundColor: "#100736",
     title: {
         text: '蚂蚁森林',
         textStyle: {
             align: 'center',
             color: '#8598bb',
             fontSize: 24,
         },
         top: '17',
         left: 'center',
     },
     tooltip: {
         backgroundColor: 'rgba(0,0,0,0.9)',
         trigger: 'item',
         formatter: "{b}<br/>{c}%",
     },
     grid: {
         right: 25,
         left: 20,
         top: 60,
         bottom: 30,
     },
     yAxis: [{
         type: 'value',
         show: false,
     }],
     xAxis: [{
         type: 'category',
         axisTick: {
             show: false
         },
         data: ['A', 'B', 'C'],
         axisLabel: {
             interval: 0,
             color: '#869ab8',
         },
         splitLine: {
             show: false
         },
         axisLine: {
             show: false
         },
         splitArea: {
             show: false,
         }
     }],
     series: [{
             type: 'pictorialBar',
             symbol: 'path://M53.6,292.8h46s-15.3-108.7-11-124,73-77,73-77l-76,48S74.9,2.5,71.6-6.2l-9,181-72-64s63.7,74.7,69,86S54.3,282.5,53.6,292.8ZM66.7,280c-4.9-12.8,1.8-20.8,1.8-20.8m3.3,18.6c-2.1-6,0-9.3,0-9.3',
             data: [23, 51, 45],
             z: 2,
             symbolOffset: [0, -10],
             label: {
                 show: true,
                 formatter: "{c} %",
                 position: 'top',
                 color: '#869ab8',
             },
             itemStyle: {
                 normal: {
                     color: function(params) { 
                         var colorList = [
                             new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                 offset: 0,
                                 color: '#024cc4'
                             }, {
                                 offset: 0.5,
                                 color: '#024cc4'
                             }, {
                                 offset: 0.5,
                                 color: '#015ef3'
                             }, {
                                 offset: 1,
                                 color: '#015ef3'
                             }]),
                             new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                 offset: 0,
                                 color: '#5d01d1'
                             }, {
                                 offset: 0.5,
                                 color: '#5d01d1'
                             }, {
                                 offset: 0.5,
                                 color: '#6c01f3'
                             }, {
                                 offset: 1,
                                 color: '#6c01f3'
                             }]),
                             new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                 offset: 0,
                                 color: '#9602d5'
                             }, {
                                 offset: 0.5,
                                 color: '#9602d5'
                             }, {
                                 offset: 0.5,
                                 color: '#a201f3'
                             }, {
                                 offset: 1,
                                 color: '#a201f3'
                             }]),
                         ];
                         return colorList[params.dataIndex]
                     },
                 },
                 emphasis: {
                     opacity: 1
                 }
             },

         },
         {
             name: '',
             tooltip: {
                 show: false
             },
             type: 'pictorialBar',
             symbolSize: [100, 25],
             symbolOffset: [0, 0],
             z: 1,
             itemStyle: {
                 normal: {
                     color: '#69c37b',
                     shadowColor: '#232323',
                     shadowBlur: 0,
                     shadowOffsetX:5,
                     shadowOffsetY:5,
                 }
             },
             data: [23, 51, 45],
         }
     ]
 };