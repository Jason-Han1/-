var data = [];
for (let i = 0; i < 6; ++i) {
    data.push(Math.round(Math.random() * 100));
}
var path = 'path://M134.76,106.63A41.76,41.76,0,1,1,93,64.87,41.76,41.76,0,0,1,134.76,106.63Z';
var path1 =
    'path://M134.41,111v-3.08a6.3,6.3,0,0,0-6.3-6.3H57.81a6.3,6.3,0,0,0-6.3,6.3V111a6.3,6.3,0,0,0,6.3,6.3h70.3A6.3,6.3,0,0,0,134.41,111Z';
var path2 =
    'path://M-123.1,145.7c-0.3-0.4-0.9-0.5-1.3-0.2c0,0-14.8,10.7-45.7,7.9c-16.5-1.7-32.1-8.2-44.8-18.7c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.3c3.7,3.2,7.7,5.9,11.9,8.3c0,0-0.2,0-0.2,0.2c-0.4,0.7-9.8,17.8-1,24.3c3.4,2.8,7.9,3.8,12.2,2.9c9.7-2.3,16.8-14.1,18.3-16.8c1.6,0.3,3.3,0.5,5,0.6c3.8,0.3,7.2,0.5,10.5,0.5c24.3,0,35.8-8.4,36.3-8.8C-122.8,146.8-122.7,146.2-123.1,145.7C-123,145.7-123.1,145.7-123.1,145.7L-123.1,145.7z M-193.9,169.6c-3.8,0.8-7.7-0.1-10.7-2.5c-7.6-5.4,1.5-21.7,1.6-21.8s0-0.2,0-0.3c3.5,1.9,7.1,3.6,10.8,5.1l-5.3,8.5c-0.3,0.4-0.1,1,0.3,1.3c0.2,0,0.3,0,0.5,0c0.3,0,0.7-0.2,0.8-0.5l5.4-8.8c4.3,1.5,8.7,2.7,13.1,3.5C-179.1,157.6-185.6,167.7-193.9,169.6z';
var path3 =
    'path://M-209,125c-12.3,0-22.3-9.9-22.4-22.2s9.9-22.3,22.2-22.4c12.3,0,22.3,9.9,22.4,22.2c0,0,0,0.1,0,0.1C-186.8,114.9-196.7,124.9-209,125z M-209,82.3c-11.3,0-20.4,9.1-20.4,20.4c0,11.3,9.1,20.4,20.4,20.4c11.3,0,20.4-9.1,20.4-20.4C-188.6,91.4-197.7,82.3-209,82.3z M-209,87.5c-8.4,0.1-15.1,7-15,15.5c0.1,5.1,2.7,9.8,7,12.6c0-2.8,3.8-5,8.7-5s7.8,1.9,8.5,4.3c6.6-5.2,7.9-14.7,2.7-21.4C-200,89.7-204.3,87.5-209,87.5z M-215.1,104.7c0,1,0.8,1.8,1.8,1.8s1.8-0.8,1.8-1.8s-0.8-1.8-1.8-1.8S-215.1,103.7-215.1,104.7z M-211.8,67.1c-1.7,1.7-3.7,3.1-5.9,4.2c-2.1,0.9-4.3,1.7-6.6,2.2c-4.5,1.4-9,2.6-13.4,3.8h-0.2V77c4.1-2.2,8.3-4.3,12.5-6.3c2-1.1,4.2-2.1,6.4-2.9c2.3-0.7,4.7-1,7.1-0.9c0.1,0.1,0.1,0.2,0,0.2C-212,67.2-211.8,67.1-211.8,67.1z M-212,98.5c0,2.9,2.4,5.3,5.3,5.3c2.9,0,5.3-2.4,5.3-5.3l0,0c0-2.9-2.4-5.3-5.3-5.3C-209.6,93.2-212,95.6-212,98.5z';
