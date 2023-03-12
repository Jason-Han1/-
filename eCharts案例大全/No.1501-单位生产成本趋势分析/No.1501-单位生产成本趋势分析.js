data = {
    info: {
        unit: '元',
    },
    results: [
        ['月份', '单位生产成本', '环比变动额'],
        ['1月', 60, 70],
        ['2月', 60, 70],
        ['3月', 50, 47],
        ['4月', 122, 122],
        ['5月', 60, 80],
        ['6月', 50, 101],
        ['7月', 42, 93],
        ['8月', 50, 47],
        ['9月', 60, 70],
        ['10月', 60, 80],
        ['11月', 40, 50],
        ['12月', 60, 70],
    ],
};

const { info, results } = data;

option = {
    title: {
        text: '单位生产成本趋势分析',
        textStyle: {
            color: 'black',
            fontSize: 20,
        },
        subtextStyle: {
            color: 'black',
            fontSize: 15,
        },
        left: '3%',
        top: '3%',
    },
    xAxis: {
        type: 'category',
    },
    yAxis: [
        {
            type: 'value',
            name: info.unit,
            splitLine: {
                show: false,
            },
        },
        {
            type: 'value',
            splitLine: {
                show: false,
            },
        },
    ],
    dataset: {
        source: results,
    },
    series: [
        {
            type: 'bar',
            barWidth: 30,
            itemStyle: {
                color: '#3ca4fc',
            },
        },
        {
            type: 'line',
            yAxisIndex: 1,
            symbolSize: 10,
            itemStyle: {
                color: '#44e4c4',
            },
        },
    ],
    grid: {
        left: '1%',
        right: '1%',
        top: '25%',
        bottom: '5%',
        containLabel: true,
    },
    legend: {
        right: '5%',
        top: '10%',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
        formatter: (params) => {
            let html = '';
            html += `${params[0].axisValueLabel} <br>`;
            params.forEach((val, i) => {
                let value = val.value[val.encode.y[0]];
                const { marker, seriesName, seriesType } = val;
                if (seriesType === 'bar') value = value.toLocaleString('zh', { maximumFractionDigits: 2 });
                html += `${marker} ${seriesName}: ${value} <br>`;
            });
            return html;
        },
    },
};
