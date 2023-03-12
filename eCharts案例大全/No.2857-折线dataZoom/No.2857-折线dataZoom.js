var xData = function() {
    var data = [];
    for (var i = 1; i < 15; i++) {
        data.push(i + "日");
    }
    return data;
}();

option = {
    tooltip: {
        trigger: "axis",
        axisPointer: {
            // type: "",
            textStyle: {
                color: "#fff"
            }

        },
    },
    grid: {
        borderWidth: 0,
        top: 110,
        bottom: 95,
        textStyle: {
            color: "#fff"
        }
    },
    legend: {
        x: '46%',
        top: '11%',
        textStyle: {
            color: '#90979c',
        },
        data: ['A', 'B']
    },


    calculable: true,
    xAxis: [{
        type: "category",
        axisLine: {
            lineStyle: {
                color: "#000",
            }
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        data: xData,
    }],

    yAxis: [{
        type: "value",
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: "#000",
            }
        },

    }],
    dataZoom: [{
        show: true,
        height: 30,
        xAxisIndex: [0],
        bottom: 30,
        
        "start": 10,
        "end": 80,
        // handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '110%',
        handleStyle: {
            color: "red",
        },
        textStyle:{
            color:"rgba(204,187,225,0.5)",
        },
        fillerColor:"yellow",
        borderColor: "yellow",

    }, {
        type: "inside",
        show: true,
        height: 15,
        start: 1,
        end: 30
    }],
    series: [{
        name: "A",
        type: "line",
        symbolSize: 10,
        symbol: 'circle',
        itemStyle: {
            color: "red",
        },
        markPoint: {
            label: {
                normal: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            data: [{
                type: 'max',
                name: '最大值',

            }, {
                type: 'min',
                name: '最小值'
            }]
        },
        data: [
            100, 300, 400, 200, 300, 400, 500, 600, 700, 800, 700, 800,921, 632,890
        ],
    }, {
        name: "B",
        type: "line",
        symbolSize: 8,
        symbol: 'circle',
        itemStyle: {
            color: "green",
        },
        markPoint: {
            label: {
                normal: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            data: [{
                type: 'max',
                name: '最大值',

            }, {
                type: 'min',
                name: '最小值'
            }]
        },
        data: [00, 500, 400, 240, 350, 450, 500, 700, 700, 800, 900, 800,901, 502,700]
    }, ]
}