var seven_day_date = new Date();
var seven_day_data = [];
for (var i = 0; i < 7; i++) {
    var month = seven_day_date.getMonth() + 1
    var day = seven_day_date.getDate()
    seven_day_date = new Date(seven_day_date.getTime() - 1000 * 60 * 60 * 24);
    seven_day_data.push(addZero(month) + '.' + addZero(day))
}
seven_day_data.reverse()
// 补零
function addZero(data) {
    if (data < 10) {
        data = '0' + data
    }
    return data
}
option = {
    backgroundColor: '#031A32',
    
    title: {
        text: '',
        textStyle: {
            align: 'center',
            color: '#1a2b3c',
            fontSize: 15,
        },
        top: '0',
        left: '8%',
    },
    grid: {
        top: "18%",
        bottom: "10%",
        right: "4%",
        left: '6%'
    },
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow",
            label: {
                show: true
            }
        }
    },
    legend: {
        top: "8%",
        right: "10%",
        textStyle: {
            color: "#ffffff",
            fontSize: 16
        }
    },
    xAxis: {
        data: seven_day_data,
        axisLine: {
            show: true //隐藏X轴轴线
        },
        axisTick: {
            show: true, //隐藏X轴刻度
            alignWithLabel: true
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#fff", //X轴文字颜色
                fontSize: 16
            }
        },
        axisLine: {
            lineStyle: {
                color: '#3c7bb7'
            }
        },
    },
    yAxis: [{
            type: "value",
            name: "数量",
            minInterval: 1,
            nameTextStyle: {
                color: "#fff"
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: "solid",
                    color: '#222'
                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#fff",
                    fontSize: 16
                }
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#FFFFFF'
                }
            },
        },
        {
            type: "value",
            name: "",
            nameTextStyle: {
                color: "#fff"
            },
            position: "",
            splitLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: true,
                formatter: "", //右侧Y轴文字显示
                textStyle: {
                    color: "#fff"
                }
            }
        },
        {
            type: "value",
            gridIndex: 0,
            min: 0,
            max: 100,
            splitNumber: 8,
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: ["rgba(35,166,174,0.0)"]
                }
            }
        }
    ],
    series: [{
            name: "设备1",
            type: "line",
            showAllSymbol: true,
            symbol: "circle",
            symbolSize: 10,
            itemStyle: {
                color: "#1DA1DA"
            },
            lineStyle: {
                color: "#1DA1DA",
            },
            data: [153, 63, 142, 214, 525, 143, 532]
            // data: options
        },
        {
            name: "设备2",
            type: "line",
            showAllSymbol: true,
            symbol: "circle",
            symbolSize: 10,
            itemStyle: {
                color: '#18C089'
            },
            lineStyle: {
                color: '#18C089'
            },
            data: [262, 254, 124, 131, 259, 134, 52]
            // data: options
        },
        {
            name: "设备3",
            type: "line",
            showAllSymbol: true,
            symbol: "circle",
            symbolSize: 10,
            itemStyle: {
                color: '#FF9900'
            },
            lineStyle: {
                color: '#FF9900'
            },
            data: [424, 674, 242, 153, 63, 365, 244]
            // data: options
        },
        {
            name: "设备4",
            type: "line",
            showAllSymbol: true,
            symbol: "circle",
            symbolSize: 10,
            itemStyle: {
                color: '#9932FF'
            },
            lineStyle: {
                color: '#9932FF'
            },
            data: [190, 214, 56, 435, 245, 256, 388]
            // data: options
        },
        {
            name: "设备5",
            type: "line",
            showAllSymbol: true,
            symbol: "circle",
            symbolSize: 10,
            itemStyle: {
                color: '#FF32FF'
            },
            lineStyle: {
                color: '#FF32FF'
            },
            data: [324, 224, 424, 231, 134, 331, 144]
            // data: options
        },
        {
            name: "设备6",
            type: "line",
            showAllSymbol: true,
            symbol: "circle",
            symbolSize: 10,
            itemStyle: {
                color: '#FF3200'
            },
            lineStyle: {
                color: '#FF3200'
            },
            data: [45, 124, 224, 131, 190, 174, 420]
            // data: options
        }
    ]
}