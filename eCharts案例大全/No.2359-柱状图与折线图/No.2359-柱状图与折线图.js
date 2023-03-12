var xData = ["1月", "2月", "3月", "4月", "5月", "6月"];
option = {
    legend: {
        top: 20,
        right: 20,
        itemGap: 20,
        itemHeight: 12,
        textStyle: {
            color: '#333',
            fontSize: 14,
        },
        data: ['进口总值', '出口总值', '同比增长'],
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            textStyle: {
                color: '#333',
            },
        },
    },
    grid: {
        top: 65,
        left: 30,
        right: 30,
        bottom: 30,
        containLabel: true, // 防止标签溢出
    },
    calculable: true,
    xAxis: [
        {
            type: 'category',
            axisLabel: {
                interval: 0,
                color: '#333FFF',
                textStyle: {
                    fontSize: 14,
                },
            },
            axisLine: {
                lineStyle: {
                    color: '#00aaff',
                },
            },

            axisTick: {
                show: false,
            },
            splitArea: {
                show: false,
            },

            data: xData,
        },
    ],
    yAxis: [
        {
            type: 'value',
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            name: '金额（亿美元）',
            nameTextStyle: {
                color: '#333FFF',
                align: 'left',
                fontSize: 14,
                padding: [0, 0, 10, 0],
            },
            axisLabel: {
                formatter: '{value}',
                color: '#333FFF',
                textStyle: {
                    fontSize: 14,
                },
            },
            splitNumber: 6,
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                    color: 'rgba(0, 170, 255, 0.75)',
                },
            },
        },
    ],
    series: [
        {
            name: '进口总值',
            type: 'bar',
            barMaxWidth: 13,
            barGap: '60%',
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#00ffae', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#1e55ff', // 100% 处的颜色
                            },
                        ],
                        global: false, // 缺省为 false
                    },
                    barBorderRadius: [12, 12, 0, 0],
                },
            },
            data: [36, 28, 32, 25, 28, 41],
        },
        {
            name: '出口总值',
            type: 'bar',
            barMaxWidth: 13,
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#fdff7f', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#ff9e4c', // 100% 处的颜色
                            },
                        ],
                        global: false, // 缺省为 false
                    },
                    barBorderRadius: [12, 12, 0, 0],
                },
            },
            data: [18, 13, 9, 22, 15, 19],
        },
        {
            name: '同比增长',
            type: 'line',
            smooth: false,
            symbol: 'circle',
            symbolSize: 5,
            lineStyle: {
                normal: {
                    width: 2,
                    color: '#1d5bfc',
                },
            },
            itemStyle: {
                normal: {
                    color: 'rgba(255,217,21,1)',
                    borderColor: '#333',
                    borderWidth: 1,
                },
            },
            label: {
                normal: {
                    show: false,
                },
            },
            data: [52, 40, 39, 45, 38, 59],
        },
    ],
};
