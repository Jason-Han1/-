var itemStyle = {
    normal: {
        opacity: 0.8,
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
    }
};

option = {
    backgroundColor: 'grey',
    color: [
        '#dd4444'
    ],
    legend: {
        y: 'top',
        data: ['圆', '方', '三角', '菱形'],
        textStyle: {
            color: '#fff',
            fontSize: 16
        }
    },
    grid: {
        x: '10%',
        x2: 150,
        y: '18%',
        y2: '10%'
    },
    xAxis: {
        type: 'value',
        name: '容量',
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#eee'
            }
        },
    },
    yAxis: {
        type: 'value',
        name: '数值',
        axisLine: {
            lineStyle: {
                color: '#eee'
            }
        },
        splitLine: {
            show: false
        }
    },
    visualMap: [
        {
            show: true,
            left: 'right',
            top: '10%',
            dimension: 1,
            min: 0,
            max: 250,
            itemWidth: 30,
            itemHeight: 120,
            calculable: true,
            precision: 0.1,
            text: ['圆形大小：数值'],
            textGap: 30,
            textStyle: {
                color: '#fff'
            },
            inRange: {
                symbolSize: [10, 80]
            },
            outOfRange: {
                symbolSize: [10, 80],
                color: ['rgba(255,255,255,.2)']
            },
            controller: {
                inRange: {
                    color: ['#c23531']
                },
                outOfRange: {
                    color: ['#444']
                }
            }
        }
    ],
    series: [{
            name: '圆',
            type: 'scatter',
            symbol: 'circle',
            itemStyle: itemStyle,
            data: [
                ['30', 30, 1.5],
                ['50', 180, 2.0]
            ]
        },
        {
            name: '方',
            type: 'scatter',
            symbol: 'rect',
            itemStyle: itemStyle,
            data: [
                ['30', 150, 1.5],
                ['60', 100, 2.0]
            ]
        },
        {
            name: '三角',
            type: 'scatter',
            symbol: 'triangle',
            itemStyle: itemStyle,
            data: [
                ['50', 20, 1.5],
                ['60', 150, 2.5]
            ]
        },
        {
            name: '菱形',
            type: 'scatter',
            symbol: 'diamond',
            itemStyle: itemStyle,
            data: [
                ['60', 110, 2.5],
                ['80', 170, 3.0]
            ]
        },
    ]
};