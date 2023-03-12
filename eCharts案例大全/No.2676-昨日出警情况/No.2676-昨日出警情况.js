let xLabel = ['案件', '纠纷', '事件', '调查'];
option = {
    tooltip: {},
    backgroundColor: '#0f375f',
    animation: false,
    grid: {
        top: '25%',
        bottom: '10%', //也可设置left和right设置距离来控制图表的大小
    },
    xAxis: {
        data: xLabel,
        axisLine: {
            show: true, //隐藏X轴轴线
            // type: "dashed",
            lineStyle: {
                color: '#11417a',
                type: 'dashed',
            },
        },
        axisTick: {
            show: false, //隐藏X轴刻度
        },
        axisLabel: {
            show: true,
            margin: 14,
            fontSize: 14,
            textStyle: {
                color: '#fff', //X轴文字颜色
            },
        },
    },
    yAxis: [
        {
            type: 'value',
            gridIndex: 0,
            // min: 0,
            // max: 100,
            interval: 50,
            // splitNumber: 4,
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#2C4B86',
                    // type:"s"
                    width: 1,
                },
            },

            splitLine: {
                lineStyle: {
                    // 使用深浅的间隔色
                    color: ['#11417a'],
                    type: 'dashed',
                    // opacity: 0.5,
                },
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: '#1EF4FF', //X轴文字颜色
                },
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: true,
                margin: 14,
                fontSize: 14,
                textStyle: {
                    color: '#1EF4FF', //X轴文字颜色
                },
            },
        },
    ],
    series: [
        {
            name: '主营业务',
            type: 'bar',
            barWidth: 40,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: '#8F5BF3',
                        },
                        {
                            offset: 1,
                            color: '#48B0F8',
                        },
                    ]),
                },
            },
            data: [120, 180, 100, 200],
            z: 10,
            zlevel: 0,
            label: {
                show: true,
                position: 'top',
                distance: 10,
                fontSize: 16,
                color: '#fff',
            },
        },
        {
            // 分隔
            type: 'pictorialBar',
            itemStyle: {
                normal: {
                    color: '#0F375F',
                },
            },
            symbolRepeat: 'fixed',
            symbolMargin: 6,
            symbol: 'rect',
            symbolClip: true,
            symbolSize: [40, 3],
            symbolPosition: 'start',
            symbolOffset: [0, -1],
            // symbolBoundingData: this.total,
            data: [120, 180, 100, 200],
            width: 25,
            z: 0,
            zlevel: 1,
        },
    ],
};
