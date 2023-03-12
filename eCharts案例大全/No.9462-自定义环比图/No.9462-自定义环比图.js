option = {
    title: [{
        text: '合计',
        subtext: 12312+'个',
        textStyle:{
            fontSize:20,
            color:"black"
        },
        subtextStyle: {
            fontSize: 20,
            color: 'black'
        },
        textAlign:"center",
        x: '50%',
        y: '45%',
    }],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: false
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
