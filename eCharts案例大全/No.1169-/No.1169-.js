option = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '12%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['35%', '60%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '40',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: '18-29岁' },
        { value: 735, name: '30-39岁' },
        { value: 580, name: '40-49' },
        { value: 484, name: '50-59' },
        { value: 300, name: '60岁以上' }
      ]
    }
  ]
};