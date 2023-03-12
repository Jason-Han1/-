option = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['最高气温', '最低气温']
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} °C'
        }
    },
    series: [{
        name: '最高气温',
        type: 'line',
        data: [6, 6, 7, 5, 7, 9, 8.6],
        markPoint: {
            symbolSize: '50',
            data: [{
                    type: 'max',
                    name: '最大值',
                    itemStyle: {
                        normal: {
                            // 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变
                            color: {
                                type: 'radial',
                                x: 0.5,
                                y: 0.4,
                                r: 0.5,
                                colorStops: [{
                                    offset: 0,
                                    color: 'rgba(0,0,0,0)' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: 'rgba(194,53,49,0.8)' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            }
                        }
                    }
                },
                {
                    type: 'min',
                    name: '最小值',
                    itemStyle: {
                        normal: {
                            // 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变
                            color: {
                                type: 'radial',
                                x: 0.5,
                                y: 0.4,
                                r: 0.5,
                                colorStops: [{
                                    offset: 0,
                                    color: 'rgba(0,0,0,0)' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#f60' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            }
                        }
                    }
                }
            ]
        },
        markLine: {
            data: [{
                type: 'average',
                name: '平均值'
            }]
        }
    }]
};