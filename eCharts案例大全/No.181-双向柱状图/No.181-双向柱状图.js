/*
请不要直接cv发布谢谢，至少保证有你自己的东西在里面，一点改动没有，直接cv让人恶心
请不要直接cv发布谢谢，至少保证有你自己的东西在里面，一点改动没有，直接cv让人恶心
请不要直接cv发布谢谢，至少保证有你自己的东西在里面，一点改动没有，直接cv让人恶心
重要的事情说三遍，没有脸的可以直接cv发布哈
*/

var option = {
    baseOption: {
        backgroundColor: '#08093f',
        timeline: {

            show: false,
            top: 0,
            data: []
        },
        grid: [
            // 左边柱子
            {
                show: false,
                left: '10',
                top: '10%',
                bottom: '0',
                containLabel: true,
                width: '40%'
            },
            // 中间年龄
            {
                show: false,
                left: '51%',
                top: '10%',
                bottom: '2.5%',
                width: '0%'
            },
            // 右边柱子
            {
                show: false,
                right: '10',
                top: '10%',
                bottom: '0',
                containLabel: true,
                width: '40%'
            }
        ],
        xAxis: [{
                type: 'value',
                inverse: true,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    color: '#08093f',
                },
                splitLine: {
                    show: false
                }
            },
            {
                gridIndex: 1,
                show: false
            },
            {
                gridIndex: 2,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    color: '#08093f',
                },
                splitLine: {
                    show: false
                }
            }
        ],
        yAxis: [{
                type: 'category',
                inverse: true,
                position: 'right',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                data: ['18-25岁', '26-35岁', '36-45岁', '46-55岁', '55岁及以上']
            },
            {
                gridIndex: 1,
                type: 'category',
                inverse: true,
                position: 'center',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        align: 'center',
                        color: '#9AA6E1',
                        fontSize: 15
                    }
                },
                data: ['18-25岁', '26-35岁', '36-45岁', '46-55岁', '55岁及以上']
            },
            {
                gridIndex: 2,
                type: 'category',
                inverse: true,
                position: 'left',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                data: ['18-25岁', '26-35岁', '36-45岁', '46-55岁', '55岁及以上']
            }
        ],
        series: []
    },
    options: [{
        series: [{
                name: '背景1',
                type: 'bar',
                barWidth: 10,
                xAxisIndex: 0,
                yAxisIndex: 0,
                z:-10,
                barGap: '-100%',
                barCategoryGap: 0,
                itemStyle: {
                    normal: {
                        barBorderRadius: 5,
                        color: '#0a0c47'
                    }
                },
                label: {
                    normal: {
                        show: true,
                        formatter: series => {
                            return series.data + '人';
                            //console.info(series.data);
                        },
                        position: 'insideTopLeft',
                        textStyle: {
                            color: '#ffffff',
                            fontSize: 12
                        },
                        offset: [0, -25]
                    }
                },
                data: [200, 200, 200, 200, 200]
            },
            {
                name: '2017',
                type: 'bar',
                xAxisIndex: 0,
                yAxisIndex: 0,
                barWidth: 10,
                itemStyle: {
                    normal: {
                        barBorderRadius: 5,
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: '#468AFF'
                            },
                            {
                                offset: 1,
                                color: 'rgba(130, 93, 255, 0.12)'
                            }
                        ])
                    }
                },
                data: [50, 50, 50, 50, 50]
            },
            {
                name: '背景2',
                type: 'bar',
                barWidth: 10,
                xAxisIndex: 2,
                yAxisIndex: 2,
                z:-10,
                barGap: '-100%',
                barCategoryGap: 0,
                itemStyle: {
                    normal: {
                        barBorderRadius: 5,
                        color: '#0a0c47'
                    }
                },
                label: {
                    normal: {
                        show: true,
                        formatter: series => {
                            return series.data + '人';
                            //console.info(series.data);
                        },
                        position: 'insideTopRight',
                        textStyle: {
                            color: '#ffffff',
                            fontSize: 12
                        },
                        offset: [0, -25]
                    }
                },
                data: [200, 200, 200, 200, 200]
            },
            {
                name: '2018',
                type: 'bar',
                xAxisIndex: 2,
                yAxisIndex: 2,
                barWidth: 10,
                itemStyle: {
                    normal: {
                        barBorderRadius: 5,
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: 'rgba(211, 46, 88, 0.12)'
                            },
                            {
                                offset: 1,
                                color: '#FDC4A0'
                            }
                        ])
                    }
                },
                data: [50, 50, 50, 50, 50]
            }
        ]
    }]
}