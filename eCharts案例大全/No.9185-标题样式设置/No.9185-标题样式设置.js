option = {
    title: {
        show: true,
        text: '{a|我是标题文本}',
        // textAlign: "center",
        left: "center",
        textVerticalAlign: "middle",
        // top: 0,
        padding: 30,
        textStyle: {
            
            formatter: [
                '{a|这段文本采用样式a}'
            ].join('\n'),
            rich: {
                a: {
                    color: 'red',
                    lineHeight: 30,
                    height: 30,
                    width: 800,
                    backgroundColor: "skyblue"
                }
            }
        }
    },
    legend: {
        show: true,
        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎'],
        
    },
    grid: {
        top: 80, // 等于标题的 height
        left: 50,
        right: 50,
        bottom: 50
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        areaStyle: {}
    }]
};
