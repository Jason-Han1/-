option = {
    title: {
        text: '基础饼图',
        textStyle: {
            color: 'red',
            fontWeight: 'bold'
        },
        subtext: '仅供参考',
        subtextStyle: {
            color: '#aaa',
            fontStyle: 'italic'
        },
        left: 'center',
    },
    tooltip: {},
    series: [{
        type: 'pie',
        name: '一周消费占比',
        data: [{
                name: '周一',
                value: 220
            },
            {
                name: '周二',
                value: 182
            },
            {
                name: '周三',
                value: 191
            },
            {
                name: '周四',
                value: 234
            },
            {
                name: '周五',
                value: 290
            },
            {
                name: '周六',
                value: 330
            },
            {
                name: '周日',
                value: 310
            },
        ]
    }]
};