option = {
    title: [{
        text: '居中标题1',
        textAlign: 'center',
        top: 'center',
        left: '25%',
        subtext: '可点击的副标题1',
        sublink: '#/www.baidu.com',
        subtarget: 'blank'
    }, {
        text: '居中标题2',
        textAlign: 'center',
        top: 'center',
        left: '55%',
        subtext: '可点击的副标题2',
        sublink: '#/www.baidu.com',
        subtarget: 'blank'
    }],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        //orient: 'vertical',
        orient: '',
        //x: '90%',
        y: 'center',
        left: 'right',
        top: 'center',
        data: [
            '直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'
        ]
    },
    series: [{
            name: '访问来源',
            type: 'pie',
            radius: ['20%', '30%'],
            center: ['25%', '50%'],
            avoidLabelOverlap: false,
            legend: {
                orient: 'vertical',
                left: 'right',
                top: 'center',
                data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
            },
            label: {
                normal: {
                    show: false,
                    // position: 'center'
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
            }, ]
        }, {
            name: '访问来源2',
            type: 'pie',
            radius: ['20%', '30%'],
            center: ['55%', '50%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    // position: 'center'
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
            }, ]
        },

    ]
};