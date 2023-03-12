// 多系列无法定位
var normalColor = "#94a1a9";
var colors = [{
    type: 'linear',
    x: 0,
    x2: 1,
    y: 0,
    y2: 0,
    colorStops: [{
        offset: 0,
        color: '#0a4368'
    }, {
        offset: 0.5,
        color: '#0a4368'
    }, {
        offset: 0.5,
        color: '#0a4368'
    }, {
        offset: 1,
        color: '#0a4368'
    }]
}, {
    type: 'linear',
    x: 0,
    x2: 1,
    y: 0,
    y2: 0,
    colorStops: [{
        offset: 0,
        color: 'rgba(10, 67, 104,0.6)'
    }, {
        offset: 0,
        color: '#fff'
    }, {
        offset: 0.05,
        color: 'rgba(10, 67, 104,0.6)'
    }, {
        offset: 0.5,
        color: 'rgba(10, 67, 104,0.6)'
    }, {
        offset: 0.5,
        color: '#fff'
    }, {
        offset: 0.55,
        color: 'rgba(10, 67, 104,0.6)'
    }, {
        offset: 0.95,
        color: 'rgba(10, 67, 104,0.9)'
    }, {
        offset: 1,
        color: '#fff'
    }]
}];


var barWidth = 80;

option = {
    animation: false, //去除加载时缓动动画
    backgroundColor: "#ccc",
    title: {
        text: ''
    },
    xAxis: {
        type: 'category',
        boundaryGap: true, // 坐标轴两边留白
        axisLabel: {
            color: normalColor,
            fontSize: 16,
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                type: "dashed",
                color: normalColor
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: "dashed",
                color: normalColor
            }
        },
        data: ['2016', '2017', '2018', '2019']
    },
    yAxis: [{
        name: "",
        type: 'value',
        // min: min,
        axisLine: {
            show: true,
            lineStyle: {
                color: normalColor,
            }
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            color: normalColor,
            fontSize: 16,
            margin: 25,
            formatter: '{value}'
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: "dashed",
                color: normalColor
            }
        },
    }, ],
    series: [{
        z: 1,
        type: 'bar',
        barWidth: barWidth,
        label: {
            show: true,
            position: "top",
            padding: 10,
            textStyle: {
                color:normalColor,
                fontSize: 30
            }
        },
        data: [220, 182, 191, 234],
        itemStyle: {
            normal: {
                color: colors[1]
            }
        },
    }, {
        z: 2,
        name: '底部',
        type: 'pictorialBar',
        data: [1, 1, 1, 1, 1, 1, 1],
        symbol: 'diamond',
        symbolOffset: [0, '50%'],
        symbolSize: [barWidth, 10],
        itemStyle: {
            normal: {
                color: colors[1],
                borderColor: '#fff',
                borderWidth: 2,
            }
        },
    }, {
        z: 3,
        name: '上部1',
        type: 'pictorialBar',
        symbolPosition: 'end',
        data: [220, 182, 191, 234],
        symbol: 'diamond',
        symbolOffset: [0, '-50%'],
        symbolSize: [barWidth - 4, 15 * (barWidth - 4) / barWidth],
        itemStyle: {
            normal: {
                borderColor: '#fff',
                borderWidth: 2,
                color: '#0a4368'
            }
        },
    }]
};