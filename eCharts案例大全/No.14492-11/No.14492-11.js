option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [{
        type: 'line',
        data:[220, 182, 191, 234, 290, 330, 310]
    }]
};app.title = '环形图';

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['新民网','头条新闻','微博','天涯论坛','腾讯新闻','网易新闻']
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
                {value:35, name:'新民网'},
                {value:31, name:'头条新闻'},
                {value:34, name:'微博'},
                {value:35, name:'天涯论坛'},
                {value:148, name:'腾讯新闻'}
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
