const xAxisNum = 86400;
const lineNum = 30;
const source = [];
const series = [];
const product = [];

for (let i = 0; i < xAxisNum; i++) {
    product.push(`xxx-name-${i}`);
}
source.push(product);
for (let i = 0; i < lineNum; i++) {
    const other = [];
    for (let j = 0; j < xAxisNum; j++) {
        let num = Math.floor(Math.random() * (60 - 5 + 1) + 5);
        if (num > 20 && num < 35) num = '-';
        other.push(num);
    }
    source.push(other);
    series.push({
        type: 'line',
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' },
        symbol: 'circle',
        symbolSize: 8,
        showAllSymbol: false,
        sampling: 'average',
        connectNulls: true,
        clipOverflow: false,
        clip: true,
    });
}

console.log(source);
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
    dataset: { source },
    xAxis: {
        type: 'category',
        splitLine: { show: false },
        axisLabel: { color: '#838eab' },
        axisLine: { onZero: false },
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
