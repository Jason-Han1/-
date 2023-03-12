option = {
    color: ['#2c8cff', '#1bb0ff', '#6dc7ff', '#8bd2ff'],
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    series: [{
        name: '消费能力',
        type: 'pie',
        radius: ['40%', '55%'],
        avoidLabelOverlap: true,
        itemStyle: {
            normal: {
                borderColor: '#FFFFFF',
                borderWidth: 2
            }
        },
        label: {
            normal: {
                show: true,
                formatter: '{b}\n{d}%',
                textStyle: {
                    fontSize: 14,
                    color: '#004da1'
                },
            },
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: '20',
                },
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            name: '高',
            value: '20'
        },{
            name: '中',
            value: '40'
        },{
            name: '低',
            value: '10'
        }]
    }]
};