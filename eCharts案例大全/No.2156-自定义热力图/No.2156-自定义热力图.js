var x = ['F>24', '18<F≤24', '12<F≤18', '6<F≤12', '0<F≤6'];
var y = ['R≤30', '30<R≤60', '60<R≤90', '90<R≤180', 'R>180'];

var data = [];
var min = Infinity;
var max = -Infinity;
var total = 0;

for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < y.length; j++) {
        const v = Math.trunc(Math.random() * 1e3);
        if (v < min) {
            min = v;
        }
        if (v > max) {
            max = v;
        }
        data.push([i, j, v]);
        total += v;
    }
}

option = {
    tooltip: {},
    grid: [
        {
            containLabel: false,
            top: '15%',
            right: '30%',
            bottom: '30%',
            left: '10%',
        },
        {
            containLabel: false,
            top: '15%',
            right: '5%',
            bottom: '30%',
            left: '75%',
        },
        {
            containLabel: false,
            top: '80%',
            right: '30%',
            bottom: '10%',
            left: '10%',
        },
        {
            containLabel: false,
            top: '80%',
            right: '5%',
            bottom: '10%',
            left: '75%',
        },
    ],
    xAxis: [
        {
            type: 'category',
            name: '到站次数(F)',
            gridIndex: 0,
            nameGap: 0,
            nameTextStyle: {
                align: 'center',
                verticalAlign: 'top',
                padding: [14, 0, 0, 0],
                color: '#444',
            },
            data: x,
            axisLabel: {
                margin: 14,
                color: '#666',
            },
            splitArea: {
                show: true,
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
        },
        {
            type: 'category',
            gridIndex: 1,
            position: 'top',
            data: ['行合计'],
            axisLabel: {
                margin: 14,
                color: '#666',
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
        },
        {
            type: 'category',
            gridIndex: 2,
            show: false,
        },
        {
            type: 'category',
            gridIndex: 3,
            show: false,
        },
    ],
    yAxis: [
        {
            type: 'category',
            name: '最新到站(R)',
            gridIndex: 0,
            nameGap: 0,
            nameTextStyle: {
                align: 'right',
                verticalAlign: 'bottom',
                padding: [0, 14, 0, 0],
                color: '#444',
            },
            data: y,
            axisLabel: {
                margin: 14,
                color: '#666',
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
        },
        {
            type: 'category',
            gridIndex: 1,
            show: false,
        },
        {
            type: 'category',
            gridIndex: 2,
            data: ['列合计'],
            axisLabel: {
                margin: 14,
                color: '#666',
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
        },
        {
            type: 'category',
            gridIndex: 3,
            axisLabel: {
                show: false,
                margin: 14,
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
        },
    ],
    visualMap: [
        {
            min: 0,
            max: max,
            seriesIndex: 0,
            padding: 0,
            calculable: true,
            orient: 'horizontal',
            inverse: true,
            top: '5%',
            right: '30%',
            itemWidth: 18,
            itemHeight: 114,
            inRange: {
                color: ['#99d7ff', '#007bcb'],
                symbolSize: [100, 100],
            },
            text: ['高', '低'],
            textGap: 8,
            textStyle: {
                color: '#666',
            },
        },
    ],
    series: [
        {
            name: 'Punch Card',
            type: 'heatmap',
            data: data,
            gridIndex: 0,
            xAxisIndex: 0,
            yAxisIndex: 0,
            label: {
                show: true,
                formatter: (p) => {
                    const v = p.value[2];
                    return `${v} | ${((v / total) * 100).toFixed(2)}%`;
                },
                color: '#333',
            },
            itemStyle: {
                borderWidth: 2,
                borderColor: '#fff',
            },
        },
        {
            name: 'Punch Card',
            type: 'heatmap',
            data: [
                [
                    0,
                    0,
                    data.reduce((r, e) => {
                        if (e[1] === 0) {
                            r += e[2];
                        }
                        return r;
                    }, 0),
                ],
                [
                    0,
                    1,
                    data.reduce((r, e) => {
                        if (e[1] === 1) {
                            r += e[2];
                        }
                        return r;
                    }, 0),
                ],
                [
                    0,
                    2,
                    data.reduce((r, e) => {
                        if (e[1] === 2) {
                            r += e[2];
                        }
                        return r;
                    }, 0),
                ],
                [
                    0,
                    3,
                    data.reduce((r, e) => {
                        if (e[1] === 3) {
                            r += e[2];
                        }
                        return r;
                    }, 0),
                ],
                [
                    0,
                    4,
                    data.reduce((r, e) => {
                        if (e[1] === 4) {
                            r += e[2];
                        }
                        return r;
                    }, 0),
                ],
            ],
            gridIndex: 1,
            xAxisIndex: 1,
            yAxisIndex: 1,
            label: {
                show: true,
                formatter: (p) => {
                    const v = p.value[2];
                    return `${v} | ${((v / total) * 100).toFixed(2)}%`;
                },
                color: '#333',
            },
            itemStyle: {
                borderWidth: 2,
                borderColor: '#fff',
                color: '#E0EAFB',
            },
        },
        {
            name: 'Punch Card',
            type: 'heatmap',
            data: [
                [
                    0,
                    0,
                    data.reduce((r, e) => {
                        if (e[0] === 0) {
                            r += e[2];
                        }
                        return r;
                    }, 0),
                ],
                [
                    1,
                    0,
                    data.reduce((r, e) => {
                        if (e[0] === 1) {
                            r += e[2];
                        }
                        return r;
                    }, 0),
                ],
                [
                    2,
                    0,
                    data.reduce((r, e) => {
                        if (e[0] === 2) {
                            r += e[2];
                        }
                        return r;
                    }, 0),
                ],
                [
                    3,
                    0,
                    data.reduce((r, e) => {
                        if (e[0] === 3) {
                            r += e[2];
                        }
                        return r;
                    }, 0),
                ],
                [
                    4,
                    0,
                    data.reduce((r, e) => {
                        if (e[0] === 4) {
                            r += e[2];
                        }
                        return r;
                    }, 0),
                ],
            ],
            gridIndex: 2,
            xAxisIndex: 2,
            yAxisIndex: 2,
            label: {
                show: true,
                formatter: (p) => {
                    const v = p.value[2];
                    return `${v} | ${((v / total) * 100).toFixed(2)}%`;
                },
                color: '#333',
            },
            itemStyle: {
                borderWidth: 2,
                borderColor: '#fff',
                color: '#E0EAFB',
            },
        },
        {
            name: 'Punch Card',
            type: 'heatmap',
            data: [[0, 0, total]],
            gridIndex: 3,
            xAxisIndex: 3,
            yAxisIndex: 3,
            label: {
                show: true,
                formatter: (p) => {
                    const v = p.value[2];
                    return `${v} | ${((v / total) * 100).toFixed(2)}%`;
                },
                color: '#333',
            },
            itemStyle: {
                borderWidth: 1,
                borderColor: '#009afe',
                color: '#E0EAFB',
            },
        },
    ],
    backgroundColor: '#fff',
};
