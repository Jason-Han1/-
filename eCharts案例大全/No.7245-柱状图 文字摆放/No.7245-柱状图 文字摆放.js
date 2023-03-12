var charts = { // 按顺序排列从大到小
    cityList: ['华美', '爱博', '航华', '枢纽一', '枢纽二'],
    cityData: [7500, 6200, 5700, 4200, 3500],
    cityData1:[8000,8000,8000,8000,8000]
}
var color1 = ["#800000" , "#2E8B57", "#20B2AA","#DAA520","#8B008B"]
var color = ["#FF4500" , "#07F661", "#04FFFF","#FFD700","#DA70D6"]

let lineY = []
let lineT = []
for (var i = 0; i < charts.cityList.length; i++) {
   
    var data = {
        name: charts.cityData[i],
        color: color[i],
        value: charts.cityData[i],
        barGap: '-100%',
        itemStyle: {
            normal: {
                show: true,
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: color[i]
                }, {
                    offset: 1,
                    color: color1[i]
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
          name: charts.cityList[i],
        value: charts.cityData1[i],
        itemStyle: {
            color: '#001235',
            barBorderRadius: 10
        }
    }
    lineY.push(data)
    lineT.push(data1)
}

option = {
    backgroundColor:"#050d16",
    title: {
        show: false
    },
    tooltip: {
        trigger: 'item',
      show: false
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
        }
    }, {
        type: 'category',
         offset:-80,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            inside: false,
            verticalAlign: 'right',
            lineHeight: '-60',//行高无效得i情况 就用padding
            textStyle: {
                color: '#FFFFFF',
                fontSize: '22',
                fontFamily: 'PingFangSC-Regular',
                fontWeight: 500,
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
        },data:charts.cityData1
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
        barWidth: '30px',
        data: lineT,
        label: {
            normal: {
                color: '#b3ccf8',
                show: true,
                position: [0, '-24px'],
                textStyle: {
                    fontSize: 20
                },
                formatter: function(a) {
                    let num = ''
                    let str = ''
                    
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
                        fontWeight: 500,
                         fontSize: 20,
                    },
                    color2: {
                        color: '#02d8f9',
                        fontWeight: 500,
                         fontSize: 20,
                    },
                    color3: {
                        color: '#02d8f9',
                        fontWeight: 500,
                         fontSize: 20,
                    },
                    color4: {
                        color: '#e5eaff',
                         fontWeight: 500,
                         fontSize: 20,
                    }
                }
            }
        },hoverAnimation:false,
    }, {
        name: 'bar',
        type: 'bar',
        zlevel: 2,
        barWidth: '30px',
        data: lineY,
        label: {
            normal: {
                color: '#b3ccf8',
                show: true,
                position: ["50%", 5],
                textStyle: {
                    fontSize: 18
                },
                formatter: function(a) {
                    let num = ''
                    let str = ''
                    
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
                        fontWeight: 300,  fontSize: 18
                    },
                    color2: {
                        color: '#02d8f9',
                        fontWeight: 300,  fontSize: 18
                    },
                    color3: {
                        color: '#FFFF',
                        fontWeight: 300,  fontSize: 18
                    },
                    color4: {
                        color: '#e5eaff',  fontWeight: 300, fontSize: 18
                    }
                }
            }
        },hoverAnimation:false,
    }],
}