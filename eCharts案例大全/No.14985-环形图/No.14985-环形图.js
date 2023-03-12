app.title = '环形图';

option = {
    /*tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },*/
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['视频广告','搜索引擎']
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: '20',
                        
                    },
                    
                    //position: 'center'
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
                    show: true
                }
            },
            data:[

                {value:135, name:'视频广告',
                    itemStyle:{normal : {"color":  new echarts.graphic.LinearGradient(1, 0, 0, 1, [{
                        offset: 0,
                        color: '#fd6a7d'
                    }, {
                        offset: 1,
                        color: '#ff9a6a'
                    }]),}}
                },
                {value:1548, name:'搜索引擎',
                     itemStyle:{normal : {"color":  new echarts.graphic.LinearGradient(1, 1, 0, 1, [{
                        offset: 0,
                        color: '#00a2ff'
                    }, {
                        offset: 1,
                        color: '#70ffac'
                    }]),}}
                }
            ]
        }
    ]
};
