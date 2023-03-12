var demoData ={ name: 'km', value: 220, unit: 'V', pos: ['16.6%', '25%'], range: [0, 1000] };
option = {
    backgroundColor: '#f0f2f5',
    title: {
        text: '仪表盘'
    },
    series: [{
            name: '内圈小',
            type: 'gauge',

            pointer: {
                show: false
            },
            min: demoData.range[0],
            max: demoData.range[1],
            radius: '70%',
            startAngle: 220,
            endAngle: -40,
            splitNumber: 4,
            axisLine: { // 坐标轴线
                lineStyle: { // 属性lineStyle控制线条样式
                    color: [
                        [1, '#e5e5e5']
                    ],
                    width: 60
                }

            },
            splitLine: { //分隔线样式
                show: true,
                length: -20,
                lineStyle: {
                    color: '#ffb53e'
                }
            },
            axisLabel: { //刻度标签
                show: true,
                color: '#666',
                distance: -30,
                fontSize: 13
            },
            pointer: {
                show: true,
                width: '5%'
            },
            axisTick: { //刻度样式
                show: false,
                splitNumber: 10,
            },
            detail: {
                // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                // fontWeight: 'bolder',
                // fontSize:70,
                // padding:[20,0],
                // offsetCenter:[0, '60%'],
                // fontWeight:'normal',
                show: true,
                offsetCenter: [0, '70%'],
                textStyle: {
                    fontSize: 50,
                    color: '#ffb53e',
                    fontWeight:'normal'
                },
                formatter:[
                      '{value}{name|' + demoData.name + '}'
                ].join(),
                rich: {
                    name: {
                        fontSize: 15,
                        color: '#4f4f4f',
                        padding:[0,0,25,0]
                    }
                }
            },
            data: [{
                value: '200.01',
                itemStyle: {
                    normal: {
                        color: '#969696'
                    }
                }
            }]
        }, {
            name: '内圈小',
            type: 'gauge',
            pointer: {
                show: false,
                width: '5%'
            },
            title: {
                // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: 'bolder',
                fontSize: 30,
                fontStyle: 'italic',
                offsetCenter: [0, '33%'],
            },
            min: demoData.range[0],
            max: demoData.range[1],
            // pointer: {
            //     show: true,
            //     width: '5%'
            // },
            radius: '70%',
            startAngle: 220,
            endAngle: 160,
            splitNumber: 4,
            axisLine: { // 坐标轴线
                lineStyle: { // 属性lineStyle控制线条样式
                    color: [
                        [1, '#ffb53e']
                    ],
                    width: 60,
                    opacity: 1,
                }

            },
            splitLine: { //分隔线样式
                show: false,
            },
            axisLabel: { //刻度标签
                show: false,
            },
            axisTick: { //刻度样式
                show: false,
            },
            detail: {
                // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                // fontWeight: 'bolder',
                // fontSize:70,
                // padding:[20,0],
                // offsetCenter:[0, '60%'],
                // fontWeight:'normal',
                show: false,
               
            }
        },

    ]
};