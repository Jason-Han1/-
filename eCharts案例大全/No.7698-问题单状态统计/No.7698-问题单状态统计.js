option = {
    tooltip: {
        title:'问题单状态统计',
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },

    series: [
        {
            name: '问题单状态',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                formatter:'{b} {c}%',
                position: 'inner'
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 21, name: '处理中', selected: true},
                {value: 23, name: '已关闭'}
            ]
        },
        {
            name: '问题单状态',
            type: 'pie',
            radius: ['40%', '55%'],
            label: {
                formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                backgroundColor: '#eee',
                borderColor: '#aaa',
                borderWidth: 1,
                borderRadius: 4,
                // shadowBlur:3,
                // shadowOffsetX: 2,
                // shadowOffsetY: 2,
                // shadowColor: '#999',
                // padding: [0, 7],
                rich: {
                    a: {
                        color: '#999',
                        lineHeight: 22,
                        align: 'center'
                    },
                    // abg: {
                    //     backgroundColor: '#333',
                    //     width: '100%',
                    //     align: 'right',
                    //     height: 22,
                    //     borderRadius: [4, 4, 0, 0]
                    // },
                    hr: {
                        borderColor: '#aaa',
                        width: '100%',
                        borderWidth: 0.5,
                        height: 0
                    },
                    b: {
                        fontSize: 16,
                        lineHeight: 33
                    },
                    per: {
                        color: '#eee',
                        backgroundColor: '#334455',
                        padding: [2, 4],
                        borderRadius: 2
                    }
                }
            },
            data: [
                {value: 8, name: '新增'},
                {value: 5, name: '流转中'},
                {value: 6, name: '已超时'},
                {value: 2, name: '未转待验证'},
                {value: 4, name: '已关闭'},
                {value: 5, name: '已解决'},
                {value: 12, name: '已投产'},
                {value: 2, name: '作废'}
            ]
        }
    ]
};