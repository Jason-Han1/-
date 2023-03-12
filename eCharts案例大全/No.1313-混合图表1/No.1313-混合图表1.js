let chartData = {
    xdata: ['01/01', '01/02', '01/03', '01/04', '01/05'],
    currentYearList: [10, 20, 30, 40, 50],
    lastYearList: [20, 10, 30, 40, 20],
    rateDataOne: [10, 40, 20, 30, 50],
};
let dataZoomFlag = false;
let zoomEnd = 100;
if (chartData.xdata.length > 6) {
    dataZoomFlag = true;
    zoomEnd = 60;
}
// tooltip
const tooltip = {
    trigger: 'axis',
    textStyle: {
        fontSize: '100%',
    },
    formatter: (params) => {
        let rander = params
            .map((item) =>
                item.seriesType !== 'pictorialBar'
                    ? `<div>${item.seriesName}: ${item.seriesType !== 'line' ? item.value : item.value + '%'}</div>`
                    : ''
            )
            .join('');
        return `
                    <div>${params[0].axisValue}</div>
                    ${rander}
                `;
    },
};
const dataZoom = [
    {
        show: dataZoomFlag,
        // realtime: true,
        height: 8,
        start: 0,
        textStyle: {
            show: false,
        },
        end: zoomEnd,
        borderColor: 'rgba(255,255,255,0.2)',
        backgroundColor: 'rgba(255,255,255,0.1)',
        bottom: '1%',
    },
    {
        type: 'inside',
        // realtime: true,
        start: 0,
        end: 100,
    },
];

const grid = {
    top: '40',
    left: '8%',
    right: '3%',
    height: '70%',
    width: '83%',
};
// xAxis
const xAxis = {
    axisTick: {
        show: false,
    },
    axisLine: {
        lineStyle: {
            color: 'rgba(255,255,255, .2)',
        },
    },
    axisLabel: {
        textStyle: {
            fontSize: 12,
            color: 'rgba(255,255,255, 1)',
        },
    },
    data: chartData.xdata,
};

// yAxis
const yAxis = [
    {
        name: '',
        nameTextStyle: {
            color: 'rgb(250,250,250,.7)',
            fontSize: 12,
            padding: [0, 25, 0, 0],
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        splitLine: {
            lineStyle: {
                type: 'dotted',
                color: 'rgba(255,255,255, .2)',
            },
        },
        axisLabel: {
            textStyle: {
                fontSize: 12,
                color: 'rgba(255,255,255, .7)',
            },
        },
    },
    {
        name: '%',
        nameTextStyle: {
            color: 'rgb(250,250,250,.7)',
            fontSize: 12,
            padding: [0, 0, 0, 40],
        },
        show: true,
        splitLine: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            textStyle: {
                fontSize: 12,
                color: 'rgba(255,255,255, .7)',
            },
        },
    },
];

// series
const series = [
    {
        z: 1,
        name: '上部1',
        type: 'pictorialBar',
        symbolPosition: 'end',
        data: chartData.currentYearList,
        symbol: 'diamond',
        symbolOffset: ['-25%', '-50%'],
        symbolSize: [9, 6],
        itemStyle: {
            borderColor: '#1AA0FF',
            color: '#1AA0FF',
        },
    },
    {
        z: 1,
        type: 'bar',
        name: '今年',
        barWidth: 10,
        barGap: '-50%',
        data: chartData.currentYearList,
        itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                    offset: 0,
                    color: 'rgba(26,160,255,.7)',
                },
                {
                    offset: 1,
                    color: 'rgba(3,14,55,0.6)',
                },
            ]),
        },
    },
    {
        z: 2,
        name: '上部1',
        type: 'pictorialBar',
        symbolPosition: 'end',
        data: chartData.lastYearList,
        symbol: 'diamond',
        symbolOffset: ['28%', '-50%'],
        symbolSize: [9, 6],
        itemStyle: {
            borderColor: '#1CD0BA',
            color: '#1CD0BA',
        },
    },
    {
        z: 2,
        type: 'bar',
        name: '去年',
        barWidth: 10,
        data: chartData.lastYearList,
        itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                    offset: 0,
                    color: 'rgba(28,208,186,.7)',
                },
                {
                    offset: 1,
                    color: 'rgba(3,14,55,0.6)',
                },
            ]),
        },
    },
    {
        z: 9,
        yAxisIndex: 1,
        name: '增幅',
        type: 'line',
        showAllSymbol: true,
        symbol: 'circle',
        symbolSize: 5,
        itemStyle: {
            color: '#FFBD46',
            width: 2,
            shadowColor: '#FFBD46',
            shadowBlur: 3,
        },
        lineStyle: {
            width: 1,
            color: '#FFBD46',
        },
        data: chartData.rateDataOne,
    },
];
option = {
    backgroundColor:"#313131",
    tooltip,
    dataZoom,
    xAxis,
    yAxis,
    series,
    grid,
};
