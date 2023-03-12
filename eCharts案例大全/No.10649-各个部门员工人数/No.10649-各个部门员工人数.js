app.title = '嵌套环形图';

option = {
    title: {
        text: '各个部门员工人数'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'right',
        data:['运营中心','技术中心','人力资源中心','物流中心','行政部','海涛事业部','风险管理部','财务中心']
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
      //         {value:335, name:'直达', selected:true},
        //        {value:679, name:'营销广告'},
          //      {value:1548, name:'搜索引擎'}
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
          //  '运营中心','技术中心','人力资源中心','物流中心','行政部','海涛事业部','风险管理部','财务中心'
            data:[
                {value:335, name:'运营中心'},
                {value:310, name:'技术中心'},
                {value:234, name:'人力资源中心'},
                {value:135, name:'物流中心'},
                {value:1048, name:'行政部'},
                {value:251, name:'海涛事业部'},
                {value:147, name:'风险管理部'},
                {value:102, name:'财务中心'}
            ]
        }
    ]
};