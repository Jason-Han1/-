option = {
    backgroundColor: ['#fff'],
    grid: {
        top: 10,
    },
    series: [{
        type: 'gauge',
        startAngle: 180,
        endAngle: 0,
        radius: '100%',
        center: ['50%', '80%'],
        axisTick: {
            show: false,
        },
        splitLine: {
            show: false,
        },
        axisLabel: {
            color: '#666',
            show: true,
            padding: [20, 0, 0, 0],
            fontSize: 12,
            distance: -20,
            formatter(value) {
                if (value === 0 || value === 100) {
                    return value;
                }
            }
        },
        detail: {
            offsetCenter: [0, -15],
            textStyle: {
                fontSize: 18,
                fontWeight: '',
                color: '#333'
            },
            formatter: function(value) {
                console.log(value);
                return value + 'tian';
            }
        },
        pointer: {
            show: false
        },
        itemStyle: {
            normal: {
                color: "#323232",
            }
        },
        min: 0,
        max: 100,
        axisLine: {
            lineStyle: {
                width: 40,
                color: [
                    [0.8, '#323232'],
                    [1, '#edeeef']
                ]
            }
        },
        data: [{
            name: '111',
            value: 99
        }]
    }]
}