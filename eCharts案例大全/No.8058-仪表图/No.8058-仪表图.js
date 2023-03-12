option = {
    backgroundColor: "#23243a",
    tooltip: {
        formatter: '{a} <br/>{b} : {c}%'
    },
    series: [{
        type: 'gauge',
        startAngle: 200,
        endAngle: -20,
        center: ['50%', '60%'],
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        pointer: {
            show: false
        },
        title: {
            textStyle: {
                fontSize: 20, //字体大小
                color: '#ffffff' //字体颜色
            }
        },
        detail: {
            color: "#fff",
            textBorderColor: '#327BFA',
            textBorderWidth: 4,
            textShadowColor: '#4A92EC',
            textShadowBlur: 15,
            offsetCenter: [0, 0],
            formatter: '{value}%'
        },
        data: [{
            value: 70,
            name: '完成率'
        }],
        axisLine: {
            show: true,
            lineStyle: {
                width: 15,
                color: [
                    [0.7, '#F4C907'],
                    [1, '#434E65']
                ]
            }
        },
        axisLabel: {
            show: false,
            color: "#fff"
        },
        itemStyle: {
            color: "#60acfc"
        }
    }]
}