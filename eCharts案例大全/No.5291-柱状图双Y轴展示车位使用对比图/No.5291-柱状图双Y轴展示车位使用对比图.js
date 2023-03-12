var option = {
    backgroundColor: '#091C3D',
    tooltip: { //提示框组件
        trigger: 'axis',
        formatter: '{b}<br />{a0}: {c0}<br />{a1}: {c1}',
        axisPointer: {
            type: 'shadow',
            label: {
                backgroundColor: '#6a7985'
            }
        },
        textStyle: {
            color: '#fff',
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 12,
        }
    },
    grid: {
        left: '10%',
        right: '10%',
        bottom: '10%',
        top: '40%',
        //	padding:'0 0 10 0',
        containLabel: true,
    },
    legend: { //图例组件，颜色和名字
        right: '10%',
        top: '30%',
        itemGap: 16,
        itemWidth: 18,
        itemHeight: 10,
        data: [{
                name: '总量',
            },
            {
                name: '已使用',
            }
        ],
        textStyle: {
            color: '#a8aab0',
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 12,
        }
    },
    xAxis: [{
        type: 'category',
        data: ['A区', 'B区', 'C区', 'D区', 'E区', 'F区', 'G区'],
        axisLabel: { //坐标轴刻度标签的相关设置。
            textStyle: {
                color: 'red',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 16,
            },
            rotate: 50, // 文字倾斜显示
        },
        axisTick: { //坐标轴刻度相关设置。
            show: false,
        },
        axisLine: { //坐标轴轴线相关设置
            lineStyle: {
                color: '#97a5b2',
                opacity: 1
            }
        },
        splitLine: { //坐标轴在 grid 区域中的分隔线。
            show: false,
        }
    }],
    yAxis: [{
            type: 'value',
            splitNumber: 4,
            max: 120,
            min: 0,
            axisLabel: {
                textStyle: {
                    color: '#00ebed',
                    fontStyle: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 16,
                }
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#fff'],
                    opacity: 0.06
                }
            }

        },
        {
            type: 'value',
            splitNumber: 4,
            min: 0,
            max: 40,
            axisLabel: {
                textStyle: {
                    color: '#0090ff',
                    fontStyle: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 16,
                }
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#fff'],
                    opacity: 0.06
                }
            }

        }
    ],
    series: [{
            name: '总量',
            type: 'bar',
            data: [26, 21, 21, 18, 55, 30, 22],
            barWidth: 12,
            barGap: 0.4, //柱间距离
            label: { //图形上的文本标签
                normal: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#00ebed',
                        fontStyle: 'normal',
                        fontFamily: '微软雅黑',
                        fontSize: 14,
                    },
                },
            },
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#00ebed'
                    }, {
                        offset: 1,
                        color: '#00ebed'
                    }]),
                    barBorderRadius: 50,
                    borderWidth: 0,
                }
            },
        },
        {
            name: '已使用',
            type: 'bar',
            data: [11, 9, 9, 8, 35, 55, 62, 78, 65, 55, 60, 45, 42, 15, 12, 5],
            barWidth: 12,
            label: { //图形上的文本标签
                normal: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#0090ff',
                        fontStyle: 'normal',
                        fontFamily: '微软雅黑',
                        fontSize: 14,
                    },
                },
            },
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#0090ff'
                    }, {
                        offset: 1,
                        color: '#0090ff'
                    }]),

                    barBorderRadius: 50,
                    borderWidth: 0,
                }
            },
        }
    ]
};