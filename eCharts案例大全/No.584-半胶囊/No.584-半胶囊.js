const mock = [{
        k: '系列1',
        v: [{
            k: '类目1',
            v: 120
        }, {
            k: '类目2',
            v: 110
        }],
    },
    {
        k: '系列2',
        v: [{
            k: '类目1',
            v: 80
        }, {
            k: '类目2',
            v: 55
        }],
    },
    {
        k: '系列3',
        v: [{
            k: '类目1',
            v: 80
        }, {
            k: '类目2',
            v: 55
        }],
    },
    {
        k: '系列4',
        v: [{
            k: '类目1',
            v: 80
        }, {
            k: '类目2',
            v: 55
        }],
    },
    {
        k: '系列5',
        v: [{
            k: '类目1',
            v: 80
        }, {
            k: '类目2',
            v: 55
        }],
    },
]

// 横轴数据
const xAxis = mock.map(item => item.k)
// 系列 1 数据 (类目1)
const seriesData1 = mock.map(item => item.v[0].v)
// 系列 2 数据 (类目2)
const seriesData2 = mock.map(item => item.v[1].v)
// 最大值 (额外拉高多少根据数据数量级决定)
const max = Math.max(...seriesData1, ...seriesData2) + 10
// 构造柱最大值数组
const maxList = []
for (let i = 0; i < mock.length; i += 1) {
    maxList.push(max)
}

option = {
    backgroundColor: '#20252E',
    color: ['#15477B', '#3FF5E6', '#FFCC54'],
    series: [
        {
            // 该系列为背景深蓝色半胶囊
            data: maxList,
            type: 'bar',
            xAxisIndex: 0,
            silent: true,
            itemStyle: {
                borderColor: '#0488A9',
                barBorderRadius: [20, 20, 0, 0],
                borderWidth: 2,
            },
            barWidth: 30,
            tooltip: {
                show: false,
            },
        },
        {
            name: '类目1',
            data: seriesData1,
            type: 'bar',
            xAxisIndex: 1,
            itemStyle: {
                barBorderRadius: 25,
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#1EF8F3', // 0% 处的颜色
                    }, {
                        offset: 0.25,
                        color: '#67F9F6',
                    }, {
                        offset: 0.5,
                        color: '#A8F6F4',
                    }, {
                        offset: 0.75,
                        color: '#D1FAF9',
                    }, {
                        offset: 1,
                        color: '#E0F8F7', // 100% 处的颜色
                    }],
                },
            },
            barWidth: 10,
        },
        {
            name: '类目2',
            data: seriesData2,
            type: 'bar',
            xAxisIndex: 1,
            itemStyle: {
                barBorderRadius: 25,
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#E4F634', // 0% 处的颜色
                    }, {
                        offset: 0.25,
                        color: '#EEFC5D',
                    }, {
                        offset: 0.5,
                        color: '#F8974E',
                    }, {
                        offset: 0.75,
                        color: '#FFBC88',
                    }, {
                        offset: 1,
                        color: '#FD9B50', // 100% 处的颜色
                    }],
                },
            },
            barWidth: 10,
        },
    ],
    dataZoom: {
        type: 'inside',
        xAxisIndex: [0, 1],
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
    },
    legend: {
        itemWidth: 10,
        top: 15,
        right: 25,
        textStyle: {
            color: '#fff',
        },
    },
    xAxis: [{
            data: maxList,
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            position: 'bottom',
        },
        {
            data: xAxis,
            axisLine: {
                lineStyle: {
                    color: '#00D2FF',
                },
            },
            axisLabel: {
                color: '#fff',
            },
            axisTick: {
                show: false,
            },
            position: 'bottom',
        },
    ],
    yAxis: {
        axisLine: {
            show: false,
        },
        axisLabel: {
            color: '#fff',
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            lineStyle: {
                color: '#00D2FF',
                opacity: 0.1,
            },
        },
    },
}