option = {
    tooltip: {
        trigger: 'item'
    },
    legend: {
        top: '5%',
        left: 'center'
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: true,
                position: 'center',
                formatter: '{a|测试}',
                rich: {
                    a: {
                        fontSize: 35,
                    },
                }
            },
            emphasis: {
                label: {
                    show: false,
                }
            },
            selectedMode: 'single',
            labelLine: {
                show: false
            },
            select: {
                show: false
            },
            data: [
                {value: 1048, name: '搜索引擎'},
                {value: 735, name: '直接访问'},
                {value: 580, name: '邮件营销'},
                {value: 484, name: '联盟广告'},
                {value: 300, name: '视频广告'}
            ]
        }
    ]
};