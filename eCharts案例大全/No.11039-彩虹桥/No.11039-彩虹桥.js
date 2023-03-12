var numbers = {
    "max": 150,
    "value": 118
};
var axislineColor = new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
        offset: 0,
        color: '#2E9CFE'
    },
    {
        offset: 1,
        color: '#BE2DF4'
    }
]);
option = {
    tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        feature: {
            restore: {},
            saveAsImage: {}
        }
    },
    series: [{
        min: 0,
        max: numbers.max,
        startAngle: 180,
        endAngle: 0,
        name: '业务指标',
        type: 'gauge',
        axisLabel: {
            show: false
        },
        detail: {
            formatter: '得分',
            color: '#333',
            fontSize: 14,
            offsetCenter: [0, '20%']
        },
        axisLine: {
            lineStyle: {
                width: 100,
                color: [
                    [numbers.value / numbers.max, axislineColor],
                    [1, '#bbb']
                ]
            }
        },
        pointer:{
            show: true,
            length: '50%',
            width: 20,
        },
        itemStyle:{
            color: '#bbb'
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        data: [{
            value: numbers.value
        }]
    }]
};