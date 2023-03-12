option = {
            title: {
                text: '饼图与动态数值:3000',
                left: '40%',
                top: 'center',
                textAlign: 'center',
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)',
            },
            legend: {
                orient: 'vertical',
                right: 10,
                top: 'center',
                data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
            },
            series: [
                {
                    center: ['40%', '50%'],
                    name: '访问来源',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center',
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '30',
                            fontWeight: 'bold',
                        },
                    },
                    labelLine: {
                        show: false,
                    },
                    data: [
                        { value: 335, name: '直接访问', itemStyle: { color: '#ff9ff3' } },
                        { value: 310, name: '邮件营销', itemStyle: { color: '#feca57' } },
                        { value: 234, name: '联盟广告', itemStyle: { color: '#ff6b6b' } },
                    ],
                },
            ],
        };