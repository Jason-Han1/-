option = {
    grid: {
        left: '5%',
        top: '12%',
        right: '5%',
        bottom: '8%',
        containLabel: true
    },
    xAxis: [{
        show: false,
    }],
    yAxis: [{
        show: false,
        data: ['xiao']
    }, {
        axisTick: 'none',
        axisLine: 'none',
        axisLabel: {
            textStyle: {
                color: '#777',
                fontSize: '16',
            }
        },
        data: []
    }],
    series: [{
            name: '条',
            type: 'bar',
            yAxisIndex: 0,
            data: [70],
            label: {
                normal: {
                    show: false,
                    position: '',
                    textStyle: {
                        color: '#777',
                        fontSize: '16',
                    }
                }
            },
            barWidth: 10,
            itemStyle: {
                normal: {
                    color: function (params) {
                        let colorArr =
                            params.value > 0
                                ? ['rgb(56,159,255)', 'rgb(150,204,251)']
                                : ['rgb(150,204,251)', 'rgb(56,159,255)'];
                        return new echarts.graphic.LinearGradient(
                            0,
                            0,
                            1,
                            1,
                            [
                                {
                                    offset: 0,
                                    color: colorArr[0], // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: colorArr[1], // 100% 处的颜色
                                },
                            ],
                            false
                        );
                    },
                      barBorderRadius: 5,
                }
            },
            z: 2
        }, {
            name: '白框',
            type: 'bar',
            yAxisIndex: 1,
            barGap: '-100%',
            data: [99.5],
            barWidth: 10,
            itemStyle: {
                normal: {
                    color: 'rgb(221,233,246)',
                    barBorderRadius: 5,
                }
            },
            z: 1
        }
    ]
};