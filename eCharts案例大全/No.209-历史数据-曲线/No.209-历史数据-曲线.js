var charts = {
    unit: '单位(km)',
    names: ['出口1'],
    lineX: ['2018-11-11 17:01', '2018-11-11 17:02', '2018-11-11 17:03', '2018-11-11 17:04', '2018-11-11 17:05', '2018-11-11 17:06', '2018-11-11 17:07', '2018-11-11 17:08', '2018-11-11 17:09', '2018-11-11 17:10', '2018-11-11 17:11', '2018-11-11 17:12', '2018-11-11 17:13', '2018-11-11 17:14', '2018-11-11 17:15', '2018-11-11 17:16', '2018-11-11 17:17', '2018-11-11 17:18', '2018-11-11 17:19', '2018-11-11 17:20'],
    value: [
        [360, 545, 80, 192, 330, 580, 192, 80, 250, 453, 352, 28, 625, 345, 65, 325, 468, 108, 253, 98]
    ]

}
var color = ['rgba(79, 237, 119']
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
      
        smooth: false,
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
        symbolSize: 9,
        data: charts.value[i]
    }
    
    lineY.push(data)
}

lineY[0].markLine = {
    silent: true,
    data: [{yAxis: 400}]
}
var option = {
    
     title: {
        text: '历史数据-曲线',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 16,
            color: '#F1F1F3'
        },
        left: '6%',
        top: '4%'
    },
    backgroundColor:'rgba(0, 0, 0, 0)',
    tooltip: {
        trigger: 'axis'
    },
    
    legend: {
           top: '4%',
        data: charts.names,
        textStyle: {
            fontSize: 14,
            color: 'F1F1F3'
        },
        right: '4%'
    },
    grid: {
        top: '10%',
        left: '4%',
        right: '4%',
        bottom: '10%',
        containLabel: true
    },
    xAxis: {
        show: true,
        type: 'category',
        boundaryGap: false,
        data: charts.lineX,
        axisLabel: {
            textStyle: {
                color: 'rgb(0,0,0)'
            },
            formatter: function(params) {
                return params.split(' ')[0] + '\n' + params.split(' ')[1]
            }
        }
    },
    yAxis: {
    show: true,
     splitArea: {
     show: true,
     areaStyle: {
        color:"rgba(0, 0, 0, 0)"
       }
     },
        name: charts.unit,
        type: 'value',
        axisLabel: {
            formatter: '{value}',
            textStyle: {
                color: 'rgb(0,0,0,0.6)'
            }
        },
        splitLine: {
            lineStyle: {
                color: 'rgb(0,0,0,0.3)'
            }
        },
        
        axisLine: {
            	show:true,
            lineStyle: {
                color: 'rgb(0,0,0,0.6)'
            }
        }
    },
    series: lineY
}
