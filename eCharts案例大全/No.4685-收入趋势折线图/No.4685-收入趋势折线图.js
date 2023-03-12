var xdata = ['06.20', '06.21', '06.22', '06.23', '06.24', '06.25', '06.26'];
var dataArr = [20, 30, 30, 32, 40, 35, 23];
let splitLineColor = "rgba(9, 37, 66,.8)";
let color = "rgba(0,212,238,1)";
let areaColor = 'rgba(0, 228, 255,';
let showarea = 1;
let fontSize = 52;
let smooth = true;
let areaStyle = {
    normal: {
        opacity: showarea,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: areaColor + '0.2)'
        }, {
            offset: 0.8,
            color: areaColor + '0)'
        }], false),
        shadowColor: 'rgba(0, 228, 255, 0.05)',
        shadowBlur: 10
    }
};
option = {
    backgroundColor: '#000',
    title: {
        // text: 'Awesome Chart'
    },
    grid: {
        bottom: '10%'
    },
    legend: {
        right: 20,
        icon: 'line',
        textStyle: {
            color: '#fff', // 图例文字颜色
            fontSize: 16,
        }
    },
    tooltip: { // 提示框组件
        trigger: 'axis',
        show: true,
        formatter: function(params) {
            return params[0].name + "<br>" + params[0].data + '%';
        }
    },
    xAxis: {
        boundaryGap: true,
        axisLabel: {
            textStyle: {
                fontSize: fontSize,
                color: '#fff'
            },
        },
        axisLine: {
            lineStyle: {
                color: '#053162',
                width: 2
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: splitLineColor,

            }
        },
        data: xdata
    },
    yAxis: {
        max: 50,
        axisLabel: {
            formatter: '{value}%',
            color,
            fontSize: fontSize
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#65F5FD',
                // fontSize:33
            }
        },
        splitLine: {
            lineStyle: {
                color: splitLineColor,
                type: "dashed"
            }
        },
        axisTick: {
            show: false
        },
    },
    dataZoom: [{
        "show": true,
        "height": 12,
        "xAxisIndex": [
            0
        ],
        bottom: '5%',
        "start": 0,
        "end": 100,
        handleStyle: {
            color: "rgba(255,255,255,0)",
        },
        textStyle: {
            color: "#fff"
        },
        borderColor: "rgb(37, 38, 46)",
        fillerColor: "rgba(124, 125, 130.8)",
    }, {
        "type": "inside",
        "show": true,
        "height": 15,
        // "start": 1,
        // "end": 100
    }],
    series: [{
            // name: '完成量',
            type: 'line',
            smooth,
            symbol: "circle", //拐点的形状
            symbolSize: 15,
            itemStyle: {
                normal: {
                    lineStyle: {
                        //折点的颜色
                        color: color,
                        width: 5
                    },
                    color: "#fff", //拐点的颜色
                    borderColor: "#00E4FF", //拐点边框的颜色
                }
            },
            areaStyle: areaStyle,
            data: dataArr
        },

    ]
};