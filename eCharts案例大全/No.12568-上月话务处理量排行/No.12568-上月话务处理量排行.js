option = {
    backgroundColor: '#141845',
    title: {
        text: '上月话务处理量排行',
        textStyle: {
            color: '#fff',
        },
    },
    tooltip: {
        trigger: 'axis',
        formatter: "{b} <br> 数量: {c}"
    },
    grid: {
        left: '2%',
        right: '4%',
        bottom: '2%',
        top: '8%',
        containLabel: true
    },
    xAxis: {
        splitLine: {
            show: false
        },
        type: 'value',
        min: 0,
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        }
    },
    yAxis: {
        splitLine: {
            show: false
        },
        type: 'category',
        data: ['赵广川', '张敏', '梁丽嫦', '孟军', '黄华军', '黄海鲜', '刘艳轩', '冯志鹏'],
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        },
        axisLabel: {
            show: true,
            interval: 0,
            rotate: 0,
            margin: 10,
            inside: false,
            textStyle: {
                //color: '#fff',
                fontWeight: '50'
            }
        }
    },
    series: [{
        type: 'bar',
        barWidth: '16',
        label: {
            normal: {
                show: true,
                // formatter: '{c}',
                formatter: function(v) {
                    var val = v.data;
                    if (val == 0) {
                        return '';
                    }
                    return val;
                },
                color: '#fff'
            }
        },
        itemStyle: {
            emphasis: {
                barBorderRadius: 7
            },
            normal: {
                barBorderRadius: 4,
                color: new echarts.graphic.LinearGradient(
                    0, 0, 1, 0,
                    [{
                            offset: 0,
                            color: '#0AF8EB'
                        },
                        {
                            offset: 1,
                            color: '#B055F8'
                        }

                    ]
                )
            }
        },
        data: [289, 369, 469, 526, 623, 763, 865, 965]
    }]
};