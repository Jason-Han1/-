var charts = { // 按顺序排列从大到小
    cityList: ['38号点（1）', '38号点（2）', '15号点', '16号点', '24号点'],
    cityData: [7500, 6200, 5700, 4200, 3500]
}
var top10CityList = charts.cityList
var top10CityData = charts.cityData
var color = ['#ff9500', '#02d8f9', '#027fff']
var color1 = ['#ffb349', '#70e9fc', '#4aa4ff']

let lineY = []
let lineT = []
for (var i = 0; i < charts.cityList.length; i++) {
    var x = i
    if (x > 1) {
        x = 2
    }
    var data = {
        name: charts.cityList[i],
        color: color[x],
        value: top10CityData[i],
        barGap: '-100%',
        itemStyle: {
            normal: {
                show: true,
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: color[x]
                }, {
                    offset: 1,
                    color: color1[x]
                }], false),
                barBorderRadius: 10
            },
            emphasis: {
                shadowBlur: 15,
                shadowColor: 'rgba(0, 0, 0, 0.1)'
            }
        }
    }
    var data1 = {
        value: top10CityData[0],
        itemStyle: {
            color: '#001235',
            barBorderRadius: 10
        }
    }
    lineY.push(data)
    lineT.push(data1)
}

option = {
    backgroundColor: '#244f97',
    title: {
        show: false
    },
    tooltip: {
        trigger: 'item',
        formatter: (p) => {
            if (p.seriesName === 'total') {
                return ''
            }
            return `${p.name}<br/>${p.value}`
        }
    },
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
            show: true,
            inside: false,
            verticalAlign: 'bottom',
            lineHeight: '40',
            textStyle: {
                color: '#b3ccf8',
                fontSize: '14',
                fontFamily: 'PingFangSC-Regular'
            },
            formatter: function(val) {
                return `${val}`
            }
        },
        splitArea: {
            show: false
        },
        splitLine: {
            show: false
        },
        data: top10CityData
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
        name: 'total',
        type: 'bar',
        zlevel: 1,
        barGap: '-100%',
        barWidth: '10px',
        data: lineT,
        legendHoverLink: false
    }, {
        name: 'bar',
        type: 'bar',
        zlevel: 2,
        barWidth: '10px',
        data: lineY,
        label: {
            normal: {
                color: '#b3ccf8',
                show: true,
                position: [0, '-24px'],
                textStyle: {
                    fontSize: 16
                },
                formatter: function(a) {
                    let num = ''
                    let str = ''
                    if (a.dataIndex + 1 < 10) {
                        num = '0' + (a.dataIndex + 1);
                    } else {
                        num = (a.dataIndex + 1);
                    }
                    if (a.dataIndex === 0) {
                        str = `{color1|${num}} {color4|${a.name}}`
                    } else if (a.dataIndex === 1) {
                        str = `{color2|${num}} {color4|${a.name}}`
                    } else {
                        str = `{color3|${num}} {color4|${a.name}}`
                    }
                    return str;
                },
                rich: {
                    color1: {
                        color: '#ff9500',
                        fontWeight: 700
                    },
                    color2: {
                        color: '#02d8f9',
                        fontWeight: 700
                    },
                    color3: {
                        color: '#027fff',
                        fontWeight: 700
                    },
                    color4: {
                        color: '#e5eaff'
                    }
                }
            }
        }
    }],
}