option = {
    title: {
        text: '性别统计',
        subtext: '纯属虚构',
        x: 'right'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['本科男', '本科女', '硕士男', '硕士女', '大专男', '大专女', '博士男', '博士女']
    },
    series: [{
            name: '硕士',
            type: 'pie',
            radius: '35%',
            center: ['25%', '30%'],
            data: [{
                    value: 250,
                    name: '硕士男'
                },
                {
                    value: 150,
                    name: '硕士女'
                }
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        },
        {
            name: '本科',
            type: 'pie',
            radius: '35%',
            center: ['70%', '30%'],
            data: [{
                    value: 500,
                    name: '本科男'
                },
                {
                    value: 300,
                    name: '本科女'
                }
            ]
        },
        {
            name: '大专',
            type: 'pie',
            radius: '35%',
            center: ['70%', '70%'],
            data: [{
                    value: 500,
                    name: '大专男'
                },
                {
                    value: 300,
                    name: '大专女'
                }
            ]
        },
        {
            name: '博士',
            type: 'pie',
            radius: '35%',
            center: ['25%', '70%'],
            data: [{
                    value: 500,
                    name: '博士男'
                },
                {
                    value: 300,
                    name: '博士女'
                }
            ]
        }
    ]

};