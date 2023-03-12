option = {
    backgroundColor: 'rgba(8, 84, 88, 1)',
    title: {
        text: '0',
        left: 'center',
        top: '48%',
        textStyle: {
            fontSize: 16,
            color: '#fff',
        },
    },
    xAxis: {
        type: 'value',
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
    },
    grid: {
        left: '30%',
        right: '30%',
        top: '20%',
    },
    yAxis: {
        type: 'category',
        data: ['A'],
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
    },
    series: [
        {
            type: 'bar',
            barWidth: 30,
            showBackground: true,
            itemStyle: {
                normal: {
                    color: (params) => {
                        var col = {};
                        if (params.value < 0) {
                            col = new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                {
                                    offset: 0,
                                    color: 'rgba(254, 210, 69, 0)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(254, 209, 69, 0.5)',
                                },
                            ]);
                        } else {
                            col = new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                {
                                    offset: 0,
                                    color: 'rgba(254, 209, 69, 0.5)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(254, 210, 69, 0',
                                },
                            ]);
                        }
                        return col;
                    },
                },
            },
            data: [-6],
            label: {
                show: true,
                color: '#fff',
            },
        },
        {
            type: 'bar',
            barWidth: 30,
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(20, 109, 111, 1)',
            },
            itemStyle: {
                color: 'rgba(24,144,255,0)',
            },
            barGap: '-100%',
            data: [-10, 10],
        },
    ],
};
