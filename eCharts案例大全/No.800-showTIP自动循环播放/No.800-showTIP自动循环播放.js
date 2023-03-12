var data = [820, 932, 901, 934, 1290, 1330, 1320]
option = {
    tooltip: {
    trigger: 'axis',
    
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
     axisPointer: {
        type: 'shadow',
        shadowStyle: {
          color: 'rgba(150,150,150,0.3)'
        }
      }
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data:data ,
      type: 'line',
      smooth: true,
      name: 'test'
    }
  ]
};

var index = 0
setInterval(()=> {
myChart.dispatchAction({
    type: 'showTip',
// 系列的 index，在 tooltip 的 trigger 为 axis 的时候可选。
    seriesIndex: 0,
    // 数据项的 index，如果不指定也可以通过 name 属性根据名称指定数据项
    dataIndex: index
   
})
index ++
 if(index >= data.length) {
 index = 0;
   }
}, 3000)