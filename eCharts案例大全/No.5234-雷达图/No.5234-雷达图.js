var fontSize = (val) => {
    return val
}

let indicator = [{
        text: 'a',
        max: 100
    },
    {
        text: 'b',
        max: 100
    },
    {
        text: 'c',
        max: 100
    },
    {
        text: 'd',
        max: 100
    },
    {
        text: 'e',
        max: 100
    }
]
option = {
    backgroundColor: '#012248',
    tooltip: {},
    legend: {
        data: ['1', '2'],
        icon: 'circle',
        top: '20%',
        // right: '-50%',
        // orient: 'vertical',
        itemWidth: fontSize(14),
        itemHeight: fontSize(14),
        itemGap: fontSize(14),
        textStyle: {
            color: "#dcdcdc",
            fontSize: fontSize(14),
        },
    },
    radar: [{
        indicator: indicator,
        center: ['50%', '50%'],
        // shape: 'circle',
        radius: "40%",
        // startAngle: 60,
        splitNumber: 4,
        name: {
            formatter: '{value}',
            textStyle: {
                color: 'rgba(0,254,255, 0.6)',
                fontSize: fontSize(16),
            }
        },
        nameGap: fontSize(10),
        splitArea: {
            areaStyle: {
                color: ['rgba(0,254,255, 0.2)',
                    'rgba(0,254,255, 0.4)', 'rgba(0,254,255, 0.6)',
                    'rgba(0,254,255, 0.8)', 'rgb(0,254,255,1)'
                ],
                shadowColor: 'rgba(0, 0, 0, 0.3)',
                shadowBlur: fontSize(10)
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(255, 255, 255, 0.5)'
            }
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(255, 255, 255, 0.5)'
            }
        }
    }],
    series: [{
        name: '雷达图',
        type: 'radar',
        label: {
            normal: {
                show: true,
                formatter: (params) => {
                    return params.value;
                },
                fontSize: fontSize(14)
            },
        },
        data: [{
            value: [10, 20, 30, 40, 50],
            name: '1',
            symbol: 'circle',
            symbolSize: 10,
            lineStyle: {
                normal: {
                    type: 'solid'
                }
            },
            itemStyle: {
                color: "#f08080"
            },
            areaStyle: {
                opacity: 0.7
            },
            z: 10
        }, {
            value: [50, 70, 80, 90, 100],
            name: '2',
            symbolSize: 5,
            lineStyle: {
                normal: {
                    type: 'dotted'
                }
            },
            itemStyle: {
                color: "#ebcc7b"
            },
            areaStyle: {
                opacity: 0.5
            },
            z: 2
        }]
    }]
}