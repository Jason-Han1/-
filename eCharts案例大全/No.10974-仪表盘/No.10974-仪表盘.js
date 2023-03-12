option = {
    title: {
        show: true,
        x: "center",
        y: "55%",
        text: '5人',
    },
    tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
    },
    series: [{
        name: '在岗职工、从业人数',
        type: 'gauge',
        // center: ['50%', '25%'], // 默认全局居中
        radius: '25%',
        axisLine: {
            show: false,
            lineStyle: { // 属性lineStyle控制线条样式
                color: [
                    [0.8, '#0193cf'],
                    [1, 'rgba(1, 147, 207, 0.3)']
                ],
                width: 15
            }
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        pointer: {
            show: false,
            length: '0',
            width: '0'
        },
        detail: {
            formatter: '{value}%',
            offsetCenter: [0, '5%']
        },
        data: [{
            value: 80,
            label: {
                textStyle: {
                    fontSize: 12
                }
            }
        }]
    }]
};