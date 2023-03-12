option = {
    legend: {
        orient: 'vertical',
        top: "center",
        right: "5%",
        data: ['信息泄露', '普通访问', '数据库操作命令', 'SQL注入漏洞攻击', '登录密码事件',],
        textStyle: {
            color: "#333",
            fontSize: 14
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    series: [{
        name: '被入侵次数',
        type: 'pie',
        radius: ['30%', '80%'],
        center: ['40%', '50%'],
        roseType: 'radius',
        label: {
            show: true,
            normal: {
                position: 'outside',
                fontSize: 14
            }
        },
        labelLine: {
            length: 1,
            length2: 20,
            smooth: true
        },
        data: [{
                value: 1,
                name: '信息泄露',
                itemStyle: {
                    color: "#B4DF00",
                }
            },
            {
                value: 2,
                name: '普通访问',
                itemStyle: {
                    color: "#F6BD16",
                }
            },
            {
                value: 3,
                name: '数据库操作命令',
                itemStyle: {
                    color: "#FE8A26",
                }
            },
            {
                value: 4,
                name: 'SQL注入漏洞攻击',
                itemStyle: {
                    color: "#E8684A",
                }
            },
            {
                value: 5,
                name: '登录密码事件',
                itemStyle: {
                    color: "#00CB63",
                }
            }
        ]
    }]
};