option = {
    backgroundColor: '#fff',
    legend: {
        orient: 'vertical',
        left: '70%',
        top: 'center',
        icon: 'rect',
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 15
    },
    color: ['#00b0f0', '#0070c0', '#00b050', '#ffff00', '#70ad47', '#ff0000'],
    "series": [{
        type: 'pie',
        center: ['40%', '50%'],
        radius: '50%',
        label: {
            show: false
        },
        data: [{
                name: 'Ⅰ类',
                value: '20'
            },
            {
                name: 'Ⅱ类',
                value: '10'
            },
            {
                name: 'Ⅲ类',
                value: '10'
            },
            {
                name: 'Ⅳ类',
                value: '20'
            },
            {
                name: 'Ⅴ类',
                value: '10'
            },
            {
                name: '劣Ⅴ类',
                value: '30'
            }
        ]
    },
    {
        type: 'pie',
        center: ['40%', '50%'],
        radius: '70%',
        label: {
            position: 'inside',
            formatter: '{b}{c}%',
            color: '#000',
            fontSize: 14
        },
        data: [{
                name: 'Ⅰ类',
                value: '20',
                itemStyle: {
                    color: 'rgba(0,0,0,0)'
                }
            },
            {
                name: 'Ⅱ类',
                value: '10',
                itemStyle: {
                    color: 'rgba(0,0,0,0)'
                }
            },
            {
                name: 'Ⅲ类',
                value: '10',
                itemStyle: {
                    color: 'rgba(0,0,0,0)'
                }
            },
            {
                name: 'Ⅳ类',
                value: '20',
                itemStyle: {
                    color: 'rgba(0,0,0,0)'
                }
            },
            {
                name: 'Ⅴ类',
                value: '10',
                itemStyle: {
                    color: 'rgba(0,0,0,0)'
                }
            },
            {
                name: '劣Ⅴ类',
                value: '30',
                itemStyle: {
                    color: 'rgba(0,0,0,0)'
                }
            }
        ]
    }]
}