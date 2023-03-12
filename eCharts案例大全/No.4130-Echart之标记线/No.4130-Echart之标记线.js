let color = ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074',
    '#546570', '#c4ccd3'
];
option = {
    legend: {
        show: false,
    },
    toolbox: {
        show: false
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'line' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    Calculable: true,
    grid: [{
            x: '7%',
            y: '7%',
            width: '43%',
            top: '20%',
            bottom: '11%',
            left: '4%',
            right: '47%',
            show: true
        },
        {
            x: '47%',
            y: '7%',
            width: '48%',
            top: '20%',
            bottom: '11%',
            left: '47%',
            right: '5%',
            show: true
        }
    ],
    xAxis: [{
            type: 'category',
            boundaryGap: false,
            gridIndex: 0,
            data: ['2019/07/21', '2019/07/22', '2019/07/23', '2019/07/24', '2019/07/25', '2019/07/26', '2019/07/27']
        },
        {
            type: 'category',
            boundaryGap: false,
            gridIndex: 1,
            min: 'dataMin',
            data: ['2019/07/27', '2019/07/28', '2019/07/29', '2019/07/30', '2019/07/31', '2019/08/01', '2019/08/02', '2019/08/03']
        }
    ],
    yAxis: [{
        type: 'value',
        gridIndex: 0,
        max: 500,
        min: 50
    }, {
        type: 'value',
        position: 'right',
        max: 500,
        min: 50,
        gridIndex: 1,
    }],
    series: [{
            name: '邮件营销',
            type: 'line',
            color: color[0],
            tipeLang: true,
            itemStyle: {
                normal: {
                    color: '#8cd5c2', //改变折线点的颜色
                    lineStyle: {
                        color: color[0], //改变折线颜色
                    }
                }
            },
            xAxisIndex: 0,
            yAxisIndex: 0,
            markLine: {
                lineStyle: {
                    normal: {
                        color: color[0]
                    }
                },
                data: [{
                    yAxis: 450,
                    label: {
                        show: false
                    }
                }, ],
                symbol: 'none'
            },
            data: [
                ['2019/07/21', 100],
                ['2019/07/22', 120],
                ['2019/07/23', 111],
                ['2019/07/24', 130],
                ['2019/07/25', 140],
                ['2019/07/26', 170],
                ['2019/07/27', 170]
            ]
        },
        {
            type: 'line',
            smooth: false, //关键点，为true是不支持虚线的，实线就用true
            itemStyle: {
                normal: {
                    color: '#8cd5c2', //改变折线点的颜色
                    lineStyle: {
                        color: color[0], //改变折线颜色
                        type: 'dashed' //'dotted'细虚线 'dashed'粗虚线 'solid'实线
                    }
                }
            },
            markLine: {
                lineStyle: {
                    normal: {
                        color: color[0]
                    }
                },
                data: [{
                    yAxis: 450
                }]
            },
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: [
                ['2019/07/27', 170],
                ['2019/07/28', 170],
                ['2019/07/29', 170],
                ['2019/07/30', 170],
                ['2019/07/31', 170],
                ['2019/08/01', 180],
                ['2019/08/02', 190],
                ['2019/08/03', 200]
            ] //, [15, 210], [16, 300]
        },
        {
            name: '视频广告',
            color: color[2],
            type: 'line',
            tipeLang: true,
            itemStyle: {
                normal: {
                    color: '#8cd5c2', //改变折线点的颜色
                    lineStyle: {
                        color: color[2], //改变折线颜色
                    }
                }
            },
            xAxisIndex: 0,
            yAxisIndex: 0,
            data: [
                ['2019/07/21', 150],
                ['2019/07/22', 160],
                ['2019/07/23', 170],
                ['2019/07/24', 181],
                ['2019/07/25', 192],
                ['2019/07/26', 320],
                ['2019/07/27', 300]
            ]
        },
        {
            type: 'line',
            smooth: false, //关键点，为true是不支持虚线的，实线就用true
            itemStyle: {
                normal: {
                    color: '#8cd5c2', //改变折线点的颜色
                    lineStyle: {
                        color: color[2], //改变折线颜色
                        type: 'dashed' //'dotted'虚线 'solid'实线
                    }
                }
            },
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: [
                ['2019/07/27', 300],
                ['2019/07/28', 330],
                ['2019/07/29', 360],
                ['2019/07/30', 260],
                ['2019/07/31', 270],
                ['2019/08/01', 281],
                ['2019/08/02', 262],
                ['2019/08/03', 280]
            ]
            //, [15, 300], [16, 330]
        },
        {
            type: "line",
            showSymbol: false,
            xAxisIndex: 1,
            yAxisIndex: 1,
            markLine: {
                symbol: 'none',
                label: {
                    formatter: '维修计划'
                },
                data: [{
                    name: "维修计划",
                    xAxis: '2019/07/31',
                    lineStyle: {
                        normal: {
                            color: '#FFFFFF',
                            type: "dashed",
                            width: 2
                        }
                    },
                }]
            }
        }
    ]
};