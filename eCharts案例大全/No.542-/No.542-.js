let { legendData, companyList, datas } = {
    legendData: ['考试中出现次数', '考试通过率'],
    companyList: ['考试中出现频率次数', '考试通过率'],
    datas: {
        xData: [
            '党史知识1500题',
            '党史知识测试6.18',
            '党史知识测试6.18（1）',
            '党史知识测试第一组',
            '党史知识测试第一组第三次',
        ],
        yData1: [90, 80, 50, 90, 39],
        yData2: [80, 70, 90, 20, 60],
    },
};
let { color, legendTopFlag } = {
    legendTopFlag: true,
    color: [
        ['#14ABF6', '#031239'],
        ['#EC722C', '#031239'],
    ],
};
option = {
    backgroundColor:'blurScope',
    animation: false, //去除加载时缓动动画
    tooltip: {
        trigger: 'axis',
        backgroundColor: '#053A8D',
    },
    dataZoom: [
        {
            show: true,
            id: 'dataZoomX',
            type: 'slider',
            xAxisIndex: [0],
            filterMode: 'filter',
            backgroundColor: '#DAEAF8',
            height: 12,
            right: 80,
            left: 80,
            start: 0, //数据窗口范围的起始百分比,表示30%
            end: 40,
            handleStyle: {
                color: '#66B8FE',
                borderColor: '#66B8FE',
            },
        },
    ],
    legend: {
        icon: 'circle',
        itemWidth: 8,
        itemHeight: 8,
        show: true,
        data: legendData,
        top: 0,
        textStyle: {
            fontSize: 14,
            color: '#fff',
        },
    },
    grid: {
        right: 40,
        left: 70,
        top: 50,
        bottom: 50,
    },
    xAxis: {
        axisLine: {
            show: true,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#fff',
            },
            formatter: function (name) {
                let str = '';
                if (name.length > 3) {
                    str = name.slice(0, 3) + '...';
                } else {
                    str = name;
                }
                return str;
            },
        },
        splitLine: {
            show: false,
            textStyle: {
                color: '#666',
                fontSize: 16,
            },
        },
        data: datas.xData,
    },
    yAxis: [
        {
            type: 'value',
            name: companyList[0],
            nameTextStyle: {
                color: '#fff',
                fontSize: 12,
                padding: [0, -56, 0, 0],
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    color: '#909090',
                    fontSize: 12,
                },
            },
            axisLine: {
                show: true,
            },
        },
        {
            type: 'value',
            name: companyList[1],
            nameTextStyle: {
                color: '#fff',
                fontSize: 12,
                padding: [0, 0, 0, -40],
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                formatter: '{value}%',
                textStyle: {
                    color: '#909090',
                    fontSize: 12,
                },
            },
            axisLine: {
                show: false,
            },
        },
    ],
    series: [
        {
            name: legendData[0],
            tooltip: {
                show: true,
            },
            type: 'bar',
            barWidth: 8, //柱子宽度
            barGap: 0.5, //柱子之间间距
            data: datas.yData1,
            barGap: 0,
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: color[0][0],
                    },
                    {
                        offset: 1,
                        color: color[0][1],
                    },
                ]),
                barBorderRadius: [10, 10, 0, 0], //控制柱状图的圆角显示弧度，（顺时针左上，右上，右下，左下）
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#fff',
                    },
                },
            },
        },
        {
            name: legendData[1],
            type: 'bar',
            // stack: 1,
            barWidth: 8, //柱子宽度
            barGap: 0.5, //柱子之间间距
            yAxisIndex: 1, //选择第二个y轴 不写的话 双y轴无法实现
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: color[1][0],
                    },
                    {
                        offset: 1,
                        color: color[1][1],
                    },
                ]),
                barBorderRadius: [10, 10, 0, 0], //控制柱状图的圆角显示弧度，（顺时针左上，右上，右下，左下）
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#fff',
                    },
                },
            },
            data: datas.yData2,
        },
    ],
};
