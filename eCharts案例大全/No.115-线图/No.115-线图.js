option = {
  tooltip: {
    show: false,
    trigger: 'axis'
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '90%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    show: false,
    data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
  },
  yAxis: {
    type: 'value',
    show: false,
    splitLine: {
      show: false
    }
  },
  color: ['#000', '#000'],
  series: [
    {
      name: 'Step Start',
      type: 'line',
      step: 'start',
      showSymbol: false,
      areaStyle: {},
      data: [0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0]
    },
    {
      name: 'Step Start',
      type: 'line',
      step: 'start',
      showSymbol: false,
      areaStyle: {},
      data: [0,0,0,0,0,-1,-1,0,0,0,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,-1,-1,0,0,0,0,0,0,0,0,0,0,0,-1,0]
    }
  ]
};
