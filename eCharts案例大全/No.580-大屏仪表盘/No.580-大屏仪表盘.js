var value = 98.9;
    var color = new echarts.graphic.LinearGradient(0, 0, 1, 0, [
        {
            offset: 0,
            color: '#B8E4F0',
        },
        {
            offset: 0.5,
            color: '#0F52BA',
        },
        {
            offset: 1,
            color: '#0F52BA',
        },
    ]);
    option = {
        series: [
            {
                type: 'gauge',
                radius: '95%',
                startAngle: 215,
                endAngle: -35,
                data: [{value: value, name: '服务率'}],
                // 仪表盘轴线相关配置
                axisLine: {
                    lineStyle: {
                        color: [
                            [value / 100, color],
                            [1, 'rgba(107,157,215,.25)'],
                        ],
                        width: 8,
                        shadowColor: 'rgba(0, 0, 0, 0.3)',
                        shadowBlur: 3
                    }
                },
                // 刻度标签文字
                axisLabel: {
                    show: true,
                    distance: 10,
                    fontSize: 7,
                    color: '#00C7E7',
                    fontFamily: 'verdana'
                },
                // 仪表盘指针
                pointer: {
                    width: 8,
                    length: '50%'
                },
                // 仪表盘指针样式
                itemStyle: {
                    color: 'auto',
                    shadowOffsetX: 1,
                    shadowOffsetY: 2,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowBlur: 5
                },
                // 分隔线样式
                splitLine: {
                    length: 2,
                    distance: 0,
                    lineStyle: {
                        color: '#162F48',
                        width: 2
                    }
                },
                // 刻度样式
                axisTick: {
                    show: false,
                    splitNumber: 5,
                    length: 5,
                    distance: -10,
                    lineStyle: {
                        color: '#000A18'
                    }
                },
                // 仪表盘标题
                title: {
                    color: '#333',
                    fontSize: 12,
                    offsetCenter: [0, '90%'],
                    textShadowColor: 'rgba(0, 0, 0, 0.1)',
                    textShadowBlur: 1
                },
                // 仪表盘数据
                detail: {
                    color: '#333',
                    fontSize: 12,
                    fontFamily: 'verdana, sans-serif',
                    offsetCenter: [0, '60%'],
                    textShadowColor: 'rgba(0, 0, 0, 0.3)',
                    textShadowBlur: 1,
                    formatter: function (value) {
                        return value.toFixed(1) + '%';
                    }
                }
            }
        ]
    };