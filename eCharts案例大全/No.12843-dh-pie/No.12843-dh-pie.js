
var dataSorce=[{name:"本科", value: 56},{name:"硕士", value: 40},{name:"博士", value: 1},{name:"专科", value: 26}]

option = {
    color:[
            new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                    {offset: 0, color: '#a0c1f9'},
                    {offset: 1, color: '#1455c7'}
                ]
            ),
            new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                    {offset: 0, color: '#f85b2c'},
                    {offset: 1, color: '#ffb39c'}
                ]
            ),
            new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                    {offset: 0, color: '#f6973d'},
                    {offset: 1, color: '#ffc58e'}
                ]
            ),
            new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                    {offset: 0, color: '#0ab484'},
                    {offset: 1, color: '#8ffdde'}
                ]
            )
        ],
    series: [
        {
            name:'真实数据',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                    position: 'outer',
                    textStyle: {
                        fontSize: 20,
                        color: '#fff'
                    },
                    formatter:{
                        
                    }
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: true,
                    length2: 80,
                    lineStyle:{
                        color: '#fff',
                    }
                }
            },
            data:dataSorce
        },
        {
            name: '边框1',
            type: 'pie',
            radius:['80%', '80.2%'],
            labelLine:{
              normal:{
                  show: false
              }  
            },
            data: [{value: 100, itemStyle:{color: '#2574e0',shadowColor: '#2574e0', shadowBlur: 15}}]
        },
        {
            name: '内框',
            type: 'pie',
            radius:['40%', '40.2%'],
            label: {
              normal:{
                    show: true,
                    position: 'center',
                    formatter: [
                        `{a|${"测试"}}`,
                        `{b|${"56%"}}`
                    ].join('\n'),
                    rich: {
                        a: {
                            color: '#fff',
                            fontSize: 20,
                            lineHeight: 30
                        },
                        b: {
                            color: '#fff',
                            fontSize: 24,
                            height: 40,
                            textShadowBlur: 15,
							textShadowColor: '#2574e0'
                        },
                        
                    }
                }  
            },
            labelLine:{
              normal:{
                  show: false
              }  
            },
            data: [{value: 100, itemStyle:{color: '#2574e0',shadowColor: '#2574e0', shadowBlur: 15}}]
        }
    ]
};