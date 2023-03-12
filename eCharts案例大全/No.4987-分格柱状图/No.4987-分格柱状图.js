var option = {
    legend: {
        show: false,
        left: "10%",
        textStyle: {
            color: "#bdc6dc",
            fontSize: 14
        },
        icon: 'circle',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: "{a0}:{c0}<br />{a1}:{c1}"
    },
    grid: {
        left: "5%",
        right: "1%",
        top: "5%",
        bottom: "5%"
    },
    xAxis: {
        data: [1, 2, 3, 4, 5],
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            margin: 15,
            textStyle: {
                color: '#000',
                fontSize: 12
            }
        },
    },
    yAxis: [{
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        }
    }],
    series: [{
            name: '',
            type: 'pictorialBar',
            symbol: "custom",
            tooltip: {
                trigger: 'none'
            },
            itemStyle: {
                normal: {
                    color: '#27307F'
                }
            },
            silent: true,
            symbolRepeat: 'fixed',
            symbolClip: false,
            // symbolBoundingData: [0, 100],
            symbolSize: ['50%', '20%'],
            z: -1,
            data: [100, 10, 10, 10, 10]
        },
        {
            name: '123',
            type: 'pictorialBar',
            symbol: "custom",
            itemStyle: {
                color: "#EBD389"
            },
            symbolRepeat: true,
            symbolClip: true,
            symbolSize: ['50%', '20%'],
            // symbolBoundingData: [0, 100],
            data: [12, 3, 4, 5, 6]
        },
        {
            name: '234',
            type: 'pictorialBar',
            symbol: "custom",
            itemStyle: {
                color: "#9BE1FF",
            },
            symbolRepeat: true,
            symbolClip: true,
            symbolSize: ['50%', '20%'],
            // symbolBoundingData: [0, 100],
            data: [10, 2, 3, 4, 5]
        }
    ]
}