//系列色配置
var colors = {
    length: 3,
    0: [{
            offset: 0.2,
            color: '#83bff6'
        },
        {
            offset: 0.6,
            color: '#188df0'
        },
        {
            offset: 1,
            color: '#188df0'
        }
    ],
    1: [{
            offset: 0.2,
            color: '#bbbbce'
        },
        {
            offset: 0.6,
            color: '#9875d5'
        },
        {
            offset: 1,
            color: '#8157d4'
        }
    ],
    2: [{
            offset: 0.2,
            color: '#bfa0ce'
        },
        {
            offset: 0.6,
            color: '#cd6787'
        },
        {
            offset: 1,
            color: '#d21952'
        }
    ]
}
var data = [{
    SeriesValue: [59, 70, 92]
}, {
    SeriesValue: [65, 67, 59]
}, {
    SeriesValue: [98, 87, 62]
}]
var title_data = [{
    show: true,
    text: "区间完成率",
    left: "center",
    borderWidth: 1,
    shadowColor: "rgba(94, 63, 193, 1)",
    textStyle: {
        fontSize: 16
    }
}, {
    text: "一区",
    left: "16.666666666666668%",
    top: "55%",
    textAlign: "center",
    textStyle: {
        fontSize: 15
    }
}, {
    text: "二区",
    left: "50%",
    top: "55%",
    textAlign: "center",
    textStyle: {
        fontSize: 15
    }
}, {
    text: "三区",
    left: "83.33333333333334%",
    top: "55%",
    textAlign: "center",
    textStyle: {
        fontSize: 15
    }
}]
var xData = ["一区", "二区", "三区"]
var Legend = {
    show: true,
    textStyle: {
        color: '#FE80C8',
        fontSize: 15
    },
    orient: "horizontal",
    right: "auto",
    top: "15%",
    bottom: "auto",
    itemGap: 12,
    data: ["日完成率", "周完成率", "月完成率"]
}
var placeHolderStyle = {
    normal: {
        color: 'rgba(0,0,0,0)',
        label: {
            show: false
        },
        labelLine: {
            show: false
        }
    },
    emphasis: {
        color: 'rgba(0,0,0,0)'
    }
};
var series_data = []
var title_data = [{
    show: true,
    text: '自定义系列渐变色',
    left: 'center',
    borderWidth: 1,
    shadowColor: "rgba(94, 63, 193, 1)",
    padding: [10, 10, 10, 10],
    shadowBlur: 2,
    borderColor: "rgba(107, 106, 173, 0.93)",
    textStyle: {
        fontSize: 20,
        color: '#fff'
    },
}]
var color = [];
for (let i = 0; i < Legend.data.length; i++) {
    //渐变色设置
    color[i] = new echarts.graphic.LinearGradient(
        0, 0, 1, 0, colors[i % colors.length]
    )
}
var maxRadius = 80
var series_annulusWidth = 15
var left = 100 / (data.length * 2)
var position = 'inner'
var label_fountSize = 10
for (let j = 0; j < data.length; j++) {
    //标题赋值
    let title = {
        text: xData[j],
        left: left * (1 + j * 2) + '%',
        top: '55%',
        textAlign: 'center',
        textStyle: {
            fontSize: 15,
            color: '#fff'
        },
    }
    // @ts-ignore
    title_data.push(title)
    //按分类添加系列
    for (let i = 0; i < Legend.data.length; i++) {
        let series = {
            name: xData[j],
            type: 'pie',
            clockWise: true,
            hoverAnimation: false,
            radius: [maxRadius - (i + 1) * series_annulusWidth - i * 2 + '%', maxRadius - i * series_annulusWidth - i * 2 + '%'],
            center: ['50%', '56%'],
            left: 100 / data.length * j + '%',
            right: 100 / data.length * (data.length - 1 - j) + '%',
            itemStyle: {
                color: color[i],
            },
            data: [{
                    value: data[j].SeriesValue[i],
                    name: Legend.data[i],
                    label: {
                        // 在文本中，可以对部分文本采用 rich 中定义样式。
                        // 这里需要在文本中使用标记符号：
                        // `{styleName|text content text content}` 标记样式名。
                        // 注意，换行仍是使用 '\n'。
                        formatter: position == 'inner' ? '{c}%' : '{bottom|{b}}\n {top|{c}%}',
                        fontSize: label_fountSize,
                        position: position,
                        rich: {
                            top: {
                                verticalAlign: 'bottom',
                                // bottom：文字在上圆点在下
                                // top: 文字在下圆点在上
                                padding: [5, 5, 0, 0],
                                fontSize: label_fountSize,
                                // padding：[上， 右， 下，左]，
                                // 上：圆点到上文字间距, 文字上移距离
                                // 右：文字与右侧圆点间距, 文字左移距离
                                // 下：圆点到下文字间距, 文字下移距离
                                // 左：文字与左侧圆点间距, 文字右移距离
                                align: 'center'
                                // center:文字圆点居中，right文字在圆点左侧，left文字在圆点右侧
                            },
                            bottom: {
                                padding: [0, 5, 5, 0],
                                fontSize: label_fountSize,
                                verticalAlign: 'top',
                                align: 'center'
                            }
                        }
                    },
                    labelLine: {
                        length: (i + 1) * 10,
                        lineStyle: {
                            width: 2,
                            color: "rgba(251, 247, 247, 1)"
                        }
                    },
                },
                {
                    value: 100 >= data[j].SeriesValue[i] ? 100 - data[j].SeriesValue[i] : 0,
                    itemStyle: placeHolderStyle
                }
            ],
            z: i + 1
        }
        series_data.push(series)
    }
}
option = {
    color: ["#857ABA", "#4C3CAE", "#8C0F86", "#CA2C95", "#E1A4C4", "#857ABA"],
    title: title_data,
    tooltip: {
        show: true,
        formatter: "{a} <br/>{b} : {c}%"
    },
    legend: Legend,
    series: series_data
};