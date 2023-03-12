option = {
    title: {
        text: '60岁及以上人口占总人口比重变化',
        textStyle: {
            color: '#fff',
            fontSize: 14,
            fontWeight: 0
        }
    },
    tooltip: {
        trigger: 'axis',

        formatter: (pa) => {
            let oneDotHtml = '<span style="display:inline-block;margin-right:5px;border-radius:50%;width:10px;height:10px;background:rgba(0,255,198,1);"></span>'
            let twoDotHtml = '<span style="display:inline-block;margin-right:5px;border-radius:50%;width:10px;height:10px;background:rgba(252,199,58,1);"></span>'
            let threeDotHtml = '<span style="display:inline-block;margin-right:5px;border-radius:50%;width:10px;height:10px;background:rgba(202,139,58,1);"></span>'
            let fourDotHtml = '<span style="display:inline-block;margin-right:5px;border-radius:50%;width:10px;height:10px;background:rgba(202,19,58,1);"></span>'
                // return pa[0].name + pa[0].value
            return (
                pa[0].name + '<br/>' +
                oneDotHtml + pa[1].seriesName + '：' + pa[1].value + "%<br>" +
                twoDotHtml + pa[0].seriesName + '：' + pa[0].value + "(百万人)" + '<br/>' +
                threeDotHtml + pa[2].seriesName + ':' + pa[2].value + "%" + '<br/>' +
                fourDotHtml + pa[3].seriesName + ':' + pa[3].value + "%"
            );
        }
    },
    legend: {
        data: ['60岁及以上人口人口数量', '60岁及以上人口占比'],
        right: "10%",
        textStyle: {
            color: '#A3E2F4',
            fontSize: 12,
            fontWeight: 0
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        splitLine: {
            //坐标轴在 grid 区域中的分隔线。
            show: true,
            lineStyle: {
                color: '#fff',
            },
        },
        axisLabel: {
            show: true,
            textStyle: {
                padding: [10, 0, 0, 0],
                color: "rgba(255,255,255)" //X轴文字颜色
            }
        },
        data: ['2009年', '2010年', '2011年', '2012年', '2013年', '2014年', '2015年', '2016年', '2017年', '2018年', '2019年', '2020年']
    },
    yAxis: [{
            type: 'value', //左边的y轴
            name: '占比（%）',

            min: 'dataMin',


            axisLine: {
                show: false,
                lineStyle: {
                    color: '#FFFFFF'
                }
            },
            axisLabel: {
                formatter: function(value) {
                    value = (value / 14.4).toFixed(1)

                    return value + "%"

                },
                textStyle: {
                    color: '#fff',

                }
            },
            boundaryGap: [0, 0.1]
        },
        {
            type: 'value', //右边第一个y轴
            max: 400,
            name: '60岁及以上人口人口数量（百万）',
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#FFFFFF'
                }
            },
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    color: '#fff'
                }
            },
            boundaryGap: [0, 0.1],
            nameTextStyle: {
                color: '#ccc'
            },
        }
    ],

    series: [{
            yAxisIndex: 1,
            name: '60岁及以上人口人口数量',
            type: 'line',
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1, [{
                                offset: 0,
                                color: 'rgba(59, 34, 201,.4)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(16, 25, 112,0.2)'
                            }
                        ],
                        false
                    ),
                    shadowColor: 'rgba(59, 34, 201,1)',
                    shadowBlur: 10
                }
            },
            stack: 'Total',
            data: [167.14, 177.65, 184.99, 193.90, 202.43, 212.42, 222.00, 230.86, 240.90, 249.49, 253.88, 264.02]
        },
        {
            yAxisIndex: 0,
            name: '60岁及以上人口占比',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        formatter: "{c}%",
                        textStyle: {
                            color: "#fff",
                            fontSize: 8
                        }
                    }
                }
            },
            type: 'line',
            stack: 'Total',
            data: [12.5, 13.3, 13.7, 14.3, 14.9, 15.5, 16.1, 16.7, 17.3, 17.9, 18.1, 18.7]
        }, {
            yAxisIndex: 0,
            name: '老年抚养比',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        formatter: "{c}%",
                        textStyle: {
                            color: "#fff",
                            fontSize: 8
                        }
                    }
                }
            },
            type: 'line',
            stack: 'Total',
            data: [11.6, 11.9, 12.3, 12.7, 13.1, 13.7, 14.3, 15.0, 15.9, 16.8, 17.8, 19.7]
        },
        {
            yAxisIndex: 0,
            name: '我国人口出生率',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        formatter: "{c}%",
                        textStyle: {
                            color: "#fff",
                            fontSize: 8
                        }
                    }
                }
            },
            type: 'line',
            stack: 'Total',
            data: [11.95, 11.90, 11.93, 12.10, 12.08, 12.37, 12.07, 12.95, 12.43, 10.94, 10.84, 8.5]
        }
    ]
};
