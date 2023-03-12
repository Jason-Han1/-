//实际数据和预测数据拼接到一个数组中
//不同背景色区分
var data = {
        data: [12, 13, 10, 14, 9, 11],
        axis: ['11-01', '11-02', '11-03', '11-01', '11-02', '11-03'],
        bg: ['rgba(133,210,239,.36)',
            'rgba(133,210,239,.36)',
            'rgba(133,210,239,.36)',
            'rgba(96,195,192,.36)',
            'rgba(96,195,192,.36)',
            'rgba(96,195,192,.36)'
        ]
    },
    option = {
        title: {
            text: '最近3天的实际温度和预测温度'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        xAxis: {
            data: data.axis,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#6B6B6B'
                }
            },
            splitArea: {
                show: true,
                interval: 0,//强制显示所有标签,解决数据多的情况背景色显示不全
                areaStyle: {
                    color: data.bg
                }
            }
        },
        yAxis: [{
            type: 'value',
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(125,125,125,.38)'
                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#FFFFFF'
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#858585'
                }
            }
        }],
        series: [{
            type: 'bar',
            barWidth: '20',
            data: data.data
        }]
    };