const pieData = [
    { name: '双汇', value: '20' },
    { name: '力天', value: '30' },
    { name: '菲力', value: '10' },
    { name: 'DSS', value: '1' },
    { name: 'WZW', value: '1' },
    { name: '其他', value: '1' }
];
const rich = {
    name: {
        color: '#666',
        fontSize: 14,
        padding: 7,
        fontWeight: '400',
        align: 'left',
    },
    value: {
        color: '#333',
        fontSize: 15,
        padding: 7,
        fontWeight: '500',
        align: 'left',
    },
    percent: {
        color: '#FFF',
        align: 'right',
        fontSize: 15,
        fontWeight: '500',
    },
    hr: {
        borderColor: '#ccc',
        width: '100%',
        borderWidth: 2,
        height: 0,
    },
    cir: {
        fontSize: 26,
    },
};
option = {
    tooltip: {
        trigger: 'item',
        textStyle: {
            color: '#fff',
        },
    },
    legend: {
        orient: 'horizontal',
        left: 'center',
        bottom: 10,
    },
    series: [
        {
            type: 'pie',
            radius: ['20%', '50%'],
            center: ['50%', '40%'],
            label: {
                normal: {
                    position: 'inner',
                    formatter: (item) => `{percent|${item.percent.toFixed(0)}%}`,
                    rich,
                },
            },
            data: pieData,
        },
        {
            type: 'pie',
            silent: true, // 取消高亮
            radius: ['20%', '50%'],
            center: ['50%', '40%'],
            // z: -1,
            labelLine: {
                normal: {
                    length: 20,
                    length2: 20,
                    lineStyle: {
                        type: 'dashed',
                        width: 2,
                    },
                },
            },
            label: {
                normal: {
                    alignTo: 'edge',
                    edgeDistance: '15%',
                    formatter: (item) => `{name|${item.name}}\n{hr|}\n{value|${item.value}}`,
                    rich,
                },
            },
            data: pieData,
        },
        {
            type: 'pie',
            silent: true, // 取消高亮
            radius: ['10%', '57%'],
            center: ['50%', '40%'],
            z: -2,
            itemStyle: {
                normal: {
                    color: '#F2F9F7',
                },
            },
            label: {
                normal: {
                    show: false,
                },
            },
            labelLine: {
                normal: {
                    show: false,
                },
            },
            data: pieData,
        },
    ],
};
