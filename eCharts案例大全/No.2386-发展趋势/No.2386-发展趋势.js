option = {
    backgroundColor: '#080b30',
    title: {
        text: '发展趋势',
        textStyle: {
            align: 'center',
            color: '#fff',
            fontSize: 20,
        },
        top: '5%',
        left: 'center',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(0, 255, 233,0)'
                    }, {
                        offset: 0.5,
                        color: 'rgba(255, 255, 255,1)',
                    }, {
                        offset: 1,
                        color: 'rgba(0, 255, 233,0)'
                    }],
                    global: false
                }
            },
        },
    },
    grid: {
        top: '15%',
        left: '5%',
        right: '5%',
        bottom: '15%',
        // containLabel: true
    },
    xAxis: [{
        type: 'category',
        axisLine: {
            show: true
        },
        splitArea: {
            // show: true,
            color: '#f00',
            lineStyle: {
                color: '#f00'
            },
        },
        axisLabel: {
            color: '#fff'
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.1)',
                padding: '20px'
            }
        },
        boundaryGap: false,
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],

    }],

    yAxis: [{
        type: 'value',
        min: 0,
        // max: 140,
        splitNumber: 4,
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.1)'
            }
        },
        axisLine: {
            show: true,
        },
        axisLabel: {
            show: false,
        },
        axisTick: {
            show: true,
        },
    }],
    series: [
        {
            name: '发展趋势',
            type: 'line',
            // smooth: true, //是否平滑
            showAllSymbol: true,
            // symbol: 'image://./static/images/guang-circle.png',
            symbol: 'circle',
            symbolSize: 25,
            lineStyle: {
                normal: {
                    color: "#fff",
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    // shadowBlur: 0,
                    // shadowOffsetY: 5,
                    // shadowOffsetX: 5,
                    // borderWidth: 5,
                },
            },
            // label: {
            //     show: true,
            //     position: 'top',
            //     textStyle: {
            //         color: '#00ca95',
            //     }
            // },

            itemStyle: {
                color: "rgb(250,147,101)",
                borderColor: "#fff",
                borderWidth: 3,
                // shadowColor: 'rgba(0, 0, 0, .3)',
                // shadowBlur: 0,
                // shadowOffsetY: 2,
                // shadowOffsetX: 2,
            },
            // tooltip: {
            //     show: false
            // },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgb(250,190,101)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(250,190,101,0.1)'
                        }
                    ], false),
                    // shadowColor: 'rgba(0,202,149, 0.9)',
                    // shadowBlur: 20
                }
            },
            data: [281.55, 398.35, 214.02, 179.55, 289.57, 356.14,281.55, 398.35, 214.02, 179.55, 289.57, 356.14 ],
        },
    ]
};