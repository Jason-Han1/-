option = {
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220],
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    {
                        offset: 0,
                        color: '#eb64fb'
                    },
                    {
                        offset: 0.15,
                        color: '#eb64fb'
                    },
                    {
                        offset: 0.15,
                        color: 'transparent'
                    },
                    {
                        offset: 0.25,
                        color: 'transparent'
                    },
                    {
                        offset: 0.25,
                        color: '#eb64fb'
                    },
                    {
                        offset: 0.4,
                        color: '#eb64fb'
                    },
                    {
                        offset: 0.4,
                        color: 'transparent'
                    },
                    {
                        offset: 0.5,
                        color: 'transparent'
                    },
                    {
                        offset: 0.5,
                        color: '#eb64fb'
                    },
                    {
                        offset: 0.65,
                        color: '#eb64fb'
                    },
                    {
                        offset: 0.65,
                        color: 'transparent'
                    },
                    {
                        offset: 0.75,
                        color: 'transparent'
                    },
                    {
                        offset: 0.75,
                        color: '#eb64fb'
                    },
                    {
                        offset: 0.90,
                        color: '#eb64fb'
                    },
                    {
                        offset: 0.90,
                        color: 'transparent'
                    },
                    {
                        offset: 1,
                        color: 'transparent'
                    }
                ])
            }
        }
    ]
};
