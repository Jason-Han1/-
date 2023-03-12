var config = {
    rem: document.documentElement.clientWidth / 12,
    color: '#000',
    title: {
        padding: 2,
        top: '15%',
        left: 'center'
    },
    series: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        pointer: {
            show: false
        },
        lineStyle: {
            show: false
        },
        label: {
            show: false
        }
    },
    data: {}
};

// 厂房人员监控
var numMax = 300;
var numMin = 0;
var numA = [120];//A
var numB = [80];//B
var numC = [60];//C
var numD = [210];//D
var numE = [60];//E
var numF = [120];//F

var opRadius = '30%';
var opCenter = [
    ["14%", "50%"],
    ["38%", "50%"],
    ["62%", "50%"],
    ["86%", "50%"],
]

var seriesProgress = {
    show: true,
    width: config.rem / 6
};
var seriesAxisLine = {
    show: true,
    lineStyle: {
        width: config.rem / 6
    }
};

option = {
    title: {
        text: '多仪表盘分页',
        textStyle: {
            color: config.color,
            fontSize: config.rem / 6 * 1.5
        },
        top: config.title.top,
        left: config.title.left,
        padding: config.title.padding
    },
    timeline: {
        show: true,
        data: ['1', '2'],
        top: "12%",
        left: "70%",
        rigth: "10%",
        symbol: "none",
        axisType: 'time',
        lineStyle: config.series.lineStyle,
        label: config.series.label,
        itemStyle: {
            borderWidth: 0
        },
        controlStyle: {
            show: true,
            showPlayBtn: false,
            itemSize: 0,
            itemGap: 0
        }
    },
    series: [
        {
            type: 'gauge',
            center: opCenter[0],
            radius: opRadius,
            startAngle: 210,
            endAngle: -30,
            min: numMin,
            max: numMax,
            progress: seriesProgress,
            axisLine: seriesAxisLine,
            axisTick: config.series.axisTick,
            splitLine: config.series.splitLine,
            axisLabel: config.series.axisLabel,
            pointer: config.series.pointer,
            itemStyle: {
                color: '#b20a2c'
            },
            detail: {
                color: config.color,
                fontWeight: 'normal',
                fontFamily: 'sans-serif',
                fontSize: config.rem / 4,
                lineHeight: config.rem / 4 * 1.2,
                offsetCenter: [0, 0],
                formatter: '{value}\n'
            },
        },
        {
            type: 'gauge',
            center: opCenter[1],
            radius: opRadius,
            startAngle: 210,
            endAngle: -30,
            min: numMin,
            max: numMax,
            progress: seriesProgress,
            axisLine: seriesAxisLine,
            axisTick: config.series.axisTick,
            splitLine: config.series.splitLine,
            axisLabel: config.series.axisLabel,
            pointer: config.series.pointer,
            itemStyle: {
                color: '#fc4a1a'
            },
            detail: {
                color: config.color,
                fontWeight: 'normal',
                fontFamily: 'sans-serif',
                fontSize: config.rem / 4,
                lineHeight: config.rem / 4 * 1.2,
                offsetCenter: [0, 0],
                formatter: '{value}\n'
            },
        },
        {
            type: 'gauge',
            center: opCenter[2],
            radius: opRadius,
            startAngle: 210,
            endAngle: -30,
            min: numMin,
            max: numMax,
            progress: seriesProgress,
            axisLine: seriesAxisLine,
            axisTick: config.series.axisTick,
            splitLine: config.series.splitLine,
            axisLabel: config.series.axisLabel,
            pointer: config.series.pointer,
            itemStyle: {
                color: '#f7b733'
            },
            detail: {
                color: config.color,
                fontWeight: 'normal',
                fontFamily: 'sans-serif',
                fontSize: config.rem / 4,
                lineHeight: config.rem / 4 * 1.2,
                offsetCenter: [0, 0],
                formatter: '{value}\n'
            },
        },
        {
            type: 'gauge',
            center: opCenter[3],
            radius: opRadius,
            startAngle: 210,
            endAngle: -30,
            min: numMin,
            max: numMax,
            progress: seriesProgress,
            axisLine: seriesAxisLine,
            axisTick: config.series.axisTick,
            splitLine: config.series.splitLine,
            axisLabel: config.series.axisLabel,
            pointer: config.series.pointer,
            itemStyle: {
                color: '#cac531'
            },
            detail: {
                color: config.color,
                fontWeight: 'normal',
                fontFamily: 'sans-serif',
                fontSize: config.rem / 4,
                lineHeight: config.rem / 4 * 1.2,
                offsetCenter: [0, 0],
                formatter: '{value}\n'
            },
        }
    ],
    options: [
        {
            series: [
                { data: numA },
                { data: numB },
                { data: numC },
                { data: numD}
            ]
        },{
            series: [
                {data: numE},
                {data: numF}
            ]
        }
    ]
};