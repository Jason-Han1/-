 let ydata = [10, 30, -30, -40, 50];
 let xdata = [1, 2, 3, 4, 5];
 let itemStyle1 = {
     normal: {
         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
             offset: 0,
             color: 'rgba(232,154,116,1)'
         }, {
             offset: 1,
             color: 'rgba(232,154,116,0.2)'
         }]),
     }
 };
 let itemStyle2 = {
     normal: {
         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
             offset: 0,
             color: 'rgba(0,255,246,0.2)'
         }, {
             offset: 1,
             color: 'rgba(0,255,246,1)'
         }]),
     }
 };
 ydata = ydata.map(item => {
     let obj = {
         value: item,
         itemStyle: itemStyle1
     }
     if (item < 0) {
         obj.itemStyle = itemStyle2;
     }
     return obj;
 })
 let seriesData = [{
     type: 'bar',
     name: '变化率',
     stack: "1",
     barWidth: '40%',
     label: {
         normal: {
             show: false
         }
     },
     data: ydata
 }];
 var option = {
     backgroundColor: '#0e2147',
     grid: {
         left: '2.5%',
         top: '19.5%',
         right: '2.8%',
         bottom: '22%',
         containLabel: true
     },
     tooltip: {
         trigger: 'axis',
         borderColor: '#43845D',
         borderWidth: 1,
         backgroundColor: 'rgba(11,42,89,0.3)',
         borderRadius: 20,
         padding: 10,
         textStyle: {
             color: '#fff',
             fontSize: 30
         },
         axisPointer: {
             lineStyle: {
                 color: '#fef018',
                 width: '3'
             }
         }
     },
     xAxis: [{
         type: 'category',
         name: '',
         data: xdata,
         axisLine: {
             lineStyle: {
                 width: 2,
                 color: 'rgba(63,92,122,1)'
             }
         },
         axisTick: {
             show: false
         },
     }],
     yAxis: [{
         type: 'value',
         name: '%',
         nameTextStyle: {
             color: '#8796AD',
             fontSize: '16',
         },
         axisLabel: {
             textStyle: {
                 color: '#8796AD',
                 fontSize: '14',
             }
         },
         axisTick: {
             show: false
         },
         axisLine: {
             lineStyle: {
                 width: 2,
                 color: 'rgba(160,160,160,0.3)',
             }
         },
         splitLine: {
             lineStyle: {
                 color: 'rgba(160,160,160,0.3)',
             }
         },
     }, ],
     series: seriesData
 };