option = {
    series: {
        type: 'sankey',
        layout:'none',
        data: [{
            name: '首页'
        }, {
            name: '2：详情页'
        }, {
            name: '2：购买页'
        }, {
            name: '3：购买页'
        }, {
            name: '3:支付页'
        }, {
            name: '结束'
        }, {
            name: '其他'
        }],
        links: [{
            source: '首页',
            target: '2：详情页',
            value: 5
        }, {
            source: '首页',
            target: '2：购买页',
            value: 1
        }, {
            source: '2：详情页',
            target: '3:支付页',
            value: 6
        },{
            source: '2：详情页',
            target: '3：购买页',
            value: 5
        },{
            source: '2：详情页',
            target: '其他',
            value: 2
        },{
            source: '2：购买页',
            target: '结束',
            value: 1
        }, {
            source: '2：购买页',
            target: '结束',
            value: 1
        }, {
            source: '首页',
            target: '其他',
            value: 2
        },{
            source: '首页',
            target: '结束',
            value: 3
        }, {
            source: '详情页',
            target: '其他',
            value: 2
        }]
    }
};
