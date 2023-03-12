app.title = '环形图';

option = {
        color:['#0168b7','#1d83ce','#1d93eb','#009a44','#00bbfe','#fca886','#75e75b','#fe95ea','#fbdd65','#a586fd'],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'horizontal',
        bottom: 20,
        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
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
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
        
          label: {
                normal: {
                    textStyle: {
                        color: 'black'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'gray'
                    },
                    smooth: 0.2,
                    length: 20,
                    length2: 120
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
