let chartData = [
    {
        value: 0.06,
        name: '1000万以上',
    },
    {
        value: 1,
        name: '1000万以下',
    },
    {
        value: 6.9,
        name: '500万以下',
    },
    {
        value: 44.7,
        name: '100万以下',
    },
    {
        value: 46.69,
        name: '50万以下',
    },
    {
        value: 0.53,
        name: '10万以下',
    },
];
option = {
    backgroundColor: '#031845',
    tooltip: {
        trigger: 'item',
        formatter: '{b} : {d}% <br/> {c}',
    },

    legend: {
        orient: 'vertical',
        icon: 'circle',
        y: 'center',
        x: 10,
        textStyle: {
            color: '#AEC9F9',
        },
        itemWidth:10,
        itemHeight:10,
        data: chartData.map((i) => i.name),
    },
    series: [
        {
            type: 'pie',
            radius: '50%',
            center: ['50%', '50%'],
            color: ['#FB7B8C', '#9ACB5D', '#FFCE26', '#0066ED', '#0CFDFE', '#FFFFFF'],
            data: chartData,
            labelLine: {
                normal: {
                    show: true,
                    length: 20,
                    length2: 40,
                    lineStyle: {
                        color: '#AEC9F9',
                        width: 1,
                    },
                },
            },
            label: {
                normal: {
                    formatter: '{c|{b}}\n{d|{d}%}',
                    rich: {
                        c: {
                            fontSize: 12,
                            color: '#AEC9F9',
                            align: 'left',
                        },
                        d: {
                            fontSize: 12,
                            color: '#fff',
                            align: 'left',
                        },
                    },
                },
            },
        },
    ],
};
