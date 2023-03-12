option = {
    tooltip: {
        trigger: 'item'
    },
    legend: {
        top: '6%',
        left: 'center'
    },
    series: [{
        type: 'pie',
        name: 'pie series',
        radius: ['45%','80%'],
        label: {
            show: false,
            position: 'center'
        },
        emphasis: {
             label: {
                show: true,
                fontSize: '40',
                fontWeight: 'bold'
                }
        },
        data: [
            {value: 1048,name: '搜索引擎'},
            {value: 735,name: '直接访问'},
            {value: 580,name: '邮件营销'},
            {value: 484,name: '联盟广告'},
            {value: 300,name: '视频广告'}
        ]
    }]
};