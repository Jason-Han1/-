let xdata = ['00:00', '06:00', '12:00', '18:00', '24:00']
let data = [1234, 1234, 1234, 1234, 1234]
option = {
    backgroundColor: 'rgba(0, 0, 0, 0.8)', //背景色
    tooltip: {
        trigger: "axis",
        axisPointer: {
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(0, 255, 233,0)'
                    }, {
                        offset: 0.5,
                        color: 'rgba(255, 255, 255,1)',
                    }, {
                        offset: 1,
                        color: 'rgba(0, 255, 233,0)'
                    }],
                    global: false
                }
            },
        },
        // formatter: function(params) {
        //     return params[0].value + '万'
        // }
    },
    grid: {
        left: "3%",
        right: "3%",
        bottom: "10%",
        top: "10%",
        containLabel: true
    },
    xAxis: {
        data: xdata,
        triggerEvent: true,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: true,
            rotate: 0,
            interval: 0,
            textStyle: {
                color: "#C9DFB5"
            }
        }
    },
    yAxis: {
        name: "",
        triggerEvent: true,
        splitNumber: 2,
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed',
                color: '#B8C6D9'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#C9DFB5'
            }
        },
        // y轴文字
        axisLabel: {
            show: true,
            textStyle: {
                color: "#597faa",
                fontSize: 16
            },
            // formatter:(val =>{
            //     return val / 10000
            // })
        }
    },
    series: [{
        name: "",
        barMinHeight: 10,
        type: "pictorialBar",
        barCategoryGap: "60%",
        // symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
        symbol: "path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z",
        itemStyle: {
            normal: {
                //barBorderRadius: 5,
                //渐变色
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: "#1b3994"
                    },
                    {
                        offset: 0.5,
                        color: "#266cc2"
                    },
                    {
                        offset: 1,
                        color: "#2259b1"
                    }
                ])
            }
        },
        label: {
            normal: {
                show: false,
                position: "top",
                textStyle: {
                    color: "#fff",
                    fontSize: 20
                }
            }
        },
        data: data,
        z: 10
    }]
}
// myEcharts.setOption(option)