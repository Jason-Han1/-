option = {
     tooltip : {
        trigger: 'item',
        formatter: "{b} :{c}"
        
    },
    series: {
        type: 'sankey',
        layout:'none',
        data: [{
            name: '2：店铺页'
        }, {
            name: '2：详情页'
        }, {
            name: '1：首页'
        }, {
            name: '3：详情页'
        },  {
            name: '4：购买页'
        }, {
            name: '4：支付页'
        }, {
            name: '1：详情页'
        },  
        {
            name: '5:购买成功页'
        },
        {
            name: '5：其他'
        }, {
            name: '结束'
        }],
        links: [
            {
            source: '2：店铺页',
            target: '3：详情页',
            value: 2
        }, {
            source: '1：首页',
            target: '2：详情页',
            value: 8
        }, {
            source: '2：详情页',
            target: '3：详情页',
            value: 8
        },{
            source: '1：首页',
            target: '2：店铺页',
            value: 1
        },  {
            source: '1：详情页',
            target: '2：店铺页',
            value: 1
        }, {
            source: '3：详情页',
            target: '4：购买页',
            value: 4
        },{
            source: '3：详情页',
            target: '结束',
            value: 1
        }, {
            source: '3：详情页',
            target: '4：支付页',
            value: 3
        },{
            source: '4：购买页',
            target: '5:购买成功页',
            value: 5
        },{
            source: '4：支付页',
            target: '5:购买成功页',
            value: 2
        },{
            source: '4：支付页',
            target: '结束',
            value: 1
        }, {
            source: '3:支付页',
            target: '首页',
            value: 1
        },{
            source: '3：详情页',
            target: '5：其他',
            value: 2
        }]
    }
};
