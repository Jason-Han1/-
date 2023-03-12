var gridTop = 40;
var gridBottom = 50;
var gridLeft = 80;
var gridRight = 80;
var gridHeight = window.innerHeight - gridTop - gridBottom;
var textLineHeight = 12;

option = {
    grid: {
        top: gridTop,
        bottom: gridBottom,
        left: gridLeft,
        right: gridRight
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['11-1', '11-2', '11-3', '11-4', '11-5'],
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed'
            }
        },
        axisTick: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        max: 30,
        interval: 10,
        axisLabel: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed'
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    series: [{
        data: [10, 0, 30, 30, 20],
        type: 'line',
        symbolSize: 10,
        label: {
            show: true,
            backgroundColor: 'auto',
            color: '#fff',
            padding: [4, 10],
            borderRadius: 3
        },
        itemStyle: {
            color: '#2277ff',
            borderWidth: 3
        },
        lineStyle: {
            color: '#2277ff'  
        },
        areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(0, 158, 168, 0.8)'
            }, {
                offset: 1,
                color: 'rgba(0, 70, 231, 0.4)'
            }])
        }
    }],
    visualMap: {
        min: 0,
        max: 30,
        splitNumber: 2,
        color: ['#2277ff', '#ff0055'],
        type: 'piecewise',
        show: false
    },
    graphic: {
        elements: [{
            type: 'text',
            top: gridTop + gridHeight / 3 * 2.5 - textLineHeight / 2,
            left: gridLeft - 40,
            style: {
                text: '轻度',
            }
        }, {
            type: 'text',
            top: gridTop + gridHeight / 3 * 1.5 - textLineHeight / 2,
            left: gridLeft - 40,
            style: {
                text: '中度',
            }
        }, {
            type: 'text',
            top: gridTop + gridHeight / 3 * 0.5 - textLineHeight / 2,
            left: gridLeft - 40,
            style: {
                text: '重度',
            }
        }]
    }
};
