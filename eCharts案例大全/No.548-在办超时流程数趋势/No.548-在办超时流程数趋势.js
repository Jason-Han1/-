option = {
    backgroundColor: '#080b30',
    title: {
        show: false,
        text: '多线图',
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
        left: '5%',
        right: '10%',
        bottom: '5%',
        containLabel: true,
    },
    xAxis: [
        {
            type: 'category',
            axisLine: {
                show: true,
            },
            splitArea: {
                // show: true,
                color: '#f00',
                lineStyle: {
                    color: '#f00',
                },
            },
            axisLabel: {
                show: true,
                margin: 20,
                textStyle: {
                    fontSize: 20,
                    color: 'rgba(255,255,255,1)',
                },
                formatter: function (params) {
                    console.log(params);
                    return '2021.11.' + params;
                },
            },
            splitLine: {
                show: false,
            },
            boundaryGap: false,
            data: [
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                '10',
                '11',
                '12',
                '13',
                '14',
                '15',
                '16',
                '17',
                '18',
                '19',
                '20',
                '21',
                '22',
                '23',
                '24',
                '25',
                '26',
                '27',
                '28',
                '29',
                '30',
                '31',
            ],
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
                    color: ['#fff'],
                    opacity: 0.06,
                },
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: true,
                margin: 20,
                textStyle: {
                    fontSize: 20,
                    color: 'rgba(255,255,255,1)',
                },
            },
            axisTick: {
                show: false,
            },
        },
    ],
    series: [
        {
            name: '注册总量',
            type: 'line',
            smooth: true, //是否平滑
            showAllSymbol: true,
            // symbol: 'image://./static/images/guang-circle.png',
            symbol: 'circle',
            symbolSize: 10,
            lineStyle: {
                normal: {
                    color: '#FFBC0D',
                    shadowColor: 'rgba(0, 0, 0, 0)',
                    shadowBlur: 0,
                    shadowOffsetY: 5,
                    shadowOffsetX: 5,
                },
            },
            label: {
                show: false,//圆点上方数值
                position: 'top',
                textStyle: {
                    color: 'rgb(218 255 232)',
                    fontSize: 16,
                },
            },
            itemStyle: {
                color: '#FFBC0D',
                borderColor: 'rgb(108,78,0)',
                borderWidth: 1,
                shadowColor: 'rgba(0, 0, 0, 0)',
                shadowBlur: 0,
                shadowOffsetY: 2,
                shadowOffsetX: 2,
            },
            tooltip: {
                show: false,
            },
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 0,
                            color: 'rgba(255,188,13, 0.4)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(255,188,13, 0)',
                        },
                    ],
                    global: false, // 缺省为 false
                },
            },
            data: [
                30,
                32,
                32,
                32,
                32,
                38,
                32,
                33,
                36,
                32,
                32,
                32,
                34,
                32,
                32,
                32,
                39,
                32,
                32,
                32,
                32,
                32,
                33,
                32,
                32,
                23,
                32,
                32,
                32,
                32,
                32,
            ],
        },
    ],
};
