var barData = {
    yAxis: ["-550m中段", "-160m中段", "-320m中段", "-360m中段", "-280m中段", "-120m中段"],
    xAxis: [4, 8, 9, 12, 13, 15]

};
var timer1 = null;
var timer2 = null;
var xData = barData.xAxis;
var yData = barData.yAxis;
var xxData = xData.slice(0, 4);
var yyData = yData.slice(0, 4);
option = {
    backgroundColor:'#000',
    title: {
        text: "异常监测点分布",
        textStyle: {
            color: "rgb(255, 255, 255)",
            fontSize: 42
        },
        textAlign: "center",
        x: 400,
        y: "top"
    },
    grid: {
        left: '5%',
        right: '8%',
        top: '20%',
        bottom: '3%',
        containLabel: true
    },
    tooltip: {
        trigger: "axis",
        textStyle: {
            fontSize: 50
        }
    },
    xAxis: [{
        axisLabel: {
            color: '#ccc',
            fontSize: '35'
        },
        type: "value"
    }],
    yAxis: [{
        axisLabel: {
            color: '#ccc',
            fontSize: '35',
            margin: 30,
        },
        type: "category",
        axisLabel: {
            show: true,
            interval: 0,
            shadowOffsetX: '-20px',
            color: function(params) {
                if (params == yyData[2]) {
                    return "#4dfd30"
                } else {
                    return '#7ac4fc'
                }
            },
            fontSize: 42,
        },
        data: yyData
    }],
    series: [{
        type: "bar",
        data: xxData,
        barWidth: 20,
        itemStyle: {
            normal: {
                barBorderRadius: 10,
                label: {
                    show: true,
                    position: 'right',
                    textStyle: {
                        fontSize: 40,
                        color: 'rgba(123,198 ,255)'
                    }
                },
                color: function(param) {
                    if (param.name == yyData[2]) {

                        return new echarts.graphic.LinearGradient(1, 0, 0,
                            0, [{
                                    offset: 0,
                                    color: 'rgba(77,253,48,1)'
                                }, {
                                    offset: 0.15,
                                    color: 'rgba(77,253,48,0.5)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(77,253,48,0.1)'
                                }
                            ])
                    } else {
                        return new echarts.graphic.LinearGradient(1, 0, 0,
                            0, [{
                                    offset: 0,
                                    color: 'rgba(61,126,235,1)'
                                }, {
                                    offset: 0.4,
                                    color: 'rgba(123,198 ,255,0.5)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(123,198,255,0.1)'
                                }
                            ])
                    }
                },
            }
        },
        z: 2
    }],
    color: ["rgb(30, 144, 255)"],
    animation: true,
    animationThreshold: 10000,
    animationEasing: 'elasticOut',
    quadraticIn: function(idx) {
        return idx * idx;
    }
};
setTimeout(function() {
    myChart.setOption(option);
}, 1000);
clearInterval(timer2);
timer2 = setInterval(function() {
    var first1 = xData[0];
    var first2 = yData[0];

    xData.shift(first1);
    xData.push(first1);
    yData.shift(first2);
    yData.push(first2);
    var xxData = xData.slice(0, 4);
    var yyData = yData.slice(0, 4);
    myChart.setOption({
        yAxis: [{
            axisTick: 'none',
            axisLine: 'none',
            offset: '27',
            axisLabel: {
                show: true,
                interval: 0,
                shadowOffsetX: '-20px',
                color: function(params) {
                    if (params == yyData[2]) {
                        return "#4dfd30"
                    } else {
                        return '#7ac4fc'
                    }
                },
                fontSize: 42,
            },

            data: yyData
        }],
        series: [{
            type: 'bar',
            yAxisIndex: 0,
            data: xxData,
            itemStyle: {
                barBorderRadius: 4,
                color: function(param) {
                    if (param.name == yyData[2]) {
                        return new echarts.graphic
                            .LinearGradient(1, 0, 0, 0, [{
                                    offset: 0,
                                    color: 'rgba(77,253,48,1)'
                                }, {
                                    offset: 0.15,
                                    color: 'rgba(77,253,48,0.5)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(77,253,48,0.1)'
                                }
                            ])
                    } else {
                        return new echarts.graphic
                            .LinearGradient(1, 0, 0, 0, [{
                                    offset: 0,
                                    color: 'rgba(61,126,235,1)'
                                }, {
                                    offset: 0.4,
                                    color: 'rgba(123,198 ,255,0.5)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(123,198,255,0.1)'
                                }
                            ])
                    }
                },

            },
            z: 2
        }, ],
        animation: true,
        animationThreshold: 10000,
        animationEasing: 'elasticOut',
        quadraticIn: function(idx) {
            return idx * idx;
        }
    });
}, 3000);