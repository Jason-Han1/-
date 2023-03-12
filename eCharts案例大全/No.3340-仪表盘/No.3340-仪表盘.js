option = {
    series: [
        {
            name: '',
            type: 'gauge',
            min: 0,
            max: 100,
            radius: '36%', //图表尺寸
            center: ['50%', '50%'],
            startAngle: 180,
            endAngle: 0,
            axisLine: {
                show: false,
                lineStyle: {
                    width: 10,
                    color: [
                        [95.1 / 100, '#e95a5b'],
                        [1, '#cacdd7']
                    ]
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                    width: 6,
                    shadowBlur: 0,
                    color: 'auto'
                },
                length: 25,
                splitNumber: 5
            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: false
            },
            pointer: {
                show: true,
                length: "70%",
                width: "2%",
            },
            animationDuration: 4000,
            detail: {
                show: 0,
            },
            data: [{
                name: "",
                value: 95.1
            }]
        }
    ]
};