var path4 =
    'path://M-128.4,125c-12.3,0-22.3-9.9-22.3-22.2c0-12.3,9.9-22.3,22.2-22.3c12.3,0,22.3,9.9,22.3,22.2c0,0,0,0,0,0C-106.2,115-116.1,124.9-128.4,125z M-128.4,82.3c-11.3,0-20.4,9.1-20.4,20.3c0,11.3,9.1,20.4,20.3,20.4c11.3,0,20.4-9.1,20.4-20.3	c0,0,0,0,0,0C-108.1,91.4-117.2,82.3-128.4,82.3z M-128.4,87.5c-8.4,0-15.2,6.8-15.2,15.2c0,5.2,2.7,10.1,7.2,12.8	c0-2.8,3.8-5,8.6-5c4.8,0,7.8,1.9,8.5,4.3c6.6-5.2,7.9-14.7,2.7-21.4C-119.4,89.7-123.8,87.6-128.4,87.5L-128.4,87.5z M-127.2,66.8c2.4-0.1,4.8,0.3,7.1,0.9c2.2,0.8,4.3,1.8,6.4,2.9c4.2,2,8.3,4.1,12.5,6.3c0,0.1,0,0.2,0,0.3c-0.1,0-0.2,0-0.2,0c-4.5-1.2-9-2.4-13.4-3.8c-2.3-0.5-4.5-1.2-6.6-2.2c-2.2-1.1-4.1-2.5-5.9-4.2v-0.3L-127.2,66.8z';
var path5 =
    'path://M-202.4,98.7c3.9,13-17,30.8-46.8,39.8s-57.2,5.9-61.1-7.1c-3.9-13,17-30.8,46.8-39.8S-206.3,85.8-202.4,98.7z M-248.5,140.1c-30.6,9.3-58.6,6.3-62.6-6.8c-0.2-0.6-0.3-1.3-0.4-2c-1.9,3.6-2.5,7.2-1.5,10.4c4,13,32,16,62.6,6.8c29.1-8.8,50-25.6,48.6-38.4C-207.6,121.2-225.5,133.1-248.5,140.1z';
var path6 =
    'path://M-269.4,51.5c-3.9,13,17,30.8,46.8,39.8s57.2,5.9,61.1-7.1s-17-30.8-46.8-39.8S-265.5,38.6-269.4,51.5z M-223.3,92.9c30.6,9.3,58.6,6.3,62.6-6.8c0.2-0.6,0.3-1.3,0.4-2c1.9,3.6,2.5,7.2,1.5,10.4c-4,13-32,16-62.6,6.8c-29.1-8.8-50-25.6-48.6-38.4C-264.3,74-246.3,85.9-223.3,92.9z';
