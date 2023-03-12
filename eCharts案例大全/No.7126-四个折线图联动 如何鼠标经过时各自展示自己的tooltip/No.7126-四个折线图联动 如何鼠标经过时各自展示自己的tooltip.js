option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        },
        backgroundColor: 'rgba(245, 245, 245, 0.8)',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        textStyle: {
            color: '#000'
        }
    },
    axisPointer: {
        link: {
            xAxisIndex: 'all'
        },
        label: {
            backgroundColor: 'red'
        }
    },
    dataZoom: [{
            show: true,
            realtime: true,
            start: 0,
            end: 100,
            xAxisIndex: [0, 1,2,3,4]
        },
        {
            type: 'inside',
            realtime: true,
            start: 0,
            end: 100,
            xAxisIndex:  [0, 1,2,3,4]
        }
    ],
    //最后一个
    grid: [{
        left: '3%',
        right: '4%',
        top: 30,
        height: 90
    }, {
        left: '3%',
        right: '4%',
        top: 150,
        height: 90
    }, {
        left: '3%',
        right: '4%',
        top: 270,
        height: 90
    }, {
        left: '3%',
        right: '4%',
        top: 390,
        height: 90
    }, {
        left: '3%',
        right: '4%',
        top: 510,
        height: 90
    }],
    xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: ['一', '二', '三', '四', '五', '六', '日']
        }, {
            type: 'category',
            boundaryGap: false,
           data: ['一', '二', '三', '四', '五', '六', '日'],
            gridIndex: 1
        }, {
            type: 'category',
            boundaryGap: false,
            data: ['一', '二', '三', '四', '五', '六', '日'],
            gridIndex: 2
        }, {
            type: 'category',
            boundaryGap: false,
            data: ['一', '二', '三', '四', '五', '六', '日'],
            gridIndex: 3
        },
        {
            type: 'category',
            boundaryGap: false,
            data: ['一', '二', '三', '四', '五', '六', '日'],
            gridIndex: 4
        }
    ],
    yAxis: [{
        type: 'value',
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        interval: 10000
    }, {
        type: 'value',
        gridIndex: 1,
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        interval: 10000
    }, {
        type: 'value',
        gridIndex: 2,
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        interval: 10000
    }, {
        type: 'value',
        gridIndex: 3,
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        interval: 10000
    }, {
        type: 'value',
        gridIndex: 4,
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        interval: 10000
    }],
    series: [{
            name: 'mail',
            type: 'line',
            data: [10, 80, "", 60, 30, 50, 70],
            xAxisIndex: 0,
            yAxisIndex: 0
        },
        {
            name: '实际值',
            type: 'line',
            data: [10, 8, 200, 44, 87, 50, 90],
            lineStyle: {
                color: 'green'
            },
            xAxisIndex: 0,
            yAxisIndex: 0
        },
        {
            name: 'ad',
            type: 'line',
            data: [30,80,90,56,78,67,9],
            xAxisIndex: 1,
            yAxisIndex: 1
        },
        {
            name: 'vadio',
            type: 'line',
            data: [40, 60, 30, 50, 70, 10, 80],
            xAxisIndex: 2,
            yAxisIndex: 2
        },
        {
            name: '访问',
            type: 'line',
            data: [60, 30, 50, 70, 10, 80, 40],
            xAxisIndex: 3,
            yAxisIndex: 3
        },
        {
            name: 'search',
            type: 'line',
            data: [30, 50, 70, 10, 80, 40, 60],
            xAxisIndex: 4,
            yAxisIndex: 4
        }
    ]
};