option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left'
    },
    series: [{
            name: '访问来源',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '30%'],
            label: {
                position: 'inner'
            },
            data: [{
                    value: 335,
                    name: '直达'
                },
                {
                    value: 679,
                    name: '营销广告'
                },
                {
                    value: 1548,
                    name: '搜索引擎'
                }
            ]
        },
        {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '55%'],
            data: [{
                    value: 335,
                    name: '直达'
                },
                {
                    value: 310,
                    name: '邮件营销'
                },
                {
                    value: 234,
                    name: '联盟广告'
                },
                {
                    value: 135,
                    name: '视频广告'
                },
                {
                    value: 1048,
                    name: '百度'
                },
                {
                    value: 251,
                    name: '谷歌'
                },
                {
                    value: 147,
                    name: '必应'
                },
                {
                    value: 102,
                    name: '其他'
                }
            ]
        }
    ]
};