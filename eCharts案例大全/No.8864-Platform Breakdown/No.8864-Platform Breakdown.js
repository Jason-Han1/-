option = {
    title: {
        text: 'Platform Breakdown',
        subtext: 'Sample Data for Demostration',
        left: 'left'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 'right',
        data: ['OG', 'AG', 'AB', 'PT', 'XX']
    },
    series: [
        {
            name: 'Platform Breakdown',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                {value: 335, name: 'OG'},
                {value: 310, name: 'AG'},
                {value: 234, name: 'AB'},
                {value: 135, name: 'PT'},
                {value: 1548, name: 'XX'}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};