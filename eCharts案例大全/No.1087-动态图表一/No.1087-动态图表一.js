data = {
    info: {
        title: '单位燃料及动力成本对比及趋势分析',
        subtitle: '组织分布（N-1级组织分布情况）',
        yAxis: {
            yAxisCount: 2,
            yAxisName: ['单位生产成本 （单位：元）', '单位燃料及动力成本变化率'],
            isPercent: [false, true],
        },
        series: {
            seriesCount: 4,
            stack: ['0', '1', '', ''],
            type: ['bar', 'bar', 'line', 'line'],
            yAxisIndex: [0, 0, 1, 1],
            color: ['#7494d4', '#bcdcfc', '#7494d4', '#bcdcfc'],
            isPercent: [false, false, true, true],
        },
    },
    results: [
        ['工业园', '单位动力成本', '单位燃料成本', '单位动力成本', '单位燃料成本'],
        ['5月', 280, 269, 0.9, 0.85],
        ['6月', 275, 269, 0.92, 0.9],
        ['7月', 270, 273, 1.1, 0.97],
        ['8月', 265, 265, 0.98, 0.95],
        ['9月', 260, 265, 0.9, 0.88],
    ],
};

const {
    info: {
        title,
        subtitle,
        yAxis: { yAxisCount, yAxisName, isPercent },
        series: { seriesCount, stack, type, yAxisIndex, color },
    },
    results,
} = data;

option = {
    title: {
        text: title,
        subtext: subtitle,
        textStyle: {
            color: 'black',
            fontWeight: 'bolder',
            fontSize: 20,
        },
        subtextStyle: {
            color: 'black',
            fontWeight: 'bolder',
            fontSize: 15,
        },
        left: '3%',
        top: '3%',
    },
    xAxis: {
        type: 'category',
    },
    dataset: {
        source: results,
    },
    grid: {
        left: '10%',
        right: '10%',
        top: '20%',
        bottom: '10%',
    },
    legend: {
        right: '10%',
        top: '10%',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
        formatter: (params) => {
            console.log(params);
            let html = '';
            html += `${params[0].axisValueLabel} <br>`;
            params.forEach((val, i) => {
                let value = val.value[val.encode.y[0]];
                const { marker, seriesName, seriesType } = val;
                if (seriesType === 'line') value = `${(value * 100).toFixed(2)}%`;
                if (seriesType === 'bar') value = value.toLocaleString('zh', { maximumFractionDigits: 2 });
                html += `${marker} ${seriesName}: ${value} <br>`;
            });
            return html;
        },
    },
};

let series = [];
for (let i = 0; i < seriesCount; i += 1) {
    series.push({
        stack: stack[i],
        type: type[i],
        yAxisIndex: yAxisIndex[i],
        itemStyle: { color: color[i] },
    });
}

let yAxis = [];
for (let i = 0; i < yAxisCount; i += 1) {
    yAxis.push({
        type: 'value',
        name: yAxisName[i],
        nameRotate: 90,
        nameLocation: 'center',
        nameGap: 40,
        nameTextStyle: {
            color: 'black',
            fontWeight: 'bolder',
            fontSize: 15,
        },
        scale: true,
        splitLine: {
            lineStyle: {
                color: 'white',
            },
        },
    });
}

option.series = series;
option.yAxis = yAxis;
