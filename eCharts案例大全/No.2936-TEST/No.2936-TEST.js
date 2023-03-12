var xData2 = ['A', 'B', 'C', 'D', 'E'];
var data = [1, 1, 1, 1];
var data1 = [85, 65, 78, 52];
var path =
    'path://M134.9,57.9c-0.9-0.1-1.9,0-2.8,0.3c0.3-5.8,0.5-11.9,0-16.5c-0.7-7.4-5.2-15.2-9.6-18.4c-6.9-5-17.5-7.3-21.5-7.3c-4,0-14.7,2.3-21.5,7.3c-4.3,3.2-8.9,11-9.6,18.4c-0.4,4.6-0.3,10.7,0,16.5c-0.9-0.3-1.8-0.4-2.8-0.3c-2.8,0.4-4.7,3.2-3.3,9.9c1.3,6.7,3.3,11.2,6.6,10.9c0.2,0,0.3-0.1,0.5-0.1c1.1,8.5,9.5,22,16.8,26.9c1.9,2.6,7.1,4.8,13.2,4.6c6.1,0.2,11.4-2,13.2-4.6c7.3-4.8,15.8-18.3,16.8-26.9c0.2,0,0.3,0.1,0.5,0.1c3.3,0.3,5.3-4.2,6.6-10.9C139.6,61.1,137.6,58.4,134.9,57.9z M157.4,128.9c-12.5-6.3-31.4-12.5-31.4-12.5c-2.2,13.9-8.2,30-16.6,44c-0.4-8-1.1-16-2.2-23.9c2.1-3.3,3.5-6.1,4.4-8.3c1.1-2.7-0.8-5.5-3.6-5.5H94c-2.8,0-4.7,2.9-3.6,5.5c0.9,2.2,2.3,4.9,4.4,8.3c-1.2,8.7-1.9,16.9-2.2,23.9c-8.4-14-14.4-30.1-16.6-44c0,0-18.8,6.3-31.4,12.5c-12.5,6.3-18.8,14.7-18.8,31.4v9.4c0,8.7,7,15.7,15.7,15.7c0,0,0,0,0,0h119.1c8.7,0,15.7-7,15.7-15.7c0,0,0,0,0,0v-9.4C176.3,143.6,170,135.2,157.4,128.9L157.4,128.9z';
var path1 =
    'path://M120.8,175H79.2c-2.5,0-4.2,1.7-4.2,4.2c0,2.5,1.7,4.2,4.2,4.2h41.7c2.5,0,4.2-1.7,4.2-4.2C125,176.7,123.3,175,120.8,175z M129.2,158.3H70.8c-2.5,0-4.2,1.7-4.2,4.2s1.7,4.2,4.2,4.2h58.3c2.5,0,4.2-1.7,4.2-4.2S131.7,158.3,129.2,158.3L129.2,158.3z M100,0C60.8,0,29.2,30.8,29.2,68.3c0,20,9.2,38.8,24.6,51.7c3.3,2.5,5,6.7,5,10.8v5.8c0,7.5,6.2,13.8,13.3,13.8h55.4c7.5,0,13.3-6.3,13.3-13.8v-5.8c0-4.2,1.7-7.9,5-10.8c15.4-12.9,24.6-31.7,24.6-51.7C170.8,30.8,139.2,0,100,0z M145.4,76.7c-2.1,0-3.8-1.7-3.8-3.8c-0.4-10.8-5-22.1-12.5-30.4c-5-5.4-13.8-12.1-26.2-12.1c-2.1,0-4.2-1.7-4.2-4.2s1.7-4.2,4.2-4.2c12.1,0,23.3,5,32.1,14.6s14.2,22.9,14.6,35.8C150,74.6,147.9,76.7,145.4,76.7L145.4,76.7z M112.5,191.7h-25c-2.5,0-4.2,1.7-4.2,4.2s1.7,4.2,4.2,4.2h25c2.5,0,4.2-1.7,4.2-4.2S115,191.7,112.5,191.7z';
