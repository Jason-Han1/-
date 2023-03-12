deemph_color = 'rgb(165,165,165)'
emph_color = 'rgb(79,129,189)'
height = 300
grid_top = 50
bar_category_gap = '28%'
colors = ["#4C72B0", "#55A868", "#C44E52", "#8172B2", "#CCB974", "#64B5CD"],
    deemph_colors = ['#8DA6CE', '#A0CFAB']
axis_line_color = 'rgb(135,135,135)'

category = ['Only', 'Vero Moda', '韩都', 'Zara', '欧时力', '优衣库', 'Amii', {
            value: 'Mo&Co.',
            textStyle: {
                fontWeight: 'bold'
            }
        },
        '茵曼', '乐町'
    ],
    data = [
        [410, 400, 370, 320, 230, 220, 190, {
            value: 180,
            itemStyle: {
                normal: {
                    color: colors[0]
                }
            }
        }, 170, 170],
        [310, 390, 100, 230, 420, 180, 170, {
                value: 680,
                itemStyle: {
                    normal: {
                        color: colors[1]
                    }
                }
            },
            180, 190
        ]
    ]

option = {
    title: [{
        text: '2016年，MO&Co.达到天猫服装品类销量前十，并以均价680元位列第一',
    }, {
        text: '来源：天猫2016年销售数据',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 11
        },
        bottom: 30
    }],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },


    grid: [{
        left: 80,
        right: '50%',
    }, {
        left: '50%',
        right: 50,
    }],
    yAxis: [{
        type: 'category',
        boundaryGap: true,
        data: category,
        inverse: true,
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: true,
        },
    }, {
        gridIndex: 1,
        type: 'category',
        boundaryGap: true,
        data: category,
        position: 'top',
        inverse: true,
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        type: 'category',
        data: category,
        inverse: true,
        axisLabel: {
            show: false,
        }
    }],
    xAxis: [{
        name: '销售额（百万元）',
        nameLocation: 'middle',
        position: 'top',
        type: 'value',
        nameTextStyle: {
            color: '#000',
        },
        nameGap: 5,
        splitLine: {
            show: false
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: axis_line_color,
                width: 1.5,
            }
        },
        axisLabel: {
            show: false,
            textStyle: {
                fontSize: 10,
            },
        },
    }, {
        gridIndex: 1,
        name: '均价（元）',
        nameLocation: 'middle',
        position: 'top',
        type: 'value',
        splitLine: {
            show: false
        },
        nameTextStyle: {
            color: '#000',
        },
        nameGap: 5,
        splitLine: {
            show: false
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: axis_line_color,
                width: 1.5,
            }
        },
        axisLabel: {
            show: false,
        },
    }, ],
    series: [{
        name: '销售额',
        type: 'bar',
        data: data[0],
        barCategoryGap: bar_category_gap,
        label: {
            normal: {
                show: true,
                position: 'insideRight'
            }
        },
        itemStyle: {
            normal: {
                color: deemph_colors[0]
            }
        },
    }, {
        name: '均价',
        type: 'bar',
        xAxisIndex: 1,
        yAxisIndex: 1,
        data: data[1],
        barCategoryGap: bar_category_gap,
        label: {
            normal: {
                show: true,
                position: 'insideRight'
            }
        },
        itemStyle: {
            normal: {
                color: deemph_colors[1]
            }
        },
    }]
};