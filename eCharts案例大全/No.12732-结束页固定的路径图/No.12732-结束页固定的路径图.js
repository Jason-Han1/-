option = {
     tooltip : {
        trigger: 'item',
        formatter: "{b} :{c}"
        
    },
    series: {
        type: 'sankey',
        layout:'none',
        data: [{
            name: '1：店铺页'
        }, {
            name: '1：详情页'
        }, {
            name: '首页'
        }, {
            name: '2：详情页'
        }, {
            name: '2：购买页'
        }, {
            name: '3：购买页'
        }, {
            name: '3:支付页'
        },  {
            name: '其他'
        }],
        links: [
            {
            source: '1：店铺页',
            target: '2：详情页',
            value: 12
        }, {
            source: '1：详情页',
            target: '2：购买页',
            value: 5
        }, {
            source: '2：详情页',
            target: '首页',
            value: 1
        }, {
            source: '2：购买页',
            target: '首页',
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
            source: '3：购买页',
            target: '首页',
            value: 1
        }, {
            source: '3:支付页',
            target: '首页',
            value: 1
        },{
            source: '其他',
            target: '首页',
            value: 2
        }]
    }
};
