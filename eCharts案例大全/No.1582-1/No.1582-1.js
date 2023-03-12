option = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: '2019年全国汉服同胞年龄分布',
      type: 'pie',
      radius: ['40%', '70%'],
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
        { value: 7.16, name: '16岁以下' },
        { value: 23.15, name: '16-18岁' },
        { value: 51.71, name: '19-24岁' },
        { value: 16.87, name: '25岁-35岁' },
        { value: 10.5, name: '36-50岁' },
        { value: 0.04, name: '50岁以下' }
      ]
    }
  ]
};
