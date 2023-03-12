option = {
    backgroundColor: 'rgba(13,12,24,.5)',
    title: {
        // text: 'Awesome Chart'
    },
    legend: {
        right:20,
        icon:'line',
         textStyle: {
                    color: '#fff', // 图例文字颜色
                      fontSize: 16,
                }
        // data: [{
        //         name: '工作总量',
        //         icon: 'line',
        //         textStyle: {
        //             color: 'red' // 图例文字颜色
        //         },
        //     },
        //     {
        //         name: '完成量',
        //         // icon: 'line',
        //         textStyle: {
        //             color: '#fff', // 图例文字颜色
        //             fontSize: 16,
        //         },
        //     }
        // ]
    },
    xAxis: {
        axisLabel: {
            textStyle: {
                fontSize: 14,
                color: '#fff'
            },
        },
        axisLine: {
            lineStyle: {
                color: '#00A2FF',
                width: 2
            }
        },
        axisTick: {
            show: false
        },
        data: ['06.20', '06.21', '06.22', '06.23', '06.24', '06.25', ]
    },
    yAxis: {
        axisLabel: {
            formatter: '{value}',
            color: '#65F5FD',
            fontSize: 16
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#65F5FD',
                // fontSize:33
            }
        },
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: '#385B71'
            }
        },
        axisTick: {
            show: false
        },
    },
    series: [{
            name: '工单总量',
            type: 'line',
            smooth: true,
            // symbol: "circle", //拐点的形状
            // symbolSize: 10,
            symbol: "none",
            itemStyle: {
                normal: {
                    lineStyle: {
                        type: 'dashed',
                        //折点的颜色
                        // color: "#00a2e6"
                    },
                    color: "#E62954", //拐点的颜色
                    borderColor: "#E62954" //拐点边框的颜色
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(230, 41, 84, 0.3)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(230, 41, 84, 0)'
                    }], false),
                    shadowColor: 'rgba(230, 41, 84, 0.1)',
                    shadowBlur: 10
                }
            },
            data: [80, 100, 120, 190, 95, 30,20]
        },
        {
            name: '完成量',
            type: 'line',
            smooth: true,
            symbol: "circle", //拐点的形状
            symbolSize: 10,
            itemStyle: {
                normal: {
                    lineStyle: {
                        //折点的颜色
                        color: "#00E4FF"
                    },
                    color: "#00E4FF", //拐点的颜色
                    borderColor: "#fff" //拐点边框的颜色
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0, 228, 255, 0.3)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(0, 228, 255, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 228, 255, 0.1)',
                    shadowBlur: 10
                }
            },
            data: [45, 56, 110, 180, 50, 38,20]
        },

    ]
};