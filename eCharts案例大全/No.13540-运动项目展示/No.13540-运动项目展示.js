var data = [{
    name: '老年人训练',
    children: [{
        name: '平衡训练',
        value: 12,
        children: [{
            name: '单腿站立',
            value: 2
        }, {
            name: '时钟练习',
            value: 1
        }, {
            name: '错步练习',
            value: 1
        },{
            name: '障碍行走',
            value: 2,
            children: [{
                name: '进阶练习1',
                value: 1
            }, {
                name: '进阶练习2',
                value: 1
            }]
        }, {
            name: '同侧抬起',
            value: 1
        },{
            name:'身体画圆',
            value:1
        },{
            name:'高抬腿',
            value:1
        },{
            name: '侧走练习',
            value: 1
        }],
    }, {
        name: '反应力训练',
        value: 2,
       
    }]
}, {
    name: '儿童训练',
    children: [{
        name: '摸高练习',
        children: [{
            name: '原地摸高',
            value: 2
        }, {
            name: '助跑摸高',
            value: 1
        }]
    }, {
        name: '立定跳远',
        value: 1
    }]

}, {
    name: '成人训练',
    children: [{
        name: '男子训练',
        value: 10,
        children: [{
            name: '跑步运动',
            value: 1
        }, {
            name: '力量运动',
            value: 3
        }, {
            name: '专业训练',
            value: 2
        }, {
            name: '保健运动',
            value: 1
        }, {
            name: '其他运动',
            value: 2
        }]
    }, {
        name: '女子训练',
        value: 4,
        children: [{
            name: '塑型,减肥运动',
            value: 2
        }, {
            name: '保健运动',
            value: 1
        }, {
            name: '其他运动',
            value: 1
        }]

    }]
}];

option = {
    title: {
        text: '运动项目展示',
        x: 'center',
        textStyle:{
            fontSize:'30'
        }
        
    },
    series: {
        type: 'sunburst',
        // highlightPolicy: 'ancestor',
        data: data,
        radius: [0, '90%'],
        label: {
            rotate: 'radial'
        },
        nodeClick:'rootToNode',//点击节点后数据下钻
    }
};
