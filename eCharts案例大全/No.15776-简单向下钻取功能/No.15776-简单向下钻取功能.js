option = {
    title: {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        x: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
    },
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: [{
            value: 335,
            name: '直接访问'
        }, {
            value: 310,
            name: '邮件营销'
        }, {
            value: 234,
            name: '联盟广告'
        }, {
            value: 135,
            name: '视频广告'
        }, {
            value: 1548,
            name: '搜索引擎'
        }],
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};

option2 = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
    },
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: ['50%', '70%'],
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
            value: 335,
            name: '直接访问'
        }, {
            value: 310,
            name: '邮件营销'
        }, {
            value: 234,
            name: '联盟广告'
        }, {
            value: 135,
            name: '视频广告'
        }, {
            value: 1548,
            name: '搜索引擎'
        }]
    }]
};


myChart.on('click', function(params) {
    //alert((params.name));


    if (params.name == '直接访问')
        myChart.setOption(option);

    if (params.name == '邮件营销')
        myChart.setOption(option2);

    if (params.name == '联盟广告')
        myChart.setOption(option);

    if (params.name == '视频广告')
        myChart.setOption(option2);

    if (params.name == '搜索引擎')
        myChart.setOption(option);
});