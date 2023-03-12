app.title = '环形图';

option = {
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
            name:'访问来源',
            type:'pie',
            radius: ['45%', '70%'],
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
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
            ]
        },
        {
            name:'radial gradient',
            type:'pie',
            radius: '70%',
            avoidLabelOverlap: false,
            itemStyle: {
                normal: {
                    color: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.5,
                        colorStops: [{
                            offset: 0, color: 'rgba(255,255,255,0)'
                        }, {
                            offset: 0.55, color: 'rgba(255,255,255,0.5)'
                        }, {
                            offset: 0.65, color: 'rgba(255,255,255,0.5)' 
                        }, {
                            offset: 0.95, color: 'rgba(255,255,255,0)' 
                        }],
                        globalCoord: false 
                    }
                }
            },
            silent: true,
            z: 999,
            data:[
                {value:1, name: ''}
            ]
        }        
    ]
};
