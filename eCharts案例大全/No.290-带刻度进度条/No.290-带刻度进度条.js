option = {
    grid: {
        height: 20,
    },
    xAxis: [
        {
            type: 'category',
            data: [
                '0-60 较差',
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                '60-80 中等',
                14,
                15,
                16,
                '80-100 优良',
                18,
                19,
                20,
                100,
            ],
            boundaryGap: false,
            axisLine: {
                z: 100,
                lineStyle: {
                    width: 10,
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#f00', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#0f0', // 100% 处的颜色
                            },
                        ],
                        global: false, // 缺省为 false
                    },
                },
            },
            axisTick: { show: false },
            axisLabel: {
                color: 'gray',
                align: 'left',
                interval: 0,
                formatter: (v) => (v.includes('-') ? v : ''),
            },
        },
    ],
    yAxis: [
        {
            type: 'value',
            show: false,
        },
    ],
    series: [
        {
            name: '1',
            stack: '1',
            type: 'bar',
            data: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            itemStyle: {
                color: 'transparent',
            },
        },
        {
            name: '2',
            type: 'bar',
            stack: '1',
            data: [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 3, 1, 1, 1, 3],
            itemStyle: {
                borderRadius: 20,
            },
            color: 'gray',
            label: {
                formatter: (e) => {
                    return e.data === 3 ? e.dataIndex * 5 : '';
                },
                color: 'gray',
                position: 'top',
                fontSize: 12,
                offset: [0, 0],
                show: true,
            },
            barWidth: 2,
        },
        {
            name: '3',
            type: 'bar',
            stack: '1',
            data: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
            itemStyle: {
                color: 'transparent',
            },
        },
    ],
};
