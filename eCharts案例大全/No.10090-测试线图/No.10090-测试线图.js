option = {
    backgroundColor: '#061536',
    tooltip: {
        trigger: 'axis',
        textStyle: {
            // fontSize:36,
            fontWeight: 'bold',
            color: 'white',
        },
    },
    legend: {
        data: ['测试'],
        show: 'true',
        y: 'top',
        right: '5%',
        top: '5%',
        bottom: '5%',
        textStyle: {
            fontWeight: 'bold',
            fontSize: 8,
            color: 'white'
        },

        color: new echarts.graphic.LinearGradient(
            0, 0.25, 0.75, 1,
            [{
                    offset: 0,
                    color: 'rgb(0,254,157)'
                },
                {
                    offset: 0.25,
                    color: 'rgb(2,191,241)'
                },
                {
                    offset: 0.75,
                    color: 'rgb(51,156,255)'
                },
                {
                    offset: 1,
                    color: 'rgb(145,127,255)'
                },
            ]
        )
    },

    grid: {
        // 'left': '10%',
        // 'right': '6%',
        top: '40%',
        bottom: '12%',
        // 'top': '20%'
    },
    xAxis: [{
        axisLine: {
            lineStyle: {
                color: 'white',
            }
        },
        splitLine: {
            show: false
        },
        // boundaryGap: false,
        axisLabel: {
            show: true,
            textStyle: {
                fontSize: 6
            },
            // interval: 4, //强制显示所有标签
            // rotate: 20, //代表逆时针旋转45度
        },
        data: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]
    }],
    yAxis: [{
        show: false,
        splitNumber: 4,
        splitLine: {
            show: false
        },
        type: 'value',
        axisLabel: {
            fontSize: 6,
            formatter: '{value} '
        },
        axisLine: {
            lineStyle: {
                color: 'white',
            }
        },
    }],
    series: [{
            name: '测试',
            type: 'line',
            smooth: true,
             symbol: 'circle',
        symbolSize: 6,
            lineStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0.25, 0.75, 1,
                        [{
                                offset: 0,
                                color: 'rgb(0,254,157)'
                            },
                            {
                                offset: 0.25,
                                color: 'rgb(2,191,241)'
                            },
                            {
                                offset: 0.75,
                                color: 'rgb(51,156,255)'
                            },
                            {
                                offset: 1,
                                color: 'rgb(145,127,255)'
                            },
                        ]
                    )
                }
            },
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#fff',
                }
            },
            itemStyle: {
                color: "red",
                borderColor: "#fff",
                borderWidth: 3
            },
            areaStyle: {
                normal: {
                    //barBorderRadius: 7,
                    color: new echarts.graphic.LinearGradient(
                        0, 0.25, 0.75, 1,
                        [{
                                offset: 0,
                                color: 'rgba(0,254,157,0.7)'
                            },
                            {
                                offset: 0.25,
                                color: 'rgba(2,191,241,0.7)'
                            },
                            {
                                offset: 0.75,
                                color: 'rgba(51,156,255,0.7)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(145,127,255,0.7)'
                            },
                        ]
                    )
                }
            },
            data: ["233", "125", "64", "399", "417", "378", "232", "356", "472", "357", "303", "186"],
        },
        {
            z: 1,
            type: 'bar',
            name: '测试',
            tooltip: {
                show: false
            },
            animation: false,
            barWidth: 0.5,
            hoverAnimation: false,
            data: ["233", "125", "64", "399", "417", "378", "232", "356", "472", "357", "303", "186"],
            itemStyle: {
                normal: {
                    color: 'rgba(255,255,255，0.1)',
                    opacity: 0.3,
                    label: {
                        show: false
                    }
                }
            }
        },
    ]
};