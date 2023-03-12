option = {
    color: ['#026143', '#03734b', '#d5e8e4', '#89c3eb', '#b3b2b2', '#bed1ee'],
    toolbox: {
    feature: {
            saveAsImage: {}
    }
        },
    series: [{
        type: 'funnel',
        left: '10%',
        top: '10%',
        //x2: 80,
        bottom: '10%',
        width: '80%',
        // height: {totalHeight} - y - y2,
        gap: 2,
        max: 4510080,
        label: {
            show: true,
            position: 'inside'
        },
        data: [{
                value: 4510080,
                name: '流量'
            },
            {
                value: 2320000,
                name: '订单量'
            },
            {
                value: 777600,
                name: '成交量'
            }
            // {value: 60, name: '访问'},
            // {value: 40, name: '咨询'},
            // {value: 20, name: '订单'}
        ]
    }]
};