option = {
    backgroundColor: '#081a37',
    tooltip: {},
    xAxis: {
        max: 101,
        splitLine: {
            show: false,
        },
        offset: 10,
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
        min: 0,
    },
    yAxis: [
        {
            type: 'category',
            inverse: false,
            // data: [-1, '系统名称9', '系统名称8', '系统名称7','系统名称6', '系统名称5', '系统名称4', '系统名称3', '系统名称2', '硕士研究生'],
            position: 'left',
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
        },
    ],
    grid: {
        top: '5%',
        height: 600,
        left: 50,
        right: 100,
    },
    series: [
        {
            // current data
            type: 'pictorialBar',
            name: '1',
            symbol: 'rect',
            symbolRepeat: 'fixed',
            symbolMargin: '20%',
            symbolClip: true,
            symbolOffset: [5, 0],
            stack: '11',
            symbolSize: [10, 30],
            symbolBoundingData: 100,
            label: {
                normal: {
                    show: false,
                },
            },
            data: [
                {
                    value: 70,
                    itemStyle: {
                        normal: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: '#f6c843', // 0% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: '#9b5e04', // 100% 处的颜色
                                    },
                                ],
                                globalCoord: false, // 缺省为 false
                            },
                        },
                    },
                },
            ],
            z: 99999999,
            animationEasing: 'elasticOut',
            animationDelay: function (dataIndex, params) {
                return params.index * 30;
            },
        },

        {
            // full data
            type: 'pictorialBar',
            symbolOffset: [5, 0],
            itemStyle: {
                normal: {
                    color: '#0c2a51',
                },
            },
            label: {
                normal: {
                    show: false,
                },
            },
            animationDuration: 0,
            symbolRepeat: 'fixed',
            symbolMargin: '20%',
            symbol: 'rect',
            symbolSize: [10, 30],
            symbolBoundingData: 100,
            data: [
                {
                    value: 100,
                },
            ],
            z: 99999,
            animationEasing: 'elasticOut',
            animationDelay: function (dataIndex, params) {
                return params.index * 30;
            },
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 40,
            barGap: '-100%',
            data: [0],
            showBackground: true,
            backgroundStyle: {
                shadowColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)',
                borderColor: '#1c3e7a',
                borderWidth: 2,
            },
            itemStyle: {
                normal: {
                    color: '#7ac7e7',
                    barBorderRadius: 0,
                    // borderColor:'red',
                    borderCap: 'square',
                },
            },
        },
    ],
};
