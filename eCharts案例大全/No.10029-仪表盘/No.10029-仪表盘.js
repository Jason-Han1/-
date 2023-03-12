function linearColor(color1, color2, color3, r, b, l, t) {
    return new echarts.graphic.LinearGradient(r, b, l, t, [{
        offset: 1,
        color: color1
    }, {
        offset: 0.5,
        color: color2
    }, {
        offset: 0,
        color: color3
    }])
}
let color1 = linearColor('#33ccff', '#33ccff', '#33ccff', 0, 0, 0, 1)
let color2 = linearColor('#0099cc', '#0099cc', '#0099cc', 0, 0, 0, 1)
let color3 = linearColor('#3366cc', '#3366cc', '#3366cc', 0, 1, 0, 0)
let color4 = linearColor('#6633cc', '#6633cc', '#6633cc', 0, 1, 0, 0)
let load = 75
let active = 45
let sign = 56

option = {
    tooltip: {
        formatter: '{a}: {c}率',
        position: 'top'
    },
    series: [
        {
            name: '外框',
            type: 'gauge',
            radius: '30%',
            z: 5,
            center: ['50%', '35%'],
            axisLine: {
                show: false,
                lineStyle: { // 属性lineStyle控制线条样式
                    color: [
                        [0.3, color1],
                        [0.6, color2],
                        [0.9, color3],
                        [1, color4]
                    ],
                    width: 6
                }
            },
            splitLine: {
                show: false
            },
            detail: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            }
        },
        {
            name: '人工处理率',
            type: 'gauge',
            radius: '25%',
            min: 0,
            max: Math.ceil(load / 100) * 100 + 50,
            splitNumber: 5,
            z: 5,
            center: ['50%', '35%'],
            axisLine: {
                show: false,
                lineStyle: { // 属性lineStyle控制线条样式
                    width: 2,
                    opacity: 0
                }
            },
            splitLine: {
                show: false,
                length: 2,
                lineStyle: { // 属性lineStyle控制线条样式
                    width: 6,
                    color: '#05abf8'
                }
            },
            axisTick: {
                show: true,
                length: 3,
                lineStyle: { // 属性lineStyle控制线条样式
                    width: 6,
                    color: '#05abf8'
                }
            },
            pointer: { // 指针
                length: '60%',
                width: 5
            },
            itemStyle: { // 指针
                color: '#04b2ff'
            },
            title: { // 标题
                color: '#04b1fe',
                offsetCenter: ['10%', '120%'],
                fontSize: 13
            },
            axisLabel: {
                distance: 5,
                color: '#04b1fe',
                fontSize: 12,
                padding: 1.5
            },
            detail: {
                color: '#04b1fe',
                fontSize: 15,
                fontWeight: 600,
                offsetCenter: [0, '90%'],
                formatter: function(value) {
                    return value+"%"
                }
            },
            markPoint: {
                symbol: 'arrow'
            },
            data: [{
                value: load,
                name: '人工处理率'
            }]
        },
        {
            name: '外框',
            type: 'gauge',
            radius: '25%',
            center: ['27%', '40%'],
            axisLine: {
                show: false,
                lineStyle: { // 属性lineStyle控制线条样式
                    color: [
                        [0.3, color1],
                        [0.6, color2],
                        [0.9, color3],
                        [1, color4]
                    ],
                    width: 6
                }
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            pointer: { // 指针
                show: false
            },
            title: { // 标题
                show: false
            },
            axisLabel: {
                show: false
            },
            detail: {
                show: false
            }
        },
        {
            name: '一次性解决率',
            type: 'gauge',
            radius: '20%',
            z: 3,
            min: 0,
            max: Math.ceil(active / 100) * 100 + 50,
            splitNumber: 5,
            center: ['27%', '40%'],
            axisLine: {
                show: false,
                lineStyle: { // 属性lineStyle控制线条样式
                    opacity: 0
                }
            },
            splitLine: {
                show: false,
                length: 2,
                lineStyle: {
                    color: '#04b2ff',
                    width: 4
                }
            },
            axisTick: {
                show: true,
                length: 3,
                lineStyle: {
                    color: '#04b1fe',
                    width: 5
                }
            },
            pointer: {
                length: '60%',
                width: 5
            },
            itemStyle: {
                color: '#04b2ff'
            },
            title: {
                color: '#04b1fe',
                width: 10,
                offsetCenter: ['0', '120%'],
                lineHeight: 15,
                fontSize: 13
            },
            axisLabel: {
                distance: 5,
                color: '#04b1fe',
                fontSize: 12,
                padding: 1
            },
            detail: {
                color: '#04b1fe',
                fontSize: 14,
                fontWeight: 600,
                offsetCenter: [0, '90%'],
                formatter: function(value) {
                    return value+"%"
                }
            },
            markPoint: {
                symbol: 'arrow'
            },
            data: [{
                value: active,
                name: '一次性解决率'
            }]
        },
        {
            name: '外框',
            radius: '25%',
            z: 2,
            type: 'gauge',
            min: 0,
            max: 300,
            center: ['73%', '40%'],
            axisLine: {
                show: false,
                lineStyle: {
                    color: [
                        [0.3, color1],
                        [0.6, color2],
                        [0.9, color3],
                        [1, color4]
                    ],
                    width: 6,
                    barBorderRadius: 6
                }
            },
            splitLine: {
                show: false,
                length: 5,
                lineStyle: {
                    color: '#078bd9',
                    width: 2
                }
            },
            axisTick: {
                show: false
            },
            pointer: { // 指针
                show: false
            },
            title: { // 标题
                show: false
            },
            axisLabel: {
                show: false
            },
            detail: {
                show: false
            }

        },
        {
            name: '员工利用率',
            radius: '20%',
            z: 5,
            type: 'gauge',
            min: 0,
            splitNumber: 5,
            max: Math.ceil(sign / 100) * 100 + 50,
            center: ['73%', '40%'],
            axisLine: {
                show: false,
                lineStyle: {
                    opacity: 0
                }
            },
            splitLine: {
                show: false,
                length: 2,
                lineStyle: {
                    color: '#04b2ff',
                    width: 8
                }
            },
            axisTick: {
                show: true,
                length: 3,
                lineStyle: {
                    color: '#04b2ff',
                    width: 5
                }
            },
            pointer: {
                length: '60%',
                width: 5
            },
            itemStyle: {
                color: '#04b2ff'
            },
            title: {
                color: '#04b2ff',
                width: 10,
                offsetCenter: ['0', '120%'],
                fontSize: 13
            },
            axisLabel: {
                distance: 5,
                color: '#04b2ff',
                fontSize: 12,
                padding: 2
            },
            detail: {
                show: true,
                color: '#04b2ff',
                fontSize: 14,
                fontWeight: 600,
                formatter: '{value}',
                offsetCenter: [0, '90%'],
                formatter: function(value) {
                    return value+"%"
                }
            },
            markPoint: {
                symbol: 'arrow'
            },
            data: [{
                value: sign,
                name: '员工利用率'
            }]
        }
    ]
}