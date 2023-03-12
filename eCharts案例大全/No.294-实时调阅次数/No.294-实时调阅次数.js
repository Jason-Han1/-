option = {
    color: ['#61C77E'],
    title: {
        text: '实时调阅次数',
        textStyle: {
            color: '#000000',
            fontSize: 14,
        },
    },
    grid: {
        left: '1%',
        right: '2%',
        bottom: '3%',
        containLabel: true,
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line',
            lineStyle: {
                color: '#61C77E'
            },
        },
        textStyle: {
            color: '#fff',
            fontSize: 14
        },
        formatter: '{b}: {c} 次'
    },
    xAxis: {
        type: 'category',
        axisLabel: {
            fontSize: 12,
            color: 'rgba(0, 0, 0, 0.65)',
            margin: 12
        },
        axisLine: {
            lineStyle: {
                color: ['#E8E8E8']
            }
        },
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月'],
    },
    yAxis: {
        splitLine: {
            lineStyle: {
                color: ['#E8E8E8'],
                type: 'dotted',
            }
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            fontSize: 12,
            color: 'rgba(0, 0, 0, 0.65)',
        }
    },
    series: [
        {
            name: '实时调阅次数',
            type: 'bar',
            barWidth: '20',
            data: [220, 182, 191, 234, 290, 330, 310]
        }
    ]
};
