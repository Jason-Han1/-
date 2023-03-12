option = {
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    },
    legend: {
        show: true
    },
    yAxis: {},
    dataZoom: {
        type: 'slider',
        height: 14,
        start: 0,
        end: 80
    },
    series: [
        {
            type: 'bar',
            stack: 's1',
            name: '存量',
            data: [220, 182, 191, 234, 290, 330, 310],
            itemStyle: {
                color: '#2ec7c9',
                opacity: 0.25
            }
        },
        {
            type: 'bar',
            stack: 's1',
            name: '新增',
            data: [120, 128, 111, 278, 192, 310, 330],
            itemStyle: {
                color: '#2ec7c9',
                opacity: 0.5
            }
        },
        {
            type: 'bar',
            stack: 's1',
            name: '拆除',
            data: [320, 282, 190, 214, 200, 320, 370],
            itemStyle: {
                color: '#2ec7c9',
                opacity: 0.75
            }
        },
        {
            type: 'bar',
            stack: 's1',
            name: '整改',
            data: [220, 182, 191, 234, 290, 330, 310],
            itemStyle: {
                color: '#2ec7c9',
            }
        },
        {
            type: 'bar',
            stack: 's2',
            name: '存量',
            data: [200, 132, 171, 204, 270, 300, 170],
            itemStyle: {
                color: '#b6a2de',
                opacity: 0.25
            }
        },
        {
            type: 'bar',
            stack: 's2',
            name: '新增',
            data: [220, 182, 191, 234, 290, 330, 310],
            itemStyle: {
                color: '#b6a2de',
                opacity: 0.5
            }
        },
        {
            type: 'bar',
            stack: 's2',
            name: '拆除',
            data: [220, 182, 191, 234, 290, 330, 310],
            itemStyle: {
                color: '#b6a2de',
                opacity: 0.75
            }
        },
        {
            type: 'bar',
            stack: 's2',
            name: '整改',
            data: [220, 182, 191, 234, 290, 330, 310],
            itemStyle: {
                color: '#b6a2de',
            }
        },
        {
            type: 'bar',
            stack: 's3',
            name: '存量',
            data: [220, 182, 191, 234, 290, 330, 310],
            itemStyle: {
                color: '#5ab1ef',
                opacity: 0.25
            }
        },
        {
            type: 'bar',
            stack: 's3',
            name: '新增',
            data: [220, 182, 191, 234, 290, 330, 310],
            itemStyle: {
                color: '#5ab1ef',
                opacity: 0.5
            }
        },
        {
            type: 'bar',
            stack: 's3',
            name: '拆除',
            data: [320, 282, 291, 334, 390, 430, 410],
            itemStyle: {
                color: '#5ab1ef',
                opacity: 0.75
            }
        },
        {
            type: 'bar',
            stack: 's3',
            name: '整改',
            data: [220, 182, 191, 234, 290, 330, 310],
            itemStyle: {
                color: '#5ab1ef',
            }
        },
        {
            type: 'bar',
            stack: 's4',
            name: '存量',
            data: [170, 122, 151, 194, 200, 230, 210],
            itemStyle: {
                color: '#ffb980',
                opacity: 0.25
            }
        },
        {
            type: 'bar',
            stack: 's4',
            name: '新增',
            data: [120, 82, 91, 134, 190, 230, 210],
            itemStyle: {
                color: '#ffb980',
                opacity: 0.5
            }
        },
        {
            type: 'bar',
            stack: 's4',
            name: '拆除',
            data: [220, 182, 191, 234, 290, 330, 310],
            itemStyle: {
                color: '#ffb980',
                opacity: 0.75
            }
        },
        {
            type: 'bar',
            stack: 's4',
            name: '整改',
            data: [220, 182, 191, 234, 290, 330, 310],
            itemStyle: {
                color: '#ffb980',
            }
        },
    ],
};
