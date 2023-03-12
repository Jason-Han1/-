// import echarts from 'echarts'

let charts = {
  names: ['今日', '昨日', '上周'],
  lineX: [],
  value: [[], [], []]
}
for (var i = 1; i < 25; i++) {
  charts.lineX.push(i + '')
}
for (var k = 1; k < 4; k++) {
  for (var m = 1; m < 25; m++) {
    charts.value[k - 1].push(300 * Math.random())
  }
}

var color = ['#16fb93', '#ffffff', '#76b2e5']
var lineY = []
var legendData = []
for (var j = 0; j < charts.names.length; j++) {
  var x = j
  if (x > color.length - 1) {
    x = color.length - 1
  }
  var data = {
    name: charts.names[j],
    type: 'line',
    color: color[x],
    data: charts.value[j]
  }
  lineY.push(data)
  var leg = {
    name: charts.names[j],
    textStyle: {
      fontSize: 16,
      color: color[x]
    }
  }
  legendData.push(leg)
}

option = {
    backgroundColor:'#000',
  title: {
    text: '|  高峰时段统计',
    left: '10%',
    textStyle: {
      fontSize: 16,
      color: '#fff'
    }
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: legendData
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    top: '14%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: charts.lineX,
    axisLabel: {
      textStyle: {
        color: '#fff'
      },
      formatter: function (params) {
        return params.split(' ')[0]
      }
    },
    axisTick: {
      show: false
    },
    // 坐标轴
    axisLine: {
      lineStyle: {
        color: '#397eb6'
      }
    }
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value}',
      textStyle: {
        color: '#fff'
      }
    },
    splitLine: {
      lineStyle: {
        color: '#183b58'
      }
    },
    axisLine: {
      lineStyle: {
        color: '#397eb6'
      }
    }
  },
  series: lineY
}
