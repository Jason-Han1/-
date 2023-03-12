option = {
    backgroundColor: '#0E2A43',
    title: {
        text: "使用多个x轴--重叠",
        left: "3%",
        top: "0",
        textStyle: {
            color: '#aaa',
            fontSize: 20,
        }
    },
    legend: {
        right: '0',
        top: "40",
        textStyle: {
            color: 'rgb(123,127,148)'
        },
        itemWidth: 15,
        itemHeight: 15,
        borderWidth: '1px',

        data: ['邮件营销', '联盟广告', {
                name: '视频广告',
                itemStyle: {
                    color: '#EFEFEF'
                }

            }

        ]
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '1%',
        containLabel: true
    },
    xAxis: [{
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#aaa',
            }
        },
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    }, {
        show: false,
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    }],

    yAxis: {
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#aaa',
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#aaa',
            }
        },
    },
    //  color:["#cf78c2","#0985bd","#06a097","#C96DD8","#0fa9ee","#08c5cb"],
    series: [{
        type: "bar",
        barWidth: 20,
        stack: '广告',
        name: '邮件营销',
        itemStyle: {
            color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [{
                        offset: 0,
                        color: 'rgba(231,142,102,0.8)'
                    },
                    {
                        offset: 0.5,
                        color: 'rgba(154,88,80,0.8)'
                    },
                    {
                        offset: 1,
                        color: 'rgba(91,46,70,0.8)'
                    }
                ]
            )
        },
        data: ["47", "40", "66", "74", "40", "66", "74", ],
    }, {
        type: "bar",
        barWidth: 20,
        name: '联盟广告',
        stack: '广告',
        itemStyle: {
            color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [{
                        offset: 0,
                        color: 'rgba(243,92,103,0.8)'
                    },
                    {
                        offset: 0.5,
                        color: 'rgba(159,94,102,0.8)'
                    },
                    {
                        offset: 1,
                        color: 'rgba(105,54,84,0.8)'
                    }
                ]
            )
        },
        data: ["47", "59", "30", "74", "59", "30", "64", ],
    }, {
        type: "bar",
        name: '视频广告',
        xAxisIndex: 1,
        barWidth: 20,
        itemStyle: {
            color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [{
                        offset: 0,
                        color: 'rgba(24,141,240,0.8)'
                    },
                    {
                        offset: 0.5,
                        color: 'rgba(57,129,176,0.8)'
                    },
                    {
                        offset: 1,
                        color: 'rgba(23,58,102,0.8)'
                    }
                ]
            )
        },
        data: ["8", "", "", "40"],
    }, ]
};