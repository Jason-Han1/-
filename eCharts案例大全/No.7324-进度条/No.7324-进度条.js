var myColor = ['#eb2100', '#eb3600', '#d0570e', ];
var ydata =[1.4,1.3, 1.25]
var data =[1.6,1.3, 1.25]
var data2=[10, 10, 10]
var data3 = [9.99, 9.99, 9.99]

option = {
    backgroundColor: '#0e2147',
    grid: {
        left: '11%',
        top: '12%',
        right: '5%',
        bottom: '8%',
        containLabel: true
    },
    xAxis: [{
        show: false,
    }],
    yAxis: [{
        axisTick: 'none',
        axisLine: 'none',
        offset: '27',
        axisLabel: {
            textStyle: {
                color: '#A2C7F3',
                fontSize: '16',
            }
        },
        data: ['预期应收款余额', '降低成本', '去一年期以上存货']
    }, {
        axisTick: 'none',
        axisLine: 'none',
        axisLabel: {
            formatter: function(value) {
                return value + "亿元"
            },
            textStyle: {
                color: '#A2C7F3',
                fontSize: '16',
            }
        },
        data:ydata
    }, {
        nameGap: '50',
        nameTextStyle: {
            color: '#A2C7F3',
            fontSize: '16',
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(0,0,0,0)'
            }
        },
        data: [],
    }],
    series: [{
            name: '',
            type: 'bar',
            yAxisIndex: 0,
            data:data,
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    textStyle: {
                        color: '#fff',
                        fontSize: 12
                    }
                }
            },
            barWidth: 5,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                        offset: 0,
                        color: 'rgba(35,166,255,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(17,90,233,1) '
                    }])
                }
            },
            z: 2
        }, {
            name: '白框',
            type: 'bar',
            yAxisIndex: 1,
            barGap: '-100%',
            data:data3,

            tooltip: {
                show: false
            },
            barWidth: 10,
            itemStyle: {
                normal: {
                    color: '#0e2147',
                }
            },
            z: 1
        }, {
            name: '外框',
            type: 'bar',
            yAxisIndex: 2,
            barGap: '-100%',
            tooltip: {
                show: false
            },
            data: data2,
            barWidth: 14,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgba(19,98,235,1)'
                    }, {
                        offset: 0.7,
                        color: 'rgba(19,98,235,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(34,163,254,1) '
                    }]),
                }
            },
            z: 0
        },
        {
            name: '外圆',
            type: 'scatter',
            hoverAnimation: false,
            tooltip: {
                show: false
            },
            data: [0, 0, 0],
            yAxisIndex: 2,
            symbolSize: 15,
            color: '#A2C7F3',
            itemStyle: {
                normal: {
                    color: '#115BE9',
                    opacity: 1,
                }
            },
            z: 2
        }
    ]
};