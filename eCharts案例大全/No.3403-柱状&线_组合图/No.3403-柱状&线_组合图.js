option = {
    legend: {
        data: ['增长率', '数值'],
    },
    xAxis: [
        {
            type: 'category',
            data: ['桥北', '镜湖', '目澜', '山塘', '坛丘', '衡悦'],
        },
    ],
    yAxis: [
        {
            name: '单位：家',
            type: 'value',
        },
        {
            type: 'value',
            name: '合格率 (%)',
            position: 'right',
            axisLabel: {
                formatter: '{value} %',
            },
            splitLine: {
                show: false
            },
            max: 100,
        },
    ],
    series: [
        {
            type: 'bar',
            name: '数值',
            barWidth: '20',
            data: [6, 9, 10, 5, 7,9],
        },
        {
            type: 'line',
            name: '增长率',
            yAxisIndex: 1,
            symbolSize: 10,
            data: [89, 93, 95, 88, 90,99],
        },
    ],
};
