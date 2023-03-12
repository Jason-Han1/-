var index = 0;
var colorList = ['#f36c6c', '#e6cf4e', '#20d180', '#0093ff'];
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        show: false
    },
    grid: {
        left: 100,
        top: 100,
        right: 100,
        bottom: 100
    },
    toolbox: {
        show: true,
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'value',
        splitLine: {
            show: false
        },
        minorSplitLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        }

    },
    yAxis: [{
        type: 'category',
        inverse: true,
        axisLine: {
            show: true,
            lineStyle: {
                color: '#39708F',
                width: 1,
                type: 'solid'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#39708F',
                width: 1,
                type: 'dashed'
            }
        },
        axisTick: {
            show: true,
            lineStyle: {
                color: '#39708F'
            }
        },
        axisPointer: {
            label: {
                show: false,
                margin: 10
            }
        },
        data: ['杭州市', '宁波市', '温州市', '湖州市', '嘉兴市', '绍兴市', '金华市', '衢州市', '舟山市'],
        axisLabel: {
            margin: 50,
            fontSize: 14,
            align: 'left',
            color: '#fff'

        }
    }, {
        type: 'category',
        inverse: true,
        axisLine: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#39708F',
                width: 1,
                type: 'dashed'
            }
        },
        axisTick: {
            show: false
        },
        axisPointer: {
            label: {
                show: true,
                margin: 30
            }
        },
        data: [80, 90, 88, 90, 76, 69, 90, 98, 76],
        axisLabel: {
            margin: 10,
            fontSize: 12,
            fontWeight: 'normal',
            align: 'left',
            formatter: function(value) {
                return value + '分 | 优'
            },
            color: function(value, index) {
                var color = ['red', 'blue', 'green', '#ed3', '#78d', 'black', 'red', 'red', 'red', 'red', 'red'];
                return color[index];
            }
        }
    }],
    series: [{
            //  z: 2,
            name: 'value',
            type: 'bar',
            barCategoryGap: '60%',
            showBackground: false, //是否需要背景颜色
            data: [80, 90, 88, 90, 76, 69, 90, 98, 76],
            itemStyle: {
                barBorderRadius: 4,
                color: function(series) {
                    if (series.dataIndex < 3) {
                        return new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [{
                                    offset: 0,
                                    color: 'rgb(160,218,196)'
                                },
                                {
                                    offset: 0.7,
                                    color: 'rgb(126,207,175)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgb(56,182,135)'
                                }
                            ])
                    } else {
                        return new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [{
                                    offset: 0,
                                    color: '#f36c6c'
                                },
                                {
                                    offset: 0.7,
                                    color: '#e6cf4e'
                                },
                                {
                                    offset: 1,
                                    color: '#20d180'
                                }
                            ])
                    }


                }
            },
            label: {
                show: true,
                position: 'insideRight',
                color: '#fff',
                fontSize: 14,
                formatter: '{c}%'
            },
            markLine: {
                symbol: 'none',
                label: {
                    show: false
                },
                data: [{
                        y: 80,
                        silent: false,
                        lineStyle: {
                            type: "dashed",
                            color: "#FA3934",

                        },
                        xAxis: 1
                    },
                    {
                        y: 480,
                        silent: false,
                        lineStyle: {
                            type: "dashed",
                            color: "#FA3934",

                        },
                        xAxis: 1
                    }

                ]
            }

        }

    ]
};