option = {
    grid: {
        left: '5%',
        right: '5%',
        bottom: '-10%',
        top: '2%',
        containLabel: true,
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none',
        },
        formatter: (params) => {
            return (
                params[0].name +
                '<br/>' +
                '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)"></span>' +
                params[0].seriesName +
                ' : ' +
                params[0].value +
                '<br/>'
            );
        },
    },
    backgroundColor: 'rgb(20,28,52)',
    xAxis: {
        show: false,
        type: 'value',
    },
    yAxis: [
        {
            type: 'category',
            inverse: true,
            axisLabel: {
                show: true,
                // margin: 15,
                textStyle: {
                    color: '#A1B8C3',
                    fontSize: 14,
                },
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            data: ['A台区', 'B台区', 'C台区', 'D台区', 'E台区'],
        },
        {
            type: 'category',
            inverse: true,
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: true,
                // margin: 15,
                textStyle: {
                    color: '#A1B8C3',
                    fontSize: 14,
                },
                fontFamily: 'BahnschriftStaticBold',
                formatter: (value) => {
                    return '{top|' + value + '} ';
                },
                rich: {
                    top: {
                        color: '#2ACEFF',
                        fontWeight: 'bold',
                        fontSize: 14,
                    },
                },
            },
            data: [996, 755, 705, 655, 675, 175],
        },
    ],
    dataZoom: [
        {
            type: 'inside', // 内置于坐标系中
            start: 0,
            end: 100,
            yAxisIndex: [0, 1],
        },
    ],
    series: [
        {
            name: '电量',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    // barBorderRadius: [0, 30, 30, 0],
                    color: () => {
                        return new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: 'rgba(42, 206, 255, 0)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(42, 206, 255, 1)',
                            },
                        ]);
                    },
                    shadowBlur: 0,
                    shadowColor: 'rgba(87,220,222,0.7)',
                },
            },
            barWidth: 4,
            data: [996, 755, 705, 655, 675, 175],
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 4,
            barGap: '-100%',
            data: [1000, 1000, 1000, 1000, 1000, 1000],
            labelLayout: {
                verticalAlignstring: 'center',
                align: 'center',
            },
            itemStyle: {
                normal: {
                    color: 'rgba(24, 41, 69, 1)',
                    // barBorderRadius: 30,
                    // borderWidth: 1,
                    // borderColor: '#2A4E65'
                },
            },
        },
        {
            type: 'scatter',
            symbolSize: 10,
            zlevel: 13,
            itemStyle: {
                borderWidth: 1,
                borderColor: '#fff',
                color: 'rgba(0, 0, 0, 0)',
                opacity: 1,
            },
            silent: true,
            data: [996, 755, 705, 655, 675, 175],
        },
        {
            type: 'scatter',
            symbolSize: 6,
            zlevel: 12,
            itemStyle: {
                color: {
                    type: 'radial',
                    r: 1,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#fff',
                        },
                        {
                            offset: 1,
                            color: '#fff',
                        },
                    ],
                    global: false,
                },
            },
            silent: true,
            data: [996, 755, 705, 655, 675, 175],
        },
    ],
};
