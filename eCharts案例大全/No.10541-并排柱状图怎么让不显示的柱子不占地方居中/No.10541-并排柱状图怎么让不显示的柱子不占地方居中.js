option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['ITV'],
      orient: 'horizontal',
      left: 0,
      top: 0,
      itemWidth: 21,
      itemHeight: 21,
      itemGap: 23,
      textStyle: {
        color: '#666',
        fontSize: 20,
        padding: [5, 0, 0, 0]
      }
    },
    grid: {
      // 上下左右边距
      left: 40,
      right: 0,
      top: 60,
      bottom: 30
    },
    xAxis: {
      type: 'category',
      axisLabel: {
        show: true,
        color: '#666',
        fontSize: '16'
      },
      axisTick: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: '#f0f0f0'
        }
      },
      data: ['省属', '深圳', '广州', '佛山', '东莞']
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: '#a4b9e3',
        fontSize: '16'
      },
      splitLine: { // 网格线
        lineStyle: {
          color: '#f0f0f0'
        }
      },
      axisTick: { // 刻度值线
        show: false
      },
      axisLine: { // x轴线
        show: false
      }
    },
    series: [
      // 天讯
      {
        name: 'ITV',
        type: 'bar',
        stack: '天讯',
        data: [, 70, 28, , 91],
        barWidth: '28',
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 1, 0, // 右/下/左/上
              [
                {offset: 0, color: '#b06bfa'},
                {offset: 1, color: '#cc54f0'}
              ]
            )
          }
        }
      },
      {
        name: '天讯',
        type: 'bar',
        stack: '天讯',
        data: [, 0, 0, , 0],
        label: {
          normal: {
            show: true,
            formatter (params) {
              console.log(params)
              return params.seriesName.replace(/.{1}(?!$)/g, (a) => a + '\n') // 每6个字符换行
            },
            position: 'top'
          }
        }
      },
      // 天讯 end
      // 广信
      {
        name: 'ITV',
        type: 'bar',
        stack: '广信',
        data: [84, , 28, 32, 91],
        barWidth: '28',
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 1, 0, // 右/下/左/上
              [
                {offset: 0, color: '#b06bfa'},
                {offset: 1, color: '#cc54f0'}
              ]
            )
          }
        }
      },
      {
        name: '广信',
        type: 'bar',
        stack: '广信',
        data: [0, , 0, 0, 0],
        label: {
          normal: {
            show: true,
            formatter (params) {
              console.log(params)
              return params.seriesName.replace(/.{1}(?!$)/g, (a) => a + '\n') // 每6个字符换行
            },
            position: 'top'
          }
        }
      },
      // 广信 end
      // 甘肃万维
      {
        name: 'ITV',
        type: 'bar',
        stack: '甘肃万维',
        data: [84, 70, , , 91],
        barWidth: '28',
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 1, 0, // 右/下/左/上
              [
                {offset: 0, color: '#b06bfa'},
                {offset: 1, color: '#cc54f0'}
              ]
            )
          }
        }
      }, {
        name: '甘肃万维',
        type: 'bar',
        stack: '甘肃万维',
        data: [0, 0, , , 0],
        label: {
          normal: {
            show: true,
            formatter (params) {
              console.log(params)
              return params.seriesName.replace(/.{1}(?!$)/g, (a) => a + '\n') // 每6个字符换行
            },
            position: 'top'
          }
        }
      }
      // 甘肃万维 end
    ]
  }