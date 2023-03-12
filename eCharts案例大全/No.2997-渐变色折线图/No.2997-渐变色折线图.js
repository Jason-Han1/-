const xData = ['01月', '02月', '03月', '04月', '05月', '06月', '07月', '08月', '09月', '10月', '11月', '12月'];
const Ydata = [67, 97, 51, 338, 32, 11, 1, 32, 11, 1, 32, 11];
const Ydata1 = [10, 22, 55, 89, 73, 54, 1, 32, 11, 1, 32, 11];
const remTopx = (rem) => {
    let fontSize = '16';
    // const html = document.documentElement;
    // fontSize = parseInt(html.style.fontSize);
    return fontSize * rem;
};
option = {
    backgroundColor: '#000',
    title: [
        {
            text: '{name|' + '平均毛利率' + '}{val|' + '12.56%' + '}',
            top: '0',
            left: '20%',
            textStyle: {
                rich: {
                    name: {
                        fontSize: remTopx(1.13),
                        color: '#A4E8FC',
                    },
                    val: {
                        fontSize: remTopx(2),
                        color: '#A4E8FC',
                        padding: [0, 10],
                    },
                },
            },
        },
        {
            text: '{name|' + '毛利额' + '}{val|' + '4000.56万' + '}',
            top: '0',
            left: '40%',
            textStyle: {
                rich: {
                    name: {
                        fontSize: remTopx(1.13),
                        color: '#A4E8FC',
                    },
                    val: {
                        fontSize: remTopx(2),
                        color: '#A4E8FC',
                        padding: [0, 10],
                    },
                },
            },
        },
    ],
    grid: {
        top: '15%',
        left: '2%',
        right: '2%',
        bottom: '4%',
        containLabel: true,
    },
    dataZoom: [
        {
            show: true,
            type: 'inside',
            filterMode: 'none',
            xAxisIndex: [0],
        },
        {
            show: true,
            type: 'inside',
            filterMode: 'none',
            yAxisIndex: [0],
        },
    ],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line',
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
                            color: '#13e6ff', // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: '#085F83', // 100% 处的颜色
                        },
                    ],
                    global: false, // 缺省为 false
                },
            },
        },
    },
    toolbox: {
        show: true,
        right: '5%',
        feature: {
            magicType: {
                type: ['line', 'bar'],
            },
        },
    },
    color: [
        new echarts.graphic.LinearGradient(1, 0, 0, 0, [
            { offset: 0, color: '#9E217B' },
            { offset: 1, color: '#1D4CF5' },
        ]),
        new echarts.graphic.LinearGradient(1, 0, 0, 0, [
            { offset: 0, color: '#F93E3B' },
            { offset: 1, color: '#03FCF3' },
        ]),
    ],
    legend: {
        show: true,
        right: '15%',
        top: '2%',
        icon: 'roundRect',
        itemWidth: 49,
        itemHeight: 5,
        textStyle: {
            color: '#CEF3FE',
            fontSize: 12,
        },
        data: ['毛利额', '平均毛利率'],
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: '#085F83',
            },
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#CEF3FE',
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'solid',
                color: '#085F83',
            },
        },
        data: xData,
    },
    yAxis: [
        {
            type: 'value',
            position: 'left',
            name: 'kw',
            nameTextStyle: {
                color: '#CEF3FE',
            },
            nameGap: '10',
            axisLine: {
                lineStyle: {
                    color: '#085F83',
                },
            },
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: '#09335A',
                },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#CEF3FE',
                },
            },
        },
        {
            type: 'value',
            position: 'right',
            name: '%',
            nameTextStyle: {
                color: '#CEF3FE',
            },
            nameGap: '10',
            axisLine: {
                symbol: ['none', 'none'],
                lineStyle: {
                    color: '#085F83',
                },
            },
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: '#09335A',
                },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#CEF3FE',
                },
            },
        },
    ],
    series: [
        {
            name: '毛利额',
            type: 'line',
            data: Ydata,
            yAxisIndex: 0, //记录使用哪一个Y轴
            symbol: 'none', // 拐点样式
            itemStyle: {
                // 设置折线渐变色
                color: '#5CC4E9',
                normal: {
                    lineStyle: {
                        width: 2, // 折线宽度
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#0DE2DE' },
                            { offset: 1, color: '#F90425' },
                        ]),
                    },
                },
            },
        },
        {
            name: '平均毛利率',
            type: 'line',
            data: Ydata1,
            yAxisIndex: 1,
            symbol: 'none', // 拐点样式
            itemStyle: {
                // 设置折线渐变色
                color: '#5CC4E9',
                normal: {
                    lineStyle: {
                        width: 2, // 折线宽度
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#2267E2' },
                            { offset: 1, color: '#F90425' },
                        ]),
                    },
                },
            },
        },
    ],
};
