option = {
    backgroundColor: '#00265f',
    title: {
        text: '休闲娱乐统计',
        x: 'center',
        y: '4%',
        textStyle: {
            color: '#fff',
            fontSize: '22',
        },
        subtextStyle: {
            color: '#90979c',
            fontSize: '16',
        },
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
    },
    grid: {
        top: '15%',
        right: '3%',
        left: '5%',
        bottom: '12%',
    },
    xAxis: [
        {
            type: 'category',
            data: ['亲子游乐', '美容美发', '文化展演', '酒吧轰趴', '康乐健身', '网吧咖啡','茶馆'],
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0.12)',
                },
            },
            axisLabel: {
                margin: 10,
                color: '#e2e9ff',
                textStyle: {
                    fontSize: 14,
                },
            },
        },
    ],
    yAxis: [
        {
            axisLabel: {
                formatter: '{value}',
                color: '#e2e9ff',
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: 'rgba(255,255,255,1)',
                },
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0.12)',
                },
            },
        },
    ],
    series: [
        {
            type: 'bar',
            data: [5000, 2600, 1300, 1300, 1250, 1500,1300],
            barWidth: '20px',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: 'rgba(0,244,255,1)', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: 'rgba(0,77,167,1)', // 100% 处的颜色
                            },
                        ],
                        false
                    ),
                    barBorderRadius: [30, 30, 30, 30],
                    shadowColor: 'rgba(0,160,221,1)',
                    shadowBlur: 4,
                },
            },
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 20,
            barGap: '-100%',
            data: [8000, 8000, 8000, 8000, 8000, 8000,8000],
            z:-1,
            itemStyle: {
                normal: {
                    color: 'rgba(0,255,255,.2)',
                    barBorderRadius: 30,
                },
            },
        },
    ],
};
