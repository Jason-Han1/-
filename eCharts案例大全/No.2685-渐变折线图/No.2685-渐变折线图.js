option = {
    xAxis: {
        type: 'category',
        boundaryGap: true,
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,0.3)',
            },
        },
        axisLabel: {
            color: 'rgba(255,255,255,0.7)',
        },
        axisTick: {
            alignWithLabel: true,
        },
    },
    yAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,0.7)',
            },
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(255,255,255,0.3)', // 分割线颜色
            },
        },
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '13%',
        containLabel: true,
    },
    series: [
        {
            type: 'line',
            color: '#00f2f1', //折线颜色
            smooth: true, //折线是否带有弧度
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgba(41,244,236,1)',
                    },
                    {
                        offset: 1,
                        color: 'rgba(41,244,236,0.1)',
                    },
                ]),
            },
        },
    ],
    dataset: {
        source: [
            {
                date: '07-01',
                orderAmt: 90.05,
                orderNum: 546,
            },
            {
                date: '07-02',
                orderAmt: 89,
                orderNum: 492,
            },
            {
                date: '07-03',
                orderAmt: 69.92,
                orderNum: 437,
            },
            {
                date: '07-04',
                orderAmt: 73.57,
                orderNum: 422,
            },
            {
                date: '07-05',
                orderAmt: 84.88,
                orderNum: 480,
            },
            {
                date: '07-06',
                orderAmt: 86.68,
                orderNum: 492,
            },
            {
                date: '07-07',
                orderAmt: 73.89,
                orderNum: 480,
            },
            {
                date: '07-08',
                orderAmt: 81.6,
                orderNum: 477,
            },
            {
                date: '07-09',
                orderAmt: 82.36,
                orderNum: 496,
            },
            {
                date: '07-10',
                orderAmt: 69.9,
                orderNum: 484,
            },
            {
                date: '07-11',
                orderAmt: 70.4,
                orderNum: 399,
            },
            {
                date: '07-12',
                orderAmt: 70.55,
                orderNum: 440,
            },
            {
                date: '07-13',
                orderAmt: 78.17,
                orderNum: 481,
            },
            {
                date: '07-14',
                orderAmt: 67.37,
                orderNum: 411,
            },
        ],
    },
};
