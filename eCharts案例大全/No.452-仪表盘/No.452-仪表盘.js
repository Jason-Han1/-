var anchor = {
    show: false,
    showAbove: false,
    size: 25,
    itemStyle: {
        borderWidth: 60,
    },
};
var title = {
    show: true,
    offsetCenter: [0, '30%'],
    fontSize: 18,
};
var detail = {
    valueAnimation: true,
    fontSize: 24,
    lineHeight: 30,
    color: '#333',
    fontWeight: 'bold',
    offsetCenter: [0, '-30%'],
    formatter: function (value) {
        return value + '{a|%}';
    },
    rich: {
        a: {
            color: '#333',
            fontSize: 16,
            lineHeight: 30,
        },
    },
};
option = {
    backgroundColor: '#ccc',
    title: [
        {
            show: false,
            text: '总数{a|65256}人',
            left: 0,
            top: 20,
            textStyle: {
                fontWeight: 'bold',
                fontSize: '16',
                color: '#333',
                rich: {
                    a: {
                        color: '#319fff',
                        fontSize: 24,
                        lineHeight: 30,
                        padding: [0, 10],
                    },
                },
            },
        },
    ],
    grid: {
        top: 0,
    },
    series: [
        {
            type: 'gauge',
            startAngle: 160,
            endAngle: 20,
            center: ['50%', '70%'],
            radius: '100%',
            min: 0,
            max: 100,
            progress: {
                show: true,
                width: 30,
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        1,
                        0,
                        [
                            {
                                offset: 0,
                                color: '#49a8f1',
                            },
                            {
                                offset: 1,
                                color: '#59bae5',
                            },
                        ],
                        false
                    ),
                },
            },
            pointer: {
                show: true,
                icon: 'rect',
                offsetCenter: [0, '-75%'],
                length: '30%',
                showAbove: true,
                itemStyle: {
                    color: '#59bae5',
                },
            },
            axisLine: {
                lineStyle: {
                    width: 30,
                    color: [[1, '#fff']],
                },
            },
            axisTick: { show: false },
            splitLine: { show: false },
            axisLabel: {
                distance: -50,
                color: '#666',
                fontSize: 14,
                formatter: function (value) {
                    if (value === 0 || value === 50 || value === 100) {
                        return value;
                    }
                },
            },
            anchor: anchor,
            title: title,
            detail: detail,
            data: [
                {
                    value: 53.4,
                },
            ],
        },
    ],
};
