   var currvalue = 450;
   var maxValue = 4000;
   var title = '收入比重';

   var percent = (currvalue / maxValue * 100).toFixed(2);
   var bl = maxValue / 100;
   option = {
       backgroundColor: '#010e28',
       series: [{
               name: '刻度',
               type: 'gauge',
               radius: '80%',
               center: ['50%', '70%'],
               min: 0, //最小刻度
               max: 100, //最大刻度
               splitNumber: 8, //刻度数量
               startAngle: 190,
               endAngle: -10,
               axisLine: {
                   show: true,
                   lineStyle: {
                       width: 1,
                       color: [
                           [1, 'rgba(0,0,0,0)']
                       ]
                   }
               }, //仪表盘轴线
               axisLabel: {
                   show: true,
                   color: '#4c647c',
                   distance: 30,
                   formatter: function(v) {
                       switch (v + '') {
                           case '0':
                               return '0';
                           case '12.5':
                               return 12.5 * bl;
                           case '25':
                               return 25 * bl;
                           case '37.5':
                               return 37.5 * bl;
                           case '50':
                               return 50 * bl;
                           case '62.5':
                               return 62.5 * bl;
                           case '75':
                               return 75 * bl;
                           case '87.5':
                               return 87.5 * bl;
                           case '100':
                               return 100 * bl;
                       }
                   }
               }, //刻度标签。
               axisTick: {
                   show: true,
                   splitNumber: 10,
                   lineStyle: {
                       color: '#4c647c',
                       width: 1,
                   },
                   length: -8
               }, //刻度样式
               splitLine: {
                   show: true,
                   length: -20,
                   lineStyle: {
                       color: '#4c647c'
                   }
               }, //分隔线样式
               detail: {
                   show: false
               },
               pointer: {
                   show: false
               }
           },
           {

               name: '税收比重',
               type: 'gauge',
               radius: '98%',
               center: ['50%', '70%'],

               splitNumber: 0, //刻度数量
               startAngle: 190,
               endAngle: -10,
               axisLine: {
                   show: true,
                   lineStyle: {
                       width: 5,
                       color: [
                           [
                               1, new echarts.graphic.LinearGradient(
                                   0, 0, 1, 0, [{
                                           offset: 0,
                                           color: '#4e6be3'
                                       },
                                       {
                                           offset: 1,
                                           color: '#23b4f9'
                                       }
                                   ]
                               )
                           ]
                       ]
                   }
               },
               //分隔线样式。
               splitLine: {
                   show: false,
               },
               axisLabel: {
                   show: false
               },
               axisTick: {
                   show: false
               },
               pointer: {
                   show: false
               },
               title: {
                   show: true,
                   offsetCenter: [0, '40%'], // x, y，单位px
                   textStyle: {
                       color: '#73f3f5', //标题颜色
                       fontSize: 32
                   }
               },
               //仪表盘详情，用于显示数据。
               detail: {
                   show: true,
                   offsetCenter: [0, 0],
                   color: '#d5b16f', //指标值颜色
                   formatter: function(params) {
                       // var params = params.toFixed(2)
                       return params + '%'

                   },
                   textStyle: {
                       fontSize: 48
                   }
               },
               data: [{
                   name: title,
                   value: percent
               }]
           },
           {
               type: 'pie',
               radius: ["79%", "91%"],
               center: ['50%', '70%'],
               animation: false,
               label: {
                   show: false,
               },
               startAngle: 190 - (percent / 100) * 200 + 1.5,
               color: ['#d5b16f', 'rgba(0,0,0,0)'],
               itemStyle: {
                   shadowColor: '#d5b16f',
                   shadowBlur: 15,
               },
               data: [{
                   value: 3,
                   name: "指针"
               }, {
                   value: 357,
                   name: "空白"
               }],
           }, {
               type: 'pie',
               radius: ["50%", "51%"],
               center: ['50%', '70%'],
               animation: false,
               label: {
                   show: false,
               },
               startAngle: 200,
               itemStyle: {
                   shadowColor: '#73f3f5', //中心渐变颜色
                   shadowBlur: 30,
               },
               data: [{
                   value: 220,
                   name: "指针",
                   itemStyle: {
                       color: '#010e28'
                   }
               }, {
                   value: 140,
                   name: "空白",
                   itemStyle: {
                       color: 'rgba(0,0,0,0)'
                   }
               }],
           }
       ]
   };