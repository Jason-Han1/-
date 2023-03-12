option = {
    backgroundColor: '#001348', //背景色
    grid: {
        show: 'true',
        borderWidth: '0',
        height: '70%',
        width: '55%',
        x: '25%',
        // y:"20%",
    },
    xAxis: {
        show: false, //是否显示x轴
        type: 'value',
    },
    yAxis: [
        {
            type: 'category',
            inverse: true, //让y轴数据逆向
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#26bcf8',
                    fontWeight: 'bold',
                    fontSize: 24,
                },
            },
            splitLine: { show: false }, //横向的线
            axisTick: { show: false }, //y轴的端点
            axisLine: { show: false }, //y轴的线
            data: ['计划完成数量', '理论完成数量', '实际完成数量'],
        },
        {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
                textStyle: {
                    color: '#ffffff',
                    fontSize: '32',
                },
                formatter: function (value) {
                    return value + '';
                },
            },
            data: [2100, 1900, 1600],
        },
    ],
    series: [
        {
            name: '产出',
            type: 'bar',
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: new echarts.graphic.LinearGradient(1, 0, 0, 1, [
                        {
                            offset: 1,
                            color: 'rgba(165, 222, 71, 1)',
                        },
                        {
                            offset: 0,
                            color: 'rgba(11, 193, 234, 0.5)',
                        },
                    ]),
                },
            },
            label: {
                normal: {
                    show: false,
                    position: 'inside',
                    color: 'black',
                    fontSize: 14,
                },
            },
            barWidth: 20,
            data: [800, 800, 800],
        },
        {
            name: '计划数',
            type: 'bar',
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: 'rgba(1,65,134,0.4)',
                },
            },
            barGap: '-100%',
            z: 0,
            barWidth: 20,
            data: [1000, 1000, 1000],
        },
    ],
};
