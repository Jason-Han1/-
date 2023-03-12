option = {
    color: ['#2985ff', '#A9A557'],
    tooltip: {
        trigger: 'axis',
    },
    legend: {
        orient: 'vertical',
        right: 20,
        top: 80,
        data: ['单品到手价', '挂牌价'],
        selected: {
            挂牌价: false,
            单品到手价: true,
        },
    },
    grid: {
        left: 64,
        right: 95,
        top: 0,
        bottom: 40,
        containLabel: true,
    },
    xAxis: [
        {
            show: true,
            type: 'category',
            boundaryGap: false,
            data: [
                '2021年8月27日 20时01分14秒',
                '2021年8月31日 0时32分15秒',
                '2021年9月1日 0时32分19秒',
                '2021年9月1日 22时32分26秒',
                '当前时间',
            ],
            axisTick: {
                show: false,
            },
            axisLabel: {},
        },
    ],
    yAxis: [
        {
            type: 'value',
            boundaryGap: ['20%', '20%'],
            axisTick: {
                show: false,
            },
            scale: true,
            splitLine: {
                show: false,
            },
            axisLabel: {
                showMinLabel: false,
                showMaxLabel: false,
            },
        },
    ],
    dataZoom: {
        type: 'slider',
        xAxisIndex: 0,
        showDetail: false,
        bottom: 0,
    },
    series: [
        {
            name: '单品到手价',
            type: 'line',
            step: 'end',
            data: [
                ['2021年8月27日 20时01分14秒', 303],
                ['2021年8月31日 0时32分15秒', 259],
                ['2021年9月1日 0时32分19秒', 274],
                ['2021年9月1日 22时32分26秒', 303],
                ['当前时间', 303],
            ],
        },
        {
            name: '挂牌价',
            type: 'line',
            step: 'end',
            data: [
                ['2021年8月27日 20时01分14秒', 333],
                ['2021年8月31日 0时32分15秒', 289],
                ['2021年9月1日 0时32分19秒', 289],
                ['2021年9月1日 22时32分26秒', 333],
                ['当前时间', 333],
            ],
        },
    ],
};
