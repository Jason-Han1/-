var charts = {
    unit: 'KG',
    // names: ['原料收货量', '成品出库量'],
    names: ['原料收货量'],
    lineX: ['11/24 08:00',
            '11/24 09:00',
            '11/24 10:00',
            '11/24 11:00',
            '11/24 12:00',
            '11/24 13:00',
            '11/24 14:00',
            '11/24 15:00',
            '11/24 16:00',
            '11/24 17:00',
            '11/24 18:00',
            '11/24 19:00',
            '11/24 20:00',
],
    value: [
        [451, 352, 303, 534, 95, 236, 217, 328, 159, 151, 231, 192, 453, 524, 165, 236, 527, 328, 129, 530],
        // [360, 545, 80, 192, 330, 580, 192, 80, 250, 453, 352, 28, 625, 345, 65, 325, 468, 108, 253, 98]
    ]

}
// var color = ['rgba(23, 255, 243', 'rgba(255,100,97']
var color = ['rgba(255,100,97','rgba(23, 255, 243' ]
// var color = ['rgba(21,163,255','rgba(23, 255, 243' ]
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
        label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: color[x] ,
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
        yAxis: 5
    }, {
        yAxis: 5
    }, {
        yAxis: 5
    }, {
        yAxis: 5
    }]
}
var option = {
    // backgroundColor:'#0D2048',
    backgroundColor:'#081736',
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: charts.names,
        textStyle: {
            fontSize: 18,
            color: 'rgb(255,100,97,0.6)'
        },
        right: 'center',
        top:'8%'
    },
    grid: {
        top: '14%',
        left: '4%',
        right: '4%',
        bottom: '40%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: charts.lineX,
        axisLabel: {
            textStyle: {
                color: 'rgb(255,255,255,0.6)'
            },
            // formatter: function(params) {
            //     return params.split(' ')[0] + '\n' + params.split(' ')[1]
            // }
        }
    },
    yAxis: {
        name: charts.unit,
        type: 'value',
        axisLabel: {
            // formatter: '{value}',
            textStyle: {
                color: 'rgb(255,255,255,0.6)'
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
    series: lineY,
}
setInterval(() => {
    myChart.setOption({
      legend: {
        selected: {
          '原料卸货量': false,
          '成品出库量': false
        }
      }
    })
    myChart.setOption({
      legend: {
        selected: {
          '原料卸货量': true,
          '成品出库量': true
        }
      }
    })
},10000)