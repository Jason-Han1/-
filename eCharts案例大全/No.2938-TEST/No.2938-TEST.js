var data = [];
for (let i = 0; i < 5; ++i) {
    data.push(Math.round(Math.random() * 10));
}
var xData2 = ['A', 'B', 'C', 'D', 'E'];
var data1 = [100, 100, 100, 100, 100];
var data2 = [46, 32, 65, 75, 53];
var data3 = [0.01, 0.01, 0.01, 0.01, 0.01];
var data4 = [20, 20, 20, 20, 20];
option = {
    backgroundColor: '#b6bac5',
    tooltip: {
        trigger: 'item',
    },
    grid: {
        left: 100,
        bottom: 100,
    },
    xAxis: {
        show: false,
        axisLabel: {
            interval: 0,
            textStyle: {
                color: 'rgba(65, 49,28, .9)',
                fontSize: 30,
                fontFamily: 'FZYaoti',
                fontWeight: 100,
            },
            margin: 20,
        },
        splitLine: {
            show: false,
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: 'rgba(255, 255,255, .8)',
                width: 4,
            },
        },
        splitArea: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        data: ['A', 'B', 'C', 'D', 'E'],
    },
    yAxis: {
        show: false,
        axisLine: {
            lineStyle: {
                color: 'rgba(255, 255,255, .9)',
                width: 4,
            },
        },
        axisLabel: {
            interval: 0,
            textStyle: {
                color: '#42321c',
                fontSize: 20,
                fontFamily: 'FZYaoti',
            },
            margin: 20,
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: 'rgba(255, 255,255, .8)',
                width: 2,
            },
        },
        axisTick: {
            show: false,
        },
    },
    series: [
        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [70, 20],
            symbolOffset: [0, -10],
            z: 12,
            label: {
                show: true,
                formatter: '{c}%',
                position: 'top',
                distance: -20,
                color: '#fff',
                fontFamily: 'FZYaoti',
                fontWeight: 100,
                fontSize: 20,
            },
            itemStyle: {
                opacity: 1,
                color: function (params) {
                    var colorList = [
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#fdc668',
                            },
                            {
                                offset: 1,
                                color: '#ea8126',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#05e8b5',
                            },
                            {
                                offset: 1,
                                color: '#02b78d',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#51c4fb',
                            },
                            {
                                offset: 1,
                                color: '#2ea2dc',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#ff58ae',
                            },
                            {
                                offset: 1,
                                color: '#e22f8c',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#c937e4',
                            },
                            {
                                offset: 1,
                                color: '#a026b7',
                            },
                        ]),
                    ];
                    return colorList[params.dataIndex];
                },
            },
            symbolPosition: 'end',
            data: data,
        },
        {
            name: '',
            type: 'bar',
            barWidth: 70,
            barGap: '-100%',
            z: 10,
            itemStyle: {
                color: function (params) {
                    var colorList = [
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#ff6704',
                            },
                            {
                                offset: 0.3,
                                color: '#ff831f',
                            },
                            {
                                offset: 0.7,
                                color: '#ffad4b',
                            },
                            {
                                offset: 0.7,
                                color: '#ffd893',
                            },
                            {
                                offset: 0.85,
                                color: '#ffd893',
                            },
                            {
                                offset: 0.85,
                                color: '#ffbc5e',
                            },
                            {
                                offset: 1,
                                color: '#ffc664',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#0fae8b',
                            },
                            {
                                offset: 0.3,
                                color: '#01c49a',
                            },
                            {
                                offset: 0.7,
                                color: '#01e5b4',
                            },
                            {
                                offset: 0.7,
                                color: '#00f7da',
                            },
                            {
                                offset: 0.85,
                                color: '#00f7da',
                            },
                            {
                                offset: 0.85,
                                color: '#00f5be',
                            },
                            {
                                offset: 1,
                                color: '#0efbc7',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#229adf',
                            },
                            {
                                offset: 0.3,
                                color: '#2eb0ee',
                            },
                            {
                                offset: 0.7,
                                color: '#4dc0f5',
                            },
                            {
                                offset: 0.7,
                                color: '#95e1fb',
                            },
                            {
                                offset: 0.85,
                                color: '#95e1fb',
                            },
                            {
                                offset: 0.85,
                                color: '#61ccfa',
                            },
                            {
                                offset: 1,
                                color: '#6ad1fc',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#fa1181',
                            },
                            {
                                offset: 0.3,
                                color: '#fd359c',
                            },
                            {
                                offset: 0.7,
                                color: '#ff58b2',
                            },
                            {
                                offset: 0.7,
                                color: '#ffa3da',
                            },
                            {
                                offset: 0.85,
                                color: '#ffa3da',
                            },
                            {
                                offset: 0.85,
                                color: '#ff72c1',
                            },
                            {
                                offset: 1,
                                color: '#fe7bc7',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#932792',
                            },
                            {
                                offset: 0.3,
                                color: '#aa2cbd',
                            },
                            {
                                offset: 0.7,
                                color: '#bd30df',
                            },
                            {
                                offset: 0.7,
                                color: '#de6ff4',
                            },
                            {
                                offset: 0.85,
                                color: '#de6ff4',
                            },
                            {
                                offset: 0.85,
                                color: '#c532f3',
                            },
                            {
                                offset: 1,
                                color: '#c382de',
                            },
                        ]),
                    ];
                    return colorList[params.dataIndex];
                },
            },
            data: data,
        },
        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [70, 20],
            symbolOffset: [0, -10],
            z: 1,
            label: {
                show: false,
                formatter: '{c}',
                position: 'top',
                distance: -20,
                color: '#42321c',
                fontFamily: 'FZYaoti',
                fontWeight: 600,
                textShadowColor: 'rgba(255, 255, 255, .6)',
                fontSize: 18,
                textShadowBlur: '0',
                textShadowOffsetX: 1,
                textShadowOffsetY: 1,
            },
            itemStyle: {
                opacity: 1,
                color: function (params) {
                    var colorList = [
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#FFF',
                            },
                            {
                                offset: 1,
                                color: '#d5d9dc',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#FFF',
                            },
                            {
                                offset: 1,
                                color: '#d5d9dc',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#FFF',
                            },
                            {
                                offset: 1,
                                color: '#d5d9dc',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#FFF',
                            },
                            {
                                offset: 1,
                                color: '#d5d9dc',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#FFF',
                            },
                            {
                                offset: 1,
                                color: '#d5d9dc',
                            },
                        ]),
                    ];
                    return colorList[params.dataIndex];
                },
            },
            symbolPosition: 'end',
            data: data1,
        },
        {
            name: '',
            type: 'bar',
            barWidth: 70,
            barGap: '-100%',
            z: 0,
            itemStyle: {
                color: function (params) {
                    var colorList = [
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#d5d8db',
                            },
                            {
                                offset: 0.3,
                                color: '#e3e5e7',
                            },
                            {
                                offset: 0.8,
                                color: '#f7f7f7',
                            },
                            {
                                offset: 0.8,
                                color: '#fe831c',
                            },
                            {
                                offset: 0.85,
                                color: '#fe831c',
                            },
                            {
                                offset: 0.85,
                                color: '#f0f0f2',
                            },
                            {
                                offset: 1,
                                color: '#ffffff',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#d5d8db',
                            },
                            {
                                offset: 0.3,
                                color: '#e3e5e7',
                            },
                            {
                                offset: 0.8,
                                color: '#f7f7f7',
                            },
                            {
                                offset: 0.8,
                                color: '#05c499',
                            },
                            {
                                offset: 0.85,
                                color: '#05c499',
                            },
                            {
                                offset: 0.85,
                                color: '#f0f0f2',
                            },
                            {
                                offset: 1,
                                color: '#ffffff',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#d5d8db',
                            },
                            {
                                offset: 0.3,
                                color: '#e3e5e7',
                            },
                            {
                                offset: 0.8,
                                color: '#f7f7f7',
                            },
                            {
                                offset: 0.8,
                                color: '#008ee0',
                            },
                            {
                                offset: 0.85,
                                color: '#008ee0',
                            },
                            {
                                offset: 0.85,
                                color: '#f0f0f2',
                            },
                            {
                                offset: 1,
                                color: '#ffffff',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#d5d8db',
                            },
                            {
                                offset: 0.3,
                                color: '#e3e5e7',
                            },
                            {
                                offset: 0.8,
                                color: '#f7f7f7',
                            },
                            {
                                offset: 0.8,
                                color: '#fe2c99',
                            },
                            {
                                offset: 0.85,
                                color: '#fe2c99',
                            },
                            {
                                offset: 0.85,
                                color: '#f0f0f2',
                            },
                            {
                                offset: 1,
                                color: '#ffffff',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#d5d8db',
                            },
                            {
                                offset: 0.3,
                                color: '#e3e5e7',
                            },
                            {
                                offset: 0.8,
                                color: '#f7f7f7',
                            },
                            {
                                offset: 0.8,
                                color: '#a52bb2',
                            },
                            {
                                offset: 0.85,
                                color: '#a52bb2',
                            },
                            {
                                offset: 0.85,
                                color: '#f0f0f2',
                            },
                            {
                                offset: 1,
                                color: '#ffffff',
                            },
                        ]),
                    ];
                    return colorList[params.dataIndex];
                },
            },
            data: data1,
        },
        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [70, 25],
            symbolOffset: [0, 10],
            z: 3,
            itemStyle: {
                opacity: 1,
                color: function (params) {
                    var colorList = [
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#ff6704',
                            },
                            {
                                offset: 0.3,
                                color: '#ff831f',
                            },
                            {
                                offset: 0.7,
                                color: '#ffad4b',
                            },
                            {
                                offset: 0.7,
                                color: '#ffd893',
                            },
                            {
                                offset: 0.85,
                                color: '#ffd893',
                            },
                            {
                                offset: 0.85,
                                color: '#ffbc5e',
                            },
                            {
                                offset: 1,
                                color: '#ffc664',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#0fae8b',
                            },
                            {
                                offset: 0.3,
                                color: '#01c49a',
                            },
                            {
                                offset: 0.7,
                                color: '#01e5b4',
                            },
                            {
                                offset: 0.7,
                                color: '#00f7da',
                            },
                            {
                                offset: 0.85,
                                color: '#00f7da',
                            },
                            {
                                offset: 0.85,
                                color: '#00f5be',
                            },
                            {
                                offset: 1,
                                color: '#0efbc7',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#229adf',
                            },
                            {
                                offset: 0.3,
                                color: '#2eb0ee',
                            },
                            {
                                offset: 0.7,
                                color: '#4dc0f5',
                            },
                            {
                                offset: 0.7,
                                color: '#95e1fb',
                            },
                            {
                                offset: 0.85,
                                color: '#95e1fb',
                            },
                            {
                                offset: 0.85,
                                color: '#61ccfa',
                            },
                            {
                                offset: 1,
                                color: '#6ad1fc',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#fa1181',
                            },
                            {
                                offset: 0.3,
                                color: '#fd359c',
                            },
                            {
                                offset: 0.7,
                                color: '#ff58b2',
                            },
                            {
                                offset: 0.7,
                                color: '#ffa3da',
                            },
                            {
                                offset: 0.85,
                                color: '#ffa3da',
                            },
                            {
                                offset: 0.85,
                                color: '#ff72c1',
                            },
                            {
                                offset: 1,
                                color: '#fe7bc7',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#932792',
                            },
                            {
                                offset: 0.3,
                                color: '#aa2cbd',
                            },
                            {
                                offset: 0.7,
                                color: '#bd30df',
                            },
                            {
                                offset: 0.7,
                                color: '#de6ff4',
                            },
                            {
                                offset: 0.85,
                                color: '#de6ff4',
                            },
                            {
                                offset: 0.85,
                                color: '#c532f3',
                            },
                            {
                                offset: 1,
                                color: '#c382de',
                            },
                        ]),
                    ];
                    return colorList[params.dataIndex];
                },
                shadowColor: 'rgba(97, 107, 117, .7)',
                shadowBlur: 3,
                shadowOffsetX: 0,
                shadowOffsetY: 2,
            },
            data: [1, 1, 1, 1, 1],
        },
        {
            name: '',
            type: 'pictorialBar',
            symbol: 'rect',
            symbolSize: [70, 100],
            symbolOffset: [0, 50],
            z: -1,
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#d4d8db',
                        },
                        {
                            offset: 0.5,
                            color: '#e9eaec',
                        },
                        {
                            offset: 1,
                            color: '#FFF',
                        },
                    ],
                    global: false,
                },
            },
            data: data4,
        },
        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [70, 20],
            symbolOffset: [0, 40],
            z: -2,
            itemStyle: {
                opacity: 1,
                shadowBlur: 15,
                shadowColor: 'rgba(90, 96, 108, 1)',
                shadowOffsetY: 0,
                shadowOffsetX: 0,
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#d4d8db',
                        },
                        {
                            offset: 0.5,
                            color: '#e9eaec',
                        },
                        {
                            offset: 1,
                            color: '#FFF',
                        },
                    ],
                    global: false,
                },
            },
            symbolPosition: 'end',
            data: data3,
        },
    ],
};
function run () {
    var data = option.series[0].data;
    for (var i = 0; i < data.length; ++i) {
        if (Math.random() <= 100) {
            data[i] = Math.round(Math.random() * 60);
        }
        else {
            data[i] = Math.round(Math.random() * 80);
        }
    }
    myChart.setOption(option);
}

setTimeout(function() {
    run();
}, 0);
setInterval(function () {
    run();
}, 3000);