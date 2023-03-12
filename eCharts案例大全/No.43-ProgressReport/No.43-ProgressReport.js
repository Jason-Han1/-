option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  toolbox: {
    feature: {
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar'] },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  legend: {
    data: ['Before', 'After']
  },
  xAxis: [
    {
      type: 'category',
      data: ['TotalLines', 'TotalTokens', 'DuplicatedLines', 'DuplicatedTokens'],
      axisPointer: {
        type: 'shadow'
      }
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
    
  ],
  series: [
    {
      name: 'Before',
      type: 'bar',
      data: [
        964,7959,46,451
      ]
    },
    {
      name: 'After',
      type: 'bar',
      data: [
        839,7419,0,0
      ]
    }
    
  ]
};