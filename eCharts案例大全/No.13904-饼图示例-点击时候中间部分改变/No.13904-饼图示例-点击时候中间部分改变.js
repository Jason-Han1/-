app.title = '环形图';

option = {
    backgroundColor:'#ffffff',
    title: {
        text: '50021(条)',
        subtext: '总数据数',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18
        },
        z:1
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    formatter: [
                        '{a|本月共计 {c} 条事件}'
                    ].join('\n'),
                    rich: {
                        a: {
                            backgroundColor: '#ffffff',
                            height: 80,
                            fontSize: 18
                        },
                        x: {
                            fontSize: 18,
                            fontFamily: 'Microsoft YaHei',
                            borderColor: '#449933',
                            borderRadius: 4
                        },
                    },
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '20',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: true
                }
            },
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
            ]
        }
    ]
};
