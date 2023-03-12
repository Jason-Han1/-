option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        feature: {
            dataView: {
                readOnly: false
            },
            restore: {},
            saveAsImage: {}
        }
    },
    legend: {
        data: ['首页', '产品页', '产品详情页', '下单页', '订单页']
    },
    calculable: true,
    series: [{
        name: '转化率',
        type: 'funnel',
        left: '10%',
        top: 60,
        bottom: 60,
        width: '80%',
        min: 0,
        max: 100,
        minSize: '0%',
        maxSize: '100%',
        sort: 'descending',
        gap: 2,
        label: {
            formatter: '{b} {c}%',
            fontSize:12
        },
        labelLine: {
            length: 10,
            lineStyle: {
                width: 1,
                type: 'solid'
            }
        },
        itemStyle: {
            borderColor: '#fff',
            borderWidth: 1
        },
        emphasis: {
            label: {
                fontSize: 13
            }
        },
        data: [{
                value: 90,
                name: '首页'
            },{
                value: 70,
                name: '产品页'
            },{
                value: 50,
                name: '产品详情页'
            },
            {
                value: 10,
                name: '下单页'
            },{
                value: 5,
                name: '订单页'
            }
        ]
    }]
};