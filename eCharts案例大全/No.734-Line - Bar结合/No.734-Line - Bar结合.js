option = {
    backgroundColor: new echarts.graphic.RadialGradient(0, 0, 0.8, [{
        offset: 0,
        color: '#7A72D6'
    }, {
        offset: 1,
        color: '#689bd0'
    }]),
    tooltip: {
        trigger: 'axis',
        textStyle: {
            color: '#fff',
        },
    },
    grid: {
        left: '50',
        right: '50',
        top: '40',
        bottom: '12%',
    },
    xAxis: [{
        type: 'category',
        splitArea: {
            show: false,
        },
        splitLine: {
            show: false
        },
        boundaryGap: false,
        
        axisLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#fff'
            }
        },
        axisTick: {
            show: false
        },
        data: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"]
    }],
    yAxis: [{
        show: false,
    }],
    series: [{
            name: 'TIT',
            type: 'line',
            symbol: 'circle',
            symbolSize: 25,
            lineStyle: {
                normal: {
                    width: 3,
                    shadowColor: 'rgba(0, 166, 0, 1)',
                    shadowBlur: 2,
                    shadowOffsetY: 5,
                    shadowOffsetX: 5,
                    type: 'dashed',
                    color: new echarts.graphic.LinearGradient(
                        0, 0.25, 0.75, 1,
                        [{
                                offset: 0,
                                color: '#0f0'
                            },
                            {
                                offset: 0.25,
                                color: '#0f0'
                            },
                            {
                                offset: 0.75,
                                color: '#0f0'
                            },
                            {
                                offset: 1,
                                color: '#0f0'
                            },
                        ]
                    )
                }
            },
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#2D258B',
                }
            },
            itemStyle: {
                color: function(params) {
                    let colorList = [
                        new echarts.graphic.LinearGradient(
                            0, 0, 1, 1, [{
                                offset: 0,
                                color: '#C9C7ED'
                            }, {
                                offset: 1,
                                color: '#fff'
                            }]),

                    ];
                    return colorList[params.dataIndex];
                },
                borderColor: "#fff",
                borderWidth: 3,
                shadowColor: 'rgba(0, 0, 0, .5)',
                shadowBlur: 0,
                shadowOffsetY: 2,
                shadowOffsetX: 2,
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0.25, 0.75, 1,
                        [{
                                offset: 0,
                                color: 'rgba(0,254,157,0.1)'
                            },
                            {
                                offset: 0.25,
                                color: 'rgba(2,191,241,0.1)'
                            },
                            {
                                offset: 0.75,
                                color: 'rgba(51,156,255,0.1)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(145,127,255,0.1)'
                            },
                        ]
                    )
                }
            },
            data: [1020, 1682, 1091, 2000, 3090, 2230, 1910, 1682, 1791, 3000, 4090, 2220],

        },
        {
            z: 1,
            type: 'bar',
            name: 'TIT',
            tooltip: {
                show: false
            },
            animation: false,
            barWidth: '80%',
            hoverAnimation: false,
            data: [3220, 3682, 2791, 3000, 4090, 3230, 2910, 4682, 2791, 3000, 4090, 2220],

            itemStyle: {
                normal: {
                    barBorderRadius: 50,
                    color: '#fff',
                    opacity: .7,
                    label: {
                        show: false
                    },
                    shadowColor: 'rgba(0, 0, 0, .2)',
                    shadowBlur: 0,
                    shadowOffsetY: 2,
                    shadowOffsetX: 2,
                }
            },
        },
    ]
};