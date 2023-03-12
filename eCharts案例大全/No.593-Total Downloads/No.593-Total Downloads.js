option = {
    backgroundColor:'#fff',
    title: {
    text: '65%',
    textStyle: {
      color: 'rgba(121, 52, 243, 1)',
      fontSize: 40,
      fontWeight:'400',
    },
    subtext: 'total',
    subtextStyle: {
      color: 'rgba(121, 52, 243, 1)',
      fontSize: 20,
      fontWeight:'100',
    },
    itemGap: -10,
    left: 'center',
    top: 'center'
  },
  angleAxis: {
    max: 100,
    clockwise: false, 
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
    radius: '100%'
  },
  series: [{
    type: 'bar',
    data: [{
      name: 'Total Downloads',
      value: 65,
      itemStyle: {
        normal: {
          color: 'rgba(121, 52, 243, 1)',
        }
      },
    }],
    coordinateSystem: 'polar',
    roundCap: true,
    barWidth: 20,
    barGap: '-100%', 
    z: 2,
  },{ 
    type: 'bar',
    data: [{
      value: 100,
      itemStyle: {
        color: 'rgba(121, 52, 243, 0.1)',
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowBlur: 5,
        shadowOffsetY: 2
      }
    }],
    coordinateSystem: 'polar',
    roundCap: true,
    barWidth: 10,
    barGap: '-70%',
    z: 1
  }]
};