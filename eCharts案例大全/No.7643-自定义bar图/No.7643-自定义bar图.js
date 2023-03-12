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
            show: false,
            lineStyle: {

                color: '#f00',
                width: 1,
                type: 'dashed'
            }
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
            show: false,
            lineStyle: {

                color: '#333',
                width: 1,
                type: 'dashed'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {

                color: '#333',
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
        data: ['杭州市', '宁波市', '温州市', '湖州市', '嘉兴市', '绍兴市', '金华市', '衢州市', '舟山市', '台州市', '丽水市'],
        axisLabel: {
            margin: 60,
            fontSize: 14,
            align: 'left',
            color: '#333'

        }
    }, {
        type: 'category',
        inverse: true,

        axisLine: {
            show: false,
            lineStyle: {

                color: '#333',
                width: 1,
                type: 'dashed'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {

                color: '#333',
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
        data: ['100分 | 优', '100分 | 优', '45分 | 良', '湖州市', '嘉兴市', '绍兴市', '金华市', '衢州市', '舟山市', '台州市', '丽水市'],
        axisLabel: {
            margin: 10,
            fontSize: 12,
            fontWeight: 'bold',
            align: 'left',
            // color: 'green',
            color: function(value, index) {
                var color = ['red', 'blue', 'green', '#ed3', '#78d', 'black', 'red', 'red', 'red', 'red', 'red'];
                return color[index];
            }
        }
    }],
    series: [{
            z: 2,
            name: 'value',
            type: 'bar',
            barCategoryGap: '60%',
            showBackground: true,
            data: [1.66, 1.86, 1.82, 1.8, 1.53, 1.47, 1.3, 1.25, 1.1, 1.02, 1].map((item, i) => {
                itemStyle = {
                    // color: i > 3 ? colorList[3] : colorList[i]
                }
                return {
                    value: item,
                    itemStyle: itemStyle
                };
            }),
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
                // offset: [10, 0]
            },
            markLine: {
                symbol: 'none',
                label: {
                    show: false
                },
                data: [{
                        y: 80, //上虚线
                        silent: false,
                        lineStyle: {
                            type: "dashed",
                            color: "#FA3934",

                        },
                        //标线距y轴的距离
                        xAxis: 1
                    },
                    {
                        y: 480, //下虚线
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