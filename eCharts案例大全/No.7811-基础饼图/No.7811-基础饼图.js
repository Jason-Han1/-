option = {
    title: {
      text: '合计',
      subtext: '总数个',
      textStyle: {
        fontSize: 20,
        color: 'black'
      },
      subtextStyle: {
        fontSize: 20,
        color: 'black'
      },
      textAlign: 'center',
      x: '50%',
      y: '45%'
    },
    legend: {
      top: '10%',
      left: '10%',
      data: ['数据一', '数据二', '数据三', '数据四']
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c}'
    },
    series: [{
      name: '基础饼图',
      type: 'pie',
      radius: ['50%', '70%'],
      label: {
        normal: {
          show: false
        },
        emphasis: {
          show: false
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      data: [
        {
          value: 312,
          name: '数据一'
        },
        {
          value: 210,
          name: '数据二'
        },
        {
          value: 334,
          name: '数据三'
        },
        {
          value: 225,
          name: '数据四'
        }
      ]
    }]
  }