var path =
    'path://M765.6,129.1h-84.1c5.5-3.7,6.4-13.4,6.4-17.6l1-23.4c0-4.2,3.4-7.6,7.6-7.6h54.1c4.2,0,7.6,3.4,7.6,7.6l1,23.4C759.2,115.7,761.4,125.3,765.6,129.1z';
var path1 =
    'path://M24,192.9l142.4,0.4l143.2-1.3c8.7,0,16.4-0.5,18.9-2.4c6.1-4.7,5.5-14.3,0-19.7L176.9,4c-2.9-2.9-6.7-4.1-10.5-4c-3.8-0.2-7.6,1.1-10.5,4L4.3,169.9c-5.5,5.4-6,14.9,0,19.7C7.1,191.8,12,192.9,24,192.9L24,192.9z';
var data = [53, 40, 60, 50, 60, 40, 50];
var data1 = [0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01];
var data2 = [1, 1, 1, 1, 1, 1, 1];
var option = {
    backgroundColor: '#5d615d',
    tooltip: {
        show: false,
    },
    grid: {
        top: '20%',
        left: '5%',
        right: '5%',
        bottom: '10%',
    },
    xAxis: {
        data: ['01', '02', '03', '04', '05', '06', '07'],
        offset: -32,
        z: 99,
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: false,
        },
        axisLabel: {
            show: true,
            width: 30,
            height: 25,
            lineHeight: 30,
            textStyle: {
                color: '#fff',
                fontSize: 14,
                fontWeight: 100,
            },
        },
    },
    yAxis: {
        min: 0,
        max: 80,
        splitLine: {
            show: false,
            lineStyle: {
                color: '#ccc',
            },
        },
        axisTick: {
            lineStyle: {
                color: '#ccc',
            },
        },
        axisLine: {
            lineStyle: {
                color: '#ccc',
            },
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#ccc',
            },
        },
    },
    series: [
        {
            type: 'bar',
            z: 0,
            itemStyle: {
                normal: {
                    color: '#edf2f5',
                    shadowColor: 'rgba(0,0,0,.6)',
                    shadowBlur: 15,
                    shadowOffsetX: 5,
                    shadowOffsetY: 0,
                    borderRadius: 5,
                },
                emphasis: {
                    color: '#edf2f5',
                },
            },
            barWidth: '40',
            data: data,
        },
        {
            name: '',
            type: 'pictorialBar',
            symbol: path,
            symbolSize: [35, 20],
            symbolOffset: [0, -20],
            z: 2,
            itemStyle: {
                opacity: 1,
                shadowBlur: 1,
                shadowColor: 'rgba(0, 0, 0, .3)',
                shadowOffsetY: 1,
                shadowOffsetX: 1,
                color: function (params) {
                    var colorList = [
                        new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: '#00c1bb',
                            },
                            {
                                offset: 0.6,
                                color: '#00c1bb',
                            },
                            {
                                offset: 0.8,
                                color: '#04e2df',
                            },
                            {
                                offset: 1,
                                color: '#009b96',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: '#3b925b',
                            },
                            {
                                offset: 0.6,
                                color: '#3b925b',
                            },
                            {
                                offset: 0.8,
                                color: '#44bf74',
                            },
                            {
                                offset: 1,
                                color: '#357c4d',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: '#b66c51',
                            },
                            {
                                offset: 0.6,
                                color: '#b66c51',
                            },
                            {
                                offset: 0.8,
                                color: '#e08667',
                            },
                            {
                                offset: 1,
                                color: '#96583b',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: '#c63d75',
                            },
                            {
                                offset: 0.6,
                                color: '#c63d75',
                            },
                            {
                                offset: 0.8,
                                color: '#ea5492',
                            },
                            {
                                offset: 1,
                                color: '#aa3364',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: '#3170a2',
                            },
                            {
                                offset: 0.6,
                                color: '#3170a2',
                            },
                            {
                                offset: 0.8,
                                color: '#4c9ad8',
                            },
                            {
                                offset: 1,
                                color: '#23638c',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: '#8fb61c',
                            },
                            {
                                offset: 0.6,
                                color: '#8fb61c',
                            },
                            {
                                offset: 0.8,
                                color: '#adde31',
                            },
                            {
                                offset: 1,
                                color: '#7e9e18',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: '#804ba1',
                            },
                            {
                                offset: 0.6,
                                color: '#804ba1',
                            },
                            {
                                offset: 0.8,
                                color: '#b166d6',
                            },
                            {
                                offset: 1,
                                color: '#72418e',
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
            type: 'pictorialBar',
            symbol: 'rect',
            symbolSize: [3, '100%'],
            symbolOffset: [0, 0],
            z: 1,
            symbolPosition: 'end',
            itemStyle: {
                color: function (params) {
                    var colorList = ['#00c6bd', '#007e3e', '#975f34', '#d70052', '#1d2a86', '#8fb922', '#7e32a2'];
                    return colorList[params.dataIndex];
                },
            },
            data: data,
        },
        {
            name: '',
            type: 'pictorialBar',
            symbol: path1,
            symbolSize: [40, 18],
            symbolOffset: [0, -14],
            z: 1,
            itemStyle: {
                normal: {
                opacity: 1,
                color: '#edf2f5',
                },
                emphasis: {
                    color: '#edf2f5',
                },
            },
            symbolPosition: 'end',
            data: data,
        },
        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [12, 12],
            symbolOffset: [0, 3],
            z: 2,
            itemStyle: {
                color: function (params) {
                    var colorList = ['#00c6bd', '#007e3e', '#975f34', '#d70052', '#1d2a86', '#8fb922', '#7e32a2'];
                    return colorList[params.dataIndex];
                },
            },
            symbolPosition: 'end',
            data: data,
        },
        {
            type: 'pictorialBar',
            symbolSize: [60, 10],
            symbolOffset: [0, 3],
            z: 0,
            itemStyle: {
                opacity: 1,
                color: 'rgba(0,0,0,.1)',
                shadowColor: 'rgba(0,0,0,1)',
                shadowBlur: 5,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
            },
            data: data2,
        },
    ],
};
