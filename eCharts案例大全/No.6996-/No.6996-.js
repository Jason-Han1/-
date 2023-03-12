var colors = ['#005F97', '#C23531', '#000000', '#006600'];
option = {
    backgroundColor: '#ffffff',
    color: colors,
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    grid: {
        top: '10%',
        right: '20%',
        left: '21%',
        bottom: '45%',
    },
    toolbox: {
        feature: {
            dataView: {
                show: false,
                readOnly: false
            },
            restore: {
                show: false
            },
            saveAsImage: {
                show: false
            }
        }
    },
    legend: {
        data: ['item1', 'item2', 'item3', 'item4'],
        bottom: 0
    },
    xAxis: [{
        type: 'category',
        name: '时间',
        nameTextStyle: {
            padding: [30, 0, 0, -10]    // 四个数字分别为上右下左与原位置距离
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#005F97'
            },
        },
        axisTick: {
            alignWithLabel: true
        },
        data: ["02-24", "02-25", "02-26", "02-27", '02-28', '02-29', '03-01']
    }],
    yAxis: [{
            type: 'value',
            name: '静叶开度',
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: colors[0]
                }
            },
            axisLabel: {
                formatter: '{value} '
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(0,0,0,0.1)'
                }
            },
        },
        {
            type: 'value',
            name: '顶压',
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: colors[1]
                }
            },
            axisLabel: {
                formatter: '{value} '
            },
            splitLine: {
                show: false,
            },
        },
        {
            type: 'value',
            name: '发动机功率',
            position: 'left',
            offset: 60,
            axisLine: {
                lineStyle: {
                    color: colors[2]
                }
            },
            axisLabel: {
                formatter: '{value} '
            },
            splitLine: {
                show: false,
            },
        },
        {
            type: 'value',
            name: '流量',
            position: 'right',
            offset: 60,
            axisLine: {
                lineStyle: {
                    color: colors[3]
                }
            },
            axisLabel: {
                formatter: '{value} '
            },
            splitLine: {
                show: false,
            },
        },
    ],
    series: [{
            name: '静叶开度',
            type: 'line',
            smooth: true,
            data: [124, 165, 61, 126, 142, 122, 132]
        },
        {
            name: '顶压',
            type: 'line',
            smooth: true,
            yAxisIndex: 1,
            data: [1132, 1115, 1148, 1108, 126, 1215, 1149]
        },
        {
            name: '发动机功率',
            type: 'line',
            smooth: true,
            yAxisIndex: 2,
            data: [558, 518, 539, 523, 517, 522, 525]
        },
        {
            name: '流量',
            type: 'line',
            smooth: true,
            yAxisIndex: 3,
            data: [1, 14, 9, 13, 7, 12, 5]
        },
    ]
};