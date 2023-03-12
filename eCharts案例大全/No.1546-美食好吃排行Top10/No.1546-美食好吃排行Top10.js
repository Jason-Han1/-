const keyArr = ['豆干', '薯片', '水煮鱼', '米饭', '炒粉', '黑森林', '臭豆腐', '蛋糕珍珠奶茶', '水晶油条', '辣椒炒肉']
const valueArr = [1000, 990, 890, 870, 860, 850, 740, 730, 720, 710]
const maxNum = Math.max(...valueArr.map(item => +item))
const bgNum = maxNum ? parseInt(maxNum / 0.8) : 100
option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'none'
    },
    formatter: function (params) {
      return params[0].name + '：' + params[0].value
    }
  },
  grid: {
    left: 0,
    right: '10%',
    bottom: '0',
    top: '10%',
    containLabel: true
  },
  title: {
    text: '美食好吃排行Top10',
    left: '0',
    top: 0,
    textStyle: {
      color: '#EAEFF5',
      fontSize: 14,
      fontWeight: 400
    }
  },
  xAxis: {
    type: 'value',
    position: 'top',
    max: bgNum,
    splitLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    axisLabel: {
      align: 'right',
      color: '#A2A2A2'
    }
  },
  yAxis: [{
      type: 'category',
      inverse: true,
      name: '味蕾',
      nameLocation: 'start',
      nameGap: 13,
      nameTextStyle: {
        color: '#A2A2A2',
        align: 'right',
        verticalAlign: 'middle',
        padding: [12, 12, 18, 18]
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: '#A2A2A2'
        },
        formatter: function (value) {
          return (value.length > 3 ? (value.slice(0, 2) + '...') : value)
        },
        margin: 10
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      data: keyArr
    },
    {
      type: 'category',
      inverse: true,
      axisTick: 'none',
      axisLine: 'none',
      show: true,
      zlevel: 2,
      axisLabel: {
        padding: [0, -45, 0, 0],
        align: 'right',
        textStyle: {
          color: '#EAEFF5',
          fontSize: '12'
        }
      },
      data: valueArr
    }
  ],
  series: [{
      name: '好吃',
      type: 'bar',
      zlevel: 1,
      itemStyle: {
        normal: {
          color: new this.echarts.graphic.LinearGradient(0, 0, 1, 0,
            [{
                offset: 0,
                color: '#4887FF'
              },
              {
                offset: 1,
                color: '#6538FE'
              }
            ], false),
          barBorderRadius: 15
        }
      },
      emphasis: {
        itemStyle: {
          color: new this.echarts.graphic.LinearGradient(0, 0, 1, 0,
            [{
                offset: 0,
                color: '#4887FF'
              },
              {
                offset: 1,
                color: '#6538FE'
              }
            ], false),
          barBorderRadius: 15
        }
      },
      barWidth: 15,
      data: valueArr
    },
    {
      name: '背景',
      type: 'bar',
      barWidth: 15,
      barGap: '-100%',
      data: [bgNum, bgNum, bgNum, bgNum, bgNum, bgNum, bgNum, bgNum, bgNum, bgNum],
      emphasis: {
        itemStyle: {
          color: 'rgba(160, 192, 252, .1)',
          barBorderRadius: 15
      }
    },
    itemStyle: {
      normal: {
        color: 'rgba(160, 192, 252, 0.1)',
        barBorderRadius: 15
      }
    }
  }]
};