 option = {
     backgroundColor:"#000",
     color: ['#2b7bf3'],
     tooltip: {
         trigger: 'axis',
         axisPointer: {
             type: 'shadow'
         }
     },
     grid: {
         left: '1%',
         right: '0%',
         bottom: '3%',
         top: '100px',
         containLabel: true
     },
     xAxis: [{
         type: 'category',
         data: ["10亿元以下", "10~30亿元", "30~50亿元", "50~100亿元"],
         axisTick: { //取消坐标轴刻度线
             show: false,
         },
         axisLine: {
             lineStyle: {
                 color: '#666cb4', //设置横轴颜色
                 width: 1,
             }
         },
         axisLabel: {
             show: true,
             textStyle: {
                 color: '#fff', //更改x坐标轴文字颜色
                 fontFamily: 'SourceHanSansSC-Regular',
                 fontSize: 14,
                 fontWeight: 'normal',
                 fontStretch: 'normal',
                 lineHeight: 19,
                 letterSpacing: 0
             },
             interval: 0,
         }
     }],
     yAxis: [{
         type: 'value',
         splitNumber: 3, //设置几等分   max/splitNumber=y轴值间隔
         nameTextStyle: { //y轴上方单位的颜色
             color: '#fff',
             fontFamily: 'SourceHanSansSC-Regular',
             fontSize: 14,
             fontWeight: 'normal',
             fontStretch: 'normal',
             lineHeight: 19,
             letterSpacing: 0
         },
         axisTick: { //取消坐标轴刻度线
             show: false
         },
         splitLine: { //设置网格颜色
             show: true,
             lineStyle: {
                 color: ['#3E4172'],
                 width: 1,
                 type: 'solid'
             }
         },
         axisLine: {
             lineStyle: {
                 color: '#666cb4', //设置纵轴颜色
                 width: 1,
             }
         },
         axisLabel: {
             show: true,
             textStyle: {
                 color: '#fff', //更改坐标轴文字颜色
                 fontFamily: 'SourceHanSansSC-Regular',
                 fontSize: 14,
                 fontWeight: 'normal',
                 fontStretch: 'normal',
                 lineHeight: 19,
                 letterSpacing: 0
             },
         }
     }],
     series: [{
         type: 'bar',
         data: ["2000", "4000", "6000", "8000"],
         label: {
             show: true,
             position: 'top',
             textStyle: {
                 color: '#ffffff',
                 fontFamily: 'SourceHanSansSC-Regular',
                 fontSize: 14
             }
         },
         barWidth: 60, //柱图宽度    
         itemStyle: {
             normal: {
                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                         offset: 0,
                         color: 'rgba(0,255,255,0.6)'
                     },
                     {
                         offset: 0.5,
                         color: 'rgba(0,215,244,0.6)'
                     },
                     {
                         offset: 1,
                         color: 'rgba(0,175,248,0.6)'
                     },
                 ]),
             }
         }, //设置柱形渐变

     }]
 };