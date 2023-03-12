option = {
    title: {
        text: '前十大债券占比图'
    },
    tooltip:{},
    color:['#ff7632','#ff5f20'],
    series: [
        {
            type: 'pie',
            data: [
                {
                    name: '前十大债券',
                    value: 60,
                },
                {
                    name: '其他债券',
                    value: 40,
                },
            ],
            label: {
                position: 'inside',  
            },
            radius: [0, 120],
            itemStyle: {
                borderWidth: 2,
                borderColor: '#FFFFFF',
            },
            clockwise: true,
            animation: false,
        },
        {
            type: 'pie',
            color:['#7a26d0','#0f3ee4','#337cfa','#ff5f20'],
            data: [
                {
                    name: '电投',
                    value: 20,
                },
                {
                    name: '富力',
                    value: 20,
                },
                {
                    name: '首创',
                    value: 20,
                },
                {
                    name: '其他',
                    value: 40,
                }
                
                
            ],
            label: {
                position: 'inside',
            },
            radius: [121, 180],
            itemStyle: {
                borderWidth:2,
                borderColor: '#FFFFFF',
            },
            animation: false,
        },
    ],
    backgroundColor: '#FFFFFF',
};