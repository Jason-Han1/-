option = {
    //backgroundColor: '#ffffff',
    tooltip: {
        show: true,
    },
    xAxis: [
        {
            type: 'category',
            show: false,
        },
    ],
    yAxis: [
        {
            type: 'value',
            show: false,
        },
    ],
    series: [
        {
            type: 'pie',
            radius: ['0%', '35%'],
            startAngle: [90],
            label: {
                normal: {
                    position: 'center',
                    fontSize: 14,
                    color: '#ffffff',
                    lineHeight: 20,
                    formatter: '{b} : {c}个',
                },
            },
            data: [
                {
                    value: 12314,
                    name: '业务总数',
                    itemStyle: {
                        normal: {
                            color: {
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 0,
                                type: 'linear',
                                global: false,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: '#1d86e2',
                                    },
                                    {
                                        offset: 1,
                                        color: '#1360ad',
                                    },
                                ],
                            },
                        },
                    },
                },
            ],
        },
        {
            type: 'pie',
            radius: ['43%', '51%'],
            startAngle: [224],
            label: {
                normal: {
                    position: 'outside',
                    fontSize: 14,
                    color: '#ffffff',
                    lineHeight: 10,
                    borderWidth: 10,
                    borderRadius: 4,
                    formatter: '{b} : {c}个({d})%',
                },
            },
            labelLine: {
                normal: {
                    show: true,
                    lineStyle: {
                        type: 'solid',
                        color: '#333333',
                    },
                    length: 10,
                    length2: 10,
                },
            },
            data: [
           
                {
                    value: 7213,
                    name: '数据专线',
                    itemStyle: {
                        normal: {
                            color: '#51d688',
                        },
                    },
                },
                {
                    value: 6412,
                    name: '互联网专线',
                    itemStyle: {
                        normal: {
                            color: '#ADD8E6',
                        },
                    },
                },
                {
                    value: 2421,
                    name: 'MPLS_VPN',
                    itemStyle: {
                        normal: {
                            color: '#1a78cf',
                        },
                    },
                },
                {
                    value: 1231,
                    name: 'APN专线',
                    itemStyle: {
                        normal: {
                            color: '#fead33',
                        },
                    },
                },
                {
                    value: 1011,
                    name: '语音专线',
                    itemStyle: {
                        normal: {
                            color: '#778899',
                        },
                    },
                },
            ],
        },
    ],
};
