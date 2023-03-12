// 颜色
let colorList = [
    'rgba(0, 179, 255, 1)',
    'rgba(24, 248, 239, 1)',
    'rgba(2, 226, 166, 1)',
    'rgba(246, 247, 102, 1)',
    'rgba(181, 55, 233, 1)',
    'rgba(255, 105, 122, 1)',
];

let colorList1 = [
    'rgba(0, 179, 255, 0.3)',
    'rgba(24, 248, 239, 0.3)',
    'rgba(2, 226, 166, 0.3)',
    'rgba(246, 247, 102, 0.3)',
    'rgba(181, 55, 233, 0.3)',
    'rgba(255, 105, 122, 0.3)',
];
let seriesOption = [
    {
        name: 'small',
        type: 'pie',
        radius: ['48%', '80%'],
        center: ['50%', '50%'],
        color: colorList1,
        zlevel: 2,
        hoverAnimation: false,
        label: {
            show: false,
        },
        itemStyle: {
            borderWidth: 2,
            borderColor: 'rgb(4, 24, 55, .6)',
        },
        labelLine: {
            show: false,
        },
        data: [10, 24, 68, 8, 55, 35],
    },
    {
        name: 'big',
        type: 'pie',
        radius: ['65%', '80%'],
        center: ['50%', '50%'],
        color: colorList,
        zlevel: 3,
        label: {
            show: false,
            position: 'center',
        },
        labelLine: {
            show: false,
        },
        itemStyle: {
            borderWidth: 2,
            borderColor: 'rgb(4, 24, 55, .6)',
        },
        data: [
            {
                name: '名称1',
                value: 10,
                itemStyle: {
                    normal: {
                        color: 'rgba(0, 179, 255, 1)',
                    },
                },
            },
            {
                name: '名称2',
                value: 24,
                itemStyle: {
                    normal: {
                        color: 'rgba(24, 248, 239, 1)',
                    },
                },
            },
            {
                name: '名称3',
                value: 68,
                itemStyle: {
                    normal: {
                        color: 'rgba(2, 226, 166, 1)',
                    },
                },
            },
            {
                name: '名称4',
                value: 8,
                itemStyle: {
                    normal: {
                        color: 'rgba(246, 247, 102, 1)',
                    },
                },
            },
            {
                name: '名称5',
                value: 55,
                itemStyle: {
                    normal: {
                        color: 'rgba(181, 55, 233, 1)',
                    },
                },
            },
            {
                name: '名称6',
                value: 35,
                itemStyle: {
                    normal: {
                        color: 'rgba(255, 105, 122, 1)',
                    },
                },
            },
        ],
    },
];

option = {
    backgroundColor: '#041837',
    title: {
        show: false,
    },
    tooltip: {
        show: false,
    },
    series: seriesOption,
};
