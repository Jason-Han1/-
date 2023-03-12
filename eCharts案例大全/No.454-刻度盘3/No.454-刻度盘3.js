var demoData = {
    name: '城镇化率',
    value: 60,
};
option = {
    backgroundColor: '#222939',
    title: {
        text: '{num|' + demoData.value + '%}',
        x: '50%',
        y: '53%',
        textAlign: 'center',
        textStyle: {
            rich: {
                num: {
                    fontWeight: '500',
                    color: '#F8F8FA',
                    fontFamily: '微软雅黑',
                    fontSize: 75,
                },
            },
        },
    },
    series: [
        {
            type: 'gauge',
            radius: '90%', // 1行3个
            center: ['50%', '70%'],
            splitNumber: 10,
            // min: 0,
            max: 100,
            startAngle: 180,
            endAngle: 0,
            z:99,
            // 线
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: [[1, 'rgba(255,255,255,0)']],
                },
                detail: {
                    formatter: '{value}',
                },
                data: [
                    {
                        value: 50,
                        name: 'SCORE',
                    },
                ],
            },
            //刻度标签。
            axisTick: {
                show: true,
                splitNumber: 6, //刻度的段落数
                lineStyle: {
                    color: '#02C2A2',
                    width: 2, //刻度的宽度
                    shadowColor: '#67FFFC',
                    shadowBlur: 2,
                },
                length: 2, //刻度的长度
            },
            splitLine: {
                //文字和刻度的偏移量
                show: true,
                length: -10, //长度
                lineStyle: {
                    color: '#02C2A2',
                    width: 4,
                },
            },
            // //刻度线文字
            axisLabel: {
                show: true,
                color: '#02C2A2',
                fontSize: 16,
                distance: -30,
            },
            data: [
                {
                    value: demoData.value,
                    name: 'SCORE',
                    itemStyle: {
                        color: '#02C3A2',
                    },
                },
            ],
            pointer: {
                show: true,
                length: '12%',
                radius: '50%',
                width: 10, //指针粗细
                offsetCenter:[0,-273]
            },
             detail: {
            show:false
        },
            title: {
                // 仪表盘标题。
                show: false, 
            },
        },
        {
            name: demoData.name,
            type: 'pie',
            radius: ['65%', '77%'],
            center: ['50%', '70%'],
            startAngle: 180,
            endAngle: 0,
            color: [
                {
                    type: 'linear',
                    x: 1,
                    y: 0,
                    x2: 0,
                    y2: 0,
                    colorStops: [
                        {
                            offset: 0,
                            color: 'transparent', // 0% 处的颜色
                        },
                        {
                            offset: 0.5,
                            color: '#64BDEB', // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: '#33A391', // 100% 处的颜色
                        },
                          
                    ],
                },
                'transparent',
            ],
            hoverAnimation: true,
            legendHoverLink: false,
            z: 10,
            labelLine: {
                normal: {
                    show: false,
                },
            },
            data: [
                {
                    value: (50 *( demoData.value+10)) / 100,
                },
                {
                    value: 100 - (50 * (demoData.value+10)) / 100,
                },
            ],
        },
        {
            type: 'pie',
            hoverAnimation: false,
            label: {
                show: false,
            },
            center: ['50%', '70%'],
            radius: ['0%', '60%'],
            startAngle: 180,
            data: [
                {
                    value: 100,
                    itemStyle: {
                        normal: {
                            color: {
                                type: 'radial',
                                x: 0.5,
                                y: 0.5,
                                r: 0.5,
                                colorStops: [
                                    { offset: 0, color: '#00C2EB' },
                                    { offset: 1, color: '#094461' },
                                ],
                            },
                            opacity: 0.2,
                        },
                    },
                },
                {
                    value: 100,
                    color: 'transparent',
                },
            ],
        },
    ],
};
