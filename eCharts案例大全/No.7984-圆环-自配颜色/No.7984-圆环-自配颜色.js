option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
        bottom: '0'
    },
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: ['30%', '50%'],
        bottom:'300',
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
        data: [{
                value: 30,
                name: '直接访问',
                itemStyle: {
                    color: '#ffa800'
                }
            },
            {
                value: 70,
                name: '邮件营销',
                itemStyle: {
                    color: '#b250ff'
                }
            },
            {
                value: 95,
                name: '联盟广告',
                itemStyle: {
                    color: '#4bf3ff'
                }
            },
            {
                value: 60,
                name: '视频广告',
                itemStyle: {
                    color: '#4f9aff'
                }
            },
            {
                value: 100,
                name: '搜索引擎',
                itemStyle: {
                    color: '#ee6378'
                }
            }
        ]
    }]
};