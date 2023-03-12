let colors = ['#66FFFF', '#FC5A5A', '#00EA9C', '#F3D74A', '#4F9EFD', '#FF923F', '#7662D6'];
option = {
    title: {
        text: '折线图背景区域等级划分',
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    },
    yAxis: {},
    series: [
        {
            type: 'line',
            markArea: {
                silent: true,
                data: [
                    [
                        {
                            name: '11111',
                            yAxis: 0,
                            itemStyle: {
                                color: colors[0],
                            },
                            label: {
                                position: 'insideLeft',
                            },
                        },
                        {
                            yAxis: 50,
                        },
                    ],
                    [
                        {
                            name: '222222',
                            yAxis: 50,
                            itemStyle: {
                                color: colors[1],
                            },
                            label: {
                                position: 'insideLeft',
                            },
                        },
                        {
                            yAxis: 100,
                        },
                    ],
                    [
                        {
                            name: '33333333',
                            yAxis: 100,
                            itemStyle: {
                                color: colors[2],
                            },
                            label: {
                                position: 'insideLeft',
                            },
                        },
                        {
                            yAxis: 150,
                        },
                    ],
                    [
                        {
                            name: '4444444',
                            yAxis: 150,
                            itemStyle: {
                                color: colors[3],
                            },
                            label: {
                                position: 'insideLeft',
                            },
                        },
                        {
                            yAxis: 200,
                        },
                    ],
                    [
                        {
                            name: '5555555',
                            yAxis: 200,
                            itemStyle: {
                                color: colors[4],
                            },
                            label: {
                                position: 'insideLeft',
                            },
                        },
                        {
                            yAxis: 250,
                        },
                    ],
                ],
            },
            data: [20, 82, 191, 234, 190, 130, 110],
        },
    ],
};
