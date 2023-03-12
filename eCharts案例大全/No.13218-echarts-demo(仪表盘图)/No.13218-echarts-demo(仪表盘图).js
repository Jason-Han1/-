myChart.setOption({
    backgroundColor: 'rgba(35,43,46)',
    tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
    },
    series: [{
        name: '业务指标',
        type: 'gauge',
        detail: {
            formatter: '{value}%'
        },
        data: [{
                value: 60,
                name: ''
            }

        ],
        axisLine: { // 坐标轴线  
            lineStyle: { // 属性lineStyle控制线条样式  
                color: [
                    [0.2, 'rgba(0,171,228,1)'],
                    [0.8, 'rgba(72,247,182,1)'],
                    [1, 'rgba(0,171,228,1)']
                ]
            },

        },
    }],
});