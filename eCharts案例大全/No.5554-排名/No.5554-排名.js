var charts = { // 按顺序排列从大到小
    cityList: ['杭州市', '宁波市', '温州市', '湖州市', '嘉兴市', '绍兴市', '金华市', '衢州市', '舟山市', '台州市'],
    cityData: [3, 2.86, 1.82, 1.8, 1.53, 1.47, 1.3, 1.25, 1.1, 1.02, ]
}

var top10CityList = charts.cityList;
var top10CityData = charts.cityData;
var color = ['#F73B3A', '#03D8F9', '#037FFF']
var color1 = ['#FFB249', '#70E9FC', '#4AA4FF']

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
            color: '#001235', //剩余部分颜色
            barBorderRadius: 10
        }
    }
    lineY.push(data)
    lineT.push(data1)
}

option = {
    //backgroundColor: '#011E45',
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
        top: '20px',
        left: '5%',
        right: '5%',
        bottom: '0%'
    },
  dataZoom: [{
        type: 'slider',
        yAxisIndex: 0,
        zoomLock: true,
        width: 10,
        handleSize: 0,
        showDetail: false,
        start: 0,
        end: 50,
        //handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '110%',
        handleStyle: {
            color: "#d3dee5",
        },
        borderColor: "rgba(225, 225, 225, 0)"
    }, {
        type: 'inside',
        id: 'insideY',
        yAxisIndex: 0,
        start: 0,
        end: 50,
        zoomOnMouseWheel: false,
        moveOnMouseMove: true,
        moveOnMouseWheel: true
    }],
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
            inside: false,
            verticalAlign: 'bottom',
            lineHeight: '20',
            textStyle: {
                color: '#fff',
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
                position: [0, '-15px'],
                textStyle: {
                    fontSize: 12
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
                        color: '#F73B3A',
                        fontWeight: 700
                    },
                    color2: {
                        color: '#03D8F9',
                        fontWeight: 700
                    },
                    color3: {
                        color: '#037FFF',
                        fontWeight: 700
                    },
                    color4: {
                        color: '#037FFF'
                    }
                }
            }
        }
    }],
}