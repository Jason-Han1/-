option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 10,
        data: ['闭店期', '计划期', '开办期', '营业期', '装修期']
    },
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
            show: false,
            position: 'center'
        },
        emphasis: {
            label: {
                show: true,
                fontSize: '30',
                fontWeight: 'bold'
            }
        },
        labelLine: {
            show: false
        },
        data: [{
                value: 15,
                name: '闭店期'
            },
            {
                value: 110,
                name: '计划期'
            },
            {
                value: 114,
                name: '开办期'
            },
            {
                value: 900,
                name: '营业期'
            },
            {
                value: 48,
                name: '装修期'
            }
        ]
    }]
};