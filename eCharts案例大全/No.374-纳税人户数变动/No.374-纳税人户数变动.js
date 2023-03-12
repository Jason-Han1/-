var charts = {
    unit: '户数',
    names: ['新增户数', '注销户数'],
    lineX: ['2012年','2013年','2014年','2015年','2016年','2017年','2018年'],
    value: [
        [451, 352, 303, 534, 95, 236, 217, 328, 159, 151, 231, 192, 453, 524, 165, 236, 527, 328, 129, 530],
        [360, 545, 80, 192, 330, 580, 192, 80, 250, 453, 352, 28, 625, 345, 65, 325, 468, 108, 253, 98]
    ]

}
var color = ['rgba(23, 255, 243', 'rgba(119,61,190']
var lineY = []

for (var i = 0; i < charts.names.length; i++) {
    var x = i
    if (x > color.length - 1) {
        x = color.length - 1
    }
    var data = {
        name: charts.names[i],
        type: 'line',
        color: color[x] + ')',
        smooth: true,
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: color[x] + ', 0.3)'
                }, {
                    offset: 0.8,
                    color: color[x] + ', 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        symbol: 'circle',
        symbolSize: 5,
        data: charts.value[i]
    }
    lineY.push(data)
}

lineY[0].markLine = {
    silent: true,
    data: [{
        yAxis: 5
    }, {
        yAxis: 100
    }, {
        yAxis: 200
    }, {
        yAxis: 300
    }, {
        yAxis: 400
    }]
}
var option = {
    backgroundColor:'#0d235e',
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: charts.names,
        textStyle: {
            fontSize: 12,
            color: 'rgb(0,253,255,0.6)'
        },
        right: '4%'
    },
    grid: {
        top: '14%',
        left: '4%',
        right: '4%',
        bottom: '12%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: charts.lineX,
        axisLabel: {
            textStyle: {
                color: 'rgb(0,253,255,0.6)'
            },
            formatter: function(params) {
                return params.split(' ')[0] 
            }
        }
    },
    yAxis: {
        name: charts.unit,
        type: 'value',
        axisLabel: {
            formatter: '{value}',
            textStyle: {
                color: 'rgb(0,253,255,0.6)'
            }
        },
        splitLine: {
            lineStyle: {
                color: 'rgb(23,255,243,0.3)'
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgb(0,253,255,0.6)'
            }
        }
    },
    series: lineY
}
setInterval(() => {
    myChart.setOption({
      legend: {
        selected: {
          '出口': false,
          '入口': false
        }
      }
    })
    myChart.setOption({
      legend: {
        selected: {
          '出口': true,
          '入口': true
        }
      }
    })
},10000)