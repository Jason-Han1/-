app.title = '环形图';

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['邮件营销','联盟广告','视频广告','搜索引擎','搜索引','搜索引2']
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
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                
                {value:310, name:'邮件营销',
                    itemStyle:{
                         normal : {
                             "color":  new echarts.graphic.LinearGradient(1, 1, 0, 1, [{
                        offset: 0,
                        color: '#414aa7'
                    }, {
                        offset: 1,
                        color: '#3f82af'
                    }]),}}
                },
                {value:234, name:'联盟广告',
                    itemStyle:{
                         normal : {
                             "color":  new echarts.graphic.LinearGradient(1, 0, 1, 1, [{
                        offset: 0,
                        color: '#6aaed8'
                    }, {
                        offset: 1,
                        color: '#3b7ea9'
                    }]),}}
                },
                {value:135, name:'视频广告',
                    itemStyle:{
                         normal : {
                             "color":  new echarts.graphic.LinearGradient(1, 1, 0, 1, [{
                        offset: 0,
                        color: '#fd6a7d'
                    }, {
                        offset: 1,
                        color: '#ff986b'
                    }]),}}
                },
                {value:548, name:'搜索引擎',
                     
                    itemStyle:{
                         normal : {
                             "color":  new echarts.graphic.LinearGradient(1, 1, 0, 1, [{
                        offset: 0,
                        color: '#6ced91'
                    }, {
                        offset: 1,
                        color: '#00c0bd'
                    }]),}}
                },
                {value:548, name:'搜索引',
                     
                    itemStyle:{
                         normal : {
                             "color":  new echarts.graphic.LinearGradient(1, 1, 0, 1, [{
                        offset: 0,
                        color: '#fe6b7e'
                    }, {
                        offset: 1,
                        color: '#05a7fc'
                    }]),}}
                },
                 {value:548, name:'搜索引2',
                     
                    itemStyle:{
                         normal : {
                             "color":  new echarts.graphic.LinearGradient(1, 1, 0, 1, [{
                        offset: 0,
                        color: '#5b3872'
                    }, {
                        offset: 1,
                        color: '#a0a7f7'
                    }]),}}
                }
            ]
        }
    ]
};
