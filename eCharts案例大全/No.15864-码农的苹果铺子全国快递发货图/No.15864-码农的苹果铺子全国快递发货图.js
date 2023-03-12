option = {
    title: {
        text: '省份分析',
        left: 'center'
    },
    visualMap: {
        type: 'piecewise',
        splitNumber: 4,
        pieces: [
            {
                value: 1,
                label: 'TOP 5',
                color: 'blue'
            }, {
                value: 2,
                label: '5-10',
                color: '#4169E1'
            }, {
                value: 3,
                label: '10-20',
                color: 'lightskyblue'
            }, {
                value: 4,
                label: '20+',
                color: 'gray'
            }

        ],
        min: 1,
        max: 5,
        //单多选
        selectedMode: 'multiple',
        inverse: true,
        //宽高
        itemWidth : 40,
        itemHeight: 20,
        //两端文本
        text: ['   ', '排名   '],
        showLabel: true,
        show: true,
        left: 'right',
        top: 'center',
        padding: 10,
    },
    tooltip: {
        trigger: 'item',
        //点击触发
        triggerOn: 'click',
        formatter: '{b} 关注总人数: {c}'
    },
    series: [{
        type: 'map',
        name: '省份分析',
        //需要提前引入china.js
        map: 'china',
        //单多选 默认false
        selectedMode: false,
        label: {
            normal: {
                show: true
            },
            //默认false
            emphasis: {
                show: false
            }
        },
        //数据
        data: [{
            name: '新疆',
            value: [260,280,3,4]
        },{
            name: '西藏',
            value: [260,280,3,4]
        }]
        
    }]
};