option = {
    backgroundColor: '#07202A',
    title: {
        text: '电池总电压 /v',
        left: '40%',
        bottom: 0,
        textStyle: {
            color: '#fff',
            fontSize: 12
        }
    },
    series: [{
            name: "",
            type: 'gauge',
            splitNumber: 2, //刻度数量
            min: 0,
            max: 800,
            radius: '40%', //图表尺寸
            center: ['50%', '50%'],
            startAngle: 220,
            endAngle: -40,
            axisLine: {
                show: false,
                lineStyle: {
                    width: 10,
                    shadowBlur: 0,
                    color: [
                        [400 / 800, '#2DBAD5'],
                        [1, '#104655']
                    ]
                }
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: 'auto',
                    width: 2
                },
                length: 20,
                splitNumber: 5
            },
            splitLine: {
                show: true,
                length: 32,
                lineStyle: {
                    color: 'auto'
                }
            },
            axisLabel: {
                show: true,
                color: '#8391B7',
                lineHeight: 56
            },
            pointer: { //仪表盘指针
                show: 0,
            },
            detail: {
                show: 0,
            },
        },
        {
            name: '',
            type: 'gauge',
            splitNumber: 30, //刻度数量
            min: 0,
            max: 800,
            radius: '36%', //图表尺寸
            center: ['50%', '50%'],
            startAngle: 220,
            endAngle: -40,
            axisLine: {
                show: false,
                lineStyle: {
                    width: 0,
                    color: [
                        [400 / 800, '#2DBAD5'],
                        [1, '#104655']
                    ]
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                    width: 2,
                    shadowBlur: 0,
                    color: 'auto'
                },
                length: 20,
                splitNumber: 3
            },
            splitLine: {
                show: false,
                length: 20,
                lineStyle: {
                    color: 'auto'
                }
            },
            axisLabel: {
                show: false
            },
            pointer: { //仪表盘指针
                show: 0,
            },
            detail: {
                show: 0,
            },
            data: [{
                name: "",
                value: 400
            }]
        },
        {
            name: '',
            type: 'gauge',
            splitNumber: 30, //刻度数量
            min: 0,
            max: 800,
            radius: '28%', //图表尺寸
            center: ['50%', '50%'],
            startAngle: 220,
            endAngle: -40,
            axisLine: {
                show: false,
                lineStyle: {
                    width: 0,
                    color: [
                        [400 / 800, '#2DBAD5'],
                        [1, '#104655']
                    ]
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                    width: 2,
                    shadowBlur: 0,
                    color: 'auto'
                },
                length: 4,
                splitNumber: 3
            },
            splitLine: {
                show: false,
                length: 20,
                lineStyle: {
                    color: 'auto'
                }
            },
            axisLabel: {
                show: false
            },
            pointer: { //仪表盘指针
                show: 0,
            },
            detail: {
                borderColor: '#fff',
                shadowColor: '#fff', //默认透明
                shadowBlur: 2,
                offsetCenter: [0, '0%'], // x, y，单位px
                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: '#fff',
                    fontSize: 50,
                },
                formatter: '{value}'
            },
            data: [{
                name: "",
                value: 400
            }]
        }
    ]
};