option = {
    backgroundColor: '#333',
    grid: [{
        height: 203,
        width: 300
    },{
        height: 203,
        width: 332
    }],
    xAxis: [{
        name: '天',
        nameTextStyle: {
            color: '#06D3CD',
            fontWeight: 300,
            fontSize: 14,
            fontFamily: 'PingFang SC Regular',
            padding: [0, 0, 0, 25]
        },
        data: ['1', '2', '3', '4', '5', '6', '7'],
        axisLine: {
            lineStyle: {
                color: '#10899A'
            }
        },
        axisTick: {
            inside: true,
            lineStyle: {
                color: '#10899A'
            }
        }
    }, {
        gridIndex: 1,
        axisLine: {
            lineStyle: {
                color: '#10899A'
            }
        }
    }],
    yAxis: [{
        name: '万',
        nameTextStyle: {
            color: '#06D3CD',
            fontWeight: 300,
            fontSize: 14,
            fontFamily: 'PingFang SC Regular',
            padding: [0, 0, -3, 0]
        },
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#10899A'
            }
        },
        axisLabel: {
            color: '#06D3CD',
            fontWeight: 300,
            fontSize: 14,
            fontFamily: 'PingFang SC Regular'
        }
    }, {
        gridIndex: 1,
        axisLine: {
            lineStyle: {
                color: '#10899A'
            }
        }
    }],
    series: [{
        type: 'bar',
        barWidth: 10,
        itemStyle: {
            barBorderRadius: 10,
            color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1, [{
                        offset: 0,
                        color: '#FFFC00'
                    },
                    {
                        offset: 1,
                        color: '#08E4DE'
                    }
                ])
        },
        data: [220, 182, 191, 234, 290, 330, 310]
    }]
};