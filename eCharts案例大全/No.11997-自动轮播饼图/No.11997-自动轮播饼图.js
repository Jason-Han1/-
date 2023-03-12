 option = {
     color: ['#FFA620', '#FD4144', '#24FEB4', '#2DB8FB', '#9E43DE', '#FFF049', '#FC6060'],
     title: { // 标题
         text: '自动',
         textStyle: { // 标题的样式
             fontSize: 14,
             color: '#fff' // 字体颜色
         },
         top: 'bottom',
         left: '100'
     },
     legend: {
         show: true, // 是否显示图列
         left: 'center',
         top: 'bottom',
         textStyle: {
             color: '#fff',
             fontSize: 20
         },
         data: ['火灾', '电气', '可燃气体', '消防电源']
     },
     series: [{
         name: '访问来源',
         type: 'pie',
         center: ['50%', '50%'],
         radius: ['50%', '75%'],
         avoidLabelOverlap: false,
         hoverOffset: 24, // 高亮扇区的偏移距离。
         label: {
             show: false,
             position: 'center'
         },
         emphasis: {
             label: {
                 show: true,
                 color: '#fff',
                 fontSize: 36,
                 formatter: `{b}\n\n{d}%`
             }
         },
         labelLine: {
             show: true
         },
         data: [{
                 name: '火灾',
                 value: 34
             },
             {
                 name: '电气',
                 value: 89
             },
             {
                 name: '可燃气体',
                 value: 57
             },
             {
                 name: '消防电源',
                 value: 100
             }
         ]
     }]
 }

 var currentIndex = -1
 console.log(option)
 let myChart = echarts.getInstanceByDom(document.getElementById("chart-panel"))
 var dataLen = option.series[0].data.length
 setInterval(() => {
     console.log(123)
     // 取消之前高亮的图形
     myChart.dispatchAction({
         type: 'downplay',
         seriesIndex: 0,
         dataIndex: currentIndex
     })
     currentIndex = (currentIndex + 1) % dataLen
     // 高亮当前图形
     myChart.dispatchAction({
         type: 'highlight',
         seriesIndex: 0,
         dataIndex: currentIndex
     })
     // 显示 tooltip
     myChart.dispatchAction({
         type: 'showTip',
         seriesIndex: 0,
         dataIndex: currentIndex
     })
 }, 3000)