option = {
    title: {
        text: 'Greedy',
        textStyle: {
            fontSize: '20',
            fontFamily: 'FZYaoti',
            fontWeight: '600',
            color: '#f1f1f1',
            textAlign: 'center',
        },
    },
    tooltip: {
        show: false,
        trigger: 'item',
    },
    grid: {
        left: 50,
        right: 50,
        bottom: 50,
    },
    xAxis: {
        show: false,
        data: ['A', 'B', 'C', 'D', 'E', 'F'],
    },
    yAxis: {
        show: false,
    },
    series: [
        {
            name: '',
            type: 'pictorialBar',
            symbol: path4,
            symbolSize: [20, 26],
            symbolOffset: [15, 0],
            z: 3,
            itemStyle: {
                opacity: 1,
                shadowBlur: 1,
                shadowColor: 'rgba(0, 0, 0, .3)',
                shadowOffsetY: 1,
                shadowOffsetX: 1,
                color: function (params) {
                    var colorList = [
                        new echarts.graphic.RadialGradient(0, 0.3, 1, [
                            {
                                offset: 0,
                                color: '#fef8a7',
                            },
                            {
                                offset: 0.3,
                                color: '#fabd41',
                            },
                            {
                                offset: 0.5,
                                color: '#eb710f',
                            },
                            {
                                offset: 1,
                                color: '#fed174',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(0, 0.3, 1, [
                            {
                                offset: 0,
                                color: '#feecc2',
                            },
                            {
                                offset: 0.3,
                                color: '#fd945d',
                            },
                            {
                                offset: 0.5,
                                color: '#e8491e',
                            },
                            {
                                offset: 1,
                                color: '#fd8d51',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(0, 0.3, 1, [
                            {
                                offset: 0,
                                color: '#fafee6',
                            },
                            {
                                offset: 0.3,
                                color: '#b0d67b',
                            },
                            {
                                offset: 0.5,
                                color: '#70a239',
                            },
                            {
                                offset: 1,
                                color: '#a7db5c',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(0, 0.3, 1, [
                            {
                                offset: 0,
                                color: '#fed6ee',
                            },
                            {
                                offset: 0.3,
                                color: '#e94b87',
                            },
                            {
                                offset: 0.5,
                                color: '#cf1d4d',
                            },
                            {
                                offset: 1,
                                color: '#f76495',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(0, 0.3, 1, [
                            {
                                offset: 0,
                                color: '#fefdf9',
                            },
                            {
                                offset: 0.3,
                                color: '#f9daab',
                            },
                            {
                                offset: 0.5,
                                color: '#deb386',
                            },
                            {
                                offset: 1,
                                color: '#fae8e0',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(0, 0.3, 1, [
                            {
                                offset: 0,
                                color: '#c3a6c4',
                            },
                            {
                                offset: 0.3,
                                color: '#8a6d89',
                            },
                            {
                                offset: 0.5,
                                color: '#523a51',
                            },
                            {
                                offset: 1,
                                color: '#746074',
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
            type: 'pictorialBar',
            symbol: path2,
            symbolSize: [40, 26],
            symbolOffset: [0, 60],
            z: 3,
            itemStyle: {
                opacity: 1,
                shadowBlur: 0,
                shadowColor: 'rgba(255, 255, 255, .7)',
                shadowOffsetY: 1,
                shadowOffsetX: 1,
                color: function (params) {
                    var colorList = [
                        new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                            {
                                offset: 0,
                                color: '#fef8a7',
                            },
                            {
                                offset: 0.3,
                                color: '#fabd41',
                            },
                            {
                                offset: 0.5,
                                color: '#eb710f',
                            },
                            {
                                offset: 1,
                                color: '#fed174',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                            {
                                offset: 0,
                                color: '#feecc2',
                            },
                            {
                                offset: 0.3,
                                color: '#fd945d',
                            },
                            {
                                offset: 0.5,
                                color: '#e8491e',
                            },
                            {
                                offset: 1,
                                color: '#fd8d51',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                            {
                                offset: 0,
                                color: '#fafee6',
                            },
                            {
                                offset: 0.3,
                                color: '#b0d67b',
                            },
                            {
                                offset: 0.5,
                                color: '#70a239',
                            },
                            {
                                offset: 1,
                                color: '#a7db5c',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                            {
                                offset: 0,
                                color: '#fed6ee',
                            },
                            {
                                offset: 0.3,
                                color: '#e94b87',
                            },
                            {
                                offset: 0.5,
                                color: '#cf1d4d',
                            },
                            {
                                offset: 1,
                                color: '#f76495',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                            {
                                offset: 0,
                                color: '#fefdf9',
                            },
                            {
                                offset: 0.3,
                                color: '#f9daab',
                            },
                            {
                                offset: 0.5,
                                color: '#deb386',
                            },
                            {
                                offset: 1,
                                color: '#fae8e0',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                            {
                                offset: 0,
                                color: '#c3a6c4',
                            },
                            {
                                offset: 0.3,
                                color: '#8a6d89',
                            },
                            {
                                offset: 0.5,
                                color: '#523a51',
                            },
                            {
                                offset: 1,
                                color: '#746074',
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
            type: 'pictorialBar',
            symbol: path5,
            symbolSize: [40, 26],
            symbolOffset: [-25, 30],
            z: 1,
            itemStyle: {
                opacity: 1,
                shadowBlur: 1,
                shadowColor: 'rgba(0, 0, 0, .3)',
                shadowOffsetY: 1,
                shadowOffsetX: -1,
                color: function (params) {
                    var colorList = [
                        new echarts.graphic.RadialGradient(0, 0.3, 1, [
                            {
                                offset: 0,
                                color: '#fef8a7',
                            },
                            {
                                offset: 0.3,
                                color: '#fabd41',
                            },
                            {
                                offset: 0.5,
                                color: '#eb710f',
                            },
                            {
                                offset: 1,
                                color: '#fed174',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(0, 0.3, 1, [
                            {
                                offset: 0,
                                color: '#feecc2',
                            },
                            {
                                offset: 0.3,
                                color: '#fd945d',
                            },
                            {
                                offset: 0.5,
                                color: '#e8491e',
                            },
                            {
                                offset: 1,
                                color: '#fd8d51',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(0, 0.3, 1, [
                            {
                                offset: 0,
                                color: '#fafee6',
                            },
                            {
                                offset: 0.3,
                                color: '#b0d67b',
                            },
                            {
                                offset: 0.5,
                                color: '#70a239',
                            },
                            {
                                offset: 1,
                                color: '#a7db5c',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(0, 0.3, 1, [
                            {
                                offset: 0,
                                color: '#fed6ee',
                            },
                            {
                                offset: 0.3,
                                color: '#e94b87',
                            },
                            {
                                offset: 0.5,
                                color: '#cf1d4d',
                            },
                            {
                                offset: 1,
                                color: '#f76495',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(0, 0.3, 1, [
                            {
                                offset: 0,
                                color: '#fefdf9',
                            },
                            {
                                offset: 0.3,
                                color: '#f9daab',
                            },
                            {
                                offset: 0.5,
                                color: '#deb386',
                            },
                            {
                                offset: 1,
                                color: '#fae8e0',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(0, 0.3, 1, [
                            {
                                offset: 0,
                                color: '#c3a6c4',
                            },
                            {
                                offset: 0.3,
                                color: '#8a6d89',
                            },
                            {
                                offset: 0.5,
                                color: '#523a51',
                            },
                            {
                                offset: 1,
                                color: '#746074',
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
            symbol: path6,
            symbolSize: [40, 26],
            symbolOffset: [25, 30],
            z: 1,
            itemStyle: {
                opacity: 1,
                shadowBlur: 1,
                shadowColor: 'rgba(0, 0, 0, .3)',
                shadowOffsetY: 1,
                shadowOffsetX: 1,
                color: function (params) {
                    var colorList = [
                        new echarts.graphic.RadialGradient(1, 0.4, 1, [
                            {
                                offset: 0,
                                color: '#fef8a7',
                            },
                            {
                                offset: 0.3,
                                color: '#fabd41',
                            },
                            {
                                offset: 0.5,
                                color: '#eb710f',
                            },
                            {
                                offset: 1,
                                color: '#fed174',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(1, 0.4, 1, [
                            {
                                offset: 0,
                                color: '#feecc2',
                            },
                            {
                                offset: 0.3,
                                color: '#fd945d',
                            },
                            {
                                offset: 0.5,
                                color: '#e8491e',
                            },
                            {
                                offset: 1,
                                color: '#fd8d51',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(1, 0.4, 1, [
                            {
                                offset: 0,
                                color: '#fafee6',
                            },
                            {
                                offset: 0.3,
                                color: '#b0d67b',
                            },
                            {
                                offset: 0.5,
                                color: '#70a239',
                            },
                            {
                                offset: 1,
                                color: '#a7db5c',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(1, 0.4, 1, [
                            {
                                offset: 0,
                                color: '#fed6ee',
                            },
                            {
                                offset: 0.3,
                                color: '#e94b87',
                            },
                            {
                                offset: 0.5,
                                color: '#cf1d4d',
                            },
                            {
                                offset: 1,
                                color: '#f76495',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(1, 0.4, 1, [
                            {
                                offset: 0,
                                color: '#fefdf9',
                            },
                            {
                                offset: 0.3,
                                color: '#f9daab',
                            },
                            {
                                offset: 0.5,
                                color: '#deb386',
                            },
                            {
                                offset: 1,
                                color: '#fae8e0',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(1, 0.4, 1, [
                            {
                                offset: 0,
                                color: '#c3a6c4',
                            },
                            {
                                offset: 0.3,
                                color: '#8a6d89',
                            },
                            {
                                offset: 0.5,
                                color: '#523a51',
                            },
                            {
                                offset: 1,
                                color: '#746074',
                            },
                        ]),
                    ];
                    return colorList[params.dataIndex];
                },
            },
            // "symbolPosition": "end",
            data: data,
        },
        {
            name: '',
            type: 'pictorialBar',
            symbol: path1,
            symbolSize: [10, 2],
            symbolOffset: [0, 15],
            z: 0,
            itemStyle: {
                opacity: 1,
                color: function (params) {
                    var colorList = [
                        new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                            {
                                offset: 0,
                                color: '#fef8a7',
                            },
                            {
                                offset: 0.3,
                                color: '#fabd41',
                            },
                            {
                                offset: 0.5,
                                color: '#eb710f',
                            },
                            {
                                offset: 1,
                                color: '#fed174',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                            {
                                offset: 0,
                                color: '#feecc2',
                            },
                            {
                                offset: 0.3,
                                color: '#fd945d',
                            },
                            {
                                offset: 0.5,
                                color: '#e8491e',
                            },
                            {
                                offset: 1,
                                color: '#fd8d51',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                            {
                                offset: 0,
                                color: '#fafee6',
                            },
                            {
                                offset: 0.3,
                                color: '#b0d67b',
                            },
                            {
                                offset: 0.5,
                                color: '#70a239',
                            },
                            {
                                offset: 1,
                                color: '#a7db5c',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                            {
                                offset: 0,
                                color: '#fed6ee',
                            },
                            {
                                offset: 0.3,
                                color: '#e94b87',
                            },
                            {
                                offset: 0.5,
                                color: '#cf1d4d',
                            },
                            {
                                offset: 1,
                                color: '#f76495',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                            {
                                offset: 0,
                                color: '#fefdf9',
                            },
                            {
                                offset: 0.3,
                                color: '#f9daab',
                            },
                            {
                                offset: 0.5,
                                color: '#deb386',
                            },
                            {
                                offset: 1,
                                color: '#fae8e0',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                            {
                                offset: 0,
                                color: '#c3a6c4',
                            },
                            {
                                offset: 0.3,
                                color: '#8a6d89',
                            },
                            {
                                offset: 0.5,
                                color: '#523a51',
                            },
                            {
                                offset: 1,
                                color: '#746074',
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
            type: 'pictorialBar',
            symbol: path,
            symbolOffset: [0, 20],
            z: 2,
            itemStyle: {
                opacity: 1,
                shadowBlur: 3,
                shadowColor: 'rgba(0, 0, 0, .3)',
                shadowOffsetY: 1,
                shadowOffsetX: 0,
                color: function (params) {
                    var colorList = [
                        new echarts.graphic.RadialGradient(0.4, 0.3, 1.1, [
                            {
                                offset: 0,
                                color: '#fef8a7',
                            },
                            {
                                offset: 0.3,
                                color: '#fabd41',
                            },
                            {
                                offset: 0.5,
                                color: '#eb710f',
                            },
                            {
                                offset: 1,
                                color: '#fed174',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(0.4, 0.3, 1.1, [
                            {
                                offset: 0,
                                color: '#feecc2',
                            },
                            {
                                offset: 0.3,
                                color: '#fd945d',
                            },
                            {
                                offset: 0.5,
                                color: '#e8491e',
                            },
                            {
                                offset: 1,
                                color: '#fd8d51',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(0.4, 0.3, 1.1, [
                            {
                                offset: 0,
                                color: '#fafee6',
                            },
                            {
                                offset: 0.3,
                                color: '#b0d67b',
                            },
                            {
                                offset: 0.5,
                                color: '#70a239',
                            },
                            {
                                offset: 1,
                                color: '#a7db5c',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(0.4, 0.3, 1.1, [
                            {
                                offset: 0,
                                color: '#fed6ee',
                            },
                            {
                                offset: 0.3,
                                color: '#e94b87',
                            },
                            {
                                offset: 0.5,
                                color: '#cf1d4d',
                            },
                            {
                                offset: 1,
                                color: '#f76495',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(0.4, 0.3, 1.1, [
                            {
                                offset: 0,
                                color: '#fefdf9',
                            },
                            {
                                offset: 0.3,
                                color: '#f9daab',
                            },
                            {
                                offset: 0.5,
                                color: '#deb386',
                            },
                            {
                                offset: 1,
                                color: '#fae8e0',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(0.4, 0.3, 1.1, [
                            {
                                offset: 0,
                                color: '#c3a6c4',
                            },
                            {
                                offset: 0.3,
                                color: '#8a6d89',
                            },
                            {
                                offset: 0.5,
                                color: '#523a51',
                            },
                            {
                                offset: 1,
                                color: '#746074',
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
            type: 'pictorialBar',
            symbolSize: [60, 15],
            symbolOffset: [0, 30],
            z: 0,
            itemStyle: {
                opacity: 1,
                color: 'rgba(47,29,70, .1)',
                shadowColor: 'rgba(47,29,70, 1)',
                shadowBlur: 5,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
            },
            data: [1, 1, 1, 1, 1, 1],
        },
        {
            name: '',
            type: 'pictorialBar',
            symbol: path3,
            symbolSize: [20, 26],
            symbolOffset: [-15, 0],
            z: 3,
            itemStyle: {
                opacity: 1,
                shadowBlur: 1,
                shadowColor: 'rgba(0, 0, 0, .3)',
                shadowOffsetY: 1,
                shadowOffsetX: 1,
                color: function (params) {
                    var colorList = [
                        new echarts.graphic.RadialGradient(0, 0.3, 1, [
                            {
                                offset: 0,
                                color: '#fef8a7',
                            },
                            {
                                offset: 0.3,
                                color: '#fabd41',
                            },
                            {
                                offset: 0.5,
                                color: '#eb710f',
                            },
                            {
                                offset: 1,
                                color: '#fed174',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(0, 0.3, 1, [
                            {
                                offset: 0,
                                color: '#feecc2',
                            },
                            {
                                offset: 0.3,
                                color: '#fd945d',
                            },
                            {
                                offset: 0.5,
                                color: '#e8491e',
                            },
                            {
                                offset: 1,
                                color: '#fd8d51',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(0, 0.3, 1, [
                            {
                                offset: 0,
                                color: '#fafee6',
                            },
                            {
                                offset: 0.3,
                                color: '#b0d67b',
                            },
                            {
                                offset: 0.5,
                                color: '#70a239',
                            },
                            {
                                offset: 1,
                                color: '#a7db5c',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(0, 0.3, 1, [
                            {
                                offset: 0,
                                color: '#fed6ee',
                            },
                            {
                                offset: 0.3,
                                color: '#e94b87',
                            },
                            {
                                offset: 0.5,
                                color: '#cf1d4d',
                            },
                            {
                                offset: 1,
                                color: '#f76495',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(0, 0.3, 1, [
                            {
                                offset: 0,
                                color: '#fefdf9',
                            },
                            {
                                offset: 0.3,
                                color: '#f9daab',
                            },
                            {
                                offset: 0.5,
                                color: '#deb386',
                            },
                            {
                                offset: 1,
                                color: '#fae8e0',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(0, 0.3, 1, [
                            {
                                offset: 0,
                                color: '#c3a6c4',
                            },
                            {
                                offset: 0.3,
                                color: '#8a6d89',
                            },
                            {
                                offset: 0.5,
                                color: '#523a51',
                            },
                            {
                                offset: 1,
                                color: '#746074',
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
            realtimeSort: true,
            name: '',
            type: 'bar',
            symbolSize: [20, 26],
            symbolOffset: [15, 0],
            z: 3,
            itemStyle: {
                opacity: 1,
                shadowBlur: 1,
                shadowColor: 'rgba(0, 0, 0, .3)',
                shadowOffsetY: 1,
                shadowOffsetX: 1,
                color: 'rgba(0,0,0,0)',
            },
            symbolPosition: 'end',
            data: data,
        },
    ],
};
function run () {
    var data = option.series[0].data;
    for (var i = 0; i < data.length; ++i) {
        if (Math.random() > 10) {
            data[i] += Math.round(Math.random() * 200);
        }
        else {
            data[i] += Math.round(Math.random() * 100);
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
const backImg = '/asset/get/s/data-1623324803979-ugSvPhTCK.png';
myChart._dom.style.backgroundImage = "url('" + backImg + "')";