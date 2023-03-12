let data = []
let color = [
    '#0580F2',
    '#FAA732',
    '#E1575D',
    '#8B73CC',
    '#8CD123',
    '#4B53BA',
    '#429588',
    '#1CCADA'
]
for (let i = 0; i <= 7; i++) {
    let theta = i / 70 * 360
    let r = 5 * (1 + Math.sin(theta / 180 * Math.PI))
    data.push({
        itemStyle: {
            normal: {
                color: color[i]
            }
        },
        value: [r, theta]
    })
}
option = {
    backgroundColor: '#ffffff',
    color: ['rgba(5,128,242,0.2)'],
    polar: {},
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    angleAxis: {
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#CCCCCC'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#EEEEEE'
            }
        },
        axisLabel: {
            textStyle: {
                fontSize: 12,
                color: '#666666'
            }
        },
        startAngle: 0
    },
    radiusAxis: {
        axisTick: {
            show: true,
            lineStyle: {
                color: '#EEEEEE'
            }
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            formatter: '{value} %',
            textStyle: {
                fontSize: 12,
                color: '#666666'
            },
            margin: -13
        }
        // data: ['0', '20%', '40%', '60%', '80%']
    },
    series: [{
        coordinateSystem: 'polar',
        name: 'line',
        type: 'line',
        symbol: 'circle',
        symbolSize: [6, 6],
        areaStyle: {
            normal: {
                color: 'rgba(5,128,242,0.2)'
            }
        },
        data: data
    }]
};