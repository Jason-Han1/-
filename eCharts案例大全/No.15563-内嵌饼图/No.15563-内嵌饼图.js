option = {

    color: ['#c33632', '#2e4354', '#d58364', '#62a1a9', '#91c9b0', '#749f83', '#cb8723', '#bda49c', '#6f7174', '#546470', '#c6ced3', '#c43430', '#2e4455', '#60a2aa', '#d68364'],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    series: [{
        name: '访问来源',
        type: 'pie',
        selectedMode: 'single',
        radius: [0, '30%'],

        label: {
            normal: {
                position: 'inner'
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        label: {
            normal: {
                textStyle: {
                    fontSize: 12,
                    color: '#fff'
                }
            }
        },
        data: [

            {
                value: 67,
                name: '网关'
            }, {
                value: 48,
                name: '网段'
            }, {
                value: 48,
                name: '终端'
            }, {
                value: 67,
                name: '虚拟化'
            }, {
                value: 48,
                name: '防火墙'
            }, {
                value: 48,
                name: 'Web'
            }
        ]
    }, {
        name: '访问来源',
        type: 'pie',
        radius: ['40%', '55%'],

        data: [

            {
                value: 30,
                name: 'DeepEdge'
            }, {
                value: 34,
                name: 'TDA'
            }, {
                value: 30,
                name: 'OfficeScan'
            }, {
                value: 34,
                name: 'DeepSecurity'
            }, {
                value: 30,
                name: 'Fortigate'
            }, {
                value: 34,
                name: 'Power'
            }, {
                value: 30,
                name: 'Netscreen'
            }, {
                value: 34,
                name: 'H3C'
            }, {
                value: 45,
                name: 'P1600A'
            }
        ]
    }]
};