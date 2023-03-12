option = {
    backgroundColor:'#101A36',
    series: [{
            name: '访问来源',
            type: 'pie',
            radius: [0, '45%'],
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
            hoverAnimation: false,
            hoverOffset: 0,
            data: [{
                value: 679,
                name: '违规处理用户个人信息',
                itemStyle: {
                    color: '#FFE000',
                }
            },
            {
                value: 516,
                name: '设置障碍、频繁骚扰用户',
                itemStyle: {
                    color: '#EE82EE',
                }
            },
            {
                value: 516,
                name: '欺骗误导用户',
                itemStyle: {
                    color: '#40E0D0',
                }
            },
            {
                value: 516,
                name: '应用分发平台责任落实不到位',
                itemStyle: {
                    color: '#00FFAF',
                }
            }]
        },
        {
            name: '访问来源',
            type: 'pie',
            radius: ['45%', '55%'],
            data: [{
                value: 200,
                name: '违规收集个人信息',
                itemStyle: {
                    color: '#02AFE7',
                }
            },{
                value: 200,
                name: '超范围收集个人信息',
                itemStyle: {
                    color: '#FFA12E',
                }
            },
            {
                value: 279,
                name: '违规使用个人信息',
                itemStyle: {
                    color: '#F25185',
                }
            },
            {
                value: 1548,
                name: '必应',
                itemStyle: {
                    color: 'transparent',
                },
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            }],
            labelLine: {
                normal: {
                    length: 20,
                    length2: 140
                }
            },
            label: {
                normal: {
                    formatter: params => {
                        console.log(params)
                        return (
                            '{icon|●}{name|' + params.name + '}{percent|'+ params.percent.toFixed(1) +'%}{value|' +
                            (params.value) + '}'
                        );
                    },
                    padding: [0, -130, 25, -130],
                    rich: {
                        icon: {
                            fontSize: 16
                        },
                        name: {
                            fontSize: 14,
                            padding: [0, 5, 0, 5],
                            color: '#666666'
                        },
                        percent: {
                            color: '#333',
                            padding: [0, 5, 0, 0],
                        },
                        value: {
                            fontSize: 16,
                            fontWeight: 'bold',
                            color: '#333333'
                        }
                    }
                }
            },
            hoverAnimation: false
        }
    ]
};