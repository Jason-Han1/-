let list = [{
        name: '第一产业增加值',
        value: 6
    }, {
        name: '第二产业增加值',
        value: 1
    }, {
        name: '第三产业增加值',
        value: 3
    }
];
let data = ['第一产业增加值', '第二产业增加值', '第三产业增加值'];
let values = [6,1,3,]

option = {
    backgroundColor:'balck',
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
        left: 10,
        top: 0,
        right: 50,
        bottom: 0
    },
    yAxis: [{
        data: data,
        inverse: true,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                fontSize: 14,
                color: '#fff'
            }
        }
    }],
    series: [{ //内
            type: 'bar',
            barWidth: 10,
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
                        color: '#12272A' // 0% 处的颜色
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
        {
            type: 'pictorialBar',
            symbolRepeat: 'fixed',
            symbolMargin: '20%',
            symbol: 'roundRect',
            symbolSize: [7, 10],
            itemStyle: {
                normal: {
                    color: '#12272A',

                }
            },
            label: {
                    show: true,
                    position: 'right',
                    offset: [0, 2],
                    textStyle: {
                        color: '#fff',
                        fontSize: 14
                    },
                formatter : parmas=>`${parmas.value}亿元`

            },
            data: values,
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
            symbolSize: [2, 10],
            symbolPosition: 'start',
            data: list,
            z: 2,
            animationEasing: 'elasticOut'
        }
    ]
};