var data1 = [620, 580, 610, 640, 810, 800, 830];
var data2 = [210, 220, 290, 200, 205, 240, 230];
var data3 = [700, 840, 710, 690, 590, 640, 720];
var data4 = [400, 400, 400, 500, 400, 420, 470];
var data5 = [600, 620, 640, 620, 470, 530, 520];
var data6 = [480, 470, 490, 500, 840, 360, 502];
var xData = ['11月1日', '11月2日', '11月3日', '11月4日', '11月5日', '11月6日', '11月7日'];
var cp = ['CNC-1', 'CNC-2', 'CNC-3', 'CNC-4', 'CNC-5', 'CNC-6'];
option = {
    backgroundColor: '#000',
    title: {
        text: '近七天产量趋势',
        textStyle: {
            align: 'center',
            color: '#fff',
            fontSize: 28,
        },
        top: '5%',
        left: 'center',
    },
    grid: {
        borderWidth: 0,
        top: '24%',
        left: '6%',
        right: '6%',
        bottom: '10%',
        textStyle: {
            color: '#fff',
        },
    },
    legend: {
        top: '13%',
        textStyle: {
            fontSize: 20,
            fontFamily: 'MicrosoftYaHeiUI',
            color: '#FFFFFF',
        },
    },
    xAxis: [
        {
            type: 'category',
            axisLine: {
                show: true, //隐藏X轴轴线
                symbol: ['none', 'arrow'],
                lineStyle: {
                    color: '#fff',
                    width: 1,
                },
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitArea: {
                show: false,
            },
            axisLabel: {
                interval: 0,
                color: '#fff',
                fontSize: 20,
            },
            data: xData,
        },
    ],
    yAxis: [
        {
            type: 'value',
            splitLine: {
                show: true,
            },
            axisLine: {
                show: true, //隐藏X轴轴线
                symbol: ['none', 'arrow'],
                lineStyle: {
                    color: '#fff',
                    width: 1,
                },
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                interval: 0,
                color: '#fff',
                fontSize: 20,
                formatter: (params) => {
                    return params + '';
                },
            },
            splitArea: {
                show: false,
            },
        },
    ],
    series: [
        {
            name: cp[0],
            type: 'line',
            symbolSize: 10,
            symbol: 'circle',
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                        position: 'top',
                        formatter: (params) => {
                            return params.value + '%';
                        },
                        textStyle: {
                            fontSize: 12,
                            color: '#fff',
                        },
                    },
                    color: 'rgba(255, 196, 53, 1)',
                    barBorderRadius: 0,
                },
            },
            lineStyle: {
                normal: {
                    width: 4,
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#F0B62A', // 0% 处的颜色
                            },

                            {
                                offset: 1,
                                color: '#FFC12B', // 100% 处的颜色
                            },
                        ],
                        global: false, // 缺省为 false
                    },
                },
            },
            data: data1,
        },
        {
            name: cp[1],
            type: 'line',
            symbolSize: 10,
            symbol: 'circle',
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                        position: 'top',
                        formatter: (params) => {
                            return params.value + '%';
                        },
                        textStyle: {
                            fontSize: 12,
                            color: '#fff',
                        },
                    },
                    color: '#00CC99',
                    barBorderRadius: 0,
                },
            },
            lineStyle: {
                normal: {
                    width: 4,
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#00CC99', // 0% 处的颜色
                            },

                            {
                                offset: 1,
                                color: '#00CC99', // 100% 处的颜色
                            },
                        ],
                        global: false, // 缺省为 false
                    },
                },
            },
            data: data2,
        },
        {
            name: cp[2],
            type: 'line',
            symbolSize: 10,
            symbol: 'circle',
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                        position: 'top',
                        formatter: (params) => {
                            return params.value + '%';
                        },
                        textStyle: {
                            fontSize: 12,
                            color: '#fff',
                        },
                    },
                    color: '#33CCFF',
                    barBorderRadius: 0,
                },
            },
            lineStyle: {
                normal: {
                    width: 4,
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#33CCFF', // 0% 处的颜色
                            },

                            {
                                offset: 1,
                                color: '#33CCFF', // 100% 处的颜色
                            },
                        ],
                        global: false, // 缺省为 false
                    },
                },
            },
            data: data3,
        },
        {
            name: cp[3],
            type: 'line',
            symbolSize: 10,
            symbol: 'circle',
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                        position: 'top',
                        formatter: (params) => {
                            return params.value + '%';
                        },
                        textStyle: {
                            fontSize: 12,
                            color: '#fff',
                        },
                    },
                    color: '#9933FF',
                    barBorderRadius: 0,
                },
            },
            lineStyle: {
                normal: {
                    width: 4,
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#9933FF', // 0% 处的颜色
                            },

                            {
                                offset: 1,
                                color: '#9933FF', // 100% 处的颜色
                            },
                        ],
                        global: false, // 缺省为 false
                    },
                },
            },
            data: data4,
        },
        {
            name: cp[4],
            type: 'line',
            symbolSize: 10,
            symbol: 'circle',
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                        position: 'top',
                        formatter: (params) => {
                            return params.value + '%';
                        },
                        textStyle: {
                            fontSize: 12,
                            color: '#fff',
                        },
                    },
                    color: '#FF6633',
                    barBorderRadius: 0,
                },
            },
            lineStyle: {
                normal: {
                    width: 4,
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#FF6633', // 0% 处的颜色
                            },

                            {
                                offset: 1,
                                color: '#FF6633', // 100% 处的颜色
                            },
                        ],
                        global: false, // 缺省为 false
                    },
                },
            },
            data: data5,
        },
    ],
};

myChart.setOption(option, true);
