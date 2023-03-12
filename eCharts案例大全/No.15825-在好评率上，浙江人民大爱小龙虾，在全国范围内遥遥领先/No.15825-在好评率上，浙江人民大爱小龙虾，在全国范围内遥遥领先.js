colors = ["#4C72B0", "#55A868", "#C44E52", "#8172B2", "#CCB974", "#64B5CD"]
deemph_colors = ['#8DA6CE', '#A0CFAB']
bar_category_gap = '35%'
bar_width = '50%'
axis_line_color = 'rgb(135,135,135)'
average_line_color = 'rgb(128,128,128)'
// 字体取决于图片、屏幕大小
// 标题 小图18，大图20
// 坐标轴 小图12，大图15
title_font_size = 20
category_font_size = 13

label_emph_fontsize = 14,
    label_emph_style = {
        show: true,
        position: 'insideRight',
        formatter: '{c}%',
    }

categories = [{
    value: '浙江',
    textStyle: {
        fontWeight: 'bolder',
    },
},

    '重庆', '山东', '湖北', '江苏', '河北', '北京',
    '湖南', '山西', '四川', '上海', '福建', '辽宁', '天津', '安徽',
    '河南', '广东'
]

data = [{
    value: 70.3,
    label: {
        normal: label_emph_style
    },
    itemStyle: {
        normal: {
            color: colors[0]
        }
    }
},
    68.8, 67.5, 66.9, 65.3, 65.1, 64.8, 64.8,
    64.3, 63.5, 62.9, 62.2, 61.7, 61.6,
    55.8, 52.8, 50.4,
]

source = {
    text: '来源：大众点评',
    textStyle: {
        fontWeight: 'normal',
        fontSize: 12
    },
    bottom: 30
};


option = {
    title: [{
        text: '在好评率上，浙江人民大爱小龙虾，在全国范围内遥遥领先',
        textStyle: {
            fontSize: title_font_size
        },
    },
        source
    ],
    grid: {
        left: 40,
    },
    tooltip: {
        trigger: 'item',
    },
    yAxis: {
        type: 'category',
        data: categories,
        inverse: true,
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        splitLine: {
            show: true,
            interval: 3,
            lineStyle: {
                width: 1.5
            }
        },
        axisLabel: {
            textStyle: {
                fontSize: category_font_size,
            },
        },
    },
    xAxis: {
        axisLine: {
            show: true,
            lineStyle: {
                color: axis_line_color,
                width: 1.5,
            }
        },
        axisTick: {
            length: 4
        },
        axisLabel: {
            formatter: '{value}%',
            textStyle: {
                fontSize: 10,
            },
        },
        splitLine: {
            show: false
        },
        name: '好评率',
        nameLocation: 'end',
        position: 'top',


    },
    series: [{
        type: 'bar',
        data: data,
        // barWidth: 30,
        barCategoryGap: bar_category_gap,
        label: {
            normal: {
                show: true,
                position: 'insideRight',
                formatter: '{c}%',
            }
        },
        itemStyle: {
            normal: {
                color: deemph_colors[0]
            }
        },
        markLine: {
            lineStyle: {
                normal: {
                    // color: average_line_color,
                }
            },
            data: [{
                name: '平均线',
                type: 'average'
            }],
        },
    }]
};