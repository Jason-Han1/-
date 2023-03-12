    option = {
        legend: {
            show: true,
            orient: 'vertical',
            left: '52%',
            top: '10%',
            data: ['基本支出','项目支出'],
            itemGap: 20,
            icon: 'path://M0,8.5 C3.43544081,6.83333333 6.80280997,6 10.1021075,6 C13.401405,6 16.7007025,6.83333333 20,8.5 L15,16 C13.7496081,14.7407665 12.1169772,14.1111497 10.1021075,14.1111497 C8.08723771,14.1111497 6.38653522,14.7407665 5,16 L0,8.5 Z'
        },
        // 内圈背景，外圈背景，内圈数据，多余数据，外圈数据
        color: ['#22CFE0', '#1890FF'],
        series: [
            {
                name: '基本支出',
                type: 'pie',
                radius: ['70%', '80%'],
                avoidLabelOverlap: false,
                hoverAnimation: false,
                clockwise: false,
                labelLine: {
                    show:false
                },
                data: [{
                        value: 64,
                        name: '设备',
                        label: {
                            normal: {
                                show: false
                            }
                        }
                    },
                    {
                        value: 36,
                        name: 'other',
                        itemStyle: {
                            color: 'transparent'
                        }
                    },
                ]
            },
            {
                name: '项目支出',
                type: 'pie',
                radius: ['60%', '70%'],
                avoidLabelOverlap: false,
                hoverAnimation: false,
                clockwise: false,
                labelLine: {
                    show:false
                },
                data: [{
                        value: 54,
                        name: 'IPC',
                        label: {
                            normal: {
                                show: false
                            }
                        }
                    },
                    {
                        value: 46,
                        name: 'other',
                        itemStyle: {
                            color: 'transparent'
                        }
                    }
                ]
            },
        ]
    };