  option = {
     backgroundColor: '#1C2129', //画布背景
    title: {
        text: '昨日平均拥堵指数',
        x: 'center',
        bottom: '20',
        textStyle: {
            color: '#fff',
            fontSize: 16,
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
        splitNumber: 10,
        min: 0,
        max: 10,
        axisLine: { // 坐标轴线
            lineStyle: { // 属性lineStyle控制线条样式
                color: [
                    [0.2, '#6F962B'],
                    [0.4, '#A1EC20'],
                    [0.6, '#EDED36'],
                    [0.8, '#F1CD16'],
                    [1.0, '#F13F16'],
                  
                ],
                width: 10            }
        },
        axisTick: { // 坐标轴小标记
            show: true, // 属性show控制显示与否，默认不显示
            splitNumber: 5, // 每份split细分多少段
            length: 15, // 属性length控制线长
            lineStyle: { // 属性lineStyle控制线条样式
                color: '#eee',
                width: 1,
                type: 'solid'
            }
        },
        splitLine: { // 分隔线
            length: 15, // 属性length控制线长
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
                color: '#6F962B',
            }
        },
        data: [0.24]
    }]
};