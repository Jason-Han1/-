option = {
    backgroundColor: '#01004C',
    grid: {
        left: 0,
        top: '10%',
        bottom: 0,
        right: '5%',
        containLabel: true,
    },
    tooltip: {
        trigger: 'axis',
    },
    legend: {
        show: true,
        textStyle: {
            color: '#fff',
        },
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: true,
            data: ['一月份', '二月份', '三月份', '四月份', '五月份', '六月份'],
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ffffff', //X轴文字颜色
                    fontSize: 16,
                },
            },
        },
    ],
    yAxis: [
        {
            type: 'value',
            axisLabel: {
                formatter: '{value} ',
                color: '#ffffff',
                textStyle: {
                    fontSize: 16,
                },
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#ccc',
                },
            },
            splitLine: {
                show: false,
            },
        },
        {
            type: 'value',
            axisLabel: {
                formatter: '{value} ',
                color: '#ffffff',
                textStyle: {
                    fontSize: 16,
                },
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#ccc',
                },
            },
            splitLine: {
                show: false,
            },
        },
    ],
    series: [
        {
            name: '折线',
            type: 'line',
            yAxisIndex: 0,
            data: [0.1, 0.4, 0.2, 0.5, 0.1, 0.2],
            symbol: 'circle',
            symbolSize: 6,
            lineStyle: {
                width: 3,
                color: '#437DFF',
            },
            itemStyle: {
                color: '#437DFF',
                borderColor:'#fff',
                borderWidth:2
            },
            label: {
                normal: {
                    show: true,
                    fontSize: 16,
                    lineHeight: 20,
                    width: 40,
                    height: 20,
                    backgroundColor: '#fff',
                    borderRadius: 200,
                    position: 'right',
                    padding: [0, 10],
                    // offset:[20,0],
                    distance: 5,
                    formatter: ['{d|●}', ' {a|{c}}'].join(''),
                    rich: {
                        d: {
                            color: '#38C474',
                        },
                        a: {
                            color: '#333',
                            align: 'center',
                        },
                    },
                },
            },
        },
        {
            name: '柱状',
            type: 'bar',
            yAxisIndex: 1,
            data: [10, 10, 11, 13, 23, 52],
            barWidth: 20,
            itemStyle: {
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                        {
                            offset: 0,
                            color: '#437DFF', // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: '#8D41FF', // 100% 处的颜色
                        },
                    ],
                    false
                ),
                barBorderRadius: [30, 30, 30, 30],
            },
            label: {
                normal: {
                    show: true,
                    fontSize: 16,
                    lineHeight: 20,
                    width: 40,
                    height: 20,
                    backgroundColor: '#fff',
                    borderRadius: 200,
                    position: 'bottom',
                    padding: [0, 10],
                    offset:[-45,-(20 + 20)],
                    formatter: ['{d|●}', ' {a|{c}}'].join(''),
                    rich: {
                        d: {
                            color: '#38C474',
                        },
                        a: {
                            color: '#333',
                            align: 'center',
                        },
                    },
                },
            },
        },
    ],
};
