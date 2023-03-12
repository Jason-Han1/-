colors = ["#4C72B0", "#55A868", "#C44E52", "#8172B2", "#CCB974", "#64B5CD"],
    deemph_colors = ['#8DA6CE', '#A0CFAB']
height = 300
bar_category_gap = '28%'
source_color = 'rgb(166,166,166)'
label_emph_fontsize = 16
label_emph_style = {
    show: true,
    position: 'insideTop',
    formatter: '{c}%',
    textStyle: {
        fontSize: label_emph_fontsize
    },
},
    axis_line_color = 'rgb(135,135,135)'


category = ['Under 20', '20-29', '30-39', '40-49', '50-59', '60 Over']
data = [2, 11, {
    value: 23,
    label: {
        normal: label_emph_style
    },
    itemStyle: {
        normal: {
            color: colors[0]
        }
    }
}, {
    value: 30,
    label: {
        normal: label_emph_style
    },
    itemStyle: {
        normal: {
            color: colors[0]
        }
    }
}, {
    value: 23,
    label: {
        normal: label_emph_style
    },
    itemStyle: {
        normal: {
            color: colors[0]
        }
    }
}, 15, ]

option1 = {
    title: [{
        text: '雅虎日本的用户中，中老年用户（30岁以上）占到了绝大多数',
    }, {
        text: '占比 (%)',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 12
        },
        top: 30
    }, {
        text: '来源：Site Analytics',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 12
        },
        bottom: 0
    }],
    grid: {
        left: 40,
        // containLabel: true,
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    xAxis: [{
        name: '年龄',
        type: 'category',
        data: category,
        axisTick: {
            show: false
        },
    }],
    yAxis: [{
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            formatter: '{value}%',
        }
    }, ],
    series: [{
        name: '品类',
        type: 'bar',
        barCategoryGap: bar_category_gap,
        data: data,
        itemStyle: {
            normal: {
                color: deemph_colors[0]
            }
        },
    }]
};

option = option1