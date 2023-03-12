option = {
    title: {
        text: '',
        x: 'center',
        textStyle: {
            color: '#000',
            fontSize: 12,
            align: 'right',
        }
    },
    series: [{
        name: '',
        textStyle: {
            color: '#fff'
        },
        type: 'gauge',
        //仪表盘详情，用于显示数据。
        // 刻度
        splitNumber: 15,
        min: 0,
        max: 3,
        axisLine: { // 坐标轴线
            lineStyle: { // 属性lineStyle控制线条样式
                color: [
                    [0.2, '#3e8bff'],
                    [0.4, '#00d39f'],
                    [0.6, '#FFCA4B'],
                    [0.8, '#FF790D'],
                    [1.0, '#ff5a00'],
                    [1.2, '#CC3399'],
                    [1.4, '#FF6666'],
                    [1.6, '#6600FF'],
                    [1.8, '#3e8bff'],
                    [2.0, '#00d39f'],
                    [2.2, '#FFCA4B']
                ],
                width: 20
            }
        },
        axisTick: { // 坐标轴小标记
            show: true, // 属性show控制显示与否，默认不显示
            splitNumber: 5, // 每份split细分多少段
            length: 6, // 属性length控制线长
            lineStyle: { // 属性lineStyle控制线条样式
                color: '#eee',
                width: 1,
                type: 'solid'
            }
        },
        splitLine: { // 分隔线
            length: 20, // 属性length控制线长
            lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                color: 'auto'
            }
        },
        pointer: {
            width: 5
        },
        detail: {
            show: true,
            offsetCenter: [0, '50%'],
            textStyle: {
                fontSize: 16,
                color: '#000',
            }
        },
        data: [1]
    }]
};