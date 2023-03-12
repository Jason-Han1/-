const hexToRgba = (hex, opacity) => {
    let rgbaColor = "";
    let reg = /^#[\da-f]{6}$/i;
    if (reg.test(hex)) {
        rgbaColor = `rgba(${parseInt("0x" + hex.slice(1, 3))},${parseInt(
      "0x" + hex.slice(3, 5)
    )},${parseInt("0x" + hex.slice(5, 7))},${opacity})`;
    }
    return rgbaColor;
};

// 数据整理
let xData = ['模型NAME1', '模型NAME2', '模型NAME3', '模型NAME4' ];
  let yData = [4757, 3254, 2454, 2011, 1654 ];
let max = Math.max(...yData);
let labelColor = ['#FD5360', '#FF962B', '#FFAA00']
let emptyData = yData.map((v, i) => {
    let color = i > 2 ? '#2C6CD1' : labelColor[i];
    let item = {
        value: max,
        label: {
            formatter: '{a|' + v + '}',
            position: 'right',
            distance: 20,
            rich: {
                a: {
                    color: color,
                    borderColor: color,
                    borderWidth: 1,
                    borderType: 'dashed',
                    padding: [0, 0, 2, 0],
                    width: 60,
                    height: 18,
                    align: 'center',
                    verticalAlign: 'middle',
                    backgroundColor: hexToRgba(color, 0.05)
                }
            }

        }
    }
    return item
})
let xDataFormat = xData.map((v, i) => {
    let color = i > 2 ? '#2C6CD1' : labelColor[i];
    let item = {
        value: v,
        textStyle: {
            rich: {
                a: {
                    color: color,
                    width: 20,
                    height: 20,
                    align: 'center',
                    verticalAlign: 'middle',
                    backgroundColor: '#fff',
                    borderRadius: 10,
                    borderColor: hexToRgba(color, 0.2),
                    borderWidth: 1,
                    shadowColor: hexToRgba(color, 0.1),
                    shadowBlur: 5
                },
                b: {
                    padding: [0, 5]
                },
                value: {
                    color: '#2C6CD1'
                }
            }
        }
    }
    return item
})
xData.reverse();
xDataFormat.reverse();
yData.reverse();
emptyData.reverse();


option = {
    backgroundColor: '#fff',
    grid: {
        top: "5%",
        left: "1%",
        right: "15%",
        bottom: "3%",
        containLabel: true
    },
    xAxis: [{
        type: "value",
        splitLine: {
            show: true,
            lineStyle: {
            width: 0, 
                color: '#C7DEFF'
            }
        },
        max: function(value) {
            return value.max
        },
        axisLine: {
            lineStyle: {
            width: 2,
                color: '#C7DEFF'
            }
        },
        axisLabel: {
            color: '#2C6CD1'
        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [{
        type: "category",
        name: "",
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
            width: 2, 
                color: '#C7DEFF'
            }
        },
        axisLabel: {
            formatter: function(value) {
                // return '{a|' + value.substr(value.length - 1) + '}{b|}{value|' + value + '}'
            return ' {b|}{value|' + value + '}'
            }
        },
        data: xDataFormat
    }, {
        type: "category",
        name: "",
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisLine: {
            show: false
        },
        data: xData
    }],
    series: [{
            type: 'bar',
            barWidth: 40,
            yAxisIndex: 1,
            itemStyle: {
                normal: {
                    // barBorderRadius: [0, 6, 6, 0],
                    color: 'rgba(225,225,225,0.4)'
                },
                emphasis: {
                    // barBorderRadius: [0, 6, 6, 0],
                    color: 'rgba(225,225,225,0.4)'
                }
            },
            label: {
                show: true,
                position: 'right',
                formatter: function(a) {
                    console.log(a)
                }
            },
            data: emptyData
        },
        {
            type: 'bar',
            barWidth: 40,
            zlevel: 1,
            itemStyle: {
                normal: {
                    // barBorderRadius: [0, 6, 6, 0],
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                        offset: 0,
                        color: '#3B6ECA'
                    }, {
                        offset: 1,
                        color: '#C2E0FC'
                    }], false)
                }
            },
            data: yData
        }
    ]
};