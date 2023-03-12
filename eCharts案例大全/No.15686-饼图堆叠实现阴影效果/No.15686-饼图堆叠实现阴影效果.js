app.title = '环形图';

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告'],
        textStyle: {
            color: '#FFFFFF'
        }
    },
    backgroundColor: '#0D3585',
    color: ['#00E4FF', '#09AFD7', '#1179AF', '#165E9A'],
    series: [{
        type: 'pie',
        radius: ['80%', '82%'],
        labelLine: {
            normal: {
                show: false,
            }
        },
        itemStyle: {
            normal: {
                color: '#0E307A',
            }
        },
        z: 0,
        silent: true,
        data: [{}]
    }, {
        type: 'pie',
        radius: ['0%', '80%'],
        labelLine: {
            normal: {
                show: false,
            }
        },
        itemStyle: {
            normal: {
                color: '#003775',
            }
        },
        z: 1,
        silent: true,
        data: [{}]
    }, {
        name: '访问来源',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: true,
                position: 'outside',
                textStyle: {
                    color: '#FFFFFF'
                }
            }
        },
        labelLine: {
            normal: {
                show: true,

                lineStyle: {
                    color: '#ffffff'
                }


            }
        },
        z: 2,
        data: [{
            value: 15,
            name: '直接访问'
        }, {
            value: 5,
            name: '邮件营销'
        }, {
            value: 50,
            name: '联盟广告'
        }, {
            value: 30,
            name: '视频广告'
        }]
    }, {
        type: 'pie',
        radius: ['0%', '50%'],
        labelLine: {
            normal: {
                show: false,
            }
        },
        itemStyle: {
            normal: {
                color: '#003775',
            }
        },
        z: 3,
        silent: true,
        data: [{}]
    }]
};