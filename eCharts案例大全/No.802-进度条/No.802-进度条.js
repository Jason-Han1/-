 var myColor = ['#81E7ED']
 var dataLine = [50, 66, 33, 25]
 let positionLeft = 0.4,
    max = 100 + 2*positionLeft
 var option = {
     backgroundColor: '#101E44',
     grid: [
         {
         left: '8%',
         top: '12%',
         right: '5%',
         bottom: '8%',
         containLabel: true
     },
     {
         left: '10%',
         top: '12%',
         right: '5%',
         bottom: '8%',
         containLabel: true
     }
         ],
     xAxis: [{
         max:max,
         show: false
     }],
     yAxis: [{
         axisTick: 'none',
         axisLine: 'none',
         offset: '27',
         axisLabel: {
             textStyle: {
                 color: '#81E7ED',
                 fontSize: '16'
             }
         },
         data: ['智能科技', '人工科技', '智能装备制造', '核能科技']
     }, {
         axisTick: 'none',
         axisLine: 'none',
         show: false,
         axisLabel: {
             textStyle: {
                 color: '#ffffff',
                 fontSize: '16'
             }
         },
         data: [1, 1, 1, 1]
     }, {

         axisLine: {
             lineStyle: {
                 color: 'rgba(0,0,0,0)'
             }
         },
         data: []
     }],
     series: [
         
        { //间距
            type: 'bar',
            barWidth: 15,
            stack: 'b',
            legendHoverLink: false,
            itemStyle: {
                normal: {
                    color: 'rgba(0,0,0,0)'
                }
            },

            data: [positionLeft,positionLeft,positionLeft,positionLeft]
        },{
         name: '条',
         type: 'bar',
         stack: 'b',
         yAxisIndex: 0,
         data: dataLine,
         label: {
             normal: {
                 show: false,
                 position: 'right',
                 distance: 10,
                 formatter: function(param) {
                     return param.value + '%'
                 },
                 textStyle: {
                     color: '#ffffff',
                     fontSize: '16'
                 }
             }
         },
         barWidth: 10,
         itemStyle: {
             normal: {
                 color: function(params) {
                     var num = myColor.length
                     return myColor[params.dataIndex % num]
                 }
             }
         },
         z: 2
     }, {
         name: '白框',
         type: 'bar',
         yAxisIndex: 1,
         barGap: '-100%',
         data: [99.8, 99.9, 99.9, 99.9],
         barWidth: 21,
         itemStyle: {
             normal: {
                 color: '#0e2147',
                 barBorderRadius: 2
             }
         },
         z: 1
     },
     {
         name: '外框',
         type: 'bar',
         yAxisIndex: 2,
         barGap: '-100%',
         data: [100, 100, 100, 100],
         barWidth: 23,
         label: {
             normal: {
                 show: true,
                 position: 'right',
                 distance: 10,
                formatter: function(data) {
                    return dataLine[data.dataIndex] +"%";
                },
                 textStyle: {
                     color: '#ffffff',
                     fontSize: '16'
                 }
             }
         },
         itemStyle: {
             normal: {
                 color: function(params) {
                     var num = myColor.length
                     return myColor[params.dataIndex % num]
                 },
                 barBorderRadius: 0
             }
         },
         z: 0
     },
 /*     {
         name: '白框',
         type: 'bar',
         yAxisIndex: 1,
         barGap: '-100%',
         data: [0, 0, 0, 0],
         barWidth: 20,
         itemStyle: {
             normal: {
                 color: '#0e2147',
                 barBorderRadius: 0
             }
         },
         z: 1
     },
     {
         name: '外框',
         type: 'bar',
         yAxisIndex: 2,
         barGap: '-100%',
         data: [2, 3, 4, 5],
         barWidth: 22,
         itemStyle: {
             normal: {
                 color: function(params) {
                     var num = myColor.length
                     return myColor[params.dataIndex % num]
                 },
                 barBorderRadius: 0
             }
         },
         z: 0
     }*/
     
     ]
 }