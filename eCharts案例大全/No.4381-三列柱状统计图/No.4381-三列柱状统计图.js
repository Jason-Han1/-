 var option = {
     backgroundColor: '#001037',
     grid: {
         top: '10%',
         left: '10%',
         right: '10%',
         bottom: '10%',
         containLabel: true
     },
     tooltip: {
         backgroundColor: 'rgba(65,114,231,0.8)',
     },
     dataset: {
         source: [{
                 product: "1月",
                 待考人数: 10,
                 约考人数: 5,
                 通过人数: 12
             },
             {
                 product: "2月",
                 待考人数: 8,
                 约考人数: 7,
                 通过人数: 8
             },
             {
                 product: "3月",
                 待考人数: 9,
                 约考人数: 10,
                 通过人数: 5
             },
             {
                 product: "4月",
                 待考人数: 12,
                 约考人数: 5,
                 通过人数: 3
             },
             {
                 product: "5月",
                 待考人数: 12,
                 约考人数: 5,
                 通过人数: 3
             },
             {
                 product: "6月",
                 待考人数: 12,
                 约考人数: 5,
                 通过人数: 3
             },
             {
                 product: "7月",
                 待考人数: 12,
                 约考人数: 5,
                 通过人数: 3
             },
             {
                 product: "8月",
                 待考人数: 12,
                 约考人数: 5,
                 通过人数: 3
             },
             {
                 product: "9月",
                 待考人数: 12,
                 约考人数: 5,
                 通过人数: 3
             },
             {
                 product: "10月",
                 待考人数: 12,
                 约考人数: 5,
                 通过人数: 3
             },
             {
                 product: "11月",
                 待考人数: 12,
                 约考人数: 5,
                 通过人数: 3
             },
             {
                 product: "12月",
                 待考人数: 12,
                 约考人数: 5,
                 通过人数: 3
             },
         ]
     },
     xAxis: {
         type: 'category',
         splitLine: {
             show: false
         },
         position: 'bottom',
         axisLabel: {
             show: true,
             textStyle: {
                 color: '#ADD6FF',
                 fontSize: '12'
             }
         },
         axisLine: {
             lineStyle: {
                 color: '#0a4980',
                 width: 1, //这里是为了突出显示加上的
             }
         }
     },
     yAxis: {
         splitLine: {
             show: false
         },
         axisLabel: {
             show: true,
             textStyle: {
                 color: '#ADD6FF',
                 fontSize: '12'
             }
         },
         axisLine: {
             lineStyle: {
                 color: '#0a4980',
                 width: 1, //这里是为了突出显示加上的
             }
         }
     },
     series: [{
             type: 'bar'
         },
         {
             type: 'bar'
         },
         {
             type: 'bar'
         },
     ],
     color: ['#02DEFF', '#0FA2FF', '#4EEEBF'],
     barWidth: 9,
 };