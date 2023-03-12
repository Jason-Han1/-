option = {
    title: {
        text: '基本流程图'
    },
    series: [{
        type: 'graph',
        layout:'force',
        //symbolSize:(value, params) => [value.length*10,20],
        symbolSize:function(value, params){
            console.log(value);
            return [value*20,30];
        },
        label: {
            normal: {
                show: true
            }
        },
        symbol:'rect',
        data: [{
            name: "开始",
            value:2
        }, {
            name: "新增任务",
            value:4
        }, {
            name: "自动",
            value:2
        }, {
            name: "是",
            value:1
        }, {
            name: "否",
            value:1
        }, {
            name: "生成批次",
            value:4
        }, {
            name: "自动模式",
            value:4
        }],
        links: [{
            source: "开始",
            target: "新增任务"
        }, {
            source: '新增任务',
            target: '自动',
            value: "朋友"
        }, {
            source: '自动',
            target: '是',
            value: "自动"
        }, {
            source: '自动',
            target: '否',
            value: "家人"
        }, {
            source: '否',
            target: '生成批次',
            value: "家人"
        }, {
            source: '是',
            target: '自动模式',
            value: "家人"
        }]
    }]
};