deemph_color = 'rgb(165,165,165)'
bar_category_gap = '30%'
    //deemph_colors = ['#FAB025', '#1FAB42','#66FFFF']
axis_line_color = 'rgb(135,135,135)'

category = ['売上', '利益', '直人'],


    data = [30, 89, 105, 70, 89, 90];
deemph_colors = new Array();
for (var i = 0; i < 6; i++) {
    if (data[i] < 80) {
        deemph_colors[i] = 'rgba(10, 194, 56, 0.8)'
    } else if (data[i] > 100) {
        deemph_colors[i] = 'rgba(240, 19, 74, 0.8)'
    } else {
        deemph_colors[i] = 'rgba(245, 150, 0, 0.8)'
    }
}


option = {
    title: [{
        text: '予算達成率',
        x: '10%',
        y: '5%',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 14
        },
        textAlign: 'center'
    }, {
        text: '前年比',
        x: '60%',
        y: '5%',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 14
        },
        textAlign: 'center'
    }],

    grid: [{
        left: 50,
        right: '55%',
        borderColor: '#ffffff',
        backgroundColor: '#ffffff',
    }, {
        left: '55%',
        right: 50,
        borderColor: '#ffffff',
        backgroundColor: '#ffffff',
    }],
    yAxis: [{
        gridIndex: 0,
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
        gridIndex: 0,
        type: 'value',
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
        type: 'value',
        splitLine: {
            show: false
        },
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
            type: 'bar',
            xAxisIndex: 0,
            yAxisIndex: 0,
            z: 10,
            barCategoryGap: bar_category_gap,
            label: {
                normal: {
                    show: true,
                    position: 'inside'

                }
            },
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        formatter: '{c}%',
                        position: 'inner'
                    },
                    color: function(params) {
                        var colorlist = [deemph_colors[0], deemph_colors[1], deemph_colors[2]];
                        return colorlist[params.dataIndex];
                    }
                }
            },
            data: [data[0], data[1], data[2]],
        }, {
            type: "bar",
            xAxisIndex: 0,
            yAxisIndex: 0,

            silent: false,
            itemStyle: {
                normal: {
                    show: false,
                    color: '#ddd',
                    borderColor: '#000'

                }
            },
            tooltip: {
                show: false
            },
            barGap: '-100%',
            data: [100, 100, 100]
        },

        {
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: [data[3], data[4], data[5]],
            z: 10,
            barCategoryGap: bar_category_gap,
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        formatter: '{c}%',
                        position: 'inner'
                    },
                    color: function(params) {
                        var colorlist = [deemph_colors[3], deemph_colors[4], deemph_colors[5]];
                        return colorlist[params.dataIndex];
                    }

                },
            },
        }, {
            type: "bar",
            xAxisIndex: 1,
            yAxisIndex: 1,
            silent: false,
            itemStyle: {
                normal: {
                    show: false,
                    color: '#ddd',
                    borderColor: '#000000'
                }
            },
            tooltip: {
                show: false
            },
            barGap: '-100%',
            data: [100, 100, 100]
        },
    ]
};