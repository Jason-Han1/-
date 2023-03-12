var charts = { 
    cityList: ['1号', '2号'],
    cityData: [50, 60]
}
var top10CityList = charts.cityList
var top10CityData = charts.cityData
var color = ['rgba(248,195,248', 'rgba(100,255,249']
let lineY = []
for (var i = 0; i < charts.cityList.length; i++) {
    var x = i
    if (x > color.length - 1) {
        x = color.length - 1
    }
    var data = {
        name: charts.cityList[i],
        value: top10CityData[i],
        
    }
    lineY.push(data)
}
option = {
    backgroundColor: '#000',
    title: {
        show: false
    },
    // tooltip: {
    //     trigger: 'item'
    // },
    grid: {
        borderWidth: 0,
        top: '10%',
        left: '5%',
        right: '15%',
        bottom: '3%'
    },
    color: color,
    yAxis: [{
        type: 'category',
        inverse: true,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false,
            inside: false
        },
        data: top10CityList
    }, {
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false,
        },
        splitArea: {
            show: false
        },
        splitLine: {
            show: false
        },
        data: []
    }],
    xAxis: {
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        }
    },
    series: [{
        name: '',
        type: 'bar',
        zlevel: 2,
        barWidth: '30px',
        data: lineY,
        animationDuration: 1500,
        itemStyle: {
            normal: {
                color: {
                    type: 'linear',
                    x: 0,
                    x1: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgb(4, 168, 255)'
                    }, {
                        offset: 1,
                        color: '#00feff'
                    }]
                }
            },
        },
        label: {
            normal: {
                color: '#b3ccf8',
                show: true,
                position: [0, '-24px'],
                textStyle: {
                    fontSize: 16
                },
                formatter: function(a, b) {
                    return a.name
                }
            }
        }
    }, {
        name: '',
        type: 'bar',
        zlevel: 1,
        barWidth: '30px',
        barGap: '-98%',
        data: [100, 100],
        animationDuration: 1500,
        itemStyle: {
            normal: {

                color: "rgba(7, 61, 89,0.9)"
            },
        },
        label: {

            normal: {
                show: true,
                position: 'right',
                color: '#fff',
                fontSize: 16,
                formatter: function(param) {
                    console.log('param', lineY)
                    for (var i = 0; i < lineY.length; i++) {
                        if (param.name == lineY[i].name) {
                            return lineY[i].value / 100;
                        }
                    }
                },
            }

        }
    }],
    animationEasing: 'cubicOut'
}