option = {
    color: ['#7bca61', '#66cf9b', '#68d1da', '#61c1e6', '#7c9de7', '#f4cb4d'],
    series: [{
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            clockwise: false,
            center: ['50%', '50%'],
            data: [{
                    value: 5,
                    name: '类型1'
                },
                {
                    value: 8,
                    name: '类型2'
                },
                {
                    value: 6,
                    name: '类型3'
                },
                {
                    value: 4,
                    name: '类型6'
                },
                {
                    value: 5,
                    name: '类型5'
                },
                {
                    value: 7,
                    name: '类型4'
                }
            ],
        },
        {
            color: '#000',
            type: 'pie',
            radius: ['57%', '58%'],
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                    value: 5,
                    name: ''
                }

            ]
        }
    ]
};