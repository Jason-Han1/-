var option = {
    color: ['rgb(56,159,255)', 'rgb(235,235,235)'],
    title: {
        show: false,
        text: '',
        textStyle: {
            fontSize: 16,
            padding: '10px',
        },
    },
    legend: {
        data: ['产量', '计划量'],
    },
    tooltip: {},
    xAxis: {
        data: ['长庆', '西南', '塔里木', '青海', '其他'],
    },
    yAxis: {
        splitArea: { show: false },
    },

    series: [
        {
            barWidth: 20,
            data: ['47', '59', '95', '74', '95'],
            color: 'rgb(235,235,235)',
            name: '计划量',
            type: 'bar',
            itemStyle: {
                normal: {
                    barBorderRadius: [30, 30, 0, 0],
                },
            },
        },
        {
            barGap: '-100%' /*这里设置包含关系，只需要这一句话*/,
            barWidth: 20,
            data: ['27', '24', '43', '10', '43'],
            name: '产量',
            type: 'bar',
            itemStyle: {
                normal: {
                    color: function (params) {
                        let colorArr =
                            params.value > 0
                                ? ['rgb(56,159,255)', 'rgb(150,204,251)']
                                : ['rgb(150,204,251)', 'rgb(56,159,255)'];
                        return new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [
                                {
                                    offset: 0,
                                    color: colorArr[0], // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: colorArr[1], // 100% 处的颜色
                                },
                            ],
                            false
                        );
                    },
                    barBorderRadius: [30, 30, 0, 0],
                },
            },
        },
    ],
};
