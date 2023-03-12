var data2 = [{
    "name": "体育",
    "value": 85
}, {
    "name": "语文",
    "value": 60
}, {
    "name": "毛概",
    "value": 10
}, {
    "name": "建模",
    "value": 35
}, {
    "name": "高数",
    "value": 75
}, {
    "name": "心理学",
    "value": 10
}, {
    "name": "计算机",
    "value": 75
}, {
    "name": "专业发展史",
    "value": 15
}, {
    "name": "专业英语",
    "value": 60
}];
var xData = [],
    yData = [];
var min = 0;
data2.map(function(a, b) {
    xData.push(a.name);
    if (a.value === 0) {
        yData.push(a.value + min);
    } else {
        yData.push(a.value);
    }
});
option = {
    backgroundColor: '#141845',
    title: {
        text: '学生学科分析',
        textStyle: {
            color: '#fff',
        },
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line',
            lineStyle: {
                opacity: 0
            }
        },
        formatter: function(prams) {
            if (prams[0].data === min) {
                return "合格率：0%"
            } else {
                return "合格率：" + prams[0].data + "%"
            }
        }
    },
    legend: {
        data: ['直接访问', '背景'],
        show: false
    },
    grid: {
        left: '0%',
        right: '0%',
        bottom: '5%',
        top: '7%',
        height: '85%',
        containLabel: true,
        z: 22
    },
    xAxis: [{
        type: 'category',
        gridIndex: 0,
        data: xData,
        axisTick: {
            alignWithLabel: true
        },
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        },
        axisLabel: {
            show: true,
            color: '#fff'
        }
    }],
    yAxis: [{
            type: 'value',
            gridIndex: 0,
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            min: min,
            max: 100,
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            axisLabel: {
                color: '#fff',
                formatter: '{value} %'
            }
        },
        {
            type: 'value',
            gridIndex: 0,
            min: min,
            max: 100,
            splitNumber: 12,
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            }
        }
    ],
    grid: {
        left: '3%',
        right: '4%',
        bottom: '5%',
        containLabel: true
    },
    series: [{
            name: '合格率',
            type: 'bar',
            barWidth: '45%',
            xAxisIndex: 0,
            yAxisIndex: 0,
            itemStyle: {
                normal: {
                    barBorderRadius: 6,
                    color: '#3CF8E0'
                }
            },
            data: yData,
            zlevel: 11

        },
        {
            name: '背景',
            type: 'bar',
            barWidth: '45%',
            xAxisIndex: 0,
            yAxisIndex: 1,
            barGap: '-100%',
            data: [95, 65, 25, 80, 80, 50, 90, 15, 65],
            itemStyle: {
                normal: {
                    barBorderRadius: 6,
                    color: '#535C6D'
                }
            },
            zlevel: 9
        },

    ]
};