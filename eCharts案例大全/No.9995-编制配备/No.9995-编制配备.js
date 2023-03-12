option = {
    title: {
        text: '编制配备',
        x: 'left',
        top: "20",
        textStyle: {
            color: '#000',
            fontSize: 24
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            animation: false,
            label: {
                backgroundColor: '#505765'
            }
        }
    },
    legend: {
        data: ['实配数', '编制数'],
        x: 'center'
    },
    xAxis: [{
        type: 'category',
        axisLine: {
            onZero: false
        },
        data: [
            '正县', '副县', '正科', '副科', '一级调研员', '二级调研员', '三级调研员', '四级调研员', '一级主任科员', '二级主任科员', '三级主任科员', '四级主任科员'
        ]
    }],
    yAxis: [{
            name: '编制数',
            type: 'value',
            max: 100
        },
        {
            name: '实配数',
            nameLocation: 'start',
            max: 10,
            type: 'value',
        }
    ],
    series: [{
            name: '编制数',
            type: 'bar',
            data: [
                77, 86, 86, 95, 95, 94, 84, 100, 95, 94, 84, 100
            ],
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "#4693EC"

                        },
                        {
                            offset: 1,
                            color: "#00FFE3"
                        }
                    ])
                }
            },
        },
        {
            name: "实配数",
            type: "line",
            yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            smooth: true, //平滑曲线显示 
            symbol: "circle", //标记的图形为实心圆
            symbolSize: 10, //标记的大小
            itemStyle: {
                color: "#FF7800"
            },
            lineStyle: {
                color: "#FF7800"
            },
            data: [
                7, 6, 6, 5, 5, 4, 6, 1, 5, 4, 6, 1
            ]
        }
    ]
};