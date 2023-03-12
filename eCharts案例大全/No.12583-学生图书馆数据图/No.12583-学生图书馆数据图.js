option = {
    backgroundColor: '#141845',
    title: {
        text: '学生图书馆数据图',
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#283b56'
            }
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    legend: {
        y: 25,
        data: [{
                name: '进馆次数',
                textStyle: {
                    color: '#fff'
                }
            },
            {
                name: '进馆时长',
                textStyle: {
                    color: '#fff'
                }
            },
            {
                name: '借书次数',
                textStyle: {
                    color: '#fff'
                }
            }
        ]
    },
    dataZoom: {
        show: false,
        start: 0,
        end: 100
    },
    xAxis: [{
        type: 'category',
        boundaryGap: true,
        data: [2012, 2013, 2014, 2015],
        axisPointer: {
            type: 'shadow'
        },
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        }
    }],
    yAxis: [{
            type: 'value',
            scale: true,
            name: '次数/次',
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        {
            type: 'value',
            scale: true,
            name: '小时/H',
            max: 100,
            min: 0,
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            }
        }
    ],
    series: [{
            name: '借书次数',
            data: [19, 28, 14, 35],
            type: 'line',
            smooth: true,
            itemStyle: {
                normal: {
                    color: "#54D16B"
                },
            }
        },
        {
            name: '进馆时长',
            data: [45, 65, 53, 65],
            type: 'line',
            smooth: true,
            itemStyle: {
                normal: {
                    color: "#F98E40"
                },
            }
        },
        {
            name: '进馆次数',
            data: [97, 85, 85, 78],
            type: 'line',
            smooth: true,
            itemStyle: {
                normal: {
                    color: "#4694FF"
                },
            }
        }
    ]
};