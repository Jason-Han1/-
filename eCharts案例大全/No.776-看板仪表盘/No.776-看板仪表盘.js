var demoData = {
    name: '批次转化率',
    value: 65.17,
};
option = {
    backgroundColor: '#26262A',
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
                    fontFamily: 'D-DIN Exp',
                    fontSize: 90,
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
                    color: '#858A93',
                    width: 2, //刻度的宽度
                },
                length: 25, //刻度的长度
            },
            splitLine: {
                //文字和刻度的偏移量
                show: true,
                length: -15, //长度
                lineStyle: {
                    color: '#858A93',
                    width: 2,
                },
            },
            // //刻度线文字
            axisLabel: {
                show: false,
                color: '#858A93',
                fontSize:16,
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
                show: false ,
                length: '12%',
                radius: '50%',
                width: 12, //指针粗细
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
            type: 'pie',//渐变环
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
                            color: '#6FE5FF', // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: '#1C70C6', // 100% 处的颜色
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
                    value: 0,
                },
                {
                    value: demoData.value,
                },
            ],
        },
        {
            name: "",
            type: "gauge",//粗分割线
            radius: "82%",
            center: ['50%', '70%'],
            startAngle: 180,
            endAngle: 0,
            splitNumber: 15,
            hoverAnimation: true,
            axisTick: {
                show: false
            },
            splitLine: {
                length: 60,
                lineStyle: {
                    width: 30,
                    color: "#26262A"
                }
            },
            axisLabel: {
                show: false
            },
            pointer: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    opacity: 0
                }
            },
            detail: {
                show: false
            },
            data: [{
                value: 0,
                name: ""
            }]
        },
        {
            type: 'pie',//纯色背景环
            radius: ['65%', '77%'],
            center: ['50%', '70%'],
            startAngle: 180,
            endAngle: 0,
            color:'#606672',
            hoverAnimation: true,
            legendHoverLink: false,
            z: 0,
            labelLine: {
                normal: {
                    show: false,
                },
            },
            data: [
                {
                    value: 1,
                },
                {
                    value:1,
                },
            ],
        },
    ],
};
