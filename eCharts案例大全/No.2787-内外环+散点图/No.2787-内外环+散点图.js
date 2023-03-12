const data1 = [
    [10, 10, '福鼎大白', '#BF54Fb', 65, 1600],
    [10, -10, '巴渝特早', '#BF54Fb', 60, 960],
    [-10, 10, '安吉白茶', '#5b6dc4', 50, 180],
    [0, -16, '青心乌龙', '#874ad2', 55, 80, 80],
    [0, 16, '梅', '#e85411', 45, 100],
    [-10, -10, '其他', '#e456a0', 40, 90],
];
const data2 = [
    [25, -25, '福鼎大白', '#f1b536', 80, 9000],
    [-25, -25, '巴渝特早', '#29bc40', 60, 7000],
    [0, 35, '其他', '#e456a0', 70, 1000],
];
// 计算总量
const data1AllNum = data1.reduce((pre, cur) => pre + cur[5], 0);
const data2AllNum = data2.reduce((pre, cur) => pre + cur[5], 0);

// 生成展示列表
const list1 = data1.reduce((pre, cur) => {
    let percent = ((cur[5] / data1AllNum) * 100).toFixed(2);
    return pre + `<div>${cur[2]}：${cur[5]} 亩(${percent}%)</div>`;
}, '</br>');
const list2 = data2.reduce((pre, cur) => {
    let percent = ((cur[5] / data2AllNum) * 100).toFixed(2);
    return pre + `<div>${cur[2]}：${cur[5]} 亩(${percent}%)</div>`;
}, '</br>');

option = {
    backgroundColor: '#020933',
    xAxis: [
        {
            show: false,
            type: 'value',
            min: -50,
            max: 50,
        },
    ],
    yAxis: [
        {
            min: -50,
            max: 50,
            show: false,
        },
    ],
    tooltip: {},
    series: [
        {
            zlevel: 20,
            type: 'scatter',
            symbol: 'circle',
            symbolSize: 150,
            label: {
                normal: {
                    show: true,
                    fontSize: 20,
                    formatter: function (param) {
                        return param.data[2];
                    },
                },
            },
            tooltip: {
                formatter: function (param) {
                    return param.data[2] + '： 共有' + data1AllNum + '亩' + list1;
                },
            },
            itemStyle: {
                normal: {
                    color: '#5aa8ee',
                },
            },
            data: [[0, 0, '核心区', '#278DFB', 10, data1AllNum]],
        },
        {
            zlevel: 20,
            type: 'scatter',
            symbol: 'circle',
            symbolSize: 1,
            label: {
                normal: {
                    show: true,
                    fontSize: 20,
                    formatter: function (param) {
                        return param.data[2];
                    },
                },
            },
            itemStyle: {
                normal: {
                    color: '#5aa8ee',
                },
            },
            data: [[-30, 0, '带动区', '#278DFB', data2AllNum]],
        },
        {
            zlevel: 20,
            name: '核心区',
            type: 'scatter',
            symbol: 'circle',
            symbolSize: function (param, a) {
                return param[4];
            },
            itemStyle: {
                color: function (param) {
                    return param.data[3];
                },
            },
            tooltip: {
                formatter: function (param) {
                    const { seriesName, marker, data } = param;
                    return (
                        seriesName +
                        '</br>' +
                        marker +
                        data[2] +
                        '：' +
                        data[5] +
                        ' 亩(' +
                        ((data[5] / data1AllNum) * 100).toFixed(2) +
                        '%)'
                    );
                },
            },
            label: {
                show: true,
                textStyle: {
                    fontSize: 12,
                },
                formatter: function (param) {
                    return param.data[2];
                },
            },
            data: data1,
        },
        {
            name: '带动区',
            zlevel: 20,
            type: 'scatter',
            symbol: 'circle',
            symbolSize: function (param, a) {
                return param[4];
            },
            itemStyle: {
                color: function (param) {
                    return param.data[3];
                },
            },
            tooltip: {
                formatter: function (param) {
                    const { seriesName, marker, data } = param;
                    return (
                        seriesName +
                        '</br>' +
                        marker +
                        data[2] +
                        '：' +
                        data[5] +
                        ' 亩(' +
                        ((data[5] / data2AllNum) * 100).toFixed(2) +
                        '%)'
                    );
                },
            },
            label: {
                show: true,
                textStyle: {
                    fontSize: 12,
                },
                formatter: function (param) {
                    return param.data[2];
                },
            },
            data: data2,
        },
        {
            type: 'pie',
            name: '核心区',
            radius: ['0', '45%'],
            center: ['50%', '50%'],
            zlevel: 2,
            tooltip: {
                formatter: function (param) {
                    const { seriesName, marker, data } = param;
                    return seriesName + '： 共有' + data1AllNum + '亩' + list1;
                },
            },
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0.05,
                                color: 'rgba(130,198,255, 0.1)',
                            },
                            {
                                offset: 0.5,
                                color: 'rgba(130,198,255, 0.2)',
                            },
                            {
                                offset: 0.95,
                                color: 'rgba(130,198,255, 0.1)',
                            },
                        ],
                    },
                },
            },
            data: [0],
        },
        {
            type: 'pie',
            name: '带动区',
            radius: ['0%', '90%'],
            center: ['50%', '50%'],
            tooltip: {
                formatter: function (param) {
                    const { seriesName, marker, data } = param;
                    return seriesName + '： 共有' + data2AllNum + '亩' + list2;
                },
            },
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0.1,
                                color: 'rgba(130,198,255, 0)',
                            },
                            {
                                offset: 0.5,
                                color: 'rgba(130,198,255, 0.2)',
                            },
                            {
                                offset: 0.9,
                                color: 'rgba(130,198,255, 0)',
                            },
                        ],
                    },
                },
            },
            data: [0],
        },
    ],
};
