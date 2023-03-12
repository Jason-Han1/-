option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 10,
        data: ['直接访问', '直接2访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            color: ['#3fa1ff', '#3ecbcb', '#50cb73', '#fbd544', '#f2637c',
  '#9860e5', '#d460e5', '#608ce5'],
            data: [
                {value: 335, name: '直接访问'},
                {value: 335, name: '直接2访问'},
                {value: 310, name: '邮件营销'},
                {value: 234, name: '联盟广告'},
                {value: 135, name: '视频广告'},
                {value: 1548, name: '搜引擎'},
                {value: 1548, name: '搜索擎'},
                {value: 1548, name: '搜擎'},
                {value: 1548, name: '搜索2引擎'},
               
                
            ]
        }
    ]
};
