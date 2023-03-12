 var yAxisData = ['初中及以下', '中专', '专科', '高中', '文盲', '硕士、博士等', '本科']
option = {
    backgroundColor: 'transparent',
    tooltip: {
      formatter: '{b} ({c})'
    },
    grid: {
      left: '5%',
      right: '5%',
      bottom: '2%',
      top: '22%',
      containLabel: true
    },
    xAxis: [{
      type: 'value',
      axisLabel: {
        textStyle: {
          fontSize: 14,
          color: '#282828'
        }
      },
      splitLine: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: '#282828'
        }
      },
      axisTick: {
        show: false
      }
    }],
    yAxis: [{
      name: '单位:人',
      type: 'category',
      interval: 0,
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisLabel: {
        textStyle: {
          fontSize: 14,
          color: '#282828'
        }
      },
      data: yAxisData
    }],
    series: [{
      type: 'bar',
      barWidth: 10,
      showBackground: true,
      // 全部背景
      backgroundStyle: {
        color: '#E4E7ED'
      },
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
            offset: 0,
            color: '#679BFF'
          }, {
            offset: 0.8,
            color: '#639CFD'
          }], false),
          barBorderRadius: [0, 5, 5, 0]
        }
      },
      label: {
        normal: {
          show: true,
          position: 'right',
          textStyle: {
            color: '#00FFCD'
          }
        }
      },
      data: ['135', '764', '692', '834', '549', '734', '423']
    }

    ]
};