option = {
    backgroundColor:'#000',
    grid: {
        left: '8%',
        right: '10%',
        top: '12%',
        bottom: '18%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitLine: {
            lineStyle:{
                type: 'dashed'
            }
        },
    },
    yAxis: {
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle:{
                color: '#00D3BC'
            }
        },
        axisLabel:{
            color:'#ddd'
        },
        data: ["用户撞车", "SQL注入检测", "机器人登录",
            "账号盗用", "web高频攻击", "端口扫描", "内网连接…",
            "邮件外发",
        ]
    },

    series: {
        name: '销量',
        color:'#00D3BC',
        type: 'pictorialBar',
        symbol: 'rect',
        symbolRepeat: true,
        symbolClip: true,
        symbolSize: [8,20],
        label: {
            show: true,
            position: 'right'
        },
        data: [110, 20, 36, 10, 50, 80, 100, 60]
    }
};