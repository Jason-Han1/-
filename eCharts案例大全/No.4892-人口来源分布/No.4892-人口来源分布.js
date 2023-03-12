 option = {
     backgroundColor: "#000",
     title: {
         text: "人口来源分布",
         textAlign: "center",
         left: "5%",
         top: "5%",
         textStyle: {
             color: "#F1BB4C",
             fontSize: 14,
             textAlign: "center"
         }
     },
     grid: {
         top: "10%",
         left: "3%",
         right: "7%",
         bottom: "3%",
         containLabel: true
     },
     xAxis: {
         type: 'value',
         axisLabel: {
             show: true,
             textStyle: {
                 color: '#ffffff'
             }
         },
         position: 'top',
         axisTick: {
             show: false
         },
         axisLine: {
             show: false
         },
         nameTextStyle: {
             color: '#ffffff'
         },
         splitLine: { //设置网格颜色
             show: false
         }

     },
     yAxis: {
         type: 'category',
         data: ['湖南', '江西', '福建', '浙江','湖北','安徽','江苏','河南','山东','重庆','四川','云南','宁夏','甘肃','青海','陕西','山西','河北','内蒙','北京'], //设置从低到高
         axisTick: { //去除刻度线
             show: false
         },
         axisLine: { //y轴线样式
             lineStyle: {
                 color: '#F1BB4C'
             }
         },
         axisLabel: {
             show: true,
             textStyle: {
                 color: '#ffffff',
             },
         },
         splitLine: { //设置网格颜色
             show: false
         },
     },
     series: [{
             name: '',
             type: 'bar',
             label: {
                 show: true,
                 position: 'right',
                 textStyle: {
                     color: '#ffffff',
                     fontFamily: 'SourceHanSansSC-Regular',
                     fontSize: 14
                 }
             },
             barWidth: '55%',
             data: ['200', '300', '260', '240',235,156,321,189,213,244,256,199,167,239,234,242,288,177,135,209],
             itemStyle: {
                 normal: {
                     color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                             offset: 0,
                             color: 'rgba(241, 187, 76, 0)'
                         },
                         {
                             offset: 1,
                             color: 'rgba(241, 187, 76, 1)'
                         },
                     ]),
                     barBorderRadius: [0, 0, 50, 0]
                 }
             }
         }

     ]
 };