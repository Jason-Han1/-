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
    series: [
        {
            data: maxList,
            type: 'bar',
            xAxisIndex: 0,
            silent: true,
            itemStyle: {
                color:'#F5F6F8'
            },
            barWidth: 80,
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
                color: '#FFDA6B',
            },
            barWidth: 10,
        },
        {
            name: '类目2',
            data: seriesData2,
            type: 'bar',
            xAxisIndex: 1,
            itemStyle: {
                color: '#96A0F0',
            },
            barWidth: 10,
        },
        {
            name: '调解成功率',
            type: 'line',
            smooth: false, //平滑曲线显示
            symbol: 'emptyCircle', //标记的图形为实心圆
            symbolSize: 8, //标记的大小
            itemStyle: {
                normal: {
                    color: '#6DA3FD',
                },
            },
            lineStyle: {
                color: '#6DA3FD',
            },
            data: seriesData1,
        },
    ],
    dataZoom: {
        type: 'inside',
        xAxisIndex: [0, 1],
    },
    tooltip: {
        show:false,
    },
    legend: {
        itemWidth: 30,
        bottom: 15,
        textStyle: {
            color: '#404040',
            fontSize:'10px'
        },
        itemGap:150
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
            position: 'top',
        },
        {
            type: 'category',
            data: ['2012', '2013', '2014', '2015', '2016'],
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false, //隐藏X轴刻度
            },
            axisLabel: {
                textStyle: {
                    color: '#ACACAC',
                },
            },
        },

    ],
    yAxis: 
         {
            type: 'value',
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#cdd5e2',
                },
            },
            splitLine: {
                show: false,
            },
             axisTick: {
                show: false, //隐藏X轴刻度
            },
            axisLabel: {
                textStyle: {
                    color: '#ACACAC',
                },
            },
        },
}