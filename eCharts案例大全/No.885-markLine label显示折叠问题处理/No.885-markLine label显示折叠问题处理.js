option = {
    title: {
        text: 'Awesome Chart',
    },
    tooltip: {
        show: true,
        trigger: 'axis',
    },
    xAxis: {
        data: [
            '2021-11-01',
            '2021-11-02',
            '2021-11-03',
            '2021-11-04',
            '2021-11-05',
            '2021-11-06',
            '2021-11-07',
            '2021-11-08',
            '2021-11-09',
            '2021-11-10',
            '2021-11-11',
            '2021-11-12',
            '2021-11-13',
            '2021-11-14',
            '2021-11-08',
            '2021-11-09',
            '2021-11-10',
            '2021-11-11',
            '2021-11-12',
            '2021-11-13',
            '2021-11-14',
        ],
    },
    yAxis: {},
    series: [
        {
            type: 'bar',
            barWidth: 32,
            color: '#409eff',
            data: [
                220,
                182,
                191,
                234,
                290,
                330,
                310,
                220,
                182,
                191,
                234,
                290,
                330,
                310,
                220,
                182,
                191,
                234,
                290,
                330,
                310,
                220,
                182,
                191,
                234,
                290,
                330,
                310,
            ],
            markLine: {
                symbol: 'none',
                silent: false,
                label: {
                    // 设置markLine显示名称
                    show: true,
                    normal: {
                        backgroundColor: '#fff',
                        color: 'rgba(96, 98, 102, 1)',
                        formatter: (val) => {
                            return val.data.name;
                        },
                    },
                },
                emphasis: {
                    label: {
                        fontSize: 14,
                        backgroundColor: '#fff',
                        // textBorderColor: '#fff',
                        color: '#000',
                    },
                },
                data: [
                    {
                        xAxis: '2021-11-01',
                        name: '启动黄色预警',
                        lineStyle: {
                            normal: {
                                color: '#FFD300',
                            },
                        },
                    },
                    {
                        xAxis: '2021-11-02',
                        name: '变更红色预警',
                        lineStyle: {
                            normal: {
                                color: '#FF0200',
                            },
                        },
                    },
                    {
                        xAxis: '2021-11-03',
                        name: '解除红色预警',
                        lineStyle: {
                            normal: {
                                color: '#FF0200',
                            },
                        },
                    },
                    {
                        xAxis: '2021-11-04',
                        name: '变更黄色预警',
                        lineStyle: {
                            normal: {
                                color: '#FFD300',
                            },
                        },
                    },
                ],
            },
        },
    ],
};
