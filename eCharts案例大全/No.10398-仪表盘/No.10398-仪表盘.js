option = {
    backgroundColor: "#ffffff",
    color: ["#37A2DA", "#32C5E9", "#67E0E3"],
    series: [{
        type: 'gauge',
        detail: {
            formatter: '{value}%'
        },
        title: {
            show: true,
            offsetCenter: [0, "80%"], //相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
             // 文字的颜色,默认 #333。
             color:"#666",
            fontSize: 24,
        },
        axisLabel: { // 刻度标签。
            show: false, // 是否显示标签,默认 true。
        },
        axisTick: { // 刻度(线)样式。
            show: false, // 是否显示刻度(线),默认 true。
        },
        splitLine: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                width: 30,
                shadowBlur: 0,
                color: [
                    [0.3, '#FF5E69'],
                    [0.7, '#37a2da'],
                    [1, '#29DCAF']
                ]
            }
        },
        data: [{
            value: 67,
            name: '将康率',
        }]

    }]
};