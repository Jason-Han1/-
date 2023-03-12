option = {
    legend: {
        type: 'scroll',
        orient: 'vertical',
        left: '5%',
        top: 'center',
        itemGap: 40,
        selectedMode: true,
        icon: 'pin',
        textStyle: {
            rich: {
                a: {
                    color: '#000',
                },
                b0: {
                    color: '#36CFC9',
                    fontSize: 20,
                    padding: [0, 0, 0, 40]
                },
                b1: {
                    color: '#40A9FF',
                    fontSize: 20,
                    padding: [0, 0, 0, 40]
                },
                b2: {
                    color: '#597EF7',
                    fontSize: 20,
                    padding: [0, 0, 0, 40]
                },
                b3: {
                    color: '#9254DE',
                    fontSize: 20,
                    padding: [0, 0, 0, 40]
                },
                b4: {
                    color: '#F759AB',
                    fontSize: 20,
                    padding: [0, 0, 0, 40]
                },
                b5: {
                    color: '#FFA940',
                    fontSize: 20,
                    padding: [0, 0, 0, 40]
                }
            }
        },
        formatter: function(name) {
            let title = ''
            var total = 0;
            var target;
            var index;
            for (var i = 0, l = option.series[0].data.length; i < l; i++) {
                if (option.series[0].data[i].name == name) {
                    target = option.series[0].data[i].value;
                    title = option.series[0].data[i].label
                    index = i < 6 ? i : 5
                }
            }
            return `{a| ${name}}{b${index}| ${target}}`
        }
    },
    grid: {
        left: "30%",
        right: "10%",
        bottom: "10%",
        top: "15%",
    },
    xAxis: {
        type: "category",
        axisLabel: {
            color: 'rgba(0,0,0,0.6)',
            fontSize: '12'
        },
        axisLine: {
            lineStyle: {
                color: '#E8E8E8',
            }
        },
        axisTick: {
            show: false
        },
    },
    yAxis: {
        type: "value",
        show: true,
        textStyle: {
            width: 0,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: "dashed"
            }
        }
    },
    series: [{
            data: [{
                    name: 'name1',
                    value: 12
                },
                {
                    name: 'name2',
                    value: 20
                },
                {
                    name: 'name3',
                    value: 3
                },
                {
                    name: 'name4',
                    value: 12
                },
                {
                    name: 'name5',
                    value: 123
                },
                {
                    name: 'name6',
                    value: 1
                },
            ],
            width: 0,
            height: 0,
            type: 'pie',
            hoverAnimation: false,
            labelLine: {
                show: false,
            },
            itemStyle: {
                normal: {
                    color: function(params) {
                        var colorList = ['#36CFC9', '#40A9FF', '#597EF7', '#9254DE', '#F759AB', '#FFA940'];
                        return colorList[params.dataIndex]
                    },
                }
            }
        },
        {
            data: [{
                    name: 'name1',
                    value: 12
                },
                {
                    name: 'name2',
                    value: 20
                },
                {
                    name: 'name3',
                    value: 3
                },
                {
                    name: 'name4',
                    value: 12
                },
                {
                    name: 'name5',
                    value: 123
                },
                {
                    name: 'name6',
                    value: 1
                }
            ],
            barWidth: '50%',
            type: 'bar',
            itemStyle: {
                normal: {
                    color: function(params) {
                        var colorList = ['#36CFC9', '#40A9FF', '#597EF7', '#9254DE', '#F759AB', '#FFA940'];
                        return colorList[params.dataIndex]
                    },
                }
            }
        },
    ]
};