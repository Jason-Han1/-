 var zdslColorList = ['#D0A00E', '#34DA62', '#00C0E9', '#0096F3', '#33CCFF']
 option = {
      backgroundColor:'#001037',
     grid: {
         top: '5%',
         left: '3%',
         right: '3%',
         bottom: '0',
         containLabel: true
     },
     tooltip: {
         backgroundColor: 'rgba(65,114,231,0.8)'
     },
     xAxis: {
         show: false,
         type: 'value'
     },
     yAxis: [{
             type: 'category',
             data: ['校区五', '校区四', '校区三', '校区二', '校区一'],
             axisLabel: {
                 show: true,
                 textStyle: {
                     color: '#ADD6FF',
                     fontSize: '12'
                 }
             },
             splitLine: {
                 show: false
             },
             axisTick: {
                 show: false
             },
             axisLine: {
                 show: false
             },
         },
         {
             splitLine: {
                 show: false
             },
             axisTick: {
                 show: false
             },
             axisLine: {
                 show: false
             },
             axisLabel: {
                 show: true,
                 textStyle: {
                     color: '#ADD6FF',
                     fontSize: '12'
                 }
             },
             data: [150, 298, 206, 75, 154]
         }
     ],

     series: [{
             name: "受理数", // bar图的外边框
             type: "bar",
             barWidth: "20%",
             yAxisIndex: 0,
             data: [500, 500, 500, 500, 500].map((item, i) => {
                 return {
                     value: item,
                     itemStyle: {
                         color: "rgba(0,0,0,0)",
                         barBorderColor: zdslColorList[i],
                         borderWidth: 1,
                         shadowColor: "#33CCFF",
                         shadowBlur: 4
                     }
                 }
             }),
         },
         {
             name: "受理数", //这个是Bar图
             type: 'bar',
             yAxisIndex: 1,
             barWidth: "10%",
             data: [150, 298, 206, 75, 154]
         }
     ],
     itemStyle: {
         color: function(params) {
             return zdslColorList[params.dataIndex]
         }
     }
 }