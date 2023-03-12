var timeData = [
    '2021/3/23',
    '2021/3/24',
    '2021/3/25',
    '2021/3/26',
    '2021/3/27',
    '2021/3/28',
    '2021/3/29',
    '2021/3/30',
    '2021/3/31',
    '2021/4/1',
    '2021/4/2',
];
timeData = timeData.map(function (str) {
    return str.replace('2021/', '');
});

var option = {
        title: {
            text: '市场情绪',
            subtext: 'xxx',
            left: 'center'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                animation: false
            }
        },
        //legend: {
        //    data: ['连板数', '其它'],
        //    left: 10
        //},
        toolbox: {
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                restore: {},
                saveAsImage: {}
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
            end: 100,
            xAxisIndex: [0, 1]
        },
        {
            type: 'inside',
            realtime: true,
            start: 0,
            end: 100,
            xAxisIndex: [0, 1]
        }
        ],
        grid: [{
            left: 50,
            right: 50,
            height: '69%'
        }, {
            left: 50,
            right: 50,
            top: '81%',
            height: '10%'
        }],
        xAxis: [
            {
                show: false,
                type: 'category',
                boundaryGap: false,
                axisLine: {
                    onZero: true
                },
                data: timeData
            },
            {
                gridIndex: 1,
                type: 'category',
                boundaryGap: false,
                axisLine: {
                    onZero: true
                },
                data: timeData,
                position: 'bottom'
            }
        ],
        yAxis: [{
            name: '连板数',
            type: 'value',
        },
        {
            gridIndex: 1,
            name: '涨跌停数 || 封板率 || 昨日涨停今日涨比/涨幅',
            type: 'value',
            inverse: false
        }
        ],
        series: [
            {
                name: '仁东控股',
                type: 'line',
                symbolSize: 1,
                endLabel: {
                    show: true,
                    fontSize: 13,
                    formatter: function (params) {
                        return params.seriesName + ":" + params.value;
                    }
                },
                labelLayout: {
                    moveOverlap: 'shiftY'
                },
                emphasis: {
                    scale: true,
                    focus: 'series'
                },
                //标记的两条虚线
                markLine: {
                    symbol: 'none',
                    silent: true,
                    lineStyle: {
                        type: 'dashed'
                    },
                    label: {
                        position: 'start'
                    },
                    data: [{
                        yAxis: 7,
                        lineStyle: {
                            width: 1.656,
                            color: '#ff6367'
                        },
                        label: {
                            show: false
                        }
                    },
                    {
                        yAxis: 2,
                        lineStyle: {
                            width: 1.656,
                            color: '#46C67F'
                        },
                        label: {
                            show: false
                        }
                    }
                    ]
                },
                //标记的文字
                markPoint: {
                    silent: true,
                    label: {
                        fontSize: 33.12
                    },
                    data: [
                        {
                            type: 'max',
                            name: '最大值'
                        },
                        //{type: 'min', name: '最小值'}
                        {
                            yAxis: 7,
                            x: '100%',
                            symbolSize: 0.1,
                            label: {
                                    color: '#fff',
                                padding: [3.312, 8.28],
                                fontSize: 25,
                                borderRadius: 13.248,
                                backgroundColor: 'rgba(255, 72, 74, 0.5)',
                                position: 'left',
                                formatter: '压力位'
                            }
                        },
                        {
                            yAxis: 2,
                            x: '100%',
                            symbolSize: 0.1,
                            label: {
                                    color: 'rgba(25, 189, 122, 1)',
                                padding: [3.312, 8.28],
                                fontSize: 25,
                                borderRadius: 13.2481,
                                backgroundColor: 'rgba(25, 189, 122, 0.2)',
                                position: 'left',
                                formatter: '支撑位'
                            }
                        }
                    ]
                },
                data: [1, 2, 0, 3, 4, null, 1, 2, 3, 4]
            },
            {
                name: '华银电力',
                type: 'line',
                symbolSize: 1,
                endLabel: {
                    show: true,
                    formatter: function (params) {
                        return params.seriesName + ":" + params.value;
                    }
                },
                labelLayout: {
                    moveOverlap: 'shiftY'
                },
                emphasis: {
                    scale: true,
                    focus: 'series'
                },
                markPoint: {
                    data: [{
                        type: 'max',
                        name: '最大值'
                    },
                        //{type: 'min', name: '最小值'}
                    ]
                },
                /*markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                },*/
                data: [2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 6]
            },
            {
                name: '顺博合金',
                type: 'line',
                symbolSize: 1,
                endLabel: {
                    show: true,
                    formatter: function (params) {
                        return params.seriesName + ":" + params.value;
                    }
                },
                labelLayout: {
                    moveOverlap: 'shiftY'
                },
                emphasis: {
                    scale: true,
                    focus: 'series'
                },
                markPoint: {
                    data: [{
                        type: 'max',
                        name: '最大值'
                    },
                        //{type: 'min', name: '最小值'}
                    ]
                },
                /*markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                },*/
                data: [1, 2, 3, 4, 0, 0, 0, 1, 2, 3]
            },
            {
                name: '封板率',
                type: 'line',
                xAxisIndex: 1,
                yAxisIndex: 1,
                symbolSize: 3,
                labelLayout: {
                    moveOverlap: 'shiftY'
                },
                emphasis: {
                    focus: 'series'
                },
                markPoint: {
                    data: [{
                        type: 'max',
                        name: '最大值'
                    },
                        //{type: 'min', name: '最小值'}
                    ]
                },
                /*markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                },*/
                data: [50, 20, 30, 40, 50, 90, 40, 80, 60]
            },
            {
                name: '涨停数',
                type: 'bar',
                xAxisIndex: 1,
                yAxisIndex: 1,
                symbolSize: 3,
                labelLayout: {
                    moveOverlap: 'shiftY'
                },
                emphasis: {
                    focus: 'series'
                },
                markPoint: {
                    data: [{
                        type: 'max',
                        name: '最大值'
                    },
                        //{type: 'min', name: '最小值'}
                    ]
                },
                /*markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                },*/
                data: [50, 20, 30, 40, 50, 3, 40, 80, 60]
            },
            {
                name: '跌停数',
                type: 'bar',
                xAxisIndex: 1,
                yAxisIndex: 1,
                symbolSize: 3,
                labelLayout: {
                    moveOverlap: 'shifty'
                },
                emphasis: {
                    focus: 'series'
                },
                markPoint: {
                    data: [{
                        type: 'max',
                        name: '最大值'
                    },
                        //{type: 'min', name: '最小值'}
                    ]
                },
                /*markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                },*/
                data: [40, 10, 20, 10, 5, 0, 4, 20, 30]
            }
        ]
    };
