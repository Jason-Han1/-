var xData = [
    '6-3',
    '6-6',
    '6-10',
    '6-17',
    '6-20',
    '6-24',
    '7-1',
    '7-4',
    '7-8',
    '7-15',
    '7-18',
    '7-22',
    '7-29',
    '8-1',
    '8-5',
    '9-9',
    '9-16',
    '9-19',
    '9-23',
    '9-30',
    '10-3',
    '10-7',
    '10-14',
    '10-21',
    '10-28',
    '10-31',
    '11-4',
    '11-7',
    '11-11',
    '11-18',
    '11-21',
    '11-25',
    '12-2',
    '12-9',
    '12-16',
    '12-19',
    '3-3',
    '3-10',
    '3-17',
    '3-24',
    '3-31',
];

option = {
    title: {
        left: 'center',
        top: 100,
        text: '2020年度（令和2年度）元岡交流ひろば　活動の記録（対面）',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            textStyle: {
                color: '#fff',
            },
        },
    },
    grid: {
        borderWidth: 0,
        top: 250,
        left: 50,
        right: 30,
        bottom: 95,
        textStyle: {
            color: '#fff',
        },
    },
    legend: {
        x: '70%',
        top: '23%',
        textStyle: {
            color: '#90979c',
        },
        data: ['学習者', 'ボランティア'],
    },
    toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none',
            },
            dataView: { readOnly: false },
            magicType: { type: ['line', 'bar'] },
            restore: {},
            saveAsImage: {},
        },
    },
    calculable: true,
    xAxis: [
        {
            type: 'category',
            axisLine: {
                lineStyle: {
                    color: 'rgba(0,0,0,0.8)',
                },
            },
            axisLabel: {
                interval: 0, //控制坐标轴刻度标签的显示间隔.设置成 0 强制显示所有标签。设置为 1，隔一个标签显示一个标签。设置为2，间隔2个标签。以此类推
                rotate: 45, //倾斜度 -90 至 90 默认为0
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            data: xData,
        },
    ],

    yAxis: [
        {
            type: 'value',
            maxInterval: 1,
            splitLine: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(0,0,0, .8)',
                },
            },
        },
    ],
    series: [
        {
            name: 'ボランティア',
            type: 'line',
            symbolSize: 10,
            smooth: true,
            symbol: 'circle',
            itemStyle: {
                normal: {
                    color: '#6f7de3',
                    label: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            color: '#6f7de3',
                        },
                    },
                },
            },
            // markPoint: {
            //     label: {
            //         normal: {
            //             textStyle: {
            //                 color: '#fff',
            //             },
            //         },
            //     },
            //     data: [
            //         {
            //             type: 'max',
            //             name: '最大值',
            //         },
            //         {
            //             type: 'min',
            //             name: '最小值',
            //         },
            //     ],
            // },
            data: [
                14,
                7,
                11,
                10,
                4,
                11,
                11,
                8,
                11,
                10,
                6,
                11,
                12,
                10,
                11,
                8,
                6,
                5,
                7,
                7,
                6,
                12,
                10,
                12,
                11,
                10,
                12,
                7,
                13,
                12,
                7,
                15,
                14,
                13,
                12,
                9,
                3,
                3,
                3,
                0,
                0,
            ],
        },
        {
            name: '学習者',
            type: 'line',
            symbolSize: 10,
            smooth: true,
            symbol: 'circle',
            itemStyle: {
                normal: {
                    color: '#c257F6',
                    label: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            color: '#c257F6',
                        },
                    },
                },
            },
            markPoint: {
                label: {
                    normal: {
                        textStyle: {
                            color: '#fff',
                        },
                    },
                },
                data: [
                    {
                        type: 'max',
                        name: '最大值',
                    },
                    {
                        type: 'min',
                        name: '最小值',
                    },
                ],
            },
            data: [
                7,
                4,
                6,
                6,
                4,
                7,
                10,
                8,
                10,
                10,
                10,
                7,
                8,
                8,
                3,
                4,
                5,
                0,
                5,
                3,
                5,
                7,
                4,
                11,
                10,
                5,
                7,
                3,
                7,
                9,
                5,
                9,
                13,
                5,
                5,
                5,
                1,
                1,
                1,
                0,
                0,
            ],
        },
    ],
};
