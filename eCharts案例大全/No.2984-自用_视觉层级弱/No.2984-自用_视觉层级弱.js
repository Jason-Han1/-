option = {
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
                    colorStops: [
                        {
                            offset: 0,
                            color: 'rgba(0, 255, 233,0)',
                        },
                        {
                            offset: 0.5,
                            color: 'rgba(255, 255, 255,1)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(0, 255, 233,0)',
                        },
                    ],
                    global: false,
                },
            },
        },
    },
    grid: {
        top: '15%',
        left: '10%',
        right: '5%',
        bottom: '15%',
        //containLabel: true,
    },
    xAxis: [
        {
            type: 'category',
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#aaa',
                    opacity: 1,
                    width:1
                },//最底下横线
            },
            axisTick: {
                show: false,
            }, //刻度点
            axisLabel: {
                show: false,
                color: '#666666',
                width: 100,
            }, //字的容器
            splitLine: {
                show: false,
            },//坐标内的竖线
            boundaryGap: false,
            data: [
                '行政审批局西区站',
                '红石崖站',
                '行政审批局西区站',
                '红石崖站',
                '行政审批局西区站',
                '红石崖站',
                '行政审批局西区站',
                '红石崖站',
            ], //this.$moment(data.times).format("HH-mm") ,
        },
    ],

    yAxis: [
        {
            type: 'value',
            min: 0,
            // max: 140,
            splitNumber: 4,
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#aaa',
                    opacity: 0.5,
                    width:1
                },
            },//坐标内的横线
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#aaa',
                    opacity: 1,
                    width:1
                },
            },
            axisLabel: {
                show: true,
                margin: 20,
                textStyle: {
                    color: '#000000',
                },
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
        },
    ],
    series: [
        {
            type: 'line',
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 10,
            lineStyle: {
                normal: {
                    color: '#2CABE3',
                },
            },
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#2CABE3',
                },
            },
            itemStyle: {
                color: '#fff',
                borderColor: '#2CABE3',
                borderWidth: 2,
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: 'rgba(81,150,164,0.3)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(81,150,164,0)',
                            },
                        ],
                        false
                    ),
                },
            },
            data: [230, 450, 580, 480, 700, 750, 550, 400], //data.values
        },
    ],
};
