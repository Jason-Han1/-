option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    grid: {
        left: 0
    },
    legend: {
        top: 'top',
        data: ['线下门店', '线上店铺']
    },
    series: [{
            name: '订单来源',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '60%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                    value: 700,
                    name: '线下门店',
                    selected: true
                },
                {
                    value: 300,
                    name: '线上店铺'
                }
            ]
        },
        {
            name: '订单来源',
            type: 'pie',
            radius: ['100%', '100%']
        }
    ]
};
myChart.setOption(option);

function randomData() {
    return Math.round(Math.random() * 1000);
}