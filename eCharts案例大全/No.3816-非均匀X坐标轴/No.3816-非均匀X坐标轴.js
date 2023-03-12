let colors = ['#5793f3', '#d14a61', '#675bba'];
option = {
    color: colors,
    tooltip: {
        trigger: 'none',
        axisPointer: {
            type: 'cross'
        }
    },
    // legend: {
    //     data:[]
    // },
    // grid: {
    //     top: 70,
    //     bottom: 50
    // },
    xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisTick: {
                // alignWithLabel: true
                show: true,
                inside: false,
                length: 5,
                lineStyle: {
                    color: 'black',
                    width: 1,
                    type: 'solid'
                }
            },
            axisLine: {
                onZero: true,
                lineStyle: {
                    color: colors[1]
                }
            },

            data: ['0b', '426kb', '852kb', '1.25Mb', '1.66Mb', '2.00Mb']
        },
        {
            type: 'category',
            show: false,
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: colors[0]
                }
            },
            data: ['400kb', '600kb', '900kb', '1.4Mb', '1.8Mb']
        }
    ],
    yAxis: [{
        type: 'value',
        name: "(张)"
    }],
    series: [{
        name: '',
        type: 'line',
        xAxisIndex: 1,
        smooth: true,
        data: [0, 0, 7, 43, 15],
        areaStyle: {
            normal: {
                color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: "#6495ED"
                    }, {
                        offset: 0.8,
                        color: "rgba(220,56,129,0)"
                    }],
                    globalCoord: true
                }
            }
        }
    }, ]
};