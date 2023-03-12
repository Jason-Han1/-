option = {
    backgroundColor: '#080b30',
    title: {
        text: '多线图',
        textStyle: {
            align: 'center',
            color: '#fff',
            fontSize: 20,
        },
        top: '5%',
        left: 'center',
    },
    legend: {
          show: true,
          icon: "rect",
          itemWidth: 14,
          itemHeight: 5,
          itemGap: 10,
          right: "35%",
          top: 0,
          textStyle: {
            fontSize: 10,
            color: "#ccc"
          }
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
            show: false
        },
        boundaryGap: false,
        data: ['A', 'B', 'C', 'D', 'E', 'F'],

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
            show: false,
        },
        axisLabel: {
            show: true,
            margin: 10,
            textStyle: {
                color: '#d1e6eb',

            },
        },
        axisTick: {
            show: false,
        },
    }],
    series: [{
            name: '行政许可',
            type: 'line',
            smooth: true, //是否平滑
            showAllSymbol: false,
            // symbol: 'image://./static/images/guang-circle.png',
            symbol: 'circle',
            symbolSize: 2,
            lineStyle: {
                normal: {
                    color: "#00b3f4",
                },
            },
            itemStyle: {
                color: "#00b3f4",
            },
            tooltip: {
                show: true
            },
            data: [502.84, 205.97, 332.79, 281.55, 398.35, 214.02, ]
        },
        {
            name: '行政处罚',
            type: 'line',
             smooth: true, //是否平滑
            showAllSymbol: false,
            // symbol: 'image://./static/images/guang-circle.png',
            symbol: 'circle',
            symbolSize: 2,
            lineStyle: {
                normal: {
                    color: "#00ca95",
                },
            },
            itemStyle: {
                color: "#00ca95",
            },
            tooltip: {
                show: true
            },
            data: [281.55, 398.35, 214.02, 179.55, 289.57, 356.14, ],
        }, {
            name: '红名单',
            type: 'line',
             smooth: true, //是否平滑
            showAllSymbol: false,
            // symbol: 'image://./static/images/guang-circle.png',
            symbol: 'circle',
            symbolSize: 2,
            lineStyle: {
                normal: {
                    color: "#E9BC5C",
                },
            },
            itemStyle: {
                color: "#E9BC5C",
            },
            tooltip: {
                show: true
            },
            data: [145,102,407,145,248,516],
        }, {
            name: '黑名单',
            type: 'line',
             smooth: true, //是否平滑
            showAllSymbol: false,
            // symbol: 'image://./static/images/guang-circle.png',
            symbol: 'circle',
            symbolSize: 2,
            lineStyle: {
                normal: {
                    color: "#9A65B9",
                },
            },
            itemStyle: {
                color: "#9A65B9",
            },
            tooltip: {
                show: true
            },
            data: [12,20,30,40,21,12],
        },
    ]
};