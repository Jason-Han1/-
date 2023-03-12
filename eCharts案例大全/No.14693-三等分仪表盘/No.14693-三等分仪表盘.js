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
        startAngle: 180,
        endAngle: 0,
        min: 0,
        max: 100,
        radius: "80%",
        //splitNumber: 3,
        center: ["50%", "65%"],
        axisLine: {
            show: true,
            lineStyle: {
                width: 100,
                shadowBlur: 10,
                color: [
                    [0, 'transparent'],
                    [0.333333, '#0cb275'],
                    [0.343333, 'transparent'],
                    [0.666666, '#f09426'],
                    [0.676666, 'transparent'],
                    [1, '#e4101f']
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
            width: "3%",
            length: '90%',
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
        detail: {
            show: false
        },
        data: [{
            value: 42
        }]
    }]
}