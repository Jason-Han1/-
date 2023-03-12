option = {
    tooltip: {
        formatter: '{a} <br/>{b} : {c}%'
    },
    toolbox: {
        feature: {
            restore: {},
            saveAsImage: {}
        }
    },
    series: [
        {
            name: '业务指标',
            type: 'gauge',
            detail: {formatter: '{value}%'},
            min: 0,
            max: 120,
    
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.58, 'orange'], [0.65, 'green'], [0.83, '#B56FB5'],[1, '#8C208C']],
                    width: 2,
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            data: [{value: 70, name: '完成率'}]
        }
    ]
};


