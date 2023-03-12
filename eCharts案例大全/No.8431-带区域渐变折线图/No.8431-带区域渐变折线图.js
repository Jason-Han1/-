var normalColor = "#94a1a9";
var fontSize=20;
var datas = {
    xData: ["1", "2", "3", "4","5"],
    yData1: [200, 800, 300, 900,500],
    yData2: [300, 600, 100, 800,300],
    areaColor1: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: 'rgba(35, 63, 181, 1)'
    }, {
        offset: 0.8,
        color: 'rgba(2, 89, 120, 0.5)'
    }], false),
    areaColor2: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: 'rgba(95, 194, 114, 1)'
    }, {
        offset: 0.8,
        color: 'rgba(14, 108, 111, 0.5)'
    }], false),
    lineColor1:'rgb(59, 194, 244)',
     lineColor2:'rgb(107, 239, 150)',
}
option = {
    backgroundColor: '#000',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        }
    },
    legend: {
        itemWidth: 25,
        itemHeight:8,
        itemGap: 13,
        data: ['A', 'B'],
        textStyle: {
            fontSize:fontSize,
            color: '#fff'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: normalColor
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: "dashed",
                color: normalColor
            }
        }, axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: fontSize
            }
        },
        data: datas.xData
    }, ],
    yAxis: [{
        type: 'value',
        name: '',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: normalColor
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: fontSize
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: "dashed",
                color: normalColor
            }
        },
    }],
    series: [{
        name: 'A',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            normal: {
                width:2
            }
        },
        areaStyle: {
            normal: {
                color: datas.areaColor1,
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: datas.lineColor1,
                borderColor: 'rgba(137,189,2,0.27)',
                borderWidth: 12

            }
        },
        data: datas.yData1
    }, {
        name: 'B',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: datas.areaColor2,
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: datas.lineColor2,
                borderColor: 'rgba(0,136,212,0.2)',
                borderWidth: 12

            }
        },
        data: datas.yData2
    }, ]
};