
var chartData = [
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
            ];
            

option = {
    title: {
        text: '访问来源',
        textAlign: 'left',
        left: 10,
        top: 0,
        textStyle: {
            fontSize: 18,
            fontWeight: 500
        },
        x: 'center',
        y: 'center'
    },
    // tooltip: {
    //     trigger: 'item',
    //     formatter: "{a} <br/>{b}: {c} ({d}%)"
    // },
    legend: {
        // orient: 'vertical',
        left: 'center',
        bottom: 40,
        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎'],
        
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['35%', '50%'],
            avoidLabelOverlap: false,
            label: {
                show: true,
                // formatter: `{b}: {d}%`,
                
                formatter: '{b|{b}}\n{hr|}\n{d|{d}%}',
                rich: {
                    b: {
                        fontSize: 12,
                        // color: '#fff',
                        align: 'left',
                        padding: 4
                    },
                    hr: {
                        // borderColor: '#12EABE',
                        width: '100%',
                        borderWidth: 2,
                        height: 0
                    },
                    d: {
                        fontSize: 12,
                        // color: '#fff',
                        align: 'left',
                        padding: 4
                    },
                    c: {
                        fontSize: 12,
                        // color: '#fff',
                        align: 'center',
                        padding: 4
                    }
                }
            },
            labelLine: {
                show: true,
                smooth: 0,
                length: 5
            },
            animation: false,
            data:chartData
        },
        {
            name:'访问来源',
            type:'pie',
            radius: ['35%', '50%'],
            opacity: 1,
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center',
                    formatter: '{b}\n {c}'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold',
                    }
                }
            },
            data:chartData
        }
    ]
};
