option = {
    color: ['#35a2ff'],
    grid: {
        left: '8%',
        right: '10%',
        top: '12%',
        bottom: '18%',
        containLabel: true
    },
    yAxis: {

        axisLine: {
            show: true,
            lineStyle: {
                color: "#E1E3E4",
            }
        },

        axisLabel: {
            show: true,
            textStyle: {
                color: "#3E4956",

            }
        },
        axisTick: {
            show: false
        },
        data: ["86.61.92.11", "86.61.92.119", "86.61.92.119",
            "86.61.92.119", "86.61.92.119"
        ],

    },

    xAxis: {

        type: 'value',
        max: 400,
        splitNumber: 10,
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#E1E3E4",
            }
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#3E4956",

            }
        },
        splitLine: {
            show: false,
        }
    },
    series: [{
        name: '销量',
        type: 'bar',
        barWidth: '20%',
        label: {
            normal: {
                show: false,
            }
        },
        data: [50, 140, 230, 320, 380, ]
    }]
};