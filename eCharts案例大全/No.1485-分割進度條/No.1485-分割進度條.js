let list = [{
    name: '',
    value: 36
}, {
    name: '',
    value: 25
}, {
    name: '',
    value: 30
}];
let yName = list.map((item) => item.name);
let xData = list.map((item) => item.value);
let barWidth = 24;

option = {
    backgroundColor: '#fff',
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
                fontSize: 16,
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
                        color: '#ff4d4f' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#ff7875' // 100% 处的颜色
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
            symbolMargin: '40%',
            symbol: 'roundRect',
            symbolSize: [6, barWidth],
            itemStyle: {
                normal: {
                    color: '#d9d9d9',

                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    offset: [0, 3],
                    distance: 40,
                    textStyle: {
                        color: '# ',
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
                color: '#fff'
            },
            symbolRepeat: 'fixed',
            symbolMargin: 5,
            symbol: 'roundRect',
            symbolClip: true,
            symbolSize: [3, barWidth],
            symbolPosition: 'start',
            symbolOffset: [-3, 0],
            data: list,
            z: 2,
            animationEasing: 'elasticOut'
        }
    ]
};