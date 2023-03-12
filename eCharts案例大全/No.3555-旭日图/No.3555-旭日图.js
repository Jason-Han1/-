var data = [
    {
        name: '正教授',
        children: [
            {
                name: '一级正教授',
                value: 10,
            },
            {
                name: '二级正教授',
                value: 20,
            },
            {
                name: '三级正教授',
                value: 15,
            },
            {
                name: '四级正教授',
                value: 8,
            },
        ],
    },
    {
        name: '副教授',
        children: [
            {
                name: '一级正教授',
                value: 10,
            },{
                name: '二级正教授',
                value: 20,
            },
            {
                name: '三级正教授',
                value: 15,
            },
        ],
    },
];

option = {
    series: {
        type: 'sunburst',
        data: data,
        radius: [60, '90%'],
        borderWidth: 2,
        // itemStyle: {
        //     borderRadius: 7,
        //     borderWidth: 2,
        // },
        label: {
            show: true
        },
    },
};
