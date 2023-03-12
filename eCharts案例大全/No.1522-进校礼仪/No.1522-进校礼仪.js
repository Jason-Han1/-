function itemStyle(color1, color2, color3, color4) {
    return {
        borderWidth: 2,
        borderRadius: 3,
        borderColor: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
                {
                    offset: 0,
                    color: color3,
                },
                {
                    offset: 1,
                    color: color4,
                },
            ],
        },
        color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
                { offset: 0, color: color1 },
                { offset: 1, color: color2 },
            ],
            global: false,
        },
    };
}
option = {
    title: {
        text: '进校礼仪',
    },
    legend: {},
    tooltip: {
        trigger: 'axis',
    },
    xAxis: {
        type: 'category',
        splitLine: {
            show: true,
            lineStyle: {
                type: [5, 5],
                dashOffset: 5,
            },
        },
    },
    yAxis: {
        axisLine: {
            show: true,
        },
    },
    dataset: {
        source: [
            ['className', '穿着校服', '佩戴领巾', '仪容仪表', '按时到校'],
            ['六年一班', 43.3, 85.8, 93.7, 88],
            ['六年二班', 83.1, 73.4, 55.1, 77],
            ['六年三班', 86.4, 65.2, 82.5, 66],
            ['六年四班', 72.4, 53.9, 39.1, 67],
        ],
    },
    series: [
        {
            type: 'bar',
            itemStyle: itemStyle('#3E7CE3', '#1C3655', '#9BBFFA', '#3F7DE0'),
        },
        {
            type: 'bar',
            itemStyle: itemStyle('#1DBFEB', '#1C3656', '#ACEDFD', '#1FBFE9'),
        },
        {
            type: 'bar',
            itemStyle: itemStyle('#F4E244', '#40474A', '#FFF5A4', '#FFF5A4'),
        },
        {
            type: 'bar',
            itemStyle: itemStyle('#B5E68A', '#3C674B', '#F0F4C6', '#F0F4C6'),
        },
    ],
};
