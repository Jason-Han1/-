var xdata = ['09-08', '09-09', '09-10'];
var data = [850, 600, 800];
option = {
    backgroundColor: "rgba(2, 12, 44, 1)", //背景色
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: 'shadow'
        },
        formatter: function(params) {
           return (
              params[0].name +
              "<br>" +
              "订单数 ：" +
              params[0].value
            );
        }
    },
    grid: {
        left: "4%",
        right: "4%",
        bottom: "3%",
        top: "15%",
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
                fontSize: 14,
                color: "rgba(102, 105, 126, 1)",
            }
        }
    },
    yAxis: {
        triggerEvent: true,
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.1)'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "rgba(102, 105, 126, 1)",
                fontSize: 16
            }
        }
    },
    series: [{
            name: "订单数",
            barMinHeight: 10,
            type: "pictorialBar",
            barCategoryGap: "60%",
            symbol: "path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z",
            itemStyle: {
                normal: {
                    //渐变色
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "rgba(111, 87, 197, 1)"
                        },
                        {
                            offset: 0.5,
                            color: "rgba(111, 87, 197, 0.8)"
                        },
                        {
                            offset: 1,
                            color: "rgba(111, 87, 197, 0.3)"
                        }
                    ])
                }
            },
            label: {
                normal: {
                    show: true,
                    position: "top",
                    textStyle: {
                        color: "rgba(111, 87, 197, 1)",
                        fontSize:20
                    }
                }
            },
            data: data,
            z: 10
        },
    ]
}