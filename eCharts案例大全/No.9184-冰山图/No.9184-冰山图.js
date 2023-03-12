option = {
    grid: {
        top: '10%',
        left: '5%',
        right: '5%',
        bottom: '5%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        }
    },
    xAxis: [{
            type: 'category',
            position: "bottom",
            data: ['氨氮', 'COD', '总磷'],
            boundaryGap: true,
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#bbb'
                }
            },
            axisLabel: {
                color: '#333'
            }
        }

    ],
    yAxis: [{
        name: '超标率(%)',
        show: true,
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#bbb'
            }
        },
        axisLabel: {
            show: true,
            color: '#333'
        }
    }],
    series: [{
        name: 'zhu',
        type: 'pictorialBar',
        barCategoryGap: '50%',
        symbol: 'path://d="M150 50 L130 130 L170 130  Z"',
        // itemStyle: {
        //         normal: {
        //              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        //                 offset: 0,
        //                 color: 'rgb(26, 174, 238, 1)'
        //             }, {
        //                 offset: 1,
        //                 color: 'rgb(26, 174, 238, 0.5)'
        //             }])
        //         },
        //         emphasis: {
        //             opacity: 1
        //         }
        //     },
        data: [{
            name: '氨氮',
            value: 10,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgb(26, 174, 238, 1)'
                    }, {
                        offset: 1,
                        color: 'rgb(26, 174, 238, 0.5)'
                    }])
                }
            }
        }, {
            name: 'COD',
            value: 6,
             itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgb(255, 140, 55, 1)'
                    }, {
                        offset: 1,
                        color: 'rgb(255, 140, 55, 0.5)'
                    }])
                }
            }
    
        }, {
            name: '总磷',
            value: 5,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgb(123, 123, 243, 1)'
                    }, {
                        offset: 1,
                        color: 'rgb(123, 123, 243, 0.5)'
                    }])
                }
            }
        }],
    }]
}