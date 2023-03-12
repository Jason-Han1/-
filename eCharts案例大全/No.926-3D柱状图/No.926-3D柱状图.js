// mock 数据
const dataArr = {
    xdata: ['01-01', '01-02', '01-03', '01-04', '01-05', '01-06', '01-07'],
    rateData: [90, 92, 98, 88, 96, 97, 94],
    disinfeced: [150, 320, 300, 210, 240, 180, 288],
    placeData: [320, 435, 490, 340, 320, 270, 360],
};

// series
const series = [
    {
        z: 3,
        name: '上部1',
        type: 'pictorialBar',
        symbolPosition: 'end',
        data: dataArr.placeData,
        symbol: 'diamond',
        symbolOffset: [0, '-50%'],
        symbolSize: [30, 20],
        itemStyle: {
            borderColor: '#2fffa4',
            borderWidth: 2,
            color: '#2fffa4',
        },
        silent: true,
    },
    {
        z: 1,
        type: 'bar',
        name: '场所数',
        barGap: '-100%',
        barWidth: 30,
        data: dataArr.placeData,
        itemStyle: {
            borderColor: '#2fffa4',
            borderWidth: 1,
            color: {
                type: 'linear',
                x: 0,
                x2: 1,
                y: 0,
                y2: 0,
                colorStops: [
                    { offset: 0, color: 'rgba(47,255,164,.2)' },
                    { offset: 0.5, color: 'rgba(47,255,164,.2)' },
                    { offset: 0.5, color: 'rgba(49,245,160,.7)' },
                    { offset: 1, color: 'rgba(49,245,160,.2)' },
                ],
            },
        },
    },
    {
        z: 2,
        name: '底部',
        type: 'pictorialBar',
        data: [1, 1, 1, 1, 1, 1, 1, 1],
        symbol: 'diamond',
        symbolOffset: [0, '50%'],
        symbolSize: [30, 20],
        itemStyle: {
            color: {
                type: 'linear',
                x: 0,
                x2: 1,
                y: 0,
                y2: 0,
                colorStops: [
                    { offset: 0, color: '#2fffa4' },
                    { offset: 0.5, color: '#2fffa4' },
                    { offset: 0.5, color: 'rgba(49,245,160,.7)' },
                    { offset: 1, color: '#31f5a0' },
                ],
            },
        },
        silent: true,
    },
    {
        z: 3,
        name: '上部1',
        type: 'pictorialBar',
        symbolPosition: 'end',
        data: dataArr.disinfeced,
        symbol: 'diamond',
        symbolOffset: [0, '-50%'],
        symbolSize: [30, 20],
        itemStyle: {
            borderColor: '#2fffa4',
            borderWidth: 2,
            color: '#2fffa4',
        },
        silent: true,
    },
    {
        z: 1,
        stack: '总量',
        type: 'bar',
        name: '已消杀',
        barWidth: 30,
        // barGap: '-100%',
        data: dataArr.disinfeced,
        itemStyle: {
            color: {
                type: 'linear',
                x: 0,
                x2: 1,
                y: 0,
                y2: 0,
                colorStops: [
                    { offset: 0, color: 'rgba(49,245,160,.7)' },
                    { offset: 0.5, color: 'rgba(49,245,160,.5)' },
                    { offset: 0.5, color: 'rgba(49,245,160,.5)' },
                    { offset: 1, color: 'rgba(49,245,160,.7)' },
                ],
            },
        },
    },
];
option = {
    backgroundColor: 'rgba(0, 0, 0, .8)',
    grid: { top: '10%', left: 0, right: 0, bottom: 0, containLabel: true },
    tooltip:{
        show:true,
        confine:true
    },
    legend: {
        data: ['场所数', '已消杀', '完成率'],
        textStyle: { fontSize: 14, color: '#fff' },
        itemWidth: 25,
        itemHeight: 15,
        itemGap: 15,
        top: 0,
    },
    xAxis: {
        axisTick: { show: true },
        axisLine: { lineStyle: { color: 'rgba(255,255,255, .2)' } },
        axisLabel: { textStyle: { fontSize: 12, color: '#fff' } },
        data: dataArr.xdata,
    },
    yAxis: {
        splitLine: { lineStyle: { color: 'rgba(255,255,255, .05)' } },
        axisLine: { show: false },
        axisLabel: { textStyle: { fontSize: 16, color: '#fff' } },
    },
    series: series,
};
