var Xdata = [
        '南区一班',
        '南区二班',
        '南区三班',
        '南区四班',
        '南区五班',
        '北区一班',
        '北区二班',
        '北区三班',
        '北区四班',
        '北区五班',
    ],

    option = {
        legend: {
            right: '0',
            top: "40",
            textStyle: {
                color: 'rgb(123,127,148)'
            },
            itemWidth: 15,
            itemHeight: 15,
            borderWidth: '1px',
            data: ['已完工', '联盟广告', {
                    name: '视频广告',
                    itemStyle: {
                        color: '#EFEFEF'
                    }

                }

            ]
        },
        // backgroundColor: 'transparent',
        backgroundColor: 'rgb(1,8,46)',
        grid: {
            left: '10',
            top: '80',
            right: '10',
            bottom: '10',
            containLabel: true,
        },
        xAxis: [{
            data: Xdata,
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#aaa',
                }
            },
        }],
        yAxis: [{
            name: '单位(人数)',
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
        }, ],
        series: [{
                type: 'bar',
                barWidth: 20,
                barGap: '120%',
                z: 1,
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(88,196,242,0.8)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(19,48,87,0.8)'// 100% 处的颜色
                    }], false)
                },
                label: {
                    show: false
                },
                data: [11, 56, 69, 45, 36, 54],
            },
            {
                type: 'bar',
                barWidth: 20,
                barGap: '10',
                z: 1,
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(94,97,128,0.8)' // 100% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(29,38,69,0.8)' // 100% 处的颜色
                    }], false)
                },
                label: {
                    show: false
                },
                data: [11, 56, 69, 45, 36, 54],
            },
            {
                name: '已完工',
                data: [23, 32, 44, 56, 83, 46, 90, 56, 93, 19],
                type: 'pictorialBar',
                barGap: '100',
                symbol: 'roundRect',
                symbolRepeat: 'fixed',
                symbolClip: true,
                symbolSize: [16, 4],
                label: {
                    normal: {
                        textStyle: {
                            normal: {
                                color: '#07FF18',
                            },
                        },
                    },
                },
                barWidth: 60,
                itemStyle: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(132,137,117,0.8)' // 100% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(28,37,68,0.8)' // 100% 处的颜色
                    }], false)
                },
            },
        ],
    };