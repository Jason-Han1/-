option = {
    backgroundColor: 'balck',
    xAxis: {
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        }
    },
    grid: {
        containLabel: true,
        left: 30,
        top: 0,
        right: 100,
        bottom: 0
    },
    yAxis: [{
        inverse: true,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
                 show: false,
        },
        data:[100],
    }],
    series: [{ //内
            type: 'bar',
            barWidth:18,
            legendHoverLink: false,
            symbolRepeat: true,
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
                        color: '#00abee' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#62E6F6' // 100% 处的颜色
                    }]
                }
            },
            data:[20],
            z: 1,
            animationEasing: 'elasticOut'
        },
        { // 背景
            type: 'pictorialBar',
            animationDuration: 0,
            symbolRepeat: 'fixed',
            symbolMargin: '20%',
            symbol: 'roundRect',
            symbolSize: [6, 18],
            itemStyle: {
                normal: {
                    color: '#12272A',

                }
            },
            data:[100],
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
            symbol: 'roundRect',
            symbolClip: true,
            symbolSize: [2, 18],
            symbolPosition: 'start',
            symbolOffset: [0, 0],
            data:[20],
            z: 2,
            animationEasing: 'elasticOut'
        }
    ]
};