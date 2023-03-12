option = {
    backgroundColor: '#00265f',
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
            data: ['制造业', '建筑业', '农林牧渔'],
            axisLine: {
                show: false,
                lineStyle: {
                    color: 'rgba(255,255,255,0.12)',
                },
            },
            axisLabel: {
                show: true,
                margin: 10,
                color: '#e2e9ff',
                textStyle: {
                    fontSize: 14,
                },
            },
        },
        {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
                textStyle: {
                    color: '#ffffff',
                    fontSize: '16',
                },
                formatter: function (value) {
                    return value + ' %';
                },
            },
            data: [34, 53, 46],
        },
    ],
    yAxis: [
        {
            // name: '单位：万元',
            type: 'value',
            axisLabel: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            max: 100,
        },
    ],
    series: [
        {
            type: 'bar',
            data: [34, 53, 46],
            barWidth: '12px',
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
                                color: '#6cc3a0', // 0% 处的颜色
                                opacity:1
                            },
                            {
                                offset: 1,
                                color: 'rgba(94, 101, 108,0)', // 100% 处的颜色
                            },
                        ],
                        false
                    ),
                    barBorderRadius:6,
                    shadowColor: 'rgba(0,160,221,1)',
                    shadowBlur: 4,
                },
            },
            showBackground: true,
            backgroundStyle: {
                // color: 'red',
                borderRadius: 10,
            },
            label: {
                normal: {
                    show: false,
                },
            },
        },
    ],
};
