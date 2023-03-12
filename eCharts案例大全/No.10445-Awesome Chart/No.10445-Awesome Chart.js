app.title = '嵌套环形图';

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['直达','营销广告','搜索引擎','邮件营销','联盟广告','视频广告','百度','谷歌','必应','其他']
    },
    series: [
        {
            name:'访问来源',
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
                {value:679, name:'已开瓶',selected:true},
                {value:1548, name:'未知'}
            ]
        },
        {
            name:'比例',
            type:'pie',
            radius: ['40%', '55%'],
            label: {
                normal: {
                    formatter: '{a|{b}}{abg|}\n{hr|}\n  {c|{c}}吨  {per|{d}%}  ',
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
                            fontSize: 16,
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
                            fontSize: 22,
                            lineHeight: 33
                        },
                        c: {
                            fontSize: 26,
                            lineHeight: 33
                        },
                      
                        per: {
                            color: '#eee',
                            backgroundColor: '#334455',
                            padding: [2, 8],
                            fontSize: 22,
                            borderRadius: 4
                        }
                    }
                }
            },
            data:[
                {value:335, name:'企业在库'},
                {value:310, name:'经销商在库'},
                {value:234, name:'终端在库'},
                {value:1350, name:'已销售'},
                {value:10, name:'未知'}
             
            ]
        }
    ]
};