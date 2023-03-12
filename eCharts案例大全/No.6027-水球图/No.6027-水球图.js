var option = {
    series: [{
            type: 'liquidFill',
            radius: '78%',
            center: ['50%', '50%'],
            color: ['#10B9FF', '#10B9FF', '#10B9FF'], //水波
            data: [0.5, 0.5, 0.5], // data个数代表波浪数
            backgroundStyle: {
                borderWidth: 1,
                color: 'transparent'
            },
            outline: {
                show: true,
                itemStyle: {
                    borderColor: '#10B9FF',
                    borderWidth: 2
                },
                borderDistance: 3
            }
        },
        {
            name: '外层细环',
            type: 'pie',
            radius: ['84%', '84.5%'],
            center: ["50%", "50%"],
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                }
            },
            data: [{
                value: 100,
                itemStyle: {
                    normal: {
                        color: "#10B9FF",
                    }
                }
            }]
        },
        {
            name: '外层粗环',
            type: 'pie',
            radius: ['82%', '86.5%'],//使得细环位于粗环中间
            center: ["50%", "50%"],
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                }
            },
            data: [{
                    value: 50,
                    itemStyle: {
                        normal: {
                            color: "#10B9FF"
                        }
                    }
                },
                {
                    value: 50,
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                        }
                    }
                }
            ]
        }

    ]
}