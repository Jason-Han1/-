option = {
    backgroundColor: '#031A32',
    grid: {
        left: '6%',
        top: '12%',
        right: '8%',
        bottom: '14%',
    },
    title: {
        text: '当天工单生产情况',
        left: 'center',
        top:20,
        textStyle: {
            fontWeight: 'normal',
            fontSize: 24,
            color: '#fff',
        },
    },
    legend: {
        data: ['计划数', '完成数', '完成率'],
        bottom: '6%',
        textStyle: {
            color: 'white',
            fontSize: 14,
        },
    },
    xAxis: {
        data: ['工单1', '工单2', '工单3', '工单4', '工单5', '工单6', '工单7', '工单8'],
        axisLine: {
            show: true, //隐藏X轴轴线
            lineStyle: {
                color: '#3d5269',
                width: 1,
            },
        },
        axisTick: {
            show: true, //隐藏X轴刻度
            alignWithLabel: true,
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: 'white', //X轴文字颜色
                fontSize: 14,
            },
            interval: 0,
        },
    },
    yAxis: [
        {
            type: 'value',
            name: '数量',
            max: 400,
            nameTextStyle: {
                color: 'white',
                fontSize: 14,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    width: 1,
                    color: '#3d5269',
                },
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: 'white',
                    fontSize: 14,
                },
            },
        },
        {
            type: 'value',
            name: '完成率%',
            nameTextStyle: {
                color: 'white',
                fontSize: 14,
            },
            position: 'right',
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#396A87',
                    width: 2,
                },
            },
            axisLabel: {
                show: true,
                formatter: '{value} %', //右侧Y轴文字显示
                textStyle: {
                    color: 'white',
                    fontSize: 14,
                },
            },
        },
    ],
    series: [
        {
            name: '计划数',
            type: 'bar',
            barWidth: 30,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: '#00FFFF',
                        },
                        {
                            offset: 1,
                            color: '#0080FF',
                        },
                    ]),
                },
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#ffffff',
                        fontSize: '18',
                    },
                },
            },
            data: [245, 245, 245, 245, 245, 245, 245, 245],
        },
        {
            name: '完成数',
            type: 'bar',
            barWidth: 30,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: '#E29052',
                        },
                        {
                            offset: 1,
                            color: '#FA5A53',
                        },
                    ]),
                },
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#ffffff',
                        fontSize: '18',
                    },
                },
            },
            data: [223, 223, 223, 223, 223, 223, 223, 223],
        },
        {
            name: '完成率',
            type: 'line',
            yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            showAllSymbol: true, //显示所有图形。
            symbol: 'circle', //标记的图形为实心圆
            symbolSize: 6, //标记的大小
            itemStyle: {
                //折线拐点标志的样式
                color: '#26D9FF',
                borderColor: '#26D9FF',
                width: 2,
                shadowColor: '#26D9FF',
                shadowBlur: 2,
            },
            lineStyle: {
                color: '#26D9FF',
                width: 2,
                shadowBlur: 2,
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    formatter: [' {a|{c}%}'].join(','),
                    rich: {
                        a: {
                            color: '#fff',
                            align: 'center',
                            fontSize: 18,
                        },
                    },
                },
            },
            data: [90.2, 90.98, 91.77, 92.56, 91.36, 94.17, 94.56, 95.8],
        },
    ],
};
