var option = {
    backgroundColor: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
            {
                offset: 0, color: '#061B31' // 0% 处的颜色
            },
            {
                offset: 0.25, color: '#123457' // 25% 处的颜色
            },
            {
                offset: 0.75, color: '#0C254A' // 75% 处的颜色
            },
            {
                offset: 1, color: '#0A213E' // 100% 处的颜色
            }
        ],
        global: false // 缺省为 false
    },
    grid: [
        {
            //左侧的柱状图grid
            width: "46%",
            left: '1%',
            top: '0',
            right: '0',
            bottom: '0'
        },
        {
            //右侧的柱状图grid
            width: "46%",
            left: '51%',
            top: '0',
            right: '0',
            bottom: '0'
        }
    ],
    xAxis: [
        {
            //左侧柱状图的X轴
            gridIndex: 0,//x 轴所在的 grid 的索引
            show: false
        },
        {
            //右侧柱状图的X轴
            gridIndex: 1,//x 轴所在的 grid 的索引
            show: false
        }],
    yAxis: [
        {
            //左侧柱状图的Y轴
            gridIndex: 0,//y轴所在的 grid 的索引
            splitLine: 'none',
            axisTick: 'none',
            axisLine: 'none',
            axisLabel: {
                verticalAlign: 'bottom',
                align: 'left',
                padding: [0, 0, 15, 15],
                textStyle: {
                    color: '#befbff',
                    fontSize: '16',
                }
            },
            data: ['制造业','建筑业','交通运输','公共管理'],
            inverse: true,
        },
        {
            //左侧柱状图的Y轴
            gridIndex: 0,//y轴所在的 grid 的索引
            splitLine: 'none',
            axisTick: 'none',
            axisLine: 'none',
            data: [555,444,333,222],
            inverse: true,
            axisLabel: {
                show: true,
                verticalAlign: 'bottom',
                align: 'right',
                padding: [0, 20, 15, 0],
                textStyle: {
                    color: '#fff',
                    fontSize: '16',
                },
                formatter: function (value) {
                    return '{x|' + value + '}  {y|' + "元}"
                },
                rich: {
                    y: {
                        color: '#befbff',
                        fontSize: 16
                    },
                    x: {
                        color: '#f6cf42',
                        fontSize: 16
                    }
                }
            }
        },
        {
            //左侧柱状图的Y轴
            gridIndex: 0,//y轴所在的 grid 的索引
            splitLine: 'none',
            axisTick: 'none',
            axisLine: 'none',
            data: []
        },

        {
            //右侧柱状图的Y轴
            gridIndex: 1,//y轴所在的 grid 的索引
            splitLine: 'none',
            axisTick: 'none',
            axisLine: 'none',
            axisLabel: {
                verticalAlign: 'bottom',
                align: 'left',
                padding: [0, 0, 15, 15],
                textStyle: {
                    color: '#befbff',
                    fontSize: '16',
                }
            },
            data: ['电力、热力','批发零售','居民服务','其它'],
            inverse: true
        },
        {
            //右侧柱状图的Y轴
            gridIndex: 1,//y轴所在的 grid 的索引
            splitLine: 'none',
            axisTick: 'none',
            axisLine: 'none',
            data: [777,888,999,333],
            inverse: true,
            axisLabel: {
                show: true,
                verticalAlign: 'bottom',
                align: 'right',
                padding: [0, 20, 15, 0],
                textStyle: {
                    color: '#fff',
                    fontSize: '14',
                },
                formatter: function (value) {
                    return '{x|' + value + '}  {y|' + "元}"
                },
                rich: {
                    y: {
                        color: '#befbff',
                        fontSize: 16
                    },
                    x: {
                        color: '#f6cf42',
                        fontSize: 16
                    }
                }
            },
        },
        {
            //右侧柱状图的Y轴
            gridIndex: 1,//y轴所在的 grid 的索引
            splitLine: 'none',
            axisTick: 'none',
            axisLine: 'none',
            data: []
        }
    ],
    series: [
        {
            name: '值',
            type: 'bar',
            xAxisIndex: 0,//使用的 x 轴的 index，在单个图表实例中存在多个 x 轴的时候有用。
            yAxisIndex: 0,//使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用。
            data: [555,444,333,222],
            barWidth: 15,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: "#49bdff" // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: "#54ffd5" // 100% 处的颜色
                    }], false),
                    barBorderRadius: 6,
                }
            },
            z: 2
        },
        {
            name: '外框',
            type: 'bar',
            xAxisIndex: 0,//使用的 x 轴的 index，在单个图表实例中存在多个 x 轴的时候有用。
            yAxisIndex: 2,//使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用。
            barGap: '-100%',
            data: [1000, 1000, 1000, 1000],
            barWidth: 15,
            itemStyle: {
                normal: {
                    color: '#2d5271',
                    barBorderRadius: 6,
                }
            },
            z: 0
        },
        {
            name: '值',
            type: 'bar',
            xAxisIndex: 1,//使用的 x 轴的 index，在单个图表实例中存在多个 x 轴的时候有用。
            yAxisIndex: 3,//使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用。
            data: [777,888,999,333],
            barWidth: 15,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: "#49bdff" // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: "#54ffd5" // 100% 处的颜色
                    }], false),
                    barBorderRadius: 6,
                }
            },
            z: 2
        },
        {
            name: '外框',
            type: 'bar',
            xAxisIndex: 1,//使用的 x 轴的 index，在单个图表实例中存在多个 x 轴的时候有用。
            yAxisIndex: 5,//使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用。
            barGap: '-100%',
            data: [1000, 1000, 1000, 1000],
            barWidth: 15,
            itemStyle: {
                normal: {
                    color: '#2d5271',
                    barBorderRadius: 6,
                }
            },
            z: 0
        }
    ]
};