option = {
    xAxis: {
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        axisTick: { show: false },
    },
    yAxis: {
        splitLine: { show: false },
    },
    series: [
        {
            type: 'pictorialBar',
            symbol: 'rect',
            symbolSize: ['100%', 5],
            symbolRepeat: true,
            symbolMargin: 2,
            itemStyle: {
                normal: {
                    color: '#b8b9a1',
                },
            },
            barWidth: 40,
            data: [2.0,164.6,180.7, 412.8,349.6,459.5,260.5,479.9,104.6,39.5,44.3,5.6],
        },
        {
            type: 'bar',
            barWidth: 40,
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.1)',
            },
            itemStyle: {
                normal: {
                    color: 'transparent',
                },
            },
            data: [2.0,164.6,180.7, 412.8,349.6,459.5,260.5,479.9,104.6,39.5,44.3,5.6],
        },
    ],
};
