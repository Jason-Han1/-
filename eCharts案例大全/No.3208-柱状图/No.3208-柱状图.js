option = {
    backgroundColor: '#00265f',

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
    },
    grid: {
        show: false,
        top: '15%',
        right: '3%',
        left: '5%',
        bottom: '12%',
    },
    xAxis: [
        {
            type: 'category',
            data: [
                '姑苏区',
                '虎丘区',
                '吴中区',
                '相城区',
                '吴江区',
                '常熟市',
                '张家港市',
                '昆山市',
                '太仓市',
                '工业园区',
            ],
            axisLine: {
                show: false,
                lineStyle: {
                    color: 'rgba(255,255,255,0.12)',
                },
            },
            axisLabel: {
                margin: 14,
                color: '#e2e9ff',
                textStyle: {
                    fontSize: 20,
                },
            },
        },
    ],
    yAxis: [
        {
            type: 'value',
            axisTick: {
                show: false,
            },
            axisLabel: {
                formatter: '{value}',
                color: '#e2e9ff',
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: 'rgba(255,255,255,1)',
                },
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: 'rgba(255,255,255,0.12)',
                },
            },
        },
    ],
    series: [
        {
            type: 'bar',
            data: [4016, 3230, 3790, 3570, 5470, 2860, 4530, 3710, 3180, 3260],
            barWidth: '40px',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: 'rgba(0,244,255,1)', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: 'rgba(0,77,167,1)', // 100% 处的颜色
                            },
                        ],
                        false
                    ),
                    barBorderRadius: [30, 30, 30, 30],
                    shadowColor: 'rgba(0,160,221,1)',
                    shadowBlur: 4,
                },
            },
            label: {
                normal: {
                    show: true,
                    lineHeight: 30,
                    width: 80,
                    height: 30,
                    // backgroundColor: 'rgba(0,160,221,0.1)',
                    borderRadius: 200,
                    position: ['-8', '-60'],
                    distance: 1,
                    formatter: '   {d|●}' + '{c} ',
                    rich: {
                        d: {
                            color: '#3CDDCF',
                        },
                        a: {
                            color: '#fff',
                            align: 'center',
                        },
                        // b: {
                        //   width: 1,
                        //   height: 30,
                        //   borderWidth: 1,
                        //   borderColor: '#234e6c',
                        //   align: 'left',
                        // },
                    },
                },
            },
        },
    ],
};
