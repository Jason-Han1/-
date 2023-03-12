option = {
    title: {
        text: '',
    },
    tooltip: {},
    legend: {},
    xAxis: {
        axisTick: {
            show: false,
        },
        axisLine: {
            lineStyle: {
                color: '#EEEEEE',
            },
        },
        axisLabel:{
            color:'#949494',
        },
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    },
    yAxis: {
        splitLine: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        max: 400,
    },
    series: [
        {
            type: 'bar',
            barWidth: '20%',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 40,
                    color: '#FE4D81',
                },
            },
            data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
            type: 'bar',
            barWidth: '20%',
            barGap: '-100%',
            itemStyle: {
                normal: {
                    barBorderRadius: 40,
                    color: '#EEEEEE',
                },
            },
            data: [400, 400, 400, 400, 400, 400, 400],
        },
    ],
};
