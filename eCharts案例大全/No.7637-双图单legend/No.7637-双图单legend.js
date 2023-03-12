option = {
    legend: {
        show: true,
        data: ['1,2', '222']
    },
    xAxis: [{
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    }, {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        gridIndex: 1
    }],
    yAxis: [{}, {
        gridIndex: 1
    }],
    grid: [{
        bottom: '60%'
    }, {
        top: '60%'
    }],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            animation: false
        },
        formatter: function(params) {
            console.log(params);
        }
    },
    axisPointer: {
        link: {
            xAxisIndex: 'all'
        }
    },
    dataZoom: [{
        show: true,
        realtime: true,
        start: 0,
        end: 30,
        xAxisIndex: [0, 1]
    }],
    series: [{
            type: 'line',
            name: '1,2',
            smooth: true,
            markLine: {
                symbol: 'none',
                silent: true,
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        lineStyle: {
                            type: 'dashed',
                            color: '#999',
                            width: 1,
                        },
                        label: {
                            show: true,
                            position: 'end',
                            formatter: "故障点",
                            color: '#f00',
                        },
                    },
                },
                data: [{
                        xAxis: "Wed",
                    },
                    // {
                    //     coord: [200, 200],
                    // },
                ],
                // animation: false,
            },
            data: [1220, 1832, 1491, 2354, 2960, 3730, {
                value: 8310,
                name: 'first'
            }]
        },
        {
            type: 'line',
            name: '222',
            smooth: true,
            markLine: {
                symbol: 'none',
                silent: true,
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        lineStyle: {
                            type: 'dashed',
                            color: '#999',
                            width: 1,
                        },
                        label: {
                            show: true,
                            position: 'end',
                            formatter: "",
                            color: '#f00',
                        },
                    },
                },
                data: [{
                        xAxis: "Wed",
                    },
                    // {
                    //     coord: [200, 200],
                    // },
                ],
                // animation: false,
            },
            data: [2220, 1832, 1941, 2534, 2960, 3370, {
                value: 3110,
                name: 'second'
            }]
        },
        {
            type: 'line',
            name: '1,2',
            smooth: true,
            markLine: {
                symbol: 'none',
                silent: true,
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        lineStyle: {
                            type: 'dashed',
                            color: '#999',
                            width: 1,
                        },
                        label: {
                            show: true,
                            position: 'end',
                            formatter: "",
                            color: '#f00',
                        },
                    },
                },
                data: [{
                        xAxis: "Wed",
                    },
                    // {
                    //     coord: [200, 200],
                    // },
                ],
                // animation: false,
            },
            data: [2240, 1821, 1917, 2334, 23290, 330, {
                value: 3610,
                name: 'third'
            }],
            xAxisIndex: 1,
            yAxisIndex: 1
        },
        {
            type: 'line',
            name: '222',
            smooth: true,
            markLine: {
                symbol: 'none',
                silent: true,
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        lineStyle: {
                            type: 'dashed',
                            color: '#999',
                            width: 1,
                        },
                        label: {
                            show: true,
                            position: 'end',
                            formatter: "",
                            color: '#f00',
                        },
                    },
                },
                data: [{
                        xAxis: "Wed",
                    },
                    // {
                    //     coord: [200, 200],
                    // },
                ],
                // animation: false,
            },
            data: [220, 182, 191, 234, 290, 330, {
                value: 310,
                name: 'fourth'
            }],
            xAxisIndex: 1,
            yAxisIndex: 1
        },
    ]
};