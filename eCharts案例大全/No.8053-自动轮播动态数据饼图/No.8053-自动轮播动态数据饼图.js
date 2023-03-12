 var arr=[{
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
         ];
         
 option = {
     
     color: ['#FFA620', '#FD4144', '#24FEB4', '#2DB8FB', '#9E43DE', '#FFF049', '#FC6060'],
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
         data: arr
     }]
 }

 var currentIndex = -1
 console.log(option)
//  let myChart = echarts.getInstanceByDom(document.getElementById("chart-panel"))
 var dataLen = option.series[0].data.length
var timer=0;
 setInterval(() => {
    
     console.log(123)
     //  计时器增加
     timer++;
    if (timer==5) {
        for(let index in arr){
        arr[index].value=(Math.random()*50+100).toFixed(0);
        }
        myChart.setOption({
            series: [{
                data: arr
            }]
        })
        timer=1;
    }
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
    
 }, 1000)