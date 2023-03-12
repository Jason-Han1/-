app.title = '嵌套环形图';

option ={
    title : {
        text: '某站点用户访问来源',
        subtext: '你猜是不是真的',
        x:'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'right',
        data:['虎扑','天涯论坛','微博','邮件营销','微信公众号','双十一','百度','谷歌','必应','其他']
    },
    series: [
        {
            name:'微博',
            type:'pie',
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
            data:[
                {value:335, name:'虎扑', selected:true},
                {value:679, name:'天涯论坛'},
                {value:1548, name:'搜索引擎'}
            ]
        },
        {
            name:'微博',
            type:'pie',
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
            data:[
                {value:335, name:'虎扑'},
                {value:310, name:'邮件营销'},
                {value:234, name:'微信公众号'},
                {value:135, name:'双十一'},
                {value:1048, name:'百度'},
                {value:251, name:'谷歌'},
                {value:147, name:'知乎'},
                {value:102, name:'其他'}
            ]
        }
    ]
};