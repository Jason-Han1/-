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
let xData = ['类别1', '类别2', '类别3', '类别4', '类别5', '类别6', '类别7', '类别8'];
let yData = [4757, 3254, 2454, 2011, 1654, 1211, 1211, 254];
let max = Math.max(...yData);
let labelColor = ['#FD5360', '#FF962B', '#FFAA00']
let emptyData = yData.map((v, i) => {
    let color = i > 2 ? '#1890FF' : labelColor[i];
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
    let color = i > 2 ? '#333333' : labelColor[i];
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
                    color: '#666666'
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
            show: false
        },
        max: function(value) {
            return value.max
        },
        axisLine: {
            lineStyle: {
                color: '#D9D9D9'
            }
        },
        axisLabel: {
            color: '#666'
        }
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
                color: '#D9D9D9'
            }
        },
        axisLabel: {
            formatter: function(value) {
                return '{a|' + value.substr(value.length - 1) + '}{b|}{value|' + value + '}'
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
            barWidth: 10,
            yAxisIndex: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: [0, 6, 6, 0],
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
            barWidth: 10,
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: [0, 6, 6, 0],
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                        offset: 0,
                        color: '#3D9FFF'
                    }, {
                        offset: 1,
                        color: '#41D7F3'
                    }], false)
                }
            },
            data: yData
        }
    ]
};