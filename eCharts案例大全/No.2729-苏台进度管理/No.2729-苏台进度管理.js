var barOption = {
    data: ['总工程量', '本周完成', '至本周末累计'],
    yAxis: ['桩基'],
    yAxisdata0: [120],
    yAxisdata1: [40],
    yAxisdata2: [80],
};
option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow',
                    },
                },
                legend: {
                    show: false,
                    data: [
                        {
                            name: barOption.data[0],
                            itemStyle: {
                                color: '#7361D0 ',
                            },
                        },
                        {
                            name: barOption.data[1],
                            itemStyle: {
                                color: '#09E3EF ',
                            },
                        },
                        {
                            name: barOption.data[2],
                            itemStyle: {
                                color: '#1B85BE',
                            },
                        },
                    ],
                },
                grid: {
                    left: '10',
                    right: '60',
                    top: '10',
                    bottom: '10',
                    containLabel: true,
                },
                xAxis: {
                    name: '(万方)',
                    type: 'value',
                    nameTextStyle: {
                        color: 'rgba(255,255,255,0.40)',
                        padding: [0, 0, 0, 0],
                    },
                    boundaryGap: [0, 0.01],
                    max: barOption.yAxisdata0,
                    splitLine: {
                        show: true,
                        lineStyle: {
                            type: 'dashed' ,
                            color: 'rgba(252,252,252,.4)',
                        },
                    },
                },
                yAxis: [
                    {
                        type: 'category',
                        data: barOption.yAxis,
                        axisTick: {
                            show: false, // 不显示坐标轴刻度线
                        },
                        axisLine: {
                            show: true, // 不显示坐标轴线
                            lineStyle: {
                                // color: 'rgba(0,0,0,0.75)',
                                width: 2,
                            },
                        },
                        axisLabel: {
                            interval: 0,
                            textStyle: {
                                color: 'rgba(255,255,255,0.7)',
                                fontSize: 14,
                            },
                        },
                    },
                ],
                series: [
                    {
                        name: barOption.data[0],
                        type: 'bar',
                        data: barOption.yAxisdata0,
                        // showBackground: true,
                        barWidth: 12,
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(
                                1,
                                0,
                                0,
                                0,
                                [
                                    {
                                        offset: 0,
                                        color: 'rgba(115,97,208,1)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(54,68,112,1)',
                                    },
                                ],
                                false
                            ),
                        },
                    },
                    {
                        name: barOption.data[1],
                        type: 'bar', 
                        barGap: '50%',
                        data: barOption.yAxisdata1,
                        barWidth: 12,
                        showBackground: true,
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(
                                1,
                                0,
                                0,
                                0,
                                [
                                    {
                                        offset: 0,
                                        color: 'rgba(9,227,239,1)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(20,108,122,1)',
                                    },
                                ],
                                false
                            ),
                        },
                    },
                    {
                        name: barOption.data[2],
                        type: 'bar',
                        data: barOption.yAxisdata2,
                        showBackground: true,
                        y: 0,
                        barWidth: 12,
                        label: {
                            show: true,
                            position: 'right',
                            color: '#1B85BE',
                            formatter: function () {
                                return ((barOption.yAxisdata2 / barOption.yAxisdata0) * 100).toFixed(2) + '%';
                            },
                        },
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(
                                1,
                                0,
                                0,
                                0,
                                [
                                    {
                                        offset: 0,
                                        color: 'rgba(27,133,190,1)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(29,82,108,1)',
                                    },
                                ],
                                false
                            ),
                        },
                    },
                ],
            };
