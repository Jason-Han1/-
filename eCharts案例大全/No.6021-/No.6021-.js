option = {
        
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            // left: 'left',
            right: 15,
            bottom: 30,
            itemWidth: 14,
            data: ['寄递行业', '服装', '餐饮 ', '建材'],
            textStyle: {
                color: 'rgba(132, 214, 255, 1)',
            },
        },
        series: [
            {
                name: '',
                type: 'pie',
                radius: '80%',
                center: ['40%', '50%'],
                data: [
                    { value: 335, name: '寄递行业' },
                    { value: 310, name: '服装' },
                    { value: 234, name: '餐饮 ' },
                    { value: 135, name: '建材' },
                ],
                label: {
                    formatter: '{c}件\n{d}%',
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                color: ['rgba(240, 232, 136, 1)', 'rgba(36, 205, 220, 1)', 'rgba(75, 106, 217, 1)','rgba(242, 100, 99, 1)'],
            }
        ]
    }