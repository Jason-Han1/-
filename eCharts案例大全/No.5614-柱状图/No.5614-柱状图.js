option = {
    backgroundColor: "RGBA(10, 16, 42, 1)",
    grid: {
        left: '12%',
        top: '5%',
        bottom: '12%',
        right: '8%'
    },
    xAxis: {
        data: ['火箭', '飞机', '高铁', '轮船', '地铁'],
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(38, 103, 153, 1)',
                width: 1 //这里是为了突出显示加上的
            }
        },
        axisLabel: {
            textStyle: {
                color: 'rgba(189, 209, 248, 1)',
                fontSize: 12
            }
        }
    },
    yAxis: [{
        axisTick: {
            show: true
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(38, 103, 153, 1)',
                width: 1 //这里是为了突出显示加上的
            }
        },
        axisLabel: {
            textStyle: {
                color: 'rgba(189, 209, 248, 1)',
            },
            formatter: '{value}%'
        },
        splitArea: {
            areaStyle: {
                color: 'rgba(255,255,255,.5)'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(38, 103, 153, .3)',
                width: 1
            }
        }
    }],
    series: [{
        type: 'pictorialBar',
        barCategoryGap: '0%',
        symbol: 'path://M18,3 L46,3 78,68 18,68 46,3 z',
        label: {
            show: true,
            position: 'top',
            color: 'rgba(0, 241, 255, 1)',
            fontSize: 12,
            formatter: '{c}%'
        },
        itemStyle: {
            normal: {
                color: function(params) {

                    // build a color map as your need.

                    var colorList = [

                        {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                    offset: 0,
                                    color: 'rgba(2, 191, 251, 1)' //  0%  处的颜色
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(2, 191, 251, 0)' //  100%  处的颜色
                                }
                            ],
                            global: false //  缺省为  false
                        },
                        {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                    offset: 0,
                                    color: 'rgba(41, 117, 248, 1)' //  0%  处的颜色
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(41, 117, 248, 0)' //  100%  处的颜色
                                }
                            ],
                            global: false //  缺省为  false
                        }

                    ];

                    return params.dataIndex % 2 == 0 ? colorList[0] : colorList[1]

                }
            }
        },
        data: [42, 10, 25, 50, 12]
    }]
};