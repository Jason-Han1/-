var xData = ["2016", "2017", "2018", "2019", "2020"];
var yData1 = [120, 150, 120, 460, 220, 240, 150, 50, 440, 180, 240, 180];
var yData2 = [130, 170, 100, 380, 170, 280, 220, 120, 380, 109, 140, 190];
var yData3 = [62, 50, 42, 60, 20, 20, 30, 30, 4, 8, 4, 8];

var colors = ["#15BEFF", "#11DBA2", "#F03500"];
var names = ["主体存量", "注册", "注销"];
var dataArr = [{
    type: 'max',
    name: '最大值'
}, {
    coord: [1, 9]
}, {
    coord: [2, 4]
}];


option = {
    title: {
        top: '0',
        left: 'left',
        text: '',
        textStyle: {
            align: 'center',
            color: '#00d6fd',
            fontSize: 16
        }

    },
    //backgroundColor: '#FFFFFF',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    legend: {
        //x: 'center',
        right: '30px',
        y: '12px',
        textStyle: {
            color: '#00d6fd',
            fontSize: 12
        },
        //			icon: 'circle',
        itemHeight: 12, //修改icon图形大小
        data: names
    },
    grid: [{
        left: '6%',
        bottom: '8%',
        top: '25%',
        right: '6%',
        containLabel: true
    }],
    xAxis: [{
        type: 'category',
        data: xData,
        name: ' ',
        nameTextStyle: {
            color: '#00d6fd'
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#00d6fd', //更改坐标轴文字颜色
                fontSize: 12
            }
        },
        axisLine: {
            lineStyle: {
                color: '#00d6fd' //更改坐标轴颜色
            }
        },
        axisTick: {
            show: false
        }
    }],
    yAxis: [{
        type: 'value',
        name: '单位：万',
        nameTextStyle: {
            color: '#00d6fd'
        },
        position: 'left',
        //设置坐标轴字体颜色和宽度
        axisLine: {
            lineStyle: {
                color: '#00d6fd',
                width: 1
            }
        },
        //设置网格线颜色
        splitLine: {
            show: true,
            lineStyle: {
                color: ['#0b244c'],
                width: 1,
                type: 'solid'
            }
        },
        axisLabel: {
            color: '#00d6fd',
            fontSize: 12
        }
    }, ],
    series: [{
            name: names[0],
            type: 'line',
            yAxisIndex: 0,
            smooth: true,
            symbolSize: 6,
            symbol: 'circle',
            itemStyle: {
                normal: {
                    color: colors[0]
                }
            },
            lineStyle: {
                width: 2,
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: colors[0]
                    },
                    {
                        offset: 1,
                        color: colors[0]
                    }
                ]),
                shadowColor: 'rgba(158,135,255, 0.3)',
                shadowBlur: 10,
                shadowOffsetY: 20
            },
            markPoint: {
                // 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
                // symbol: 'circle',
                // symbolSize: [50, 50], // 容器大小
                // symbolOffset: [0, -40], //位置偏移
                itemStyle: {
                    borderColor: colors[0],
                    color: {
                        type: 'circle',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 0,
                        colorStops: [{
                            offset: 0,
                            color: colors[0] // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: colors[0] // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    }
                },
                data: dataArr,
            },
            data: yData1
        },
        {
            name: names[1],
            type: 'line',
            yAxisIndex: 0,
            smooth: true,
            symbolSize: 0,
            symbol: 'circle',
            itemStyle: {
                normal: {
                    color: colors[1]
                }
            },
            lineStyle: {
                width: 2,
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: colors[1]
                    },
                    {
                        offset: 1,
                        color: colors[1]
                    }
                ]),
                shadowColor: 'rgba(158,135,255, 0.3)',
                shadowBlur: 10,
                shadowOffsetY: 20
            },
            data: yData2
        }, {
            name: names[2],
            type: 'line',
            yAxisIndex: 0,
            smooth: true,
            symbolSize: 0,
            symbol: 'circle',
            itemStyle: {
                normal: {
                    color: colors[2]
                }
            },
            lineStyle: {
                width: 2,
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: colors[2]
                    },
                    {
                        offset: 1,
                        color: colors[2]
                    }
                ]),
                shadowColor: 'rgba(158,135,255, 0.3)',
                shadowBlur: 10,
                shadowOffsetY: 20
            },
            data: yData3
        },

    ]
};