 var myColor = ['#174dc5', '#ff5935', '#1ec280', '#eeac01', '#326de4', '#73c041'];

 option = {
     backgroundColor: "#ececec",
     title: {
         text: '要求最高的行业',
         textStyle: {
             align: 'center',
             color: '#747474',
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
         data: ['A', 'B', 'C', 'D', 'E', 'F'],
         axisLabel: {
             textStyle: {
                 color: function(value, index) {
                     var num = myColor.length;
                     return myColor[index % num]
                 }
             },
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
             
             
             //一直对这个path形状很好奇，不知道怎么搞的，
             
             //今天研究了一下，很简单，原来是用。。。。。
             
             //Illustrator画【path】形状路径
             
             symbol: 'path://M225.8,109.7c-52.8,0-26.7-71.8-78-71.8s-24.3,71.9-72.6,71.9ZM164.8,59l2,3.8,1.5,3,1.5,3.8,2.3,4.5v2.2l-2.4.6-2-2-2.1-3.3-1.1-3.1-2.1-5.2V59Zm-41-10.1V47.4h2.9l1.6,1.5,2.3,3.1,3.6,2.9,2.9,2.6,4.9,2.6v1.8l-.6,1.5h-2.6l-2-.8-7-5.3-3.1-2.8-2.6-4.2Zm45.3,38,1-2,1-1.1h10.8l.6,1.5-1.1,1-5.6,1.1h-4.3ZM138.9,103l.9-3h.8l3.7-.7h11.4l3.4.6h2l-.7,2.2-5.3,1.7-4.3,1.1h-8.7l-2.3-.6Zm7-52.9,1.4-1.5h5.6l5.2.8,4.9,2.2,3,.8,1.3.9-.9,1.3-3.3.8-6.5-.5L148.8,52ZM131.5,83.7l2.9-2.3,4.6-1.8,6.1.5,3.9-.5,2.3-1.2h1.2l-2,2.7-2.9,2s-3.5-.3-3.7.6-3.6,1.9-3.6,1.9h-7.5Zm42.4,5.6,1.9,1.2v2.6l1.6,3.7,1.6,4.6v2.9h-2.4l-2.1-3-1.9-3.2V89.3Zm-69.4,11.6.6-3.2,4.2-2.8,3.5-1.7,5-2.4,3.2-1.6,1.6-1.5,2.3-1.5,2.2-.6h1.2l1.5,2-.8,2.5-4.1,3.2-3.4,2.3-6.7,3.8-3.8,1.5-4.9.8Z',
             
             data: [23.5, 51, 43.3, 35, 55, 25],
             label: {
                 show: true,
                 formatter: "{c} %",
                 position: 'top',
                 color: '#000',
             },
             barWidth: '150%',
             itemStyle: {
                 normal: {
                     shadowColor: '#fff',
                     shadowBlur: 1,
                     shadowOffsetX: 1,
                     shadowOffsetY: 0,
                     color: function(params) {
                         var colorList = [
                             new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                 offset: 0,
                                 color: '#4a78eb'
                             }, {
                                 offset: 0.5,
                                 color: '#4a78eb'
                             }, {
                                 offset: 0.5,
                                 color: '#174dc5'
                             }, {
                                 offset: 1,
                                 color: '#174dc5'
                             }]),
                             new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                 offset: 0,
                                 color: '#ff856b'
                             }, {
                                 offset: 0.5,
                                 color: '#ff856b'
                             }, {
                                 offset: 0.5,
                                 color: '#ff5935'
                             }, {
                                 offset: 1,
                                 color: '#ff5935'
                             }]),
                             new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                 offset: 0,
                                 color: '#75deb4'
                             }, {
                                 offset: 0.5,
                                 color: '#75deb4'
                             }, {
                                 offset: 0.5,
                                 color: '#1ec280'
                             }, {
                                 offset: 1,
                                 color: '#1ec280'
                             }]),
                             new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                 offset: 0,
                                 color: '#ffcf47'
                             }, {
                                 offset: 0.5,
                                 color: '#ffcf47'
                             }, {
                                 offset: 0.5,
                                 color: '#eeac01'
                             }, {
                                 offset: 1,
                                 color: '#eeac01'
                             }]),
                             new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                 offset: 0,
                                 color: '#6f9eff'
                             }, {
                                 offset: 0.5,
                                 color: '#6f9eff'
                             }, {
                                 offset: 0.5,
                                 color: '#326de4'
                             }, {
                                 offset: 1,
                                 color: '#326de4'
                             }]),
                             new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                 offset: 0,
                                 color: '#98df69'
                             }, {
                                 offset: 0.5,
                                 color: '#98df69'
                             }, {
                                 offset: 0.5,
                                 color: '#73c041'
                             }, {
                                 offset: 1,
                                 color: '#73c041'
                             }]),
                         ];
                         return colorList[params.dataIndex]
                     },
                 },
                 emphasis: {
                     opacity: 1
                 }
             },

         }

     ]
 };