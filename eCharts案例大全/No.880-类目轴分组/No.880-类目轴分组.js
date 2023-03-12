var itemStyle = {
  normal: {},
  emphasis: {
    barBorderWidth: 1,
    shadowBlur: 10,
    shadowOffsetX: 0,
    shadowOffsetY: 0
  }
};
option = {
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    top: '30px',
    data: ['a', 'b', 'c', 'd', 'e'],
    textStyle: {
      color: '#ccc'
    }
  },
  dataset: {
    source: [
      ['index', 'a', 'b', 'c', 'd', 'e', 'f', 'g', ''],
      ['a', 320, 302, 301, 334, 390, 330, 320]
    ]
  },
  xAxis: [
    {
      type: 'category',
      axisLabel: {
        textStyle: {
          color: '#7edae8' //坐标的字体颜色
        }
      },
      position: 'bottom',
      axisPointer: {
        type: 'shadow'
      },
      axisTick: {
        show: true
      }
    },
    {
      type: 'category',
      data: ['0:00分', '0:10分', '0:20分', '0:30分'],
      axisLabel: {
        margin:30,
        textStyle: {
          color: '#7edae8' //坐标的字体颜色
        }
      },
      axisPointer: {
        type: 'shadow'
      },
      position: 'bottom',
      offset: 0,
      axisTick: {
        show: true,
        length: 60,
        lineStyle: {
          type: 'dotted'
        }
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      axisLabel: {
        textStyle: {
          color: '#7edae8'
        }
      }
    }
  ],
  series: [
    {
      type: 'bar',
      itemStyle: itemStyle,
      seriesLayoutBy: 'row',
      label: {
        normal: {
          show: true
        }
      }
    }
  ]
};
