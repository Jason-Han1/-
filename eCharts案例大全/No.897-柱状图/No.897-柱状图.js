const color = ['#5470c6', '#91cc75', '#fac858', '#ee6666'];
let _data = new Array(4).fill(null).map((v, i) => {
    return { name: '节目' + i, value: Math.round(Math.random() * 10000), ratio: (Math.random() * 100).toFixed(2) };
});

const series = [];
_data.forEach((item, i) => {
    series.push(
        {
            name: item.name,
            type: 'bar',
            data: [item.value, null],
            itemStyle: {
                color: color[i],
            },
        },
        {
            name: item.name + '-环比',
            type: 'bar',
            yAxisIndex: 1,
            xAxisIndex: 1,
            data: [null, item.ratio],
            itemStyle: {
                color: color[i],
            },
        }
    );
});

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
        formatter: (params) => {
            const trs = params
                .filter((item) => item.dataIndex === item.axisIndex)
                .map((item) => {
                    let val = item.value;
                    if (item.dataIndex === 0) val = val ? val.toLocaleString('en-US') : val;
                    if (item.dataIndex === 1) val += '%';
                    return `<tr><td>${item.marker} ${item.seriesName}</td><td style="padding-left: 20px;text-align: right">${val}</td></tr>`;
                });
            return `<table><tbody>${trs.join('')}</tbody></table>`;
        },
    },
    grid: [
        {
            left: 50,
            right: 50,
            bottom: '3%',
            containLabel: false,
        },
        {
            left: 50,
            right: 50,
            bottom: '3%',
            containLabel: false,
        },
    ],
    yAxis: [
        {
            data: ['累计', ''],
            gridIndex: 0,
            inverse: true,
        },
        {
            data: ['', '环比'],
            gridIndex: 1,
            inverse: true,
        },
    ],
    xAxis: [
        { type: 'value', gridIndex: 0, splitNumber: 5, position: 'top', name: '累计' },
        { type: 'value', gridIndex: 1, splitNumber: 5, position: 'bottom', name: '环比' },
    ],
    series,
};
