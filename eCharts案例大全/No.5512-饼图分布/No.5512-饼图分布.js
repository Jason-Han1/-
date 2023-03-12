const title = '总量';
let total = 0;
const seriesData = [{
        value: 120,
        name: 'Ⅰ级'
    },
    {
        value: 100,
        name: 'Ⅱ级'
    },
    {
        value: 300,
        name: 'Ⅲ级'
    },
];
seriesData.forEach((item) => {
    total += item.value;
});

option = {
    legend: {
        right: 0,
        orient: 'vertical',
        bottom: 'center',
    },
    title: [{
        text: `{name|${title}}\n{val|${total}}`,
        top: 'center',
        left: 'center',
        textStyle: {
            rich: {
                name: {
                    fontSize: 14,
                    fontWeight: 'normal',
                    color: '#666666',
                    padding: [10, 0],
                },
                val: {
                    fontSize: 28,
                    fontWeight: 'bold',
                    color: '#000',
                },
            },
        },
    }],
    series: [{
        type: 'pie',
        radius: ['50%', '70%'],
        data: seriesData,
        labelLine: {
            length: 20,
            length2: 100,
        },
        label: {
            formatter: (params) => (
                `{icon|●}{name|${params.name}}{value|${params.value}}`
            ),
            padding: [0, -100, 25, -100],
            rich: {
                icon: {
                    fontSize: 14,
                },
                name: {
                    fontSize: 14,
                    padding: [0, 10, 0, 4],
                    color: '#999',
                },
                value: {
                    fontSize: 16,
                    color: '#000',
                },
            },
        },
    }, ],
};