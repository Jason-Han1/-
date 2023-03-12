(data = []),
    (option = {
        backgroundColor: '#022457',
        color: ['#1fe5ea', '#1daeff', '#f4e051'],
        title: [
            {
                text: 290,
                subtext: '计划总数',
                top: '42%',
                left: '49%',
                textAlign: 'center',
                itemGap: 30,
                subtextStyle: {
                    color: '#fff',
                    fontSize: 42,
                    align: 'center',
                },
                textStyle: {
                    color: '#f4e051',
                    fontSize: 44,
                },
            },
        ],
        series: [
            //环形
            {
                name: '基础饼图',
                type: 'pie',
                radius: ['45%', '52%'],
                center: ['50%', '50%'],
                hoverAnimation: false,
                label: {
                    normal: {
                        show: false,
                    },
                    emphasis: {
                        show: false,
                    },
                },
                zlevel: 1,
                labelLine: {
                    normal: {
                        show: false,
                    },
                },
                data: [
                    {
                        value: 100,
                        name: '未执行',
                        itemStyle: {
                            normal: {
                                color: {
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [
                                        {
                                            offset: 0,
                                            color: '#99da69', // 0% 处的颜色
                                        },
                                        {
                                            offset: 1,
                                            color: '#01babc', // 100% 处的颜色
                                        },
                                    ],
                                    globalCoord: false, // 缺省为 false
                                },
                            },
                        },
                    },
                    {
                        value: 20,
                        name: '未执行',
                        itemStyle: {
                            normal: {
                                color: '#000000',
                            },
                        },
                    },
                ],
            },
            //环形分割线
            {
                name: '分割线',
                type: 'gauge',
                radius: '55%',
                clockwise: true,
                startAngle: '90',
                center: ['50%', '50%'],
                endAngle: '-269.9999',
                splitNumber: 22,
                zlevel: 2,
                detail: {
                    offsetCenter: [10, 20],
                    formatter: ' ',
                },
                axisLine: {
                    lineStyle: {
                        width: 0,
                        opacity: 0,
                    },
                },
                axisTick: {
                    show: false,
                },
                markArea: {
                    itemStyle: {
                        color: '#0f0',
                    },
                },
                splitLine: {
                    show: true,
                    length: 32,
                    padding: [0, 0, 0],
                    lineStyle: {
                        color: '#022457',
                        width: 3,
                    },
                },
                axisLabel: {
                    show: false,
                },
            },
        ],
    });
