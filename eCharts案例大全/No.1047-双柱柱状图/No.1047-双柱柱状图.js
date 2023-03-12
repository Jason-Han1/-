option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#990'
      }
    }
  },
  color: ['#c33531', '#2f4533'],
  legend: {
    data: ['全口径税款金额', '一般口径税款金额']
  },
  xAxis: [
    {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisPointer: {
        type: 'shadow'
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '万元',
      min: 0,
      max: 250,
      interval: 50,
      axisLine: {
          show: true
      },
    },
  ],
  series: [
    {
      name: 'Evaporation',
      type: 'bar',
      label: {
          show: true,
          position: 'top',
          color: '#c33531'
      },
      data: [
        2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
      ]
    },
    {
      name: 'Precipitation',
      type: 'bar',
      label: {
          show: true,
          position: 'top',
          color: '#2f4533'
      },
      data: [
        2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
      ]
    }
  ]
};
