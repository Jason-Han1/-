const list = [{
    name: '测试1',
    value: 130
}, {
    name: '测试2',
    value: 120
}, {
    name: '测试3',
    value: 200
}]
option = {
    backgroundColor: '#000',
    xAxis: {
        max: 2000,
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    grid: {
        left: 100,
        top: 0,
        right: 150,
        bottom: 0
    },
    yAxis: [{
        type: 'category',
        inverse: false,
        data: list,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        }
    }],
    series: [{ //内
            type: 'bar',
            barWidth: 20,
            legendHoverLink: false,
            silent: true,
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: 'red' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'green' // 100% 处的颜色
                    }]
                }
            },
            label: {
                normal: {
                    show: true,
                    position: [0, '-100%'],
                    formatter: '{b}',
                    textStyle: {
                        color: '#fff',
                        fontSize: 14
                    }
                }
            },
            data: list,
            z: 1,
            animationEasing: 'elasticOut'
        },
        {
            type: 'pictorialBar',
            animationDuration: 0,
            symbolRepeat: 'fixed',
            symbolMargin: '20%',
            symbol: 'rect',
            symbolSize: [10, 20],
            symbolBoundingData: 2000,
            itemStyle: {
                normal: {
                    color: 'gray'
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    offset: [0, 2],
                    textStyle: {
                        color: '#fff',
                        fontSize: 14
                    }
                }
            },
            data: [2000, 2000, 2000],
            z: 0,
            animationEasing: 'elasticOut'
        },
        { //分隔
            type: 'pictorialBar',
            itemStyle: {
                color: '#000'
            },
            symbolRepeat: 'fixed',
            symbolMargin: 4,
            symbol: 'rect',
            symbolClip: true,
            symbolSize: [2, 20],
            symbolPosition: 'start',
            symbolOffset: [0, 0],
            symbolBoundingData: 2000,
            data: list,
            z: 2,
            animationEasing: 'elasticOut'
        }
    ]
};