//当前视口宽度
const nowClientWidth = document.documentElement.clientWidth;

// 单位换算方法
function nowSize(val,width=nowClientWidth,initWidth=1920){
    return val * (width/initWidth);
}
let list = [{
    name: '猪仓4',
    value: 26.2
}, {
    name: '猪仓3',
    value: 18.0
}, {
    name: '猪仓2',
    value: 24.1
}, {
    name: '猪仓1',
    value: 24.2
}];
let data = ['猪仓4', '猪仓3', '猪仓2', '猪仓1'];
let values = [26.2, 18.0, 24.1, 24.2]
option = {
    backgroundColor:'#002a66',
    xAxis: {
        max: 30,
        splitLine: {
            show: false
        },
        axisLabel: {
            show: true,
            // textStyle: {
            //     fontSize: nowSize(8)
            // }
        },
        axisTick: {
            show: true,
            lineStyle: {
                "color": "#ccc"
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                "color": "#ccc"
            }
        },
        splitArea: {
            show: false,
        }
    },
    grid: {
        containLabel: true,
        left: '5%',
        top: '10%',
        right: '15%',
        bottom: '10%'
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
            margin: 10,
            textStyle: {
                fontSize: nowSize(15),
                color: '#ccc'
            }
        },
        splitArea: {
            show: false,
        }
    }],
    series: [{ //内
        type: 'bar',
        barWidth: nowSize(20),
        legendHoverLink: false,
        symbolRepeat: true,
        markLine: {
            data: [
                {xAxis: 13, name: '最低警戒值'},
                {xAxis: 27, name: '最高警戒值'}
            ],
            lineStyle:{
                color: '#006dd4'
            }
        },
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
                    color: '#00ccff' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#0061ba' // 100% 处的颜色
                }]
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
            symbolMargin: nowSize(1),
            symbol: 'rect',
            symbolSize: [nowSize(20), nowSize(20)],
            symbolBoundingData: 30,
            itemStyle: {
                normal: {
                    color: 'rgba(0,65,186,0.61)',

                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    offset: [0, 2],
                    distance: 30,
                    textStyle: {
                        color: '#00ccff',
                        fontSize: 14,
                    }
                },

            },
            data: values,
            z: 0,
            animationEasing: 'elasticOut'
        },
        { //分隔
            type: 'pictorialBar',
            itemStyle: {
                color: '#002a66'
            },
            symbolRepeat: 'fixed',
            symbolMargin: nowSize(10),
            symbol: 'rect',
            symbolClip: true,
            symbolSize: [nowSize(1), nowSize(20)],
            symbolPosition: 'start',
            symbolOffset: [0, 0],
            symbolBoundingData: 30,
            data: list,
            z: 2,
            animationEasing: 'elasticOut'
        }
    ]
};