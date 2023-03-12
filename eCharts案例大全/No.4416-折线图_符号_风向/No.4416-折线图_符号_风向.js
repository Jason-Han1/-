option = {
    xAxis: {
        type: 'category',
        data: ['1', '2', '3', '4', '5', '6', '7', '8']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [
            820, // 简写
            {
                value: 932,
                // symbol:'none',
                symbol: 'path://M31 16l-15-15v9h-26v12h26v9z', // 风向符号
                symbolSize: 15, // 大小
                symbolOffset: [0, 0], // 偏移
                symbolRotate: 75, // 角度
                itemStyle: {
                    color: '#13227a',
                    size: 20,
                },
            },
            901, 934, 1290, 1330, 1320, 1150
        ],
        type: 'line',
        // 线样式
        lineStyle: {
            width: 2,
            color: '#888',
        },
        // 符号 默认
        // symbol: 'emptyCircle',
        symbol: 'none',
        symbolSize: 5,
        itemStyle: {
            color: '#666',
        },
    }]
};