app.title = '环形图';

option = {
    animation: false,
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    },
    series: [
        {
            // selectedOffset: -30,
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
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:1, name:'直接访问'},
                {value:0.06, name:'', itemStyle: {color: 'rgba(0,0,0,0)'}},
                {value:1, name:'邮件营销', selected: true},
                {value:0.06, name:'', itemStyle: {color: 'rgba(0,0,0,0)'}},
                {value:1, name:'联盟广告'},
                {value:1, name:'视频广告'},
                {value:1, name:'搜索引擎'}
            ]
        }
    ]
};
