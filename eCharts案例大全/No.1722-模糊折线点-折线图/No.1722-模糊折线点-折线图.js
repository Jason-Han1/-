option = {
    backgroundColor: 'rgba(4, 28, 52, 1)',
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'none'
      },
      formatter: (params) => {
        let html = params[0].name + '<br>'
        for (let i = 0; i < params.length; i++) {
          html += params[i].marker + params[i].seriesName + ': ' + params[i].value
          html += '%' + '<br>'
        }
        return html
      }
    },
    grid: {
      left: '8%',
      right: '4%',
      top: '20%',
      bottom: '14%'
    },
    xAxis: {
      type: 'category',
      axisLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, .2)'
        }
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitArea: {
        show: false
      },
      axisLabel: {
        fontSize: 12,
        padding: [3, 0, 0, 0],
        color: 'rgba(168, 177, 187, 1)'
      },
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
      name: '合格率',
      nameTextStyle: {
        color: '#A8B1BB',
        fontSize: 12,
        padding: [0, 16, 0, 10]
      },
      type: 'value',
      splitLine: {
        lineStyle: {
          type: 'solid',
          color: 'rgba(105, 171, 202, 0.08)'
        }
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        interval: 0,
        color: '#A8B1BB',
        fontSize: 12,
        formatter: '{value}'
      },
      splitArea: {
        show: false
      }
    },
    series: [
      {
        name: '合格率',
        type: 'line',
        showAllSymbol: true,
        symbol: 'circle',
        symbolSize: 4,
        itemStyle: {
          color: '#3DF7E4',
          shadowColor: 'rgba(61, 247, 228, 0.46)',
          shadowBlur: 20,
          borderColor: 'rgba(61, 247, 228, 0.46)',
          borderWidth: 4
        },
        lineStyle: {
          width: 1,
          color: '#3DF7E4',
          shadowColor: 'rgba(61, 247, 228, 0.86)',
          shadowBlur: 20
        },
        data: [52, 43, 60, 44, 79, 60, 40]
      }
    ]
  }