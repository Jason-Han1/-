var color = [
    [0.083, '#d60e03'],
    [0.167, '#f20e02'],
    [0.25, '#fa2f00'],
    [0.333, '#ec671c'],
    [0.417, '#fa5800'],
    [0.5, '#fa8700'],
    [0.583, '#ffbb00'],
    [0.667, '#fae000'],
    [0.75, '#fbe360'],
    [0.833, '#b4d43e'],
    [0.917, '#69d728'],
    [1, '#4db90d'],
];
option = {
    series: [{
            name: '大信用',
            type: 'gauge',
            radius: '70%',
            min: 350,
            max: 950,
            splitNumber: 12, //刻度数量
            startAngle: 180,
            endAngle: 0,
            axisLine: {
                lineStyle: {
                    color: color,
                    width: 15
                }
            },
            splitLine: {
                show: true,
            },
            axisTick: {
                show: false
            },
            pointer: {
                show: false
            },
            title: {
                show: false
            },
            axisLabel: {
                show: true,
                fontSize: 14
            },
            detail: {
                formatter: function() {
                    return "信用评价等级" + "极好"
                },
                offsetCenter: [0, '0'],
                fontSize: 14,
                fontWeight: 700
            },
            data: [{
                name: "信用评价等级",
                value: 900
            }]
        },
        {
            name: '信用等级',
            title: {
                color: "#444",
                fontSize: 16,
                offsetCenter: [0, '-55%']
            },
            type: 'gauge',
            radius: '45%',
            min: 360,
            max: 950,
            splitNumber: 0, //刻度数量
            startAngle: 180,
            endAngle: 0,
            axisLine: {
                show: false,
                lineStyle: {
                    color: color,
                    width: 6
                }
            },
            detail: {
                formatter: function() {
                    return "AAA"
                },
                offsetCenter: [0, '-30%'],
                fontSize: 35,
                fontWeight: 700
            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: false
            },
            pointer: {
                show: false
            },
            data: [{
                name: "信用评价等级",
                value: 900
            }]
        }
    ]
};