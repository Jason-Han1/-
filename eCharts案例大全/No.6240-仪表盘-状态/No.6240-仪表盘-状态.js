var data = 80;
var grade = "好";
option = {
    title: {
        x: "center"
    },
    tooltip: {
        show: true,
    },
    series: [{
        name: '业务系统稳定性',
        type: 'gauge',
        min: 0,
        max: 100,
        axisLine: {
            show: true,
            lineStyle: {
                width: 10,
                shadowBlur: 0,
                color: [
                    [0.2, '#DC172A'],
                    [0.4, '#EA7F5F'],
                    [0.6, '#FFE11C'],
                    [0.8, '#6BCB8B'],
                    [1, '#6BCB8B']
                ]
            }
        },
        axisTick: {
            show: true,
            splitNumber: 1,
            lineStyle: {}
        },
        splitLine: {
            show: true,
            length: 10,
            lineStyle: { // 控制线条样式
                width: 1
            }
        },
        axisLabel: {
            show: false,
            formatter: function(e) {},
            textStyle: {
                fontSize: 12,
                fontWeight: ""
            }
        },
        pointer: {
            show: true,
            width: 2,
            length: '60%'
        },
        detail: {
            formatter: function(param) {
                return grade;
            },
            // offsetCenter: [0, 30],
            textStyle: {
                fontSize: 14
            }
        },
        data: [{
            name: '',
            value: [data]
        }]
    }]
};