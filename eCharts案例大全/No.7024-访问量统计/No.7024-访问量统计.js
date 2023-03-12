option = {
    tooltip: {
        trigger: 'axis'
    },
    xAxis: [{
        type: 'category',
        data: ['00:00', '00:02', '00:04', '00:06', '00:08', '00:10', '00:12', 
        '00:14', '00:16', '00:18', '00:20', '00:22', '00:24'],
        axisLine: {
            lineStyle: {
                color: '#ddd'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            textStyle: {
                color: '#333'
            },
            margin: 15
        },
    }],
    yAxis: [{
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#333'
            }
        },
        splitLine: {
            lineStyle: {
                color: '#dadada'
            }
        }
    }],
    series: [{
        name: '访问量统计',
        type: 'line',
        data: [13, 10, 8, 12, 15, 14, 10,13, 10, 13, 12, 15, 17],
        symbolSize: 6,
        symbol: 'circle',
        lineStyle: {
            color: '#3CC69B'
        },
        itemStyle: {
            normal: {
                color: '#90e4ca',
                borderColor: '#3CC69B'
            }
        },
        areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#49d2a7e3'
                },{
                    offset: 0.6,
                    color: '#9be8d0ed'
                },
                {
                    offset: 1,
                    color: '#ddece8ed'
                }
            ])
        }
    }]
};