   var fChangeNum = function(value) {//将数值转换成字母
       var sLabel;
       switch (value) {
           case 10:
               sLabel = 'AAA';
               break;
           case 8:
               sLabel = 'AA';
               break;
           case 6:
               sLabel = 'A';
               break;
           case 4:
               sLabel = 'B';
               break;
           case 2:
               sLabel = 'C';
               break;
       }
       return sLabel;
   };
   var aIindicator = ['区县1', '区县2', '区县3', '区县4', '区县5', '区县6'],
       aData = [10, 6, 8, 4, 2, 4];
   option = {
       backgroundColor: '#000',
       tooltip: {
           show: false,
       },
       grid: {
           top: '40px',
           right: '40px',
           left: '20px',
           bottom: '20px',
           containLabel: true
       },
       xAxis: {
           data: aIindicator,
           axisLine: {
               show: false
           },
           axisTick: {
               show: false
           },
           splitLine: {
               show: true,
               lineStyle: {
                   color: "#4F6C98",
                   type: "dashed"
               }
           },
           axisLabel: {
               color: 'rgba(255,255,255,0.64)',
               fontSize: 10,
               interval: 0,
               rotate: 45
           }
       },
       yAxis: {
           axisLine: {
               show: false
           },
           axisTick: {
               show: false
           },
           splitLine: {
               lineStyle: {
                   color: "#4F6C98",
                   type: "dashed"
               }
           },
           axisLabel: {
               color: 'rgba(255,255,255,0.64)',
               fontSize: 12,
               formatter: function(value, index) {
                   return fChangeNum(value);
               }
           }
       },
       series: [{
           type: 'bar',
           barWidth: '12',
           label: {
               normal: {
                   show: true,
                   formatter: function(params) {
                       return fChangeNum(params.data);
                   },
                   position: "top",
                   textStyle: {
                       color: "#ffffff",
                       fontSize: 14
                   }
               }
           },
           itemStyle: {
               color: function(params) {
                   var colorList = ['rgba(13,255,214,1)', 'rgba(22,164,255,1)', 'rgba(13,104,255,1)', 'rgba(22,164,255,1)'];
                   if (params.dataIndex % 2 == 0) {
                       return new echarts.graphic.LinearGradient(0, 0, 0, 1,
                           [{
                                   offset: 0,
                                   color: colorList[0]
                               },
                               {
                                   offset: 1,
                                   color: colorList[1]
                               }
                           ]);
                   } else {
                       return new echarts.graphic.LinearGradient(0, 0, 0, 1,
                           [{
                                   offset: 0,
                                   color: colorList[2]
                               },
                               {
                                   offset: 1,
                                   color: colorList[3]
                               }
                           ]);
                   }

               }
           },
           data: aData
       }]
   };