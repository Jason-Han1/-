option = {
    color: [
        new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(106,185,242,1)'
            },
            {
                offset: 1,
                color: 'rgba(106,185,242,.3)'
            }
        ]),
        new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(42,202,27,1)'
            },
            {
                offset: 1,
                color: 'rgba(42,202,27,.3)'
            }
        ]),
        new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(94,95,95,1)'
            },
            {
                offset: 1,
                color: 'rgba(94,95,95,.3)'
            }
        ]),
        new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(202,27,27,1)'
            },
            {
                offset: 1,
                color: 'rgba(202,27,27,.3)'
            }
        ]),
    ],
    title: {
        text: '统计各设备不同状态的数量（4）?',
        left: 'center',
    },
    grid: {
        top: '15%',
        bottom: '10%'
    },
    tooltip: {
        trigger: 'axis',
        // confine: false,
        position: 'top',
        textStyle: {
            fontSize: 12
        },
        backgroundColor: 'transparent',
        extraCssText: 'box-shadow: 0 0 20px #00C7FF inset;'
    },
    legend: {
        data: ['1', '2', '3', '4'],
        top: '10%'
    },
    // toolbox: {
    //     show: true,
    //     orient: 'vertical',
    //     left: 'right',
    //     top: 'center',
    //     feature: {
    //         mark: {show: true},
    //         dataView: {show: true, readOnly: false},
    //         magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
    //         restore: {show: true},
    //         saveAsImage: {show: true}
    //     }
    // },
    xAxis: [{
        type: 'category',
        // axisTick: {show: false},
        data: ['A', 'B', 'C', 'D', 'E']
    }],
    yAxis: [{
        type: 'value',
    }, ],
    dataZoom: [{
        show: false,
        xAxisIndex: [0],
        "start": 0,
        "end": 100,
    }, {
        type: "inside",
        show: false,
        start: 1,
        end: 35
    }],
    series: [{
            name: '1',
            type: 'bar',
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                }
            },
            data: [98, 77, 101, 99, 40]
        },
        {
            name: '2',
            type: 'bar',
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                }
            },
            data: [320, 332, 301, 334, 390]
        },
        {
            name: '3',
            type: 'bar',
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                }
            },
            data: [220, 182, 191, 234, 290]
        },
        {
            name: '4',
            type: 'bar',
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                }
            },
            data: [150, 232, 201, 154, 190],
        }
    ]
};