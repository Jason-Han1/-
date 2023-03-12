var data1 = [77];
option = {
    backgroundColor: 'rgba(16, 41, 74, .6)',
    grid: {
        left: 0,
        top: 0,
        bottom: 0,
        right: '5%',
        containLabel: true,
    },
    legend: {
        show: false,
    },

    xAxis: {
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
    yAxis: {
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
            color: '#fff',
            fontSize: 14,
        },
        data: ['公盈投资'],
    },
    series: [
        {
            // 分隔
            type: 'pictorialBar',
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
                                offset: 1,
                                color: 'rgba(255, 204, 0, 1)', //下
                            },
                            {
                                offset: 0,
                                color: 'rgba(255, 255, 255, 1)',
                            },
                        ],
                        globalCoord: false,
                    },
                },
            },
            symbolRepeat: 'fixed',
            symbolMargin: 2,
            symbol: 'roundRect',
            symbolClip: true,
            symbolSize: [7.3, 20],
            symbolPosition: 'start',
            symbolOffset: [5, 0.2],
            z: 1,
            zlevel: 2,
            data: data1,
        },
        {
            type: 'bar',
            barGap: '-100%',
            barWidth: 30,
            silent: true,
            itemStyle: {
                normal: {
                    color: 'transparent',
                    // shadowColor: '#ffffff',
                    // shadowBlur: 10,
                    barBorderRadius: 0,
                    borderColor: 'rgba(255, 255, 255, .3)',
                },
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    fontSize: 14,
                    color: '#fff',
                    offset: [20, 0],
                    formatter: function (params) {
                        return data1[params.dataIndex] === 0 ? '-' : data1[params.dataIndex];
                    },
                },
            },
            z: -12,
            data: [100],
        },
        {
            // 分隔
            type: 'pictorialBar',
            itemStyle: {
                normal: {
                    color: 'rgba(16, 41, 74, 0.1)',
                },
            },
            symbolRepeat: 'fixed',
            symbolMargin: 2,
            symbol: 'roundRect',
            symbolClip: true,
            symbolSize: [7.3, 20],
            symbolPosition: 'start',
            symbolOffset: [5, 0.2],
            z: 0,
            zlevel: 1,
            data: [100],
        },
    ],
};
