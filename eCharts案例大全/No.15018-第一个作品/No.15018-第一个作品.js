myChart.on('click', function (params) {
    console.log(params);
});
// 指定图表的配置项和数据
var colors = ['#5793f3', '#ff9933'];
var option = {
    color: colors,
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    grid: {
        right: '10%'
    },
    toolbox: {
        orient: 'vertical',
        itemGap: 20,
        right: 1,
        feature: {
            dataView: {
                show: true,
                readOnly: true,
                title: '数据'
            },
            magicType: {
                type: ['line', 'bar'],
                title: {
                    line: '线形',
                    bar: '柱形'
                }
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true,
                title: '下载'
            }
        }
    },
    dataZoom: [{
        type: 'slider',
        show: true,
        xAxisIndex: [0],
        start: 0,
        end: 100
    }, {
        type: 'inside',
        xAxisIndex: [0],
        start: 0,
        end: 100
    }],
    legend: {
        data: ['失圆率', '磨耗率']
    },
    xAxis: [{
        name: '列车制造商',
        type: 'category',
        axisTick: {
            alignWithLabel: true
        },
        axisPointer: {
            label: {
                backgroundColor: '#333333'
            }
        },
        nameLocation: 'start',
        nameGap: 40,
        nameRotate: 50,
        data: ['奔驰', '大众', '宝马', '马自达', '别克', '丰田', '本田', '尼桑', '斯柯达', '长安', '法拉利', '保时捷']
    }],
    yAxis: [{
        type: 'value',
        name: '失圆率',
        min: 0,
        max: 25,
        position: 'right',
        //interval : 5,//强制分割段数
        axisLine: {
            lineStyle: {
                color: colors[0]
            }
        },
        axisLabel: {
            formatter: '{value} %'
        }
    }, {
        type: 'value',
        name: '磨耗率',
        min: 0, //y轴刻度最小限制
        max: 25, //y轴刻度最大限制
        position: 'left', //y轴显示在哪边
        //interval : 5,//强制分割段数
        axisLine: {
            lineStyle: {
                color: colors[1] //线或者柱状图的颜色
            }
        },
        axisLabel: {
            formatter: '{value} %' //设置刻度数值后的单位
        }
    }],
    series: [{
        name: '失圆率',
        type: 'bar',
        data: [2.0, 4.9, 7.0, 23.2, 21.6, 20.7, 14.6, 12.2, 2.6, 15.2, 6.4, 3.3]
    }, {
        name: '磨耗率',
        type: 'line',
        yAxisIndex: 1,
        smooth: true, //曲线
        data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
        markLine: { //线
            silent: false,
            label: {
                normal: {
                    position: 'start',
                    formatter: '{b}: {c} %'
                }
            },
            lineStyle: {
                normal: {
                    color: '#cc0033',
                    type: 'dashed',
                    width: 1
                }
            },
            data: [{
                    name: '均值',
                    type: 'average'
                }, {
                    name: '极大',
                    yAxis: 23.4
                }, {
                    name: '极小',
                    yAxis: 2
                },
                [{
                    name: '轮位',
                    x: '10%',
                    y: '90%',
                    symbol: 'circle',
                    symbolSize: 1,
                    label: {
                        normal: {
                            position: 'end',
                            formatter: '\n\n轮位'
                        }
                    },
                    lineStyle: {
                        normal: {
                            color: '#0CF49B',
                            type: 'solid',
                            width: 2
                        }
                    }
                }, {
                    name: '',
                    x: '95%',
                    y: '5%',
                    symbol: 'circle',
                    symbolSize: 1
                }]
            ]
        },
        markPoint: {//点
            symbol: 'circle',
            symbolSize: 10,
            itemStyle: {
                normal: {
                    color: '#0CF49B'
                }
            },
            data: [
                {
                    x: '20%',
                    y: '80%',
                    value: '1号',
                    label: {
                        normal: {
                            formatter: '1号',
                            position: 'right',
                            textStyle: {
                                color: '#0CF49B'
                            }
                        }
                    }
                },
                {
                    x: '40%',
                    y: '60%',
                    value: '2号',
                    label: {
                        normal: {
                            formatter: '2号',
                            position: 'right',
                            textStyle: {
                                color: '#0CF49B'
                            }
                        }
                    }
                },
                {
                    x: '60%',
                    y: '40%',
                    value: '3号',
                    label: {
                        normal: {
                            formatter: '3号',
                            position: 'right',
                            textStyle: {
                                color: '#0CF49B'
                            }
                        }
                    }
                },
                {
                    x: '80%',
                    y: '20%',
                    value: '4号',
                    label: {
                        normal: {
                            formatter: '4号',
                            position: 'right',
                            textStyle: {
                                color: '#0CF49B'
                            }
                        }
                    }
                }
            ]
        }
    }]
};