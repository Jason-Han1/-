var path = 'path://M75.2,27.4h-1v-1h1V27.4z';
var path1 =
    'path://M132.8,40.5c-8.8-8.9-20.6-13.7-33.1-13.7s-24.3,4.9-33.1,13.7S52.7,61.1,52.7,73.7c0,8.4,11.2,25.4,15.3,32.5l32,72.4l0,0l31.2-72.4c4.1-7.1,15.3-24.1,15.3-32.5C146.5,61.1,141.6,49.4,132.8,40.5z';
var data = [3, 10, 5, 20, 8, 35, 5];
option = {
    backgroundColor: '#2c0f2b',
    grid: {
        bottom: 50,
        left: 50,
        top: 130,
        right: 50,
    },
    xAxis: {
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            interval: 0,
            show: false,
        },
        data: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
    },
    yAxis: {
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed',
                color: 'rgba(255, 255, 255, .7)',
            },
        },
        axisLabel: {
            textStyle: {
                color: 'rgba(255, 255, 255, .7)',
            },
        },
    },
    series: [
        {
            type: 'line',
            // smooth: true,
            symbol: 'circle',
            symbolSize: 10,
            lineStyle: {
                normal: {
                    width: 2,
                    shadowColor: 'rgba(0, 0, 0, .9)',
                    shadowBlur: 5,
                    shadowOffsetY: 5,
                    shadowOffsetX: 5,
                    color: 'rgba(255, 255, 255, .7)',
                },
            },
            itemStyle: {
                color: '#2c0f2b',
                borderColor: 'rgba(255, 255, 255, .7)',
                borderWidth: 2,
            },
            data: data,
        },
        {
            name: '',
            type: 'effectScatter',
            rippleEffect: {
                period: 1,
                scale: 2.5,
                brushType: 'fill',
            },
            z: 2,
            symbolPosition: 'end',
            symbolSize: 25,
            symbolOffset: ['0', '-97'],
            itemStyle: {
                normal: {
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 5,
                    shadowOffsetY: 3,
                    shadowOffsetX: 0,
                    color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                        {
                            offset: 0,
                            color: '#7bc6fa',
                        },
                        {
                            offset: 0.3,
                            color: '#0e5c8d',
                        },
                        {
                            offset: 1,
                            color: '#062839',
                        },
                    ]),
                    label: {
                        show: true,
                        color: '#fff',
                        fontSize: 12,
                        position: 'top',
                        distance: -20,
                        formatter: '{c}',
                        fontWeight: '100',
                    },
                },
            },
            data: data,
        },
        {
            type: 'pictorialBar',
            symbol: path,
            symbolSize: [1, 50],
            symbolOffset: [0, -58],
            z: 1,
            itemStyle: {
                color: '#fff',
                opacity: 1,
                borderWidth: 0,
                shadowColor: 'rgba(0,0,0,.3)',
                shadowBlur: 5,
                shadowOffsetX: 5,
                shadowOffsetY: 5,
            },
            symbolPosition: 'end',
            data: data,
        },
        {
            type: 'pictorialBar',
            symbol: path1,
            symbolSize: [28, 50],
            symbolOffset: [0, -110],
            z: 1,
            itemStyle: {
                color: '#fff',
                opacity: 1,
                borderWidth: 0,
                shadowColor: 'rgba(0,0,0,.3)',
                shadowBlur: 5,
                shadowOffsetX: 5,
                shadowOffsetY: 5,
            },
            symbolPosition: 'end',
            data: data,
        },
    ],
};
