var dataList = [
    { name: '已入驻', value: 10 },
    { name: '未入驻', value: 60 },
];
var option = {
    tooltip: {
        show: false,
        trigger: 'item',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        borderWidth: '1',
        borderColor: 'rgba(0, 0, 0, 0.6)',
        confine: true,
        textStyle: {
            color: '#ffffff',
            fontSize: 20,
        },
        formatter: '{b}: {c} ({d}%)',
    },
    legend: {
        show: false,
    },
    calculable: true,
    series: [
        {
            name: '已入驻',
            type: 'pie',
            radius: ['50%', '65%'],
            center: ['50%', '50%'],
            data: [
                {
                    value: dataList[0].value,
                    name: dataList[0].name,
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                            {
                                offset: 0,
                                color: '#0A38CB',
                            },
                            {
                                offset: 1,
                                color: '#08FFCD',
                            },
                        ]),
                    },
                    labelLine: {
                        normal: {
                            length: 0,
                            length2: 0,
                        },
                    },
                    label: {
                        normal: {
                            position: 'inner',
                            formatter: (params) => {
                                return '{name|' + params.name + '}{icon|:}{value|' + params.value + '}';
                            },
                            rich: {
                                icon: {
                                    fontSize: 20,
                                    color: '#fff',
                                    padding: [0, 0, 0, 0],
                                },
                                name: {
                                    fontSize: 20,
                                    color: '#fff',
                                },
                                value: {
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                    color: '#ffffff',
                                },
                            },
                        },
                    },
                },
                {
                    value: dataList[1].value,
                    name: dataList[1].name,
                    itemStyle: {
                        color: 'transparent',
                    },
                    label: {
                        show: false,
                    },
                },
            ],
        },
        {
            name: '未入驻',
            type: 'pie',
            radius: ['55%', '60%'],
            center: ['50%', '50%'],
            data: [
                {
                    value: dataList[0].value,
                    name: dataList[0].name,
                    itemStyle: {
                        color: 'transparent',
                    },
                    label: {
                        show: false,
                    },
                },
                {
                    value: dataList[1].value,
                    name: dataList[1].name,
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                            {
                                offset: 0,
                                color: '#3BCB0A',
                            },
                            {
                                offset: 1,
                                color: '#3BCB0A',
                            },
                        ]),
                    },
                    labelLine: {
                        normal: {
                            length: 20,
                            length2: 0,
                        },
                    },
                    label: {
                        normal: {
                            position: 'inner',
                            formatter: (params) => {
                                return '{name|' + params.name + '}{icon|:}{value|' + params.value + '}';
                            },
                            rich: {
                                icon: {
                                    fontSize: 20,
                                    color: '#fff',
                                },
                                name: {
                                    fontSize: 20,
                                    color: '#fff',
                                },
                                value: {
                                    fontSize: 20,
                                    color: '#ffffff',
                                },
                            },
                        },
                    },
                },
            ],
        },
    ],
};
