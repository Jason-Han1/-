option = {
    title: {
        show: false
    },
    grid: [{
        show: false,
        backgroundColor: 'rgba(0,0,0,0)',
        borderWidth: 0,
        y: "bottom"
    }],
    series: [{
        type: "gauge",
        startAngle: 225,
        endAngle: -45,
        min: 0,
        max: 10,
        radius: "20%",
        //splitNumber: 8,
        center: ["50%", "65%"],
        axisLine: {
            show: true,
            lineStyle: {
                width: 20,
                shadowBlur: 10,
                color: [
                    [0, 'transparent'],
                    [0.1, '#0AF3E6'],
                    [0.11, 'transparent'],
                    [0.2, '#00FFE2'],
                    [0.21, 'transparent'],
                    [0.3, '#09F5E6'],
                    [0.31, 'transparent'],
                    [0.4, '#16E6EA'],
                    [0.41, 'transparent'],
                    [0.5, '#3ED8F6'],
                    [0.51, 'transparent'],
                    [0.6, '#6AB3D4'],
                    [0.61, 'transparent'],
                    [0.7, '#86C8A3'],
                    [0.71, 'transparent'],
                    [0.8, '#A7E266'],
                    [0.81, 'transparent'],
                    [0.9, '#B3EC51'],
                    [0.91, 'transparent'],
                    [1, '#A8E367']
                ]
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        },
        pointer: {
            width: "6%",
            length: '60%',
            color: "black"
        },
        itemStyle: {
            normal: {
                color: "rgba(255, 255, 255, 0.8)",
                shadowBlur: 20
            }
        },
        title: {
            show: false
        },
        //仪表盘详情，用于显示数据。
        detail: {
            show: true,
            offsetCenter: [0, '70%'],
            color: '#00C1D1',
            formatter: function(params) {
                return params
            },
            textStyle: {
              fontSize: 40
            }
        },
        data: [{
            value: 4.2
        }]
    }]
}