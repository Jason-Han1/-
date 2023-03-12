option = {
    //固定框架的option写这
    baseOption: {
                timeline: {
                    //loop: false,      
                    axisType: 'category',
                    show: true,
                    autoPlay: false,
                    playInterval: 1500,
                    data: ['1990', '1995']         
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {d}%'
                },
                legend: {
                    data: ['直达', '营销广告', '搜索引擎', '邮件营销', '联盟广告', '视频广告', '百度', '谷歌', '必应', '其他']
                },
    },
    
    //变化数据写这
    options: [
        {
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    selectedMode: 'single',
                    radius: [0, '30%'],
                    label: {
                        position: 'inner',
                        fontSize: 14,
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        {value: 1548, name: '搜索引擎'},
                        {value: 775, name: '直达'},
                        {value: 679, name: '营销广告', selected: true}
                    ]
                },
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['45%', '60%'],
                    labelLine: {
                        length: 30,
                    },
                    data: [
                        {value: 1048, name: '百度'},
                        {value: 335, name: '直达'},
                        {value: 310, name: '邮件营销'},
                        {value: 251, name: '谷歌'},
                        {value: 234, name: '联盟广告'},
                        {value: 147, name: '必应'},
                        {value: 135, name: '视频广告'},
                        {value: 102, name: '其他'}
                    ]
                }
            ]
        },
        {
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    selectedMode: 'single',
                    radius: [0, '30%'],
                    label: {
                        position: 'inner',
                        fontSize: 14,
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        {value: 1548, name: '搜索引擎'},
                        {value: 775, name: '直达'},
                        {value: 679, name: '营销广告', selected: true}
                    ]
                },
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['45%', '60%'],
                    labelLine: {
                        length: 30,
                    },
                    data: [
                        {value: 18, name: '百度'},
                        {value: 35, name: '直达'},
                        {value: 30, name: '邮件营销'},
                        {value: 51, name: '谷歌'},
                        {value: 34, name: '联盟广告'},
                        {value: 17, name: '必应'},
                        {value: 15, name: '视频广告'},
                        {value: 02, name: '其他'}
                    ]
                }
            ]
        }
    ]
};