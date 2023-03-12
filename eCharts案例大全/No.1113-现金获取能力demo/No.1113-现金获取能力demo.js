var option = {
    backgroundColor: '#000',
    grid: {
        top: '10%',
        left: '10%',
        right: '20%',
        bottom: '40%',
        containLabel: true,
    },
    xAxis: {
        type: 'value',
        axisLine: {
            show: false,
        },
        splitLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
        axisTick: {
            show: false,
        },
    },
    yAxis: [
        {
            type: 'category',
            inverse: true,
            data: ['山西1', '四川2', '西藏3'],
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: true,
                normal: {
                    position: [-200, -20],
                },
                textStyle: {
                    color: '#fff',
                    fontSize: 18,
                },
            },
        },
    ],
    series: [
        {
            type: 'pictorialBar',
            emphasis: {
                focus: 'none',
                itemStyle: {
                    color: '#d7322f',
                },
            },
            legendHoverLink: false,
            itemStyle: {
                normal: {
                    color: '#d7322f',
                },
            },
            symbol: 'rect',
            symbolRepeat: 'fixed',
            // symbolBoundingData: 1,
            symbolMargin: 10,
            symbolClip: true,
            symbolSize: [14, 18],
            symbolPosition: 'start',
            symbolOffset: [0, 0],
            data: [1, 2, 3],
            z: 2,
        },
        {
            type: 'pictorialBar',
            emphasis: {
                focus: 'none',
                itemStyle: {
                    color: '#D2D2D2',
                },
            },
            legendHoverLink: false,
            itemStyle: {
                normal: {
                    color: '#D2D2D2',
                },
            },
            label: {
                normal: {
                    show: false,
                },
            },
            animationDuration: 0,
            symbolRepeat: 'true',
            symbolMargin: 10,
            symbol: 'rect',
            symbolSize: [14, 18],
            symbolPosition: 'start',
            symbolOffset: [0, 0],
            data: [10, 10, 10],
            z: 1,
        },
    ],
};
