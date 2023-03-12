var fontSize = (val) => {
    return val
}
option = {
    backgroundColor: '#012248',
    tooltip: {
        formatter: "{a} <br/>{c}"
    },
    series: [{
        name: '指数',
        type: 'gauge',
        center: ["50%", "50%"],
        min: 0,
        max: 100,
        startAngle: 200,
        endAngle: -20,
        splitNumber: 5,
        radius: '40%',
        title: {
            show: false,
            color: "#ffffff",
            fontSize: fontSize(12),
        },
        axisLine: { // 坐标轴线
            lineStyle: { // 属性lineStyle控制线条样式
                color: [
                    [0.3, '#f08080'],
                    [0.7, '#ebcc7b'],
                    [1, '#69d4b5']
                ],
                width: fontSize(10),
                shadowColor: '#2C58A6', //默认透明
                shadowBlur: fontSize(10)
            }
        },
        axisLabel: { // 坐标轴小标记
            distance: -5,//distance(-10)
            textStyle: { // 属性lineStyle控制线条样式
                fontWeight: 'normal',
                fontSize: fontSize(12),
                color: '#ffffff',
                shadowColor: '#2C58A6', //默认透明
                shadowBlur: fontSize(20)
            }
        },
        axisTick: { // 坐标轴小标记
            show: false
        },
        splitLine: { // 分隔线
            show: false
        },
        pointer: { // 分隔线
            width: fontSize(5),
            // length:'70%'
        },
        detail: {
            backgroundColor: '#2C58A6',
            borderWidth: 1,
            borderColor: '#d5d5d5',
            shadowColor: '#2C58A6', //默认透明
            shadowBlur: fontSize(20),
            padding: [8,10,5,10],
            offsetCenter: [0, '50%'], // x, y，单位px
            textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: 'normal',
                fontSize: fontSize(13),
                color: '#fff'
            }
        },
        data: [{name:'',value:20}]
    }]
}