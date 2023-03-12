option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        center: ['50%', '50%'],
        data: [{
                value: 335,
                name: '直接访问',
                itemStyle: {
                    color: '#ffa800'
                }
            },
            {
                value: 310,
                name: '邮件营销',
                itemStyle: {
                    color: '#b250ff'
                }
            },
            {
                value: 234,
                name: '联盟广告',
                itemStyle: {
                    color: '#4f9aff'
                }
            },
            {
                value: 135,
                name: '视频广告',
                itemStyle: {
                    color: '#4bf3ff'
                }
            },
            {
                value: 1548,
                name: '搜索引擎',
                itemStyle: {
                    color: '#ee6378'
                }
            }
        ],
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};