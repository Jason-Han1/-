option = {
            grid: {
                left: '5%',
                right: '5%',
                bottom: '5%',
                top: '10%',
                containLabel: true
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'none'
                },
                formatter: function (params) {
                    return params[0].name + '<br/>' + params[0].seriesName + ' : ' + params[0].value
                }
            },
            backgroundColor: 'rgb(20,28,52)',
            xAxis: {
                show: false,
                type: 'value'
            },
            yAxis: [{
                type: 'category',
                inverse: true,
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    },
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                data: ['大米', '玉米', '蔬菜']
            }],
            series: [{
                    name: '金额',
                    type: 'bar',
                    zlevel: 1,
                    stack: "2",
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: 'rgb(5,241,252)'
                            }, {
                                offset: 1,
                                color: 'rgb(66,166,254)'
                            }]),
                        },
                    },
                    barWidth: 20,
                    label: {
                        show: true,
                        position: 'right',
                        distance: 10,
                        color: "rgb(94,199,214)"
                    },
                    data: [500, 300, 100]
                },
                {
                    name: "末尾块",
                    type: "bar",
                    zlevel: 1,
                    barWidth: 20,
                    stack: "2",
                    itemStyle: {
                        normal: {
                            color: 'rgba(133,245,252,1)'
                        }
                    },
                    data: [9, 9, 9]
                },
                {
                    name: '背景',
                    type: 'bar',
                    barWidth: 20,
                    barGap: '-100%',
                    data: [900, 900, 900],
                    itemStyle: {
                        normal: {
                            color: 'rgba(4,28,51,1)',
                            // borderColor:'rgba(255,255,255,0.1)',
                            shadowBlur: 10,
                            shadowColor: 'rgba(0,222,255,1)',
                            shadowOffsetX: 0,
                            shadowOffsetY: 0
                        }

                    },
                }
            ]
        };