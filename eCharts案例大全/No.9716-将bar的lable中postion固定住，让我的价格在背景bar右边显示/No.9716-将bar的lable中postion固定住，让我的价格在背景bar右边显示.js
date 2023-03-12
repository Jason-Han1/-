 option = {
     backgroundColor:'black',
     title: {
         text: '各医院住院收入',
         textStyle: {
             color: '#73d3f3',
             fontFamily: 'MicrosoftYaHei',
         },
         left: '35%',
         top: 30,
     },
     tooltip: {
         /*trigger: 'axis',*/
         axisPointer: {
             type: 'shadow'
         },
         /* formatter:'{b}<br>{c}元',*/
     },
     grid: {
         containLabel: true,
         top: 70,
         right: 80,
         bottom: 5,
     },
     xAxis: {
         show: false,
         type: 'value',
         axisLine: {
             show: false
         },
         axisTick: {
             show: false
         }
     },
     yAxis: {
         type: 'category',
         data: ['良乡医院', '幼父保洁院', '中医院', '区医院'],
         splitLine: {
             show: false
         },
         axisLabel: {
             textStyle: {
                 color: '#fff'
             },
         },
         axisLine: {
             show: false
         },
         axisTick: {
             show: false
         },
         offset: 30,
         max: 3,

     },
     series: [{
             name: '最大值',
             z: 1,
             type: 'bar',
             barWidth: 20,
             data: [23000, 23000, 23000, 23000],
             barGap: '-100%',
             itemStyle: {
                 normal: {
                     color: '#0d2253'
                 }
             },
         },
         {
             name: '钱总数',
             type: 'bar',
             data: [8000, 9000, 20000, 10000],
             barWidth: 20,
             smooth: true,
             label: {
                 normal: {
                     show: true,
                     position: 'righ',
                     offset: [5, 4],
                     formatter: '{c}元',
                     textStyle: {
                         color: 'white',
                         fontSize: 13
                     },
                 }
             },
             itemStyle: {
                 normal: {
                     //实现不同颜色的渐变
                     color: function(params) {
                         //我这边就5个柱子，就5个柱子颜色渐变，所以数组只有两个值，多个颜色就多个值.
                         var colorList = [
                             ['rgba(42,107,205,0)', 'rgba(51,246,248,0.96)'],
                             ['rgba(42,107,205,0)', 'rgba(51,246,248,0.96)'],
                             ['rgba(42,107,205,0)', 'rgba(51,246,248,0.96)'],
                             ['rgba(42,107,205,0)', 'rgba(51,246,248,0.96)'],
                         ];
                         var index = params.dataIndex;
                         if (params.dataIndex >= colorList.length) {
                             index = params.dataIndex - colorList.length;
                         }
                         return new echarts.graphic.LinearGradient(0, 0, 1, 0,
                             [{
                                     offset: 0,
                                     color: colorList[index][0]
                                 },
                                 {
                                     offset: 1,
                                     color: colorList[index][1]
                                 },
                             ]);
                     },
                 }
             }
         },
     ]
 };