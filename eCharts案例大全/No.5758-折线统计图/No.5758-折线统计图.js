
// 黄色：FFC501    橘色：EA6E29    绿色：05C985   蓝色：1F8EFA    紫色：8086FB
var colordata = ['#FFC501', '#EA6E29', '#05C985', '#1F8EFA', '#8086FB'];
option = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        type: 'plain', // 普通图例
        color: colordata,
        data: ['服务', '环境', '卫生状况', '质量'],
        left: 'right',
        top: '-5px'
    },
    grid: {
        top: 'middle',
        left: '3%',
        right: '4%',
        bottom: '0%',
        height: '80%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['一月', '二月', '三月', '四月', '五月', '六月'],
        axisLine: {
            lineStyle: {
                color: "#999"
            }
        }
    },
    yAxis: {
        type: 'value',

        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: '#DDD'
            }
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: "#333"
            },
        },
        nameTextStyle: {
            color: "#999"
        },
        splitArea: {
            show: false
        }
    },
    series: [{
            name: '服务',
            type: 'line',
            data: [800, 680, 220, 130, 660, 289],
            color: "#F58080",
            lineStyle: {
                normal: {
                    width: 1.5,
                    color: {
                        type: 'linear',

                        colorStops: [{
                            offset: 0,
                            color: '#05C985' // 0% 处的颜色
                        }, {
                            offset: 0.4,
                            color: '#05C985' // 100% 处的颜色
                        }, {
                            offset: 1,
                            color: '#05C985' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: 'rgba(245,128,128, 0.5)',
                    shadowBlur: 5,
                    shadowOffsetY: 3
                }
            },
            itemStyle: {
                normal: {
                    color: '#05C985',
                    borderWidth: 1,
                    /*shadowColor: 'rgba(72,216,191, 0.3)',
                     shadowBlur: 100,*/
                    borderColor: "#05C985"
                }
            },
            smooth: true,
            showSymbol: false
        },
        {
            name: '环境',
            type: 'line',
            data: [123, 568, 111, 222, 123, 56],
            lineStyle: {
                normal: {
                    width: 1.5,
                    color: {
                        type: 'linear',

                        colorStops: [{
                                offset: 0,
                                color: '#1F8EFA' // 0% 处的颜色
                            },
                            {
                                offset: 0.4,
                                color: '#1F8EFA' // 100% 处的颜色
                            }, {
                                offset: 1,
                                color: '#1F8EFA' // 100% 处的颜色
                            }
                        ],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: 'rgba(71,216,190, 0.5)',
                    shadowBlur: 5,
                    shadowOffsetY: 3
                }
            },
            itemStyle: {
                normal: {
                    color: '#1F8EFA',
                    borderWidth: 1,
                    /*shadowColor: 'rgba(72,216,191, 0.3)',
                     shadowBlur: 100,*/
                    borderColor: "#1F8EFA"
                }
            },
            smooth: true,
            showSymbol: false
        },
        {
            name: '卫生状况',
            type: 'line',
            data: [125, 568, 125, 36, 284, 56],
            lineStyle: {
                normal: {
                    width: 1.5,
                    color: {
                        type: 'linear',

                        colorStops: [{
                                offset: 0,
                                color: '#FFAB4F' // 0% 处的颜色
                            },
                            {
                                offset: 0.4,
                                color: '#FFAB4F' // 100% 处的颜色
                            }, {
                                offset: 1,
                                color: '#FFAB4F' // 100% 处的颜色
                            }
                        ],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: 'rgba(249,165,137, 0.5)',
                    shadowBlur: 5,
                    shadowOffsetY: 3
                }
            },
            itemStyle: {
                normal: {
                    color: '#FFAB4F',
                    borderWidth: 1,
                    /*shadowColor: 'rgba(72,216,191, 0.3)',
                     shadowBlur: 100,*/
                    borderColor: "#FFAB4F"
                }
            },
            smooth: true,
            showSymbol: false
        },
        {
            name: '质量',
            type: 'line',
            data: [25, 68, 225, 136, 584, 456],
            lineStyle: {
                normal: {
                    width: 1.5,
                    color: {
                        type: 'linear',

                        colorStops: [{
                                offset: 0,
                                color: colordata[4] // 0% 处的颜色
                            },
                            {
                                offset: 0.4,
                                color: colordata[4] // 100% 处的颜色
                            }, {
                                offset: 1,
                                color: colordata[4] // 100% 处的颜色
                            }
                        ],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: 'rgba(249,165,137, 0.5)',
                    shadowBlur: 5,
                    shadowOffsetY: 3
                }
            },
            itemStyle: {
                normal: {
                    color: colordata[4],
                    borderWidth: 1,
                    /*shadowColor: 'rgba(72,216,191, 0.3)',
                     shadowBlur: 100,*/
                    borderColor: "#FFAB4F"
                }
            },
            smooth: true,
            showSymbol: false
        }
    ]
};