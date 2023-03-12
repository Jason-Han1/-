option = {
    series: [{
        name: '仪表盘',
        type: 'gauge',
        startAngle: 120,
        endAngle: 60,
        min: 0,
        max: 100,
        radius: '100%',
        splitNumber: 2,
        splitLine: { // 分隔线
            length: 20, // 属性length控制线长
            lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                color: 'auto'
            }
        },
        axisTick: { // 坐标轴小标记
            length: 15, // 属性length控制线长
            splitNumber: 5,
            lineStyle: { // 属性lineStyle控制线条样式
                color: 'auto'
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                width: 10,
                shadowBlur: 0,
                color: [
                    [0.2, '#00ccd0'],
                    [0.8, '#2cadff'],
                    [1, '#e75b64']
                ]
            }
        },
        axisLabel: {
            formatter: function(e) {
                switch (e + "") {
                    case "0":
                        return "小";
                    case "50":
                        return "中";
                    case "100":
                        return "大";
                    default:
                        return e;
                }
            },
            textStyle: {
                fontSize: 12,
                fontWeight: ""
            }
        },
        pointer: {
            show: true,
            width: 5,
            length: '80%'
        },

        data: [{
            value: 40
        }],
        detail: {
            show: 0
        }
    }]

}