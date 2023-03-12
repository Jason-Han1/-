option = {
    backgroundColor: '#000000',
    tooltip: {
        show: true,
    },
    title: {
        show: false,
    },
    legend: {
        show: false,
    },
    series: [
        {
            type: 'pie',
            name: '',
            radius: ['30%', '65%'],
            // center: ['50%', '50%'],
            hoverAnimation: true,
            label: {
                normal: {
                    show: true,
                    formatter: '{title|{b}}\n{title|{c}件,{d}%}',
                    rich: {
                        title: {
                            // color: '#FFFFFF',
                            padding: [3, -70],
                        },
                    },
                },
                emphasis: {
                    show: true,
                },
            },
            labelLine: {
                length: 10,
                length2: 100,
            },
            data: [
                { name: '公司1', value: 100 },
                { name: '公司2', value: 100 },
                { name: '公司3', value: 100 },
                { name: '公司4', value: 100 },
            ],
        },
    ],
};
