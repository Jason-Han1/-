var data = [{
        value: 335,
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
        name: '视频广告'
    },
    {
        value: 1548,
        name: '搜索引擎'
    }
];

var center = ['50%', '50%'];
var radius = {
    '内': ['54%', '60%'],
    'pie': ['60%', '70%'],
    '中': ['70%', '76%'],
    '外': ['70%', '85%'],
}

option = {
    backgroundColor: '#242E55',
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'right',
        top: 'center',
        align: 'left',
        itemHeight: 20,
        itemWidth: 20,
        textStyle: {
            color: '#fff'
        },
        data: data.map(item => item.name)
    },
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: radius['pie'],
        center: center,
        avoidLabelOverlap: false,
        color: ['#86D560', '#AF89D6', '#59ADF3', '#FF999A', '#FFCC67'],
        label: {
            normal: {
                show: false,
                position: 'center',
                formatter: '{b}\n\n{c}'
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
        data: data
    }, {
        name: '背景外圆环',
        type: 'pie',
        radius: radius['外'],
        center: center,
        color: 'rgba(0,0,0,.2)',
        silent: true,
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            name: '',
            value: 100
        }]
    }, {
        name: '背景中圆环',
        type: 'pie',
        radius: radius['中'],
        center: center,
        color: 'rgba(0,0,0,.3)',
        silent: true,
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            name: '',
            value: 100
        }]
    }, {
        name: '背景内圆环',
        type: 'pie',
        radius: radius['内'],
        center: center,
        color: 'rgba(0,0,0,.1)',
        silent: true,
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            name: '',
            value: 100
        }]
    }]
};