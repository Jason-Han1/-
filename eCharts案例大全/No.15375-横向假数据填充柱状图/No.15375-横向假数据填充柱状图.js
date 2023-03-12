option = {
    grid: {
        left: '0',
        right: '2%',
        bottom: '3%',
        containLabel: true
    },
    legend: {
        itemHeight: 14,
        itemWidth: 14,
        selectedMode: false,
        data: ['其他', '票价', '排期', '特效', '剧情', '演员']
    },
    xAxis: [{
        show: false,
        type: 'value'
    }, {
        type: 'value',
        axisLabel: {
            formatter: '{value} %'
        },
        min: 0,
        interval: 10,
        max: 100,
    }],
    yAxis: {
        type: 'category',
        axisTick: {
            show: false //隐藏Y轴刻度
        },
        data: ['战狼2', '金刚狼3', '美女与野兽', '爱乐之城', '超凡战队']
    },
    series: [{
        name: '演员',
        type: 'bar',
        barWidth: 45,
        stack: '1',
        label: {
            normal: {
                show: true,
                position: 'inside',
                formatter: function(p) {
                    return option.series[p.seriesIndex].trueData[p.dataIndex] / 10 * 10;
                }
            }
        },
        trueData: [1247, 597, 1363, 304, 7873],
        data: [21, 8, 22, 10, 33]
    }, {
        name: '剧情',
        type: 'bar',
        barWidth: 45,
        stack: '1',
        label: {
            normal: {
                show: true,
                position: 'inside',
                formatter: function(p) {
                    return option.series[p.seriesIndex].trueData[p.dataIndex] / 10 * 10;
                }
            }
        },
        trueData: [3286, 4391, 2694, 1336, 9716],
        data: [51, 60, 40, 42, 30]
    }, {
        name: '特效',
        type: 'bar',
        barWidth: 45,
        stack: '1',
        label: {
            normal: {
                show: true,
                position: 'inside',
                formatter: function(p) {
                    return option.series[p.seriesIndex].trueData[p.dataIndex] / 10 * 10;
                }
            }
        },
        trueData: [713, 835, 955, 457, 2978],
        data: [10, 10, 12, 12, 10]
    }, {
        name: '排期',
        type: 'bar',
        barWidth: 45,
        stack: '1',
        label: {
            normal: {
                show: true,
                position: 'inside',
                formatter: function(p) {
                    return option.series[p.seriesIndex].trueData[p.dataIndex] / 10 * 10;
                }
            }
        },
        trueData: [697, 996, 1319, 556, 2650],
        data: [12, 15, 20, 15, 10]
    }, {
        name: '票价',
        type: 'bar',
        barWidth: 45,
        stack: '1',
        label: {
            normal: {
                show: true,
                position: 'inside',
                formatter: function(p) {
                    return option.series[p.seriesIndex].trueData[p.dataIndex] / 10 * 10;
                }
            }
        },
        trueData: [103, 130, 177, 441, 282],
        data: [6, 7, 6, 21, 17]
    }, {
        name: '其他',
        type: 'bar',
        barWidth: 45,
        stack: '1',
        label: {
            normal: {
                show: true,
                position: 'inside',
                formatter: function(p) {
                    return option.series[p.seriesIndex].trueData[p.dataIndex] / 10 * 10;
                }
            }
        },
        trueData: [, , , , ],
        data: []
    }]
};