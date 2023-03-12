option = {
    title: {
            text: '趋势预测（2019-2030）'
    },
    grid: {
        left: '3%',
        right: '16%',
        bottom: '40%',
        top: '16%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        type: 'category',
        data: ['2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030'],
        axisTick: {
                alignWithLabel: true
            }
    },
    yAxis: {
        type: 'value',
        name: '婴儿死亡率（‰）',
        min: 3,
            axisLabel: {
                formatter: '{value}‰'
            }
    },
    series: [{
        data: [4.6, 4.8, 4.9, 5.3, 5.2, 5.1, 5.3, 5.4, 4.9, 4.7, 4.5, 4.4],
        type: 'line',
        color: 'cornflowerblue',
        markLine: {
                silent: true,
                symbol: ['none', 'none'],
                lineStyle: {
                    width: 2
                },
                data: [{
                    yAxis: 5.5,
                    label: {
                    formatter: '2020目标值：{c}‰'
                    },
                    lineStyle: {
                        color: 'darkgreen'
                    }
                    }, {
                    yAxis: 4.5,
                    label: {
                    formatter: '2030目标值：{c}‰'
                    },
                    lineStyle: {
                        color: 'darkorange'
                    }
                }]
            }
    }]
};
