option = {
    backgroundColor:'#000',
    color: ['#224DEE', '#07A1B7', '#224DEE', 'rgb(121,175,38)', 'rgb(6,201,104)', '#be72d8', '#fff'],
    series: [{
      name: '统计',
      type: 'pie',
      radius: [15, 60],
      center: ['65%', '50%'],
      roseType: 'radius',
      grid: {
        left: '50%',
        top: '5%',
        right: '5%',
        bottom: '5%'
      },
      tooltip: {
        show: true
      },
      label: {
        show: true,
        formatter: '{b}',
        color: '#fff',
        fontSize: 14,
        padding: [5, -40, 0, 0]
      },
      labelLine: {
        show: false
      },
      emphasis: {
        label: {
          show: true
        }
      },
      data: [{
        value: 25,
        name: '0-18岁'
      }, {
        value: 20,
        name: '19-30岁'
      }, {
        value: 15,
        name: '31-40岁'
      }, {
        value: 10,
        name: '41-50岁'
      }, {
        value: 8,
        name: '51-60岁'
      }]
    }]
  };