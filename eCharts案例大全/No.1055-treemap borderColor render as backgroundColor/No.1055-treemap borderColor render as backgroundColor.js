option = {
    series: {
        type: 'treemap',
        itemStyle: {
            color: 'rgba(109, 40, 40, 1)',
            borderWidth: 2,
            borderColor: 'rgba(255, 255, 0, 0)',
        },
        data: [
            {
                name: '通州区',
                value: 800,
                itemStyle: {
                    color: 'rgba(255,0, 0, 0.5)',
                    borderWidth: 10,
                    borderColor: 'rgba(0,255,0,1)',
                },
            },
            {
                name: '顺义区',
                value: 1000,
            },
            {
                name: '海淀区',
                value: 100,
            },
            {
                name: '丰台区',
                value: 700,
            },
            {
                name: '朝阳区',
                value: 200,
            },
        ],
    },
    type: 'basicTreemap',
};
