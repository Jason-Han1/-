let line = [1, 2, 5, 5, 8, 9, 9, 15, 16, 22, 25, 30, 33, 45, 60, 61, 62, 65, 75, 80, 88, 90, 99, 100]
option = {
    xAxis: [{
        type: 'value',
        min: 0,
        max: 100
    }, {
        type: 'value',
        show: false,
        min: 0,
        max: 100
    }, {
        type: 'value',
        show: false,
        min: 0,
        max: 100
    }, {
        type: 'value',
        show: false,
        min: 0,
        max: 100
    }, {
        type: 'value',
        show: false,
        min: 0,
        max: 100
    }, {
        type: 'value',
        show: false,
        min: 0,
        max: 100
    }, {
        type: 'value',
        show: false,
        min: 0,
        max: 100
    }, {
        type: 'value',
        show: false,
        min: 0,
        max: 100
    }, {
        type: 'value',
        show: false,
        min: 0,
        max: 100
    }, {
        type: 'value',
        show: false,
        min: 0,
        max: 100
    }, {
        type: 'value',
        show: false,
        min: 0,
        max: 100
    }, {
        type: 'value',
        show: false,
        min: 0,
        max: 100
    }],
    yAxis: [{
        type: 'value',
        show: false,
        min: 0,
        max: 100
    }],
    series: [{
        data: line,
        type: 'line',
        step: 'end',
        areaStyle: {
            color: '#2db7f5'
        },
        symbol: 'none',
        lineStyle: {
            opacity: 0
        },
    }, {
        data: [0, 0, 0, 0, {
            name: '日本',
            value: 8
        }, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        type: 'bar',
        barWidth: 8,
        barCategoryGap: 0,
        label: {
            show: true,
            position: 'top',
            formatter: '{b} {c}'
        },
        itemStyle: {
            color: '#2d8cf0',
            borderColor: '#fff',
            borderWidth: 1
        },
        xAxisIndex: 1,

    }, {
        data: ['', '', '', '', '', '', '', '', 16, '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        type: 'bar',
        barWidth: 16,
        barCategoryGap: 0,
        itemStyle: {
            color: '#2d8cf0',
            borderColor: '#fff',
            borderWidth: 1
        },
        xAxisIndex: 2,

    }, {
        data: ['', '', '', '', '', '', '', '', '', 22, '', '', '', '', '', '', '', '', '', '', '', '', ''],
        type: 'bar',
        barWidth: 22,
        itemStyle: {
            color: '#2d8cf0',
            borderColor: '#fff',
            borderWidth: 1
        },
        xAxisIndex: 3,

    }, {
        data: ['', '', '', '', '', '', '', '', '', '', 25, '', '', '', '', '', '', '', '', '', '', '', ''],
        type: 'bar',
        barWidth: 25,
        itemStyle: {
            color: '#2d8cf0',
            borderColor: '#fff',
            borderWidth: 1
        },
        xAxisIndex: 4,

    }, {
        data: ['', '', '', '', '', '', '', '', '', '', '', '', '', 40, '', '', '', '', '', '', '', '', ''],
        type: 'bar',
        barWidth: 40,
        itemStyle: {
            color: '#2d8cf0',
            borderColor: '#fff',
            borderWidth: 1
        },
        xAxisIndex: 5,

    }, {
        data: ['', '', '', '', '', '', '', '', '', '', '', '', '', 42, '', '', '', '', '', '', '', '', ''],
        type: 'bar',
        barWidth: 42,
        itemStyle: {
            color: '#2d8cf0',
            borderColor: '#fff',
            borderWidth: 1
        },
        xAxisIndex: 6,

    }, {
        data: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', 45, '', '', '', '', '', '', '', ''],
        type: 'bar',
        barWidth: 45,
        itemStyle: {
            color: '#2d8cf0',
            borderColor: '#fff',
            borderWidth: 1
        },
        xAxisIndex: 7,

    }, {
        data: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 60, '', '', '', '', '', '', ''],
        type: 'bar',
        barWidth: 60,
        itemStyle: {
            color: 'blue',
            borderColor: '#fff',
            borderWidth: 1
        },
        xAxisIndex: 8,

    }, {
        data: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 75, '', '', '', ''],
        type: 'bar',
        barWidth: 75,
        itemStyle: {
            color: '#2d8cf0',
            borderColor: '#fff',
            borderWidth: 1
        },
        xAxisIndex: 9,

    }, {
        data: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 82, '', ''],
        type: 'bar',
        barWidth: 82,
        itemStyle: {
            color: '#2d8cf0',
            borderColor: '#fff',
            borderWidth: 1
        },
        xAxisIndex: 10,

    }, {
        data: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', {
            name: '中国',
            value: 90
        }, ''],
        type: 'bar',
        barWidth: 90,
        label: {
            show: true,
            formatter: '{b} {c}'
        },
        itemStyle: {
            color: 'blue',
            borderColor: '#fff',
            borderWidth: 1
        },
        xAxisIndex: 11,

    }]
};