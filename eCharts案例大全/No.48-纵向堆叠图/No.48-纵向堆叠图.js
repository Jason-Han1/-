option = {
  tooltip: {
    // trigger: 'item',
    // axisPointer: {
    //   type: 'none' // 'shadow' as default; can also be 'line' or 'shadow'
    // }
  },
  legend: {},
  color:['red','blue','gray'],
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    axisLine:{
        show:false
    },
    splitLine:{
        show:false
    },
    axisTick:{
        show:false
    },
    
  },
  yAxis: {
    type: 'value',
    axisLine:{
        show:false
    },
    splitLine:{
        show:false
    },
    axisTick:{
        show:false
    },
    axisLabel:{
        show:false
    },
   
  },
  dataset: {
    // 提供一份数据。
    source: [
      ['product', '本品牌', '石油', '其他'],
      ['汽油', 43.3, 85.8, 93.7],
      ['柴油', 83.1, 73.4, 55.1],
      ['新能源', 86.4, 65.2, 82.5],
    ]
  },
  series: [
    {
      
      type: 'bar',
      barWidth:20,
      stack: 'total',
      label: {
        show: false
      },
      emphasis: {
        focus: 'series'
      }
    },
    
    {
      type: 'bar',
      barWidth:20,
      stack: 'total',
      label: {
        show: false
      },
      emphasis: {
        focus: 'series'
      },
    },
    
    {
      type: 'bar',
      barWidth:20,
      stack: 'total',
      label: {
        show: false
      },
      emphasis: {
        focus: 'series'
      }
    }
  ]
};