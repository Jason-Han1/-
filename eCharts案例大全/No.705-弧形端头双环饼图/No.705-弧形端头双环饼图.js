//自定义echarts脚本，为环形饼图端头添加roundCap（弧形）效果
//https://github.com/a413107719/echarts-pie-roundcap
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

    color: ["#Fb4035", "#dbdce5", "#162c7a", "#53b6be"], 
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: ['50%', '80%'],
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
        data: [{
                value: 205,
                name: '直接访问'
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
                name: '视频广告学习相'
            },
            {
                value: 400,
                name: '搜索引擎'
            }
        ],
        roundCap: 1 //可选项为1和2，不填则采用原有拼接方式
    }]
};