option = {
    backgroundColor: '#05224d',
    tooltip: {},
    grid: {
        top: '8%',
        left: '1%',
        right: '1%',
        bottom: '8%',
        containLabel: true,
    },
    legend: {
        data: ['计划金额', '完成金额'],
        right: '10px',
        top: '10px',
        textStyle: {
            color: '#f9f9f9',
            borderColor: '#fff',
        },
    },
    xAxis: [
        {
            type: 'category',
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#f9f9f9',
                },
            },
            axisLabel: {
                textStyle: {
                    color: '#d1e6eb',
                },
            },
            axisTick: {
                show: false,
            },
            data: ['2019', '2020', '2021'],
        },
    ],
    yAxis: [
        {
            type: 'value',
            min: 0,
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#0a3256',
                },
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                margin: 20,
                textStyle: {
                    color: '#d1e6eb',
                },
            },
            axisTick: {
                show: false,
            },
        },
    ],
    series: [
        {
            name: '计划金额',
            type: 'line',
            smooth: true, //是否平滑曲线显示
            showAllSymbol: true,
            symbol: 'emptyCircle',
            symbolSize: 6,
            lineStyle: {
                normal: {
                    color: '#39d6fd', // 线条颜色
                },
            },
            label: {
                show: true,
                textStyle: {
                    color: '#fff',
                },
            },
            itemStyle: {
                normal: {
                    color: '#39d6fd',
                },
            },
            tooltip: {
                show: false,
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
                                color: 'rgba(56,137,171,1)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(0,0,0, 0)',
                            },
                        ],
                        false
                    ),
                },
            },
            data: [100, 140, 110],
        },
        {
            name: '完成金额',
            type: 'line',
            smooth: true, //是否平滑曲线显示
            showAllSymbol: true,
            symbol: 'emptyCircle',
            symbolSize: 6,
            lineStyle: {
                normal: {
                    color: '#ff5050', // 线条颜色
                },
            },
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#fff',
                },
            },
            itemStyle: {
                normal: {
                    color: '#ff5050',
                },
            },
            tooltip: {
                show: false,
            },
            areaStyle: {
                //区域填充样式
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: 'rgba(255,80,80,1)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(0,0,0, 0)',
                            },
                        ],
                        false
                    ),
                },
            },
            data: [120, 130, 100],
        },
    ],
};
