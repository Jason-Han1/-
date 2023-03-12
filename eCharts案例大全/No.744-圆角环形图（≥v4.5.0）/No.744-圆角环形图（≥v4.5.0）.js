option = {
    title: {
    text: '75',
    textStyle: {
      color: '#01c4a3',
      fontSize: 60
    },
    subtext: '总分：100分',
    subtextStyle: {
      color: '#909090',
    },
    itemGap: -10, // 主副标题距离
    left: 'center',
    top: 'center'
  },
  angleAxis: {
    max: 100, // 满分
    clockwise: false, // 逆时针
    // 隐藏刻度线
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      show: false
    },
    splitLine: {
      show: false
    }
  },
  radiusAxis: {
    type: 'category',
    // 隐藏刻度线
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      show: false
    },
    splitLine: {
      show: false
    }
  },
  polar: {
    center: ['50%', '50%'],
    radius: '100%' //图形大小
  },
  series: [{
    type: 'bar',
    data: [{
      name: '作文得分',
      value: 75,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
            offset: 0,
            color: '#aaf14f'
          }, {
            offset: 1,
            color: '#0acfa1'
          }])
        }
      },
    }],
    coordinateSystem: 'polar',
    roundCap: true,
    barWidth: 40,
    barGap: '-100%', // 两环重叠
    z: 2,
  },{ // 灰色环
    type: 'bar',
    data: [{
      value: 100,
      itemStyle: {
        color: '#e2e2e2',
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowBlur: 5,
        shadowOffsetY: 2
      }
    }],
    coordinateSystem: 'polar',
    roundCap: true,
    barWidth: 40,
    barGap: '-100%', // 两环重叠
    z: 1
  }]
};