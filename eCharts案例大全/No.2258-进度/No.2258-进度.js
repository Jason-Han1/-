option = {
    series: [
        // 大圆环
        {
            type: 'pie',
            radius: ['75%', '65%'],
            silent: true,
            clockwise: true,
            startAngle: 90,
            z: 0,
            zlevel: 1,

            label: {
                normal: {
                    position: 'center',
                },
            },
            data: [
                {
                    value: 60,
                    itemStyle: {
                        normal: {
                            color: {
                                // 完成的圆环的颜色
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [
                                {
                                  offset: 0,
                                  color: 'blue', // 0% 处的颜色
                                },
                                {
                                  offset: 1,
                                  color: 'red', // 100% 处的颜色
                                }
                              ],
                                global: false,
                            },
                        },
                    },
                },
                {
                    value: 40,
                    name: '',
                    label: {
                        normal: {
                            show: false,
                        },
                    },
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                        },
                    },
                },
            ],
        },
           // 小圆环
        {
            type: 'pie',
            radius: ['72%', '68%'],
            silent: true,
            clockwise: true,
            z: 0,
            zlevel: 0,
            label: {
                normal: {
                    position: 'center',
                },
            },
            data: [
                {
                    value: 100,
                    name: '',
                    itemStyle: {
                        color: '#173164',
                    },
                },
            ],
        },
        // 分割环
        {
            name: '',
            zlevel: 2,
            type: 'gauge',
            radius: '75%',
            center: ['50%', '50%'],
            startAngle: -180,
            endAngle: 179.9999,
            splitNumber: 10,
            hoverAnimation: true,
            axisTick: {
                show: false,
            },
            splitLine: {
                length: 50,
                distance: -10,
                lineStyle: {
                    width: 4,
                    color: 'white',
                },
            },
            axisLabel: {
                show: false,
            },
            pointer: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    opacity: 0,
                },
            },
            detail: {
                show: false,
            },
            data: [
                {
                    value: 0,
                    name: '',
                },
            ],
        },
    ],
};
