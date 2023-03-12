var fontColor = '#30eee9';
// 测试数据
var data_date = ['0805', '0806', '0807', '0808', '0809']; // 日期
var data_white = [0.20, 0.1, 0, 0, 0]; // 白细胞计数
var data_red = [3.31, 3.3, 2.9, 2.98, 2.99]; // 红细胞计数
var data_blod = [34, 23, 14, 32, 14]; // 血小板计数
option = {
    backgroundColor: '#11183c',
        title: {
        text: '全血细胞趋势图',
        left: 'center',
        textStyle: {
            color: fontColor,
            align: 'center',
        }
    },
    grid: {
        left: '5%',
        right: '10%',
        top: '20%',
        bottom: '15%',
        containLabel: true
    },
    tooltip: {
        show: true,
        trigger: 'item'
    },
    legend: {
        show: true,
        x: 'right',
        y: '35',
        icon: 'stack',
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
            color: '#1bb4f6'
        },
        data: ['白细胞计数', '红细胞计数', '血小板计数']
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLabel: {
            color: fontColor
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#397cbc'
            }
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#195384'
            }
        },
        data: data_date
    }],
    yAxis: [{
            type: 'value',
            name: '',
            min: 0.0,
            max: 50.0,
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    color: '#2ad1d2'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#27b4c2'
                }
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#11366e'
                }
            }
        },

    ],
    series: [{
            name: '白细胞计数',
            type: 'line',
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
                normal: {
                    color: 'white',
                    lineStyle: {
                        color: "white",
                        width: 1
                    },
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            markPoint: {
                itemStyle: {
                    normal: {
                        color: 'red'
                    }
                }
            },
            data: data_white
        },
        {
            name: '红细胞计数',
            type: 'line',

            symbol: 'circle',
            symbolSize: 8,
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            itemStyle: {
                normal: {
                    color: 'red',
                    lineStyle: {
                        color: "red",
                        width: 1
                    },
                }
            },
            data: data_red
        },
        {
            name: '血小板计数',
            type: 'line',

            symbol: 'circle',
            symbolSize: 8,
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            itemStyle: {
                normal: {
                    color: 'yellow',
                    lineStyle: {
                        color: "yellow",
                        width: 1
                    },
                }
            },
            data: data_blod
        },

    ]
};