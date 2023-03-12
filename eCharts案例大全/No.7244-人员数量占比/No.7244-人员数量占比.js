var person_full = "image://" + "/asset/get/s/data-1592477780351-Yg2ojekAW.png";
var person = "image://" + "/asset/get/s/data-1592477852477-C1j75Abg1.png";


option = {
    backgroundColor: '#003366',
    title: {
        text: "杭州前后端人员占比",
        left: "center",
        y: 50,
        textStyle: {
            color: "#68d8fe",
            fontSize: 20
        }
    },
    grid: {
        left: "10%",
        right: "10%",
        top: "25%",
        bottom: "25%",
        width: "80%"
    },
    tooltip: {
        trigger: "item",
        textStyle: {
            fontSize: 14
        },
        formatter: "{b0}:{c0}"
    },
    xAxis: {
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    yAxis: [{
            type: "category",
            inverse: true,
            data: [
                '前端',
                '后端'

            ],
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: "#fff",
                    fontSize: 18
                }
            }
        },
        {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
                textStyle: {
                    color: '#ffffff',
                    fontSize: 18
                },
            },
            data: ["80%", "70%"]
        }

    ],
    series: [{
            type: "pictorialBar",
            barWidth: 100,
            symbol: person_full,
            symbolRepeat: "fixed",
            symbolMargin: 0,
            symbolClip: true,
            symbolSize: 50,
            data: [
                8000, 7000

            ],
            z: 2
        },
        {
            type: "pictorialBar",
            barWidth: 100,
            itemStyle: {
                normal: {
                    opacity: 0.3
                }
            },
            label: {
                normal: {
                    show: false
                }
            },
            animationDuration: 0,
            symbolRepeat: "fixed",
            symbolMargin: 0,
            symbol: person,
            symbolSize: 50,
            data: [
                10000,
                10000
            ],
            z: 1
        }
    ]
};