let list = [{
    name: '南越天辰弃土场',
    value: 36
}, {
    name: '重庆东站弃土场',
    value: 25
}, {
    name: '五星村弃土场',
    value: 30
}];
let yName = list.map((item) => item.name);
let xData = list.map((item) => item.value);
let barWidth = 18;

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
            margin: 10,
            textStyle: {
                fontSize: 14,
                color: '#fff'
            }
        },
        data: yName,
    }],
    series: [{ //内
            type: 'bar',
            barWidth,
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
            data: list,
            z: 1,
            animationEasing: 'elasticOut'
        },
        { // 背景
            type: 'pictorialBar',
            animationDuration: 0,
            symbolRepeat: 'fixed',
            symbolMargin: '20%',
            symbol: 'roundRect',
            symbolSize: [6, barWidth],
            itemStyle: {
                normal: {
                    color: '#12272A',

                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    offset: [0, 2],
                    distance: 30,
                    textStyle: {
                        color: '#7AF8FF',
                        fontSize: 14,
                    },
                    formatter: function(a, b) {
                        return `${a.value}%`
                    }
                },

            },
            data: xData,
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
            symbolSize: [2, barWidth],
            symbolPosition: 'start',
            symbolOffset: [0, 0],
            data: list,
            z: 2,
            animationEasing: 'elasticOut'
        }
    ]
};