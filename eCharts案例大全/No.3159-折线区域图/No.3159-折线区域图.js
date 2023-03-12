option = {
    backgroundColor:'#000E1A',
    grid: {
      top: '5%',
      bottom: '10%', // 也可设置left和right设置距离来控制图表的大小
      left: '10%',
      right: '0%'
    },
    // backgroundColor: '#1c2431', // 地图背景色
    color: ['#ff6b75', '#27b6ff'],
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    legend: {
      data: ['支出情况', '收入情况'],

      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        fontSize: 14,
        color: 'fff',
        padding: [3, 8, 0, 2]
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['2020-10',
        '2020-11',
        '2020-12',
        '2021-01',
        '2021-02',
        '2021-03',
        '2021-04',
        '2021-05'],
      axisLabel: {
        textStyle: {
          fontSize: '12',
          color: '#fff'
        }
      }
    },
    yAxis: {
      type: 'value',
      max: 520,
      axisLabel: {
        textStyle: {
          fontSize: '12',
          color: '#9babb3'
        }
      },
      'splitLine': {
        'lineStyle': {
          'type': 'dashed',
          color: 'rgba(255,225,225,0.2)'
        }
      }
    },
    // 因结构不同 vue版echarts请查看https://blog.csdn.net/qq_42221334/article/details/96315748
    series: [{
      name: '支出情况',
      data: [0, 180, 400, 300, 130, 150, 400, 100],
      type: 'line',
      symbol: 'none', // 取消折点圆圈
      areaStyle: {}
    },
    {
      name: '收入情况',
      data: [0, 500, 280, 180, 150, 300, 200, 0],
      type: 'line',
      symbol: 'none', // 取消折点圆圈
      areaStyle: {}
    }
    ]

  
};
