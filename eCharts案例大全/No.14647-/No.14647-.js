app.title = '嵌套环形图';

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data: [ '天涯社区', '新浪新闻', '今日头条', '微博', '凤凰网']
    },
    series: [{
        name: '访问来源',
        type: 'pie',
        selectedMode: 'single',
        radius: [0, '30%'],

        label: {
            normal: {
                position: 'inner'
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: 102,
            name: '反对',
            selected: true
        }, {
            value: 58,
            name: '支持'
        }, {
            value: 140,
            name: '中立'
        }]
    }, {
        name: '访问来源',
        type: 'pie',
        radius: ['40%', '55%'],
        label: {
            normal: {
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
            }
        },
        data: [{
            value: 50,
            name: '新浪新闻'
        }, {
            value: 103,
            name: '今日头条'
        }, {
            value: 5,
            name: '天涯社区'
        }, {
            value: 137,
            name: '微博'
        }, {
            value: 5,
            name: '凤凰网'
        }, {
             }]
    }]
};