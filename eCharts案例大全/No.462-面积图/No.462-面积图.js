option = {
    backgroundColor: '#020347',
    legend: {
        show: true,
        right: '10%',
        top: '10%',
        itemGap: 20,
        itemWidth:15,
        itemHeight:10,
        data: [
            {
                name: '用户注册成功率(%)',
                icon: 'circle',
                textStyle: {
                    color: '#00DAFF',
                },
            },
            {
                name: 'PUD会话业务成功率(%)',
                icon: 'circle',
                textStyle: {
                    color: '#054E9D',
                },
            },
        ],
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            label: {
                show: true,
                backgroundColor: '#fff',
                color: '#556677',
                borderColor: 'rgba(0,0,0,0)',
                shadowColor: 'rgba(0,0,0,0)',
                shadowOffsetY: 0,
            },
            lineStyle: {
                width: 0,
            },
        },
        backgroundColor: '#fff',
        textStyle: {
            color: '#5c6c7c',
        },
    },
    grid: {
        top: '15%',
    },
    xAxis: [
        {
            type: 'category',
            data: ['北京', '上海', '广州', '深圳', '香港', '澳门', '台湾'],
            axisLine: {
                lineStyle: {
                    color: '#0173DA',
                },
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                interval: 0,
                textStyle: {
                    color: '#FFFFFF',
                },
                // 默认x轴字体大小
                fontSize: 12,
                // margin:文字到x轴的距离
            },
            boundaryGap: false,
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                    color: '#0173DA',
                },
            },
        },
    ],
    yAxis: [
        {
            type: 'value',
            axisTick: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#0173DA',
                },
            },
            axisLabel: {
                textStyle: {
                    color: '#FFFFFF',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                    color: '#0173DA',
                },
            },
        },
        {
            type: 'value',
            position: 'right',
            axisTick: {
                show: false,
            },
            axisLabel: {
                textStyle: {
                    color: '#0173DA',
                },
                formatter: '{value}',
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#0173DA',
                },
            },
            splitLine: {
                show: false,
            },
        },
    ],
    series: [
        {
            name: '用户注册成功率(%)',
            type: 'line',
            data: [10, 10, 30, 12, 15, 3, 7],
            symbolSize: 1,
            symbol: 'circle',
            smooth: true,
            yAxisIndex: 0,
            showSymbol: false,
            lineStyle: {
                width: 2,
                color: '#00DAFF',
            },
            itemStyle: {
                normal: {
                    color: '#00DAFF',
                    borderColor: '#00DAFF',
                },
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: '#00DAFF',
                            },
                            {
                                offset: 1,
                                color: 'rgba(0,0,0,0)',
                            },
                        ],
                        false
                    ),
                },
            },
        },
        {
            name: 'PUD会话业务成功率(%)',
            type: 'line',
            data: [5, 12, 11, 14, 25, 16, 10],
            symbolSize: 1,
            symbol: 'circle',
            smooth: true,
            yAxisIndex: 0,
            showSymbol: false,
            lineStyle: {
                width: 2,
                color: '#054E9D',
            },
            itemStyle: {
                normal: {
                    color: '#054E9D',
                    borderColor: '#054E9D',
                },
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: '#054E9D',
                            },
                            {
                                offset: 1,
                                color: 'rgba(0,0,0,0)',
                            },
                        ],
                        false
                    ),
                },
            },
        },
    ],
};
