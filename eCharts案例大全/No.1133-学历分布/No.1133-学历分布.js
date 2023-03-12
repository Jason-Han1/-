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
        { value: 1048, name: '本科以下' },
        { value: 735, name: '本科' },
        { value: 580, name: '研究生' },
        { value: 300, name: '研究生以上' }
      ]
    }
  ]
};
