option = {
    title: {
        text: '业绩走势',
    },
    xAxis: {
        data: [
            '2021-05-17',
            '2021-05-18',
            '2021-05-19',
            '2021-05-20',
            '2021-05-21',
            '2021-05-24',
            '2021-05-25',
            '2021-05-26',
            '2021-05-27',
        ],
    },
    yAxis: {
        axisLabel: {
            fontSize: 10,
            color: '#999',
            verticalAlign: 'bottom',
            formatter: function (value, index) {
                return `${value.toFixed(2)}%`;
            },
        },
    },
    series: [
        {
            type: 'line',
            lineStyle: {
                color: '#C22F43',
                width: 1,
                type: 'solid',
            },
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 0,
                            color: 'rgba(194, 47, 67, 1.0)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(194, 47, 67, 0.03)',
                        },
                    ],
                    global: false,
                },
                origin: 'start',
            },
            opacity: 0.2,
            shadowColor: 'rgba(194, 47, 67)',
            shadowBlur: 0,
            shadowOffsetX: 0,
            data: [1.56, -1.34, 0.57, 2.34, -0.45, 0.57, 2.34, 1.2, 0.34],
        },
    ],
};
