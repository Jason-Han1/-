option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 10,
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            center: ["50%", "50%"],
            hoverOffset:30,
            label: {
                show: false,
            },
            itemStyle: {
                    borderWidth:0
            },
            labelLine: {
                show: false
            },
            zlevel:1,
            data: [
                {value: 335, name: '直接访问'},
                {value: 310, name: '邮件营销'},
                {value: 234, name: '联盟广告'},
                {value: 135, name: '视频广告'},
                {value: 1548, name: '搜索引擎'}
            ]
        },
        {
            itemStyle: {
                normal: {
                    color: function(params) {
                        return "#f3f3f3"
                    }
                }
            },
             labelLine: {
                show: false
            },
            type: 'pie',
            radius: ['70%', '73%'],
            center: ["50%", "50%"],
            zlevel:2,
            data: [
                {value: 335, name: '直接访问'},
                {value: 310, name: '邮件营销'},
                {value: 234, name: '联盟广告'},
                {value: 135, name: '视频广告'},
                {value: 1548, name: '搜索引擎'}
            ]
        }
    ]
};