option = {
    grid: {
        width:200,
        height:200
    },
  series: [
    // 底部
    {
      name: '底层渲染',
      type: 'gauge',
      center: ['50%', '60%'],
      startAngle: 210,
      endAngle: -30,
      min: 0,
      max: 100,
      radius: '75%',
      splitNumber: 1,
      itemStyle: {
        color: '#ccc',
      },
      // 进度条
      progress: {
        show: false,
        width: 30,
        roundCap: false,
        clip: true,
      },
      // 指针
      pointer: {
        show: false
      },
      // 刻度基础条
      axisLine: {
        lineStyle: {
          width: 5,
          color: [
            [0.1, '#C5D7FF'],
            [1, '#C5D7FF']
          ],
        },
      },
      // 刻度
      axisTick: {
        distance: -23,
        splitNumber: 2,
        lineStyle: {
          width: 1,
          color: '#999'
        },
        show: false
      },
      // 刻度标签
      axisLabel: {
        distance: 10,
        color: '#999',
        fontSize: 10,
        show: true,
      },
      // 分割线
      splitLine: {
        distance: -23,
        length: 23,
        splitNumber: 1,
        lineStyle: {
          width: 5,
          color: '#C5D7FF'
        },
      },
      anchor: {
        show: false
      },
      title: {
        show: false
      },
      detail: {
        show: false,
      },
      data: [
        {
          value: 100
        }
      ]
    },
    // 顶部
    {
      name: 'value图表',
      type: 'gauge',
      center: ['50%', '60%'],
      startAngle: 207,
      endAngle: -27,
      min: 0,
      max: 100,
      radius: '88%',
      splitNumber: 80,
      itemStyle: {
        color: {
          type: 'linear',
          x: 1,
          y: 0,
          x2: 0,
          y2: 0,
          colorStops: [
            {
              offset: 0, color: '#FF07AF' // 0% 处的颜色
            },
            {
              offset: 0.125, color: '#FF0099' // 0% 处的颜色
            },
            {
              offset: 0.25, color: '#FF9700 ' // 0% 处的颜色
            },
            {
              offset: 0.65, color: '#78FF00' // 0% 处的颜色
            },
            {
              offset: 0.8, color: '#00F0FF' // 0% 处的颜色
            },
            {
              offset: 0.875, color: '#00C4FF' // 0% 处的颜色
            },
            {
              offset: 1, color: '#016CFF' // 100% 处的颜色
            }],
          global: false // 缺省为 false
        }
      },
      clockwise: true,
      progress: {
        show: true,
        width: 14,
        roundCap: false,
        clip: true
      },
      pointer: {
        show: false
      },
      axisLine: {
        lineStyle: {
          width: 14,
        },
        show: false,
      },
      axisTick: {
        distance: 0,
        splitNumber: 1,
        lineStyle: {
          width: 2,
          color: '#999'
        },
        show: false
      },
      radiusAxis: {

      },
      splitLine: {
        distance: -14,
        length: 14,
        lineStyle: {
          width: 1,
          color: '#C5D7FF'
        },
        show: true,
      },
      axisLabel: {
        distance: 40,
        color: '#5684FF',
        fontSize: 10,
        formatter: function (value) {
          let result = value
          if (value < 100 && value > 75) {
            result = '超低风险'
          } else if (value < 75 && value > 50) {
            result = '低风险'
          } else if (value < 50 && value > 25) {
            result = '中风险'
          } else if (value < 25 && value > 0) {
            result = '高风险'
          } else {
            result = value
          }
          return `{a|${result}}`
        },
        rich: {
          a: {
            color: '#5684FF',
            lineHeight: 10,
            fontSize: 10,
            align: 'center',
            verticalAlign: 'bottom',
          },
        },
        show: false
      },
      anchor: {
        show: false
      },
      title: {
        offsetCenter: [0, '-40%'],
        color: '#8F94A8',
        fontSize: 14,
        show: true,
        width: 80,
        overflow: 'break',
        lineHeight: 18,
      },
      detail: {
        valueAnimation: true,
        width: '70%',
        lineHeight: 40,
        borderRadius: 8,
        offsetCenter: [0, '20%'],
        fontSize: 30,
        fontWeight: 'bolder',
        formatter: function (value) {
          let result = '低风险'
          let resultClass = 'primary'
          if (value >= 75) {
            result = '超低风险'
            resultClass = 'primary'
          } else if (value < 75 && value >= 50) {
            result = '低风险'
            resultClass = 'primary'
          } else if (value < 50 && value >= 25) {
            result = '中风险'
            resultClass = 'warning'
          } else {
            result = '高风险'
            resultClass = 'danger'
          }
          return [`{value|${value}}\n{${resultClass}|${result}}`]
        },
        color: 'auto',
        rich: {
          value: {
            color: '#27314A',
            height: 50,
            lineHeight: 50,
            fontSize: 30,
            fontWeight: 'bolder',
          },
          primary: {
            height: 36,
            width: 90,
            lineHeight: 36,
            fontSize: 14,
            color: '#5684FF',
            borderColor: '#5684FF',
            borderRadius: 20,
            borderWidth: 1,
          },
          warning: {
            height: 36,
            width: 90,
            lineHeight: 36,
            fontSize: 14,
            color: '#FF9D0C',
            borderColor: '#FF9D0C',
            borderRadius: 20,
            borderWidth: 1,
          },
          danger: {
            height: 36,
            width: 90,
            lineHeight: 36,
            fontSize: 14,
            color: '#FF0074',
            borderColor: '#FF0074',
            borderRadius: 20,
            borderWidth: 1,
          }
        }
      },
      data: [{
        // 数据项的名称
        name: '互联网行为风险评分',
        // 数据项值8
        value: 80
      }]
    },
  ]
};
