var value = 34;
var name = '扫码总次数';
var unit = '次';
var color = ['#04a299', '#1aebd0'];

option = {
    backgroundColor: '#060f4c',
    series: [
        {
            type: 'gauge',
            radius: '70%',
            splitNumber: 0,
            axisLine: {
                lineStyle: {
                    shadowColor: 'rgba(0, 255, 252, 0.3)',
                    shadowBlur: 10,
                    color: [[1, 'rgba(3, 27, 41, 0.5)']],
                    width: 35,
                },
            },
            axisLabel: { show: false },
            axisTick: { show: false },
            detail: { show: false },
            progress: { show: false },
            pointer: { show: false },
            splitLine: { show: false },
        },
        {
            type: 'gauge',
            radius: '70%', //刻度盘的大小
            min: 0,
            max: (Number(value) || '0') + 50,
            detail: {
                valueAnimation: true,
                formatter: function (v) {
                    return '{value|' + v.toFixed(0) + '}{unit| ' + unit + '}';
                },
                offsetCenter: [0, '5%'],
                fontFamily: 'SQ',
                fontSize: 14,
                rich: {
                    value: {
                        color: '#ffffff',
                        fontFamily: 'SQ',
                        fontSize: 40,
                        textAlign: 'right',
                    },
                    unit: {
                        color: '#ffffff',
                        textAlign: 'right',
                        padding: [15, 0, 0, 0],
                    },
                },
            },
            data: [
                {
                    value: value || 0,
                    itemStyle: {
                        color: {
                            //图形渐变颜色方法，四个数字分别代表，右，下，左，上，offset表示0%到100%
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 1, //从左到右 0-1
                            y2: 0,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: color[0],
                                },
                                {
                                    offset: 1,
                                    color: color[1],
                                },
                            ],
                        },
                    },
                },
            ],
            axisLabel: { show: false },
            progress: { show: true, width: 35 },
            pointer: { show: false },
            axisTick: {
                show: true,
                splitNumber: 10, //刻度的段落数
                lineStyle: {
                    color: '#4ea4a4',
                    width: 1, //刻度的宽度
                },
                length: -2, //刻度的长度
                distance: -15,
            },
            splitLine: { show: false },
            axisLine: {
                show: false,
                lineStyle: { width: 1, color: [[1, 'rgba(255,255,255,0)']] },
            },
        },
        {
            title: {
                color: '#ffffff',
                fontSize: 18,
                offsetCenter: [0, '95%'],
            },
            type: 'gauge',
            splitNumber: 0,
            startAngle: 0,
            endAngle: 0,
            splitLine: { show: false },
            axisLabel: { show: false },
            pointer: { show: false },
            detail: { show: false },
            data: [{ name: name || '' }],
        },
    ],
};
