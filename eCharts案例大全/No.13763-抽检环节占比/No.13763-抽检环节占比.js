option = {
    backgroundColor: '#fff',
    tooltip: {
        trigger: 'item',
        formatter: "{b}: {c} ({d}%)",
    },
    color: ['#33CC99', '#e47070', '#55b4e3', '#eab2f6', '#ccc', '#FF9966', ],
    series: [{
        name: '',
        type: 'pie',
        radius: ['0', '25%'],
        label: {
            normal: {
                formatter: '{b}\n{d}%'
            },

        },
        selectedMode: 'single',
        data: [{
                value: 2000,
                name: '生产'
            },
            {
                value: 400,
                name: '流通'
            },
            {
                value: 800,
                name: '餐饮',
            },
        ]
    }]
};