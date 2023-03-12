var charts = {
    unit: '户数',
    names: ['新增户数', '注销户数'],
    lineX: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
    value: [
        [451, 352, 303, 334, 295, 236, 217, 328, 159, 151, 231, 192, 453, 524, 165, 236, 527, 328, 129, 530],
        [60, 45, 80, 92, 30, 80, 92, 80, 50, 53, 52, 28, 25, 45, 65, 25, 68, 18, 53, 98]
    ]

}
var color = ['rgba(104,186,148', 'rgba(255,213,103']
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
                    color: color[x] + ', 1)'
                }, {
                    offset: 0.8,
                    color: color[x] + ', 0.3)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowBlur: 10
            }
        },
        symbol: 'circle',
        symbolSize: 5,
        data: charts.value[i]
    }
    lineY.push(data)
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
        top: '50%',
        left: '4%',
        right: '4%',
        bottom: '12%',
        containLabel: true
    },
    xAxis: {
    
        type: 'category',
        boundaryGap: false,
        data: charts.lineX,
        axisLine: {
        
            lineStyle: {
                color: 'white'
            }
        },
        axisLabel: {
            textStyle: {
                color: 'white'
            },
            formatter: function(params) {
                return params.split(' ')[0] 
            }
        }
    },
    yAxis: {
        // name: charts.unit,
        splitNumber:3,
        type: 'value',
        axisLabel: {
            formatter: '{value}',
            textStyle: {
                color: 'white'
            }
        },
        splitLine: {
            show:false,
            lineStyle: {
                color: 'white'
            }
        },
        axisLine: {
        
            lineStyle: {
                color: 'white'
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