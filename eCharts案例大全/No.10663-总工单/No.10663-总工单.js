app.title = '环形图';

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        data: ['桌面硬件问题', '桌面软件问题', '桌面技术支持', '网络问题', 'SAP应用问题', '赛普问题', '其它应用问题', '密码重置', '满意度调查', '申请管理密码', '其它问题', '咨询']
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
                name: '桌面硬件问题'
            },
            {
                value: 310,
                name: '桌面软件问题'
            },
            {
                value: 234,
                name: '桌面技术支持'
            },
            {
                value: 135,
                name: '网络问题'
            },
            {
                value: 1548,
                name: 'SAP应用问题'
            },
            {
                value: 23,
                name: '赛普问题'
            },
            {
                value: 23,
                name: '其它应用问题'
            },
            {
                value: 23,
                name: '密码重置'
            },
            {
                value: 23,
                name: '满意度调查'
            },
            {
                value: 23,
                name: '申请管理密码'
            },
            {
                value: 23,
                name: '其它问题'
            },
            {
                value: 23,
                name: '咨询'
            }
        ]
    }]
};