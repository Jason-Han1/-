app.title = '嵌套环形图';

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['VISTA看天下','环球时报','澎湃新闻','人民日报','知乎','中国新闻网','中国之声','北京青年报','豆瓣','头条新闻','新京报','Web1.0','Web2.0',]
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
                {value:42, name:'VISTA看天下', selected:true},
                {value:22, name:'环球时报'},
                {value:25, name:'澎湃新闻'},
                {value:36, name:'人民日报'},
                {value:72, name:'知乎'},
                {value:8, name:'中国新闻网'},
                {value:13, name:'中国之声'},
                {value:9, name:'北京青年报'},
                {value:29, name:'豆瓣'},
                {value:35, name:'头条新闻'},
                {value:9, name:'新京报'},
            ]
        },
        {
            name:'访问来源',
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
                
                {value:101, name:'Web1.0'},
                {value:199, name:'Web2.0'},
            ]
        }
    ]
};