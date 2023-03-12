option = {
    backgroundColor:'#fff',
    grid: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    series: [{
        name: "",
        type: "gauge",
        center: ['50%', '65%'],
        radius: '100%',
        startAngle: 180,
        endAngle: 0,
        axisLine: {
            lineStyle: {
                color: [
                    [0.3, '#01AEBA'],
                    [0.33, '#fff'],
                    [1, '#5FC2FC'],
                ],
                width: 50
            }
        },
        axisLabel: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: false,
            length: 50,
            lineStyle: {
                width: 5,
                color: '#2C3638'
            }
        },
        splitNumber: 5,
        animationDuration: 4000,
    },
         {
            type: 'gauge',
            center: ['50%', '65%'],
            radius: '78%',
            splitNumber: 100,
            startAngle: 180,
            endAngle: 0,
            axisLine: {
                show: false,
                lineStyle: {  
                     color: [
                        [0.3, '#01AEBA'],
                        [1, '#5FC2FC'],
                    ],
                },
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: true,
                length: 22,
                lineStyle: {
                    color: 'auto',
                    width: 2.5,
                },
            },
            axisLabel: {
                show: false,
            },
            title: {
                show: false,
            },
            pointer: {
                show: false,
            },
        },
    ]
}