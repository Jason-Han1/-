 let pointStyle = {
     borderColor: 'rgba(255,255,255,0)',
     color: 'rgba(255,255,255,000000)',
     borderWidth: 2,
 }
 let labelStyle = {
     show: true,
     position: 'top',
     lineHeight: 20,
     borderRadius: 5,
     backgroundColor: 'rgba(255,255,255,0)',
     borderColor: 'rgba(255,255,255,0)',
     borderWidth: '1',
     padding: [5, 15, 4],
     color: 'rgba(255,255,255,0)',
     fontSize: 14,
     fontWeight: 'normal',
 }
 let total = [55, 65, 68, 43, 88, 95]
 let seriesData = []
 total = total.sort(function(a, b) {
     return a - b
 })
 total.forEach((item, index) => {
     let ob = {
         value: item,
         itemStyle: pointStyle,
         label: labelStyle,
     }
     if (index === total.length - 1) {
         ob.itemStyle = {
             borderColor: '#2D52E6',
             color: '#E5E8F7',
             borderWidth: 3,
         }
     }
     seriesData.push(ob)
 })

 option = {
     grid: {
         top: '15%',
         left: '8%',
         right: '8%',
         bottom: '15%',
     },
     xAxis: [{
         type: 'category',
         axisTick: {
             show: false,
         },
         splitLine: {
             show: false,
         },
         data: ['1', '2', '3', '4', '5', '6'],
        axisLine: {
            show: false
        },
        show:false
     }],

     yAxis: [{
         type: 'value',
         axisLine: {
             show: false,
         },
         axisTick: {
             show: false,
         },
         splitLine: {
             show: false,
         },
         show:false
     }, ],
     series: [{
         type: 'line',
         showAllSymbol: true,
         symbol: 'circle',
         smooth: true,//折点设定为实心点
         symbolSize: 15,
         itemStyle : {
                                normal : {
                                    color:'#2D52E6'
                                }
                            },
         lineStyle: {
             normal: {
                 color: '#2D52E6',
                 width: 3,
             },
         },
         tooltip: {
             show: false,
         },
         data: seriesData,
     }, ],
 };