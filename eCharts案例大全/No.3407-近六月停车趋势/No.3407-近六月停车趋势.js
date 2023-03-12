const dataM = [20, 15, 40, 25, 35, 50,20, 15, 40, 25, 35, 50,20, 15, 40, 25, 35, 50,20, 15, 40, 25, 35, 50,20, 15, 40, 25, 35, 50,20, 15, 40, 25, 35, 50]
const dataU = [30, 30, 50, 40, 40, 60,30, 30, 50, 40, 40, 60,30, 30, 50, 40, 40, 60,30, 30, 50, 40, 40, 60,30, 30, 50, 40, 40, 60,30, 30, 50, 40, 40, 60]
const dataD = [15, 10, 20, 20, 25, 40,15, 10, 20, 20, 25, 40,15, 10, 20, 20, 25, 40,15, 10, 20, 20, 25, 40,15, 10, 20, 20, 25, 40,15, 10, 20, 20, 25, 40]
option = {
  title: {
    text: '近六月停车趋势',
    left: 'center'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      animation: false,
      label: {
        backgroundColor: '#ccc',
        borderColor: '#aaa',
        borderWidth: 1,
        shadowBlur: 0,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        color: '#222'
      }
    },
    formatter: function (params) {
      return `${params[2].axisValue} : ${params[2].value}`
    }
  },
  xAxis: {
    type: 'category',
    data: ['一月', '二月', '三月', '四月', '五月', '六月','一月', '二月', '三月', '四月', '五月', '六月','一月', '二月', '三月', '四月', '五月', '六月','一月', '二月', '三月', '四月', '五月', '六月','一月', '二月', '三月', '四月', '五月', '六月','一月', '二月', '三月', '四月', '五月', '六月','一月', '二月', '三月', '四月', '五月', '六月'],
    boundaryGap: false
  },
  yAxis: {
    type: 'value'
  },
  series: [{
    name: 'D',
    type: 'line',
    data: dataD,
    lineStyle: {
      opacity: 0
    },
    stack: 'confidence-band',
    symbol: 'none',
    smooth: false
  }, {
    name: 'U',
    type: 'line',
    data: dataU.map((item, index) => item - dataD[index]),
    lineStyle: {
      opacity: 0
    },
    areaStyle: {
      color: new echarts.graphic.LinearGradient(
                     0,
                     0,
                     0,
                     1,
                     [{
                             offset: 0,
                             color: 'rgba(236, 169, 44, 1)',
                         },
                         {
                             offset: 1,
                             color: 'rgba(236, 169, 44,0)',
                         },
                     ],
                     false
                 ),
    },
    stack: 'confidence-band',
    symbol: 'none',
    smooth: false
  }, {
    name: 'M',
    type: 'line',
    data: dataM,
    hoverAnimation: false,
    symbolSize: 6,
    itemStyle: {
      color: '#333'
    },
    showSymbol: false,
    smooth: false
  }]
}