var path2 =
    'path://M168,0.1c11.4,0,21.4,7.3,25,18.1c3.6,10.8-0.1,22.7-9.1,29.6c-8.8-15.5-21.6-28.3-37-37.1C151.9,4,159.7,0.1,168,0.1zM20.9,0.6c10.3-2.2,20.9,1.9,27,10.4C32.6,20,20,32.9,11.4,48.3c-8.6-6.1-12.9-16.6-10.8-27C2.6,11,10.6,2.9,20.9,0.6L20.9,0.6zM92.5,47.8c-4.7-0.6-8.9,2.8-9.5,7.4c0,0.3-0.1,0.7-0.1,1v51c0,2.9,2.4,5.3,5.3,5.3h38.5c4.7,0,8.5-3.8,8.5-8.5c0-0.3,0-0.7-0.1-1c-0.6-4.3-4.3-7.5-8.7-7.5H100v-39C100,52.1,96.8,48.4,92.5,47.8L92.5,47.8z M98,9.8c36.4,0.1,68.9,22.9,81.5,57.3c12.5,34.3,2.4,72.8-25.4,96.5l14,14.1c3.8,3.8,3.8,10,0,13.8c-3.8,3.8-9.9,3.8-13.7,0c0,0,0,0,0,0l-16.7-16.8c-25.1,12.9-54.9,12.9-79.9-0.2l-16.9,17c-3.8,3.8-9.9,3.8-13.7,0.1c0,0,0,0-0.1-0.1c-3.8-3.8-3.8-10,0-13.8l14.2-14.3c-27.7-23.8-37.7-62.4-25-96.7C28.9,32.4,61.5,9.7,98,9.8z';
var path3 =
    'path://M167.2,155.9l-56-56.1l55.9-56c12.7,15.2,20.3,34.7,20.3,56C187.5,121.1,179.9,140.7,167.2,155.9L167.2,155.9zM108,12.5c18.2,1.6,34.7,8.9,48,20l-48,48V12.5z M94.4,105.4l61.6,61.7c-15.2,12.7-34.7,20.3-56,20.3c-48.3,0-87.5-39.3-87.5-87.7	c0-45.7,35-83.2,79.6-87.3v87.3';
option = {
    backgroundColor: '#d4d4d4',
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
            symbolSize: [69, 20],
            symbolOffset: [0, -13],
            z: 1,
            itemStyle: {
                opacity: 1,
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#fff',
                        },
                        {
                            offset: 1,
                            color: '#b8b9bc',
                        },
                    ],
                    global: false,
                },
                borderColor:'#fff',
                borderWidth:4,
            },
            symbolPosition: 'end',
            data: data1,
        },
        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [66, 20],
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
                        new echarts.graphic.RadialGradient(0.5, 0.5, 0.5, [
                            {
                                offset: 0,
                                color: '#ad93ee',
                            },
                            {
                                offset: 1,
                                color: '#987adc',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(0.5, 0.5, 0.5, [
                            {
                                offset: 0,
                                color: '#ffce55',
                            },
                            {
                                offset: 1,
                                color: '#ecb23c',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(0.5, 0.5, 0.5, [
                            {
                                offset: 0,
                                color: '#f5606f',
                            },
                            {
                                offset: 1,
                                color: '#d53d4c',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(0.5, 0.5, 0.5, [
                            {
                                offset: 0,
                                color: '#a9e06e',
                            },
                            {
                                offset: 1,
                                color: '#92c45e',
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
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#e6e6e6',
                        },
                        {
                            offset: 0.5,
                            color: '#FFF',
                        },
                        {
                            offset: 1,
                            color: '#e6e6e6',
                        },
                    ],
                    global: false,
                },
            },
            data: data1,
        },
        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [70, 25],
            symbolOffset: [0, 10],
            z: 0,
            itemStyle: {
                opacity: 1,
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#e6e6e6',
                        },
                        {
                            offset: 0.5,
                            color: '#FFF',
                        },
                        {
                            offset: 1,
                            color: '#e6e6e6',
                        },
                    ],
                    global: false,
                },
                shadowColor: 'rgba(97, 107, 117, .7)',
                shadowBlur: 3,
                shadowOffsetX: 0,
                shadowOffsetY: 2,
            },
            data: [1, 1, 1, 1],
        },
        {
            name: '',
            type: 'pictorialBar',
            rippleEffect: {
                period: 1,
                scale: 2,
                brushType: 'fill',
            },
            z: 2,
            symbolPosition: 'end',
            symbolSize: 30,
            symbolOffset: ['0', '-35'],
            itemStyle: {
                normal: {
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 5,
                    shadowOffsetY: 3,
                    shadowOffsetX: 0,
                    color: function (params) {
                        var colorList = ['#987adc', '#ecb23c', '#d53d4c', '#92c45e'];
                        return colorList[params.dataIndex];
                    },
                    label: {
                        show: false,
                    },
                },
            },
            data: [
                {
                    value: 1,
                    symbol: path,
                },
                {
                    value: 1,
                    symbol: path1,
                },
                {
                    value: 1,
                    symbol: path2,
                },
                {
                    value: 1,
                    symbol: path3,
                },
            ],
        },
    ],
};
