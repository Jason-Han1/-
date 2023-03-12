function func(x) {
    x /= 10;
    return Math.sin(x) * Math.cos(x * 2 + 1) * Math.sin(x * 3 + 2) * 50;
}

function generateData() {
    let data = [];
    for (let i = -200; i <= 200; i += 0.1) {
        data.push([i, func(i)]);
    }
    return data;
}

option = {
    grid: {
        left: '3%',
        right: '10%',
        bottom: '3%',
        containLabel: true,
    },
    legend: {
        data: ['流量', '降雨量'],
        left: 10,
    },
    xAxis: {
        position: 'top',
        splitLine: { show: false },
        axisTick: { show: false },
    },
    yAxis: {
        min: -30,
        max: 30,
        axisLine: { onZero: false, show: false },
        axisTick: { show: false },
        data: [
            '20.1.20',
            '20.2.20',
            '20.3.20',
            '20.4.20',
            '20.5.20',
            '20.6.20',
            '20.7.20',
            '20.8.20',
            '20.9.20',
            '20.10.20',
            '20.11.20',
            '20.12.20',
            '20.13.20',
            '20.14.20',
            '20.15.20',
            '20.16.20',
            '20.17.20',
            '20.18.20',
            '20.19.20',
            '20.20.20',
            '20.21.20',
            '20.22.20',
            '20.23.20',
            '20.24.20',
            '20.25.20',
            '20.26.20',
            '20.27.20',
            '20.28.20',
            '20.29.20',
            '20.30.20',
        ],
    },
    dataZoom: [
        {
            show: false,
            type: 'inside',
            filterMode: 'none',
            yAxisIndex: [0],
            startValue: 0,
            endValue: 14,
        },
    ],
    series: [
        {
            type: 'line',
            smooth: true,
            itemStyle: {
                normal: {
                    lineStyle: {
                        shadowColor: 'rgba(0,0,0,0.4)',
                    },
                },
            },
            data: [
                20,
                15,
                0,
                -15,
                -30,
                20,
                15,
                0,
                -15,
                -30,
                20,
                15,
                0,
                -15,
                -30,
                20,
                15,
                0,
                -15,
                -30,
                20,
                15,
                0,
                -15,
                -30,
                20,
                15,
                0,
                -15,
                -30,
            ],
        },
    ],
};
