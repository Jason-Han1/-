var charts = { // 按顺序排列从大到小
    cityList: ['门禁1', '门禁2', '门禁3', '门禁4', '门禁5', '门禁6', '门禁7', '门禁8', '门禁9', '门禁10'],
    cityData: [12, 9, 7, 6, 6, 5,4, 3, 2, 1, ]
}

var top10CityList = charts.cityList;
var top10CityData = charts.cityData;
var color = [
    '#FDD56A',
    '#20D3AB',
    '#49CCFF',] 
var color1 = [
    '#FDD56A',
    '#20D3AB',
    '#49CCFF',]
var color2 = [
    '#FDD56A22',
    '#20D3AB22',
    '#49CCFF22',]

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
                borderWidth: 2,
                shadowBlur: 10,
                borderColor: color2[x],
                shadowColor: color[x],
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: color[x]
                }, {
                    offset: 1,
                    color: color1[x]
                }], false),
                barBorderRadius: 10
            }, 
        }
    } 
    var data1 = { 
        color: color[x],
        value: top10CityData[i],
        barGap: '-100%',
        itemStyle: {
            color: '#00123500', //剩余部分颜色
            barBorderRadius: 10
        },
        label: {
            show: true,
            formatter: '{a|' + top10CityData[i] + '次}',
            position: 'right',
            color:color[x],
            distance: 20,
            rich: {
                a: {
                    color: color[x],
                    borderColor: color[x],
                    borderWidth: 0.5, 
                    padding: [1, 10, 1, 10], 
                    height: 18,
                    align: 'center',
                    verticalAlign: 'middle', 
                    backgroundColor: color2[x]
                }
            }
        },
    }
    lineY.push(data)
    lineT.push(data1)
}

option = {
    //backgroundColor: "#1F312F",
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
        right: '17%',
        bottom: '10%'
    },
  dataZoom: [{
        type: 'slider',
        yAxisIndex: 0,
        zoomLock: true,
        width: 10,
        height: '80%',
        handleSize: 0,
        showDetail: false,
        start: 0,
        end: 30,
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
        barGap: '-100%',
        barWidth: '15px',
        data: lineT,
        legendHoverLink: false
    }, {
        name: 'bar',
        type: 'bar', 
        barWidth: '15px',
        data: lineY,
        label: {
            normal: {
                color: '#b3ccf8',
                show: true,
                position: [0, '-20px'], 
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
                        color: '#FDD56A',
                fontSize: '14',
                        fontWeight: 700
                    },
                    color2: {
                        color: '#20D3AB',
                fontSize: '14',
                        fontWeight: 700
                    },
                    color3: {
                        color: '#49CCFF',
                fontSize: '14',
                        fontWeight: 700
                    },
                    color4: {
                        fontSize: '14',
                        fontWeight: 500,
                        color: '#fff'
                    }
                }
            }
        }
    }],
}