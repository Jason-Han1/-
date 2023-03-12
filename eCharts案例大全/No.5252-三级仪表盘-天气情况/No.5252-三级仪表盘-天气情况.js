var fontSize = (val) => {
    return val
}
$.getJSON("https://www.tianqiapi.com/free/day?appid=47966982&appsecret=7Yxw2AO0&city=北京", (json) => {
    let air = parseInt(json.air)
    let tem = parseInt(json.tem)
    let winSpeed = parseInt(json.win_speed)
    let option = {
        backgroundColor: '#012248',
        tooltip: {
            formatter: '{a} : {c}' // 修改格式
        },
        series: [{
                name: '空气指数',
                title: {
                    color: '#fff'
                },
                type: 'gauge',
                // radius: fontSize(58)+'rem',
                radius: '31%',
                center: ['25%', '60%'],
                min: 0,
                max: 500,
                endAngle: 45,
                splitNumber: 5,
                axisLine: { // 坐标轴线
                    lineStyle: { // 属性lineStyle控制线条样式
                        width: fontSize(5)
                    }
                },
                axisTick: { // 坐标轴小标记
                    length: fontSize(9), // 属性length控制线长
                    lineStyle: { // 属性lineStyle控制线条样式
                        color: 'auto'
                    }
                },
                axisLabel: {
                    distance: fontSize(2)
                },
                splitLine: { // 分隔线
                    length: fontSize(12), // 属性length控制线长
                    lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                        color: 'auto'
                    }
                },
                pointer: {
                    width: fontSize(3)
                },
                data: [{
                    value: air,
                    name: '空气指数'
                }],
                detail: {
                    formatter: function(value) {
                        if (value !== 0) {
                            var num = Math.round(value)
                            return '空气指数：' + parseInt(num).toFixed(0)
                        } else {
                            return 0
                        }
                    },
                    offsetCenter: [0, '110%'],
                    textStyle: {
                        fontSize: fontSize(14),
                        color: '#fff'
                    }
                }
            },
            {
                name: '温度',
                title: {
                    color: '#fff'
                },
                type: 'gauge',
                center: ['50%', '50%'],
                // radius: fontSize(70)+'rem',
                radius: '50%',
                min: -10,
                max: 50,
                splitNumber: 6,
                axisLine: { // 坐标轴线
                    lineStyle: { // 属性lineStyle控制线条样式
                        width: fontSize(5)
                    }
                },
                axisTick: { // 坐标轴小标记
                    splitNumber: 10,
                    length: fontSize(10), // 属性length控制线长
                    lineStyle: { // 属性lineStyle控制线条样式
                        color: 'auto'
                    }
                },
                splitLine: { // 分隔线
                    length: fontSize(15), // 属性length控制线长
                    lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                        color: 'auto'
                    }
                },
                axisLabel: {
                    backgroundColor: 'auto',
                    borderRadius: fontSize(2),
                    color: '#eee',
                    padding: fontSize(3),
                    textShadowBlur: fontSize(2),
                    textShadowOffsetX: fontSize(1),
                    textShadowOffsetY: fontSize(1),
                    textShadowColor: '#222'
                },
                detail: {
                    formatter: function(value) {
                        if (value !== 0) {
                            var num = Math.round(value)
                            return '温度：' + parseInt(num).toFixed(0) + '°C'
                        } else {
                            return 0
                        }
                    },
                    offsetCenter: [0, '110%'],
                    textStyle: {
                        fontSize: fontSize(14),
                        color: '#fff'
                    }
                },
                data: [{
                    value: tem,
                    name: '温度'
                }],
                pointer: {
                    width: fontSize(5) // 指针粗细
                }
            },
            {
                name: '风级',
                title: {
                    color: '#fff'
                },
                type: 'gauge',
                center: ['75%', '56%'],
                // radius: fontSize(45)+'rem',
                radius: '30%',
                min: 0,
                max: 10,
                startAngle: 135,
                endAngle: 45,
                splitNumber: 2,
                axisLine: { // 坐标轴线
                    lineStyle: { // 属性lineStyle控制线条样式
                        width: fontSize(5)
                    }
                },
                axisTick: { // 坐标轴小标记
                    splitNumber: 5,
                    length: fontSize(9), // 属性length控制线长
                    lineStyle: { // 属性lineStyle控制线条样式
                        color: 'auto'
                    }
                },
                axisLabel: {
                    distance: fontSize(2)
                },
                splitLine: { // 分隔线
                    length: fontSize(12), // 属性length控制线长
                    lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                        color: 'auto'
                    }
                },
                pointer: {
                    width: fontSize(2)
                },
                data: [{
                    value: winSpeed,
                    name: '风级'
                }],
                detail: {
                    show: false
                }
            },
            {
                name: '风级',
                title: {
                    color: '#fff'
                },
                type: 'gauge',
                center: ['75%', '56%'],
                // radius: fontSize(45)+'rem',
                radius: '30%',
                min: 0,
                max: 10,
                startAngle: 315,
                endAngle: 225,
                splitNumber: 2,
                axisLine: { // 坐标轴线
                    lineStyle: { // 属性lineStyle控制线条样式
                        width: fontSize(5)
                    }
                },
                axisTick: { // 坐标轴小标记
                    splitNumber: 5,
                    length: fontSize(9), // 属性length控制线长
                    lineStyle: { // 属性lineStyle控制线条样式
                        color: 'auto'
                    }
                },
                axisLabel: {
                    distance: fontSize(2)
                },
                splitLine: { // 分隔线
                    length: fontSize(12), // 属性length控制线长
                    lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                        color: 'auto'
                    }
                },
                pointer: {
                    width: fontSize(2)
                },
                data: [{
                    value: winSpeed,
                    name: '风级'
                }],
                detail: {
                    formatter: function(value) {
                        if (value !== 0) {
                            var num = Math.round(value)
                            return '风级：' + parseInt(num).toFixed(0) + '级'
                        } else {
                            return '风级：' + 0 + '级'
                        }
                    },
                    offsetCenter: [0, '140%'],
                    textStyle: {
                        fontSize: fontSize(14),
                        color: '#fff'
                    }
                }
            }
        ]
    }
    myChart.setOption(option)
})