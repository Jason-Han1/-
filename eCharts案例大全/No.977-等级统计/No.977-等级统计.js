const list = [
    {
        name: '低',
        value: 57,
    },
    {
        name: '中',
        value: 103,
    },
    {
        name: '高',
        value: 147,
    },
];

option = {
    backgroundColor: '#031d33',
    // color:['red','yellow','blue'],
    tooltip: {
        show: true,
    },
    series: [
        {
            type: 'pie',
            radius: '80%',
            center: ['50%', '50%'],
            itemStyle: {
                normal: {
                    borderWidth: 5,
                    borderColor: '#003359',
                },
            },
            label: {
                show: true,
                position: 'inside',
                align: 'center',
                verticalAlign: 'middle',
                formatter(params) {
                    console.log('label params', params);
                    // return params.value;
                    return `{name|${params.name}}\n {value|${params.value}}`;
                },
                rich: {
                    name: {
                        fontSize: 20,
                    },
                    value: {
                        fontSize: 30,
                        lineHeight:40
                    },
                },
            },
            data: list,
            labelLine: {
                show: false,
            },
        },
    ],
};
