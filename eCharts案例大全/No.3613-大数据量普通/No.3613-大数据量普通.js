const xAxisNum = 86400*2;
const lineNum = 30;
const xAxisData = [];
const series = [];

for (let i = 0; i < xAxisNum; i++) {
    xAxisData.push(`xxx-name-${i}`);
}

for (let i = 0; i < lineNum; i++) {
    const seriesData = [];
    for (let i = 0; i < xAxisNum; i++) {
        let num = Math.floor(Math.random() * (60 - 5 + 1) + 5);
        if (num > 20 && num < 35) num = '-';
        seriesData.push(num);
    }
    series.push({
        type: 'line',
        symbol: 'circle',
        symbolSize: 8,
        showAllSymbol: false,
        sampling: 'average',
        connectNulls: true,
        clipOverflow: false,
        clip: true,
        data: seriesData,
    });
}

console.log(xAxisData, series);

option = {
    color: [
        '#09cef8',
        '#fc0496',
        '#ed05f9',
        '#8005f3',
        '#fc0303',
        '#3b3bf0',
        '#24fc07',
        '#06fcb7',
        '#c7f804',
        '#f87704',
        '#5161db',
        '#54bfc0',
        '#F40AFC',
        '#51779A',
        '#D61EF6',
        '#807717',
        '#F79109',
        '#EB08D9',
        '#C955F0',
        '#C7ED23',
        '#2A53C4',
        '#D2F809',
        '#AAAA27',
        '#63A77C',
        '#8B0E88',
        '#FFCEF7',
        '#59F841',
        '#3204A4',
        '#40097C',
        '#61039C',
    ],
    grid: {
        left: '100px',
        top: '120px',
        right: '50px',
        bottom: '50px',
    },
    tooltip: {
        trigger: 'axis',
        confine: true,
    },
    legend: {
        type: 'scroll',
        itemHeight: 18,
        left: '100px',
        top: '70px',
        right: '60px',
        bottom: '60px',
        textStyle: { color: '#000' },
        pageTextStyle: { color: '#000' },
    },
    toolbox: {
        top: '10px',
        right: '60px',
        feature: {
            dataZoom: { yAxisIndex: 'none' },
            restore: {},
        },
    },
    xAxis: {
        type: 'category',
        splitLine: { show: false },
        axisLabel: { color: '#838eab' },
        axisLine: { onZero: false },
        data: xAxisData,
    },
    yAxis: {
        type: 'value',
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: { lineStyle: { type: 'dotted' } },
        axisLabel: { show: true },
        scale: true,
        boundaryGap: ['10%', '10%'],
    },
    dataZoom: [{ type: 'inside' }],
    series,
};
