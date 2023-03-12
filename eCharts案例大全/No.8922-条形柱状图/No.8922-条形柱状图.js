// import echarts from 'echarts'
let charts = {
  xAxis: ['江东大队', '城区大队', '滨海大队', '江北大队', '高新大队', '沿江大队'],
  value: [896, 725, 648, 423, 409, 347]
}

let color = ['rgba(255,255,255)', 'rgba(255,255,255,0.1)']
let lineY = []

for (var i = 0; i < charts.xAxis.length; i++) {
  let x
  if (i === 0) {
    x = 0
  } else {
    x = 1
  }
  var data = {
    name: charts.xAxis[i],
    itemStyle: {
      borderColor: '#FFF',
      borderWidth: 1,
      color: color[x]
    },
    emphasis: {
      itemStyle: {
        borderColor: '#FFF',
        borderWidth: 1,
        color: color[x]
      }
    },
    value: charts.value[i]
  }
  lineY.push(data)
}
// console.log(lineY)
option= {
  backgroundColor: '#000',
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    },
    transitionDuration: 0
  },
  grid: {
    top: '15%',
    left: '8%',
    right: '8%',
    bottom: '15%'
  },
  color: '#fff',
  xAxis: [{
    type: 'category',
    data: charts.xAxis,
    axisTick: {
      show: false
    },
    axisLine: {
      lineStyle: {
        color: 'rgba(255,255,255,1)'
      }
    },
    axisLabel: {
      color: '#B1BCD2',
      textStyle: {
        fontSize: 12
      }
    }
  }],
  yAxis: [{
    axisLabel: {
      formatter: '{value}',
      color: '#B1BCD2'
    },
    axisLine: {
      show: false
    },
    splitLine: {
      lineStyle: {
        color: 'rgba(255,255,255,0.2)'
      }
    }
  }],
  series: [
    {
      name: '',
      type: 'bar',
      barWidth: 6,
      data: lineY,
      animationDuration: 1500,
      label: {
        normal: {
          color: '#fff',
          show: true,
          position: ['14px', '0'],
          textStyle: {
            fontSize: 12,
            fontStyle: 'italic',
            fontFamily: 'DINPro-Light'
          }
        }
      }
    }
  ]
}
