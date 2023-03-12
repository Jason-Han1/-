option = {
    backgroundColor: '#080E5A',
    color: ['#5E8FF7', '#00CDFF', '#FFC42A', '#0061FF'],
    grid: {
        top: '-0%',
        bottom: '45px',
        left: '3px',
        right: '3px',
        containLabel: false,
        // borderWidth:0,
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line',
        },
    },
    legend: {
        show: false,
    },
    xAxis: [
        {
            data: [
                '00',
                '00',
                '00',
                '00',
                '00',
                '00',
                '00',
                '00',
                '00',
                '00',
                '00',
                '00',
                '00',
                '00',
                '00',
                '00',
                '00',
                '00',
                '00',
                '00',
                '00',
                '00',
                '09',
                '00',
            ],
            axisLine: {
                show: true, //隐藏X轴轴线
                lineStyle: {
                    color: '#080E5A',
                    width: 1,
                    type: 'dotted',
                    shadowColor: '#4670F0',
                    shadowBlur: 0,
                    shadowOffsetY: 10,
                },
                // symbolOffset:[0,-5]
            },
            offset: 15,
            axisTick: {
                inside: false,
                show: true, //隐藏X轴刻度
                alignWithLabel: true,
                lineStyle: {
                    color: '#080E5A',
                    length: 0,
                    width: 3,
                    length: 2,
                    shadowColor: '#4670F0',
                    shadowBlur: 0,
                    shadowOffsetY: 8,
                },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff', //X轴文字颜色
                    fontSize: 12,
                },
            },
            // boundaryGap: true,
        },
        {},
    ],
    yAxis: [
        {
            show: false,
            type: 'value',
        },
    ],
    series: [
        {
            name: '完成值',
            type: 'line',
            // yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            smooth: true, //平滑曲线显示
            showAllSymbol: true, //显示所有图形。
            symbol: 'circle', //标记的图形为实心圆
            symbolSize: 0, //标记的大小
            lineStyle: {
                width: 1,
                color: 'rgba(0, 97, 255, 1)',
            },
            zlevel: 1,
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
                            color: 'rgba(0, 97, 255, 0.6)', // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: 'rgba(0, 97, 255, 0)', // 100% 处的颜色
                        },
                    ],
                    global: true, //
                },
            },
            // symbolOffset:[-10,0],
            data: [4.2, 3.5, 2.9, 7.8, 5, 3, 4, 3, 2, 8, 3, 5, 4.2, 3.5, 2.9, 7.8, 5, 3, 4, 3, 2, 8, 3, 5].map(
                (v) => v + 2
            ),
        },

        {
            name: '目标值',
            type: 'bar',
            barWidth: 14,
            itemStyle: {
                normal: {
                    barBorderRadius: [10, 10, 0, 0],
                    borderWidth: 4,
                    borderColor: '#040850',
                    shadowColor: '#51FFBF',
                    shadowBlur: 2,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: 'rgba(81, 255, 152, 1)' },
                        { offset: 1, color: 'rgba(0, 108, 255, 0)' },
                    ]),
                },
            },
            // symbol:'circle',
            // symbolSize:10,
            // symbolPosition:'end',
            data: [5, 3, 1, 5, 4, 3, 4, 3, 2, 8, 3, 5, 4.2, 3.5, 2.9, 7.8, 5, 3, 4, 3, 2, 8, 3, 5],
        },
        // {
        //     name: "目标值1",
        //     type: "pictorialBar",
        //     itemStyle: {
        //         color: 'rgba(107, 255, 81, 1)',
        //     },
        //     symbol:'circle',
        //     symbolSize:8,
        //     symbolPosition:'end',
        //     symbolOffset:[0,-3],
        //     zlevel:0,
        //     data: [5, 3, 1, 5, 4, 3, 4, 3, 2, 8, 3, 5, 4.2, 3.5, 2.9, 7.8, 5, 3, 4, 3, 2, 8, 3, 5]
        // },
    ],
};
