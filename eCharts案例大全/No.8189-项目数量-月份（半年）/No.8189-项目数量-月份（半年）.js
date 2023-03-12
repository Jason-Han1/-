option = {
    backgroundColor: '#01004C',
    title: {

    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['信息科技', '大消费'],
        textStyle: {
            color: '#fff'
        }
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['line', 'bar']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    calculable: true,
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        data:['一月份', '二月份', '三月份', '四月份', '五月份', '六月份'],
        axisLabel: {
            show: true,
            textStyle: {
                color: "#ffffff", //X轴文字颜色
                fontSize: 16
            }
        },

    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
            formatter: '{value} ',
            color: '#ffffff',
            textStyle: {
                fontSize: 16
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#ccc"
            },
        },


    }],
    series: [{
            name: '信息科技',
            type: 'line',
            data: [1, 4, 2, 5, 1, 2, 1],
            lineStyle: {
                normal: {
                    width: 8,
                    color: {
                        type: 'linear',

                        colorStops: [{
                            offset: 0,
                            color: '#57BD9F' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#19BC8C' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: 'rgba(72,216,191, 0.3)',
                    shadowBlur: 6,
                    shadowOffsetY: 10
                }
            },
            itemStyle: {
                normal: {
                    color: '#57BD9F',
                    borderWidth: 10,
                    borderColor: "#57BD9F"
                }
            },
            markPoint: {
                data: [{
                        type: 'max',
                        name: '最大值'
                    },
                    {
                        type: 'min',
                        name: '最小值'
                    }
                ]
            },
            
        },
        {
            name: '大消费',
            type: 'line',
            data: [0, 1, 1, 3, 2],
            lineStyle: {
                normal: {
                    width: 8,
                    color: {
                        type: 'linear',

                        colorStops: [{
                            offset: 0,
                            color: '#7597EB' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#638BEE' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: 'rgba(72,216,191, 0.3)',
                    shadowBlur: 6,
                    shadowOffsetY: 10
                }
            },
            itemStyle: {
                normal: {
                    color: '#7597EB',
                    borderWidth: 10,
                    borderColor: "#7597EB"
                }
            },
             markPoint: {
                data: [{
                        type: 'max',
                        name: '最大值'
                    },
                    {
                        type: 'min',
                        name: '最小值'
                    }
                ]
            },
           
        }
    ]
};