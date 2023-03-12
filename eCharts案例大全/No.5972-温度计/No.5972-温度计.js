var myColor = ['#eb2100', '#eb3600', '#d0570e', '#d0a00e', '#34da62', '#00e9db', '#00c0e9', '#0096f3', '#33CCFF', '#33FFCC'];
var xdata = ['a', 'b', 'c', 'd', 'e'];
var dataArr =[4, 13, 25, 29, 38,];
var framData = [99, 99.5, 99.5, 99.5, 99.5,];//白框
var outData = [100, 100, 100, 100, 100, ];//外框
var outRadiusData =  [0, 0, 0, 0, 0, ];//外圆
option = {
    backgroundColor: '#0e2147',
    grid: {
        left: '11%',
        top: '20%',
        right: '10%',
        bottom: '8%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: 'transparent', //x轴底部横线
            }
        },
        axisLabel: {
            margin: 25, //标签距离x轴轴线的距离
            inside: false,
            textStyle: {
                color: '#fff',
                fontWeight: 'normal',
                fontSize: '14',
            },
        },
        splitLine: {
            show: false //背景格线
        },
        data: xdata
    }, ],
    yAxis: [{
            axisTick: 'none',
            axisLine: 'none',
            offset: '27',
            axisLabel: {
                textStyle: {
                    show: false,
                    fontSize: '16',
                }
            },
            splitLine: {
                show: false //背景格线
            },
        },
        {
            axisTick: 'none',
            axisLabel: {
                textStyle: {
                    show: false,
                    // color: '#ffffff',
                    fontSize: '16',
                }
            },
            splitLine: {
                show: false //背景格线
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: 'transparent', //x轴底部横线
                }
            },
        },
        {
            name: '',
            nameGap: '50',
            nameTextStyle: {
                color: '#ffffff',
                fontSize: '16',
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: [],
        }
    ],
    series: [{
            name: '条',
            type: 'bar',
            yAxisIndex: 0,
            data: dataArr,
            label: {
                normal: {
                    show: true,
                    position: 'center',
                    textStyle: {
                        color: '#ffffff',
                        fontSize: '16',
                    }
                }
            },
            barWidth: 20,
            itemStyle: {
                normal: {
                    barBorderRadius: 20,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgb(54, 168, 244)'
                    }, {
                        offset: 0.8,
                        color: 'rgb(99, 90, 241)'
                    }, {
                        offset: 1,
                        color: 'rgb(106, 78, 240)'
                    }]),
                }
            },
            z: 2
        }, {
            name: '白框',
            type: 'bar',
            yAxisIndex: 1,
            barGap: '-100%',
            data:framData,
            barWidth: 30,
            itemStyle: {
                normal: {
                    borderColor: 'rgb(0, 136, 231)',
                    color: '#0e2147',
                    barBorderRadius: 20,
                }
            },
            z: 1
        }, {
            name: '外框',
            type: 'bar',
            yAxisIndex: 2,
            barGap: '-130%',
            data:outData,
            barWidth: 40,
            itemStyle: {
                normal: {
                    color: "transparent",
                    barBorderRadius: 5,
                }
            },
            z: 0
        },
        {
            name: '外圆',
            type: 'scatter',
            hoverAnimation: false,
            data:outRadiusData,
            yAxisIndex: 2,
            symbolSize: 32,
            symbolOffset: [-2, 0], //相对于原本位置的偏移量

            itemStyle: {
                normal: {
                    color: "rgb(106, 78, 240)",
                    opacity: 1,
                }
            },
            z: 2
        }
    ]
};