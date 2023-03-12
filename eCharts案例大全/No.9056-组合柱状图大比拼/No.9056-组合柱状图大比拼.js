option = {
    grid: [{
        left: 50,
        right: 50,
        height: "20%",
        top: "10%"
    }, {
        left: 50,
        right: 50,
        height: "20%",
        top: "40%"
    }, {
        left: 50,
        right: 50,
        height: "20%",
        top: "70%"
    }],
    legend: {
        data: ["张三", "李四", '王五', "赵六", '牛七', '冯八', '何久', '石头'],
    },
    title: {
        text: "组合柱状图大比拼",
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line','bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    xAxis: [{
            gridIndex: 0,
            type: "category",
            axisLabel: false,
            min: 0,
            max: 18,
            splitLine: {
                show: "true"
            }
        },
        {
            gridIndex: 1,
            type: "category",
            axisLabel: false,
            min: 0,
            max: 18,
            splitLine: {
                show: "true"
            }
        },
        {
            gridIndex: 2,
            type: "category",
            axisLabel: false,
            min: 0,
            max: 18,
            splitLine: {
                show: "true"
            }
        }
    ],
    xAxis: [{
            type: 'category',
            data: ['15分钟', '0.5小时', '1小时', '2小时', '0.5天', '1天', '3天'],
            axisPointer: {
                type: 'shadow'
            }
        }, {
            type: 'category',
            gridIndex: 1, //对应前面grid的索引位置（第2个）
            axisTick: {
                alignWithLabel: true
            },
            data: ['0.5小时', '1小时', '0.5天', '1天'],
            axisPointer: {
                type: 'shadow'
            }
        },
        {
            type: 'category',
            gridIndex: 2, //对应前面grid的索引位置（第3个）
            axisTick: {
                alignWithLabel: true
            },
            data: ['0.5小时', '0.5天', '1天', '5天及以上'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [{
        gridIndex: 0,
        type: "value"
    }, {
        gridIndex: 1,
        type: "value"
    }, {
        gridIndex: 2,
        type: "value"
    }],
    series: [{
            xAxisIndex: 0,
            yAxisIndex: 0,
            type: "bar",
            name: "张三",
            data: [
                ['15分钟', Math.round(Math.random() * 100)],
                ['0.5小时', Math.round(Math.random() * 100)],
                ['1小时', Math.round(Math.random() * 100)],
                ['2小时', Math.round(Math.random() * 100)],
                ['0.5天', Math.round(Math.random() * 100)],
                ['1天', Math.round(Math.random() * 100)],
                ['3天', Math.round(Math.random() * 100)],
            ],

        },
        {
            xAxisIndex: 0,
            yAxisIndex: 0,
            type: "bar",
            name: "李四",
            data: [
                ['15分钟', Math.round(Math.random() * 100)],
                ['0.5小时', Math.round(Math.random() * 100)],
                ['1小时', Math.round(Math.random() * 100)],
                ['2小时', Math.round(Math.random() * 100)],
                ['0.5天', Math.round(Math.random() * 100)],
                ['1天', Math.round(Math.random() * 100)],
                ['3天', Math.round(Math.random() * 100)],
            ],
        },
        {
            xAxisIndex: 0,
            yAxisIndex: 0,
            type: "bar",
            name: "王五",
            data: [
                ['15分钟', Math.round(Math.random() * 100)],
                ['0.5小时', Math.round(Math.random() * 100)],
                ['1小时', Math.round(Math.random() * 100)],
                ['2小时', Math.round(Math.random() * 100)],
                ['0.5天', Math.round(Math.random() * 100)],
                ['1天', Math.round(Math.random() * 100)],
                ['3天', Math.round(Math.random() * 100)],
            ],
        },


        {
            xAxisIndex: 1,
            yAxisIndex: 1,
            type: "bar",
            name: "王五",
            data: [
                ['0.5小时', Math.round(Math.random() * 100)],
                ['1小时', Math.round(Math.random() * 100)],
                ['0.5天', Math.round(Math.random() * 100)],
                ['1天', Math.round(Math.random() * 100)],
            ],
        },
        {
            xAxisIndex: 1,
            yAxisIndex: 1,
            type: "bar",
            name: "赵六",
            data: [
                ['0.5小时', Math.round(Math.random() * 100)],
                ['1小时', Math.round(Math.random() * 100)],
                ['0.5天', Math.round(Math.random() * 100)],
                ['1天', Math.round(Math.random() * 100)],
            ],
        },
        {
            xAxisIndex: 1,
            yAxisIndex: 1,
            type: "bar",
            name: "牛七",
            data: [
                ['0.5小时', Math.round(Math.random() * 100)],
                ['1小时', Math.round(Math.random() * 100)],
                ['0.5天', Math.round(Math.random() * 100)],
                ['1天', Math.round(Math.random() * 100)],
            ],
        },
        {
            xAxisIndex: 1,
            yAxisIndex: 1,
            type: "bar",
            name: "冯八",
            data: [
                ['0.5小时', Math.round(Math.random() * 100)],
                ['1小时', Math.round(Math.random() * 100)],
                ['0.5天', Math.round(Math.random() * 100)],
                ['1天', Math.round(Math.random() * 100)],
            ],
        },
        {
            xAxisIndex: 1,
            yAxisIndex: 1,
            type: "bar",
            name: "何久",
            data: [
                ['0.5小时', Math.round(Math.random() * 100)],
                ['1小时', Math.round(Math.random() * 100)],
                ['0.5天', Math.round(Math.random() * 100)],
                ['1天', Math.round(Math.random() * 100)],
            ],
        },

        {
            xAxisIndex: 2,
            yAxisIndex: 2,
            type: "bar",
            name: "王五",
            data: [
                ['0.5小时', Math.round(Math.random() * 100)],
                ['0.5天', Math.round(Math.random() * 100)],
                ['1天', Math.round(Math.random() * 100)],
                ['5天及以上', Math.round(Math.random() * 100)],
            ],
        },
        {
            xAxisIndex: 2,
            yAxisIndex: 2,
            type: "bar",
            name: "赵六",
            data: [
                ['0.5小时', Math.round(Math.random() * 100)],
                ['0.5天', Math.round(Math.random() * 100)],
                ['1天', Math.round(Math.random() * 100)],
                ['5天及以上', Math.round(Math.random() * 100)],
            ],
        },
        {
            xAxisIndex: 2,
            yAxisIndex: 2,
            type: "bar",
            name: "石头",
            data: [
                ['0.5小时', Math.round(Math.random() * 100)],
                ['0.5天', Math.round(Math.random() * 100)],
                ['1天', Math.round(Math.random() * 100)],
                ['5天及以上', Math.round(Math.random() * 100)],
            ],

        }
    ]
};