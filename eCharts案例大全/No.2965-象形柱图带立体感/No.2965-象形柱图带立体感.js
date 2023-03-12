option = {
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        borderColor: 'rgba(0, 0, 0, 0.8)',
        textStyle: {
            color: '#fff',
        },
    },
    grid: {
        left: 10,
        right: 10,
        bottom: 10,
        top: 30,
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        boundaryGap: true,
        axisTick: {
            show: false,
        },
        splitLine: {
            show: true,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            color: '#495465',
        },
        data: ['二级数据', '三级数据', '四级数据'],
    },
    yAxis: {
        name: '单位：张表',
        nameTextStyle: {
            color: '#606c80',
            align: 'left',
            verticalAlign: 'top',
        },
        type: 'value',
        axisLabel: {
            show: false,
        }
    },
    series: [
        {
            name: '数量',
            type: 'pictorialBar',
            barCategoryGap: '40%',
            symbol: 'path://M0,10 L10,10 C9.5,10 5.5,5 5,0 C4.5,5 0.5,10 0,10 z',
            label: {
                show: true,
                position: 'top',
                distance: 5,
                color: '#202d40',
                fontSize: 12,
            },
            data: [
                {
                    value: 132,
                    itemStyle: {
                        normal: {
                            color: {
                                type: 'linear',
                                x: 0,
                                x2: 1,
                                y: 0,
                                y2: 0,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: '#1AC765',
                                    },
                                    {
                                        offset: 0.5,
                                        color: '#1AC765',
                                    },
                                    {
                                        offset: 0.5,
                                        color: '#49D284',
                                    },
                                    {
                                        offset: 1,
                                        color: '#49D284',
                                    },
                                ],
                            },
                        },
                        emphasis: {
                            opacity: 1,
                        },
                    },
                },
                {
                    value: 60,
                    itemStyle: {
                        normal: {
                            color: {
                                type: 'linear',
                                x: 0,
                                x2: 1,
                                y: 0,
                                y2: 0,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: '#338CFB',
                                    },
                                    {
                                        offset: 0.5,
                                        color: '#338CFB',
                                    },
                                    {
                                        offset: 0.5,
                                        color: '#5EA4FB',
                                    },
                                    {
                                        offset: 1,
                                        color: '#5EA4FB',
                                    },
                                ],
                            },
                        },
                        emphasis: {
                            opacity: 1,
                        },
                    },
                },
                {
                    value: 36,
                    itemStyle: {
                        normal: {
                            color: {
                                type: 'linear',
                                x: 0,
                                x2: 1,
                                y: 0,
                                y2: 0,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: '#FAAC2C',
                                    },
                                    {
                                        offset: 0.5,
                                        color: '#FAAC2C',
                                    },
                                    {
                                        offset: 0.5,
                                        color: '#FBC160',
                                    },
                                    {
                                        offset: 1,
                                        color: '#FBC160',
                                    },
                                ],
                            },
                        },
                        emphasis: {
                            opacity: 1,
                        },
                    },
                },
            ],
            z: 10,
        },
    ],
};
