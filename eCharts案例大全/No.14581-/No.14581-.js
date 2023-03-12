app.title = '嵌套环形图';

option = {
        title : {
        text: '榆林产妇案',
        subtext: '比例图'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'right',
        data:['微博','知乎','百度贴吧','医院','家属','医院更大','家属更大','平均']
    },
    series: [
        {
            name:'责任来源',
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
                {value:100, name:'微博', selected:true},
                {value:100, name:'知乎'},
                {value:100, name:'百度贴吧'}
            ]
        },
        {
            name:'责任来源',
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
                {value:32, name:'医院'},
                {value:24, name:'家属'},
                {value:13, name:'家属更大'},
                {value:7, name:'医院更大'},
                {value:24, name:'平均'},
                {value:9, name:'医院'},
                {value:56, name:'家属'},
                {value:10, name:'家属更大'},
                {value:5, name:'医院更大'},
                {value:20, name:'平均'},
                {value:18, name:'医院'},
                {value:38, name:'家属'},
                {value:16, name:'家属更大'},
                {value:12, name:'医院更大'},
                {value:16, name:'平均'},
            ]
        }
    ]
};