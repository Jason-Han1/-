option = {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    xAxis: {
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            margin: 20,
        },
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value',
        show: false
    },
    series: [{
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            stack: 'one',
            itemStyle: {
                borderWidth: 10,
                borderColor: 'rgba(255, 255, 255, 1)', //同背景色一样
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: '#2FCAFD',
                                    },
                                    {
                                        offset: 1,
                                        color: '#2450F0',
                                    },
                                ]),
                barBorderRadius: 120
            },

            emphasis: {
                itemStyle: {
                    borderColor: 'rgba(255, 255, 255, 1)',
                }
            }
        },
        {
            data: [120, 30, 150, 80, 70, 110, 130],
            type: 'bar',
            stack: 'one', //堆叠
            barWidth: 40,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: '#FFE131',
                                    },
                                    {
                                        offset: 1,
                                        color: '#FFB200',
                                    },
                                ]),
            itemStyle: {
                borderWidth: 10, //用border设置两个柱形图之间的间距
                borderColor: 'rgba(255, 255, 255, 1)', //同背景色一样
                barBorderRadius: 120
            },
            emphasis: {
                itemStyle: {
                    borderColor: 'rgba(255, 255, 255, 1)',
                }
            }

        },
        {
            data: [120, 30, 150, 80, 70, 110, 130],
            type: 'bar',
            stack: 'one', //堆叠
            barWidth: 40,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: '#6DFF6D',
                                    },
                                    {
                                        offset: 1,
                                        color: '#00DB00',
                                    },
                                ]),
            itemStyle: {
                borderWidth: 10, //用border设置两个柱形图之间的间距
                borderColor: 'rgba(255, 255, 255, 1)', //同背景色一样
                barBorderRadius: 120
            },
            emphasis: {
                itemStyle: {
                    borderColor: 'rgba(255, 255, 255, 1)',
                }
            }

        }
    ]
};