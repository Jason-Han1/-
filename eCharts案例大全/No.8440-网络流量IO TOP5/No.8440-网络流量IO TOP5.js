 var option = {
     backgroundColor: '#fff',
     title: {
         text: '网络流量IO TOP5',
         left: 'center',
         subtext: "2020-03-12 10:00",
         subtextStyle: { //副标题的属性
             color: '#666',
             // 同主标题
         }
     },
     tooltip: {
         trigger: 'axis',
         axisPointer: { // 坐标轴指示器，坐标轴触发有效
             type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
         }
     },
     grid: {
         left: '2%',
         right: '4%',
         bottom: '10%',
         top: '15%',
         height:'70%',
         containLabel: true
     },
     legend: {
         data: ['发送', '接收'],
         right: 10,
         top: 12,
         textStyle: {
             color: "#000"
         },
         itemWidth: 12,
         itemHeight: 10,
         // itemGap: 35
     },
     xAxis: {
         type: 'category',
         data: ['服务器一', '服务器二', '服务器三', '服务器四', '服务器五'],
         axisLine: {
             lineStyle: {
                 color: '#000'

             }
         },
         axisLabel: {
              interval: 0,
             // rotate: 40,
             textStyle: {
                 fontFamily: 'Microsoft YaHei'
             }
         },
     },

     yAxis: [{
             type: 'value',
             name: '发送',
             max: '20000',
             axisLine: {
                 show: true,
                 lineStyle: {
                     color: '#000'
                 }
             },
             splitLine: {
                 show: true,
                 lineStyle: {
                     color: 'rgba(255,255,255,0.3)'
                 }
             },
             splitNumber: 2,
             axisLabel: {
                formatter: (param) => {
                    return (param / 10000) + '万'
                }
             }
         },
         {
             type: 'value',
             name: '接收',
             max: '10000',
             axisLine: {
                 show: true,
                 lineStyle: {
                     color: '#000'
                 }
             },
             splitLine: {
                 show: true,
                 lineStyle: {
                     color: 'rgba(255,255,255,0.3)'
                 }
             },
             splitNumber: 2,
             axisLabel: {
                formatter: (param) => {
                    return (param / 10000) + '万'
                }
             }
         }
     ],
     series: [{
             name: '发送',
             yAxisIndex: '0', // 使用第一个y轴
             type: 'bar',
             barWidth: '15%',
             itemStyle: {
                 normal: {
                     color: '#00736E',
                     barBorderRadius: 12,
                 },
             },
             data: [18400, 12400, 9300, 8700, 5300],
             label: {
                 normal: {
                     show: true,
                     fontSize: 14,
                     fontWeight: 'normal',
                     color: '#333',
                     position: 'top',
                     offset: [-30, 0],//对label进行偏移，第一个横向偏移，第二个值纵向偏移
                     formatter: (param) => {
                         return param.value
                     }
                 }
             }
         },
         {
             name: '接收',
             yAxisIndex: '1', // 使用第二个y轴
             type: 'bar',
             barWidth: '15%',
             itemStyle: {
                 normal: {
                     color: '#16DBCC',
                     barBorderRadius: 11,
                 }

             },
             data: [8400, 6500, 7500, 4500, 1500 ],
             label: {
                 normal: {
                     show: true,
                     fontSize: 14,
                     fontWeight: 'normal',
                     color: '#333',
                     position: 'top',
                     offset: [30, 0],
                     formatter: (param) => {
                         return param.value
                     }
                 }
             },
         }
     ]
 };