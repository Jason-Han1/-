const series = [
    {
        name: 'One',
        value: 230
    },
    {
        name: 'Two',
        value: 48
    },
    {
        name: 'Three',
        value: 111
    },
    {
        name: 'Four',
        value: 150
    }
]
const ringC = ['#66ccff', '#ffec8c', '#33ffbb', '#ffab66', '#7cff33', '#5470c6']
const color = [
    setColor('#9fe8ff', '#66ccff'),
    setColor('#fff7c0', '#ffec8c'),
    setColor('#62ffdf', '#33ffbb'),
    setColor('#ffd59f', '#ffab66'),
    '#7cff33',
    '#5470c6'
]
const centerX = '50%'

function setColor(start, end) {
    return {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
            {
                offset: 0,
                color: start // 0% 处的颜色
            },
            {
                offset: 1,
                color: end // 100% 处的颜色
            }
        ]
    }
}

let inter = null
let timer = null
let dataIndex = 0
let countToNum = series
.map(item => item.value)
.reduce((prev, next) => {
    return prev + next
}, 0)

let oldAllRate = 0
series.forEach((o, index) => {
    o.oldAllRate = oldAllRate.toFixed(1)
    if (index === series.length - 1) {
        o.rate = oldAllRate === 0 && o.value === 0 ? 0 : (100 - oldAllRate).toFixed(1)
    } else {
        o.rate = countToNum > 0 ? ((o.value / countToNum) * 100).toFixed(1) : 0
        oldAllRate += Number(o.rate)
    }
})

function setRing() {
    dataIndex = series.length
    clearInterval(inter)
    setPieData(100, 5, 100)
    timer = setTimeout(() => {
        setPieData(0, 5, 100)
        setCarousel()
    }, 2000)
}

function setCarousel(val = 0) {
    clearInterval(inter)
    dataIndex = val
    inter = setInterval(() => {
        if (dataIndex !== series.length) {
            setPieData(series[dataIndex].rate, dataIndex, series[dataIndex].oldAllRate)
            const i = dataIndex === series.length ? 0 : dataIndex
            const timeCar = setTimeout(() => {
                setPieData(0, i, Number(series[i].oldAllRate))

                const timeReset = setTimeout(() => {
                    setPieData(0, i, Number(series[i].rate) + Number(series[i].oldAllRate))
                    clearTimeout(timeReset)
                }, 500)

                clearTimeout(timeCar)
            }, 2000)
        }
        if (dataIndex === series.length) {
            setPieData(0, 0, 100)
            setRing()
        } else {
            dataIndex++
        }
    }, 3000)
}
function setPieData(v, i, start) {
    myChart.setOption({
        series: [
            {
                data: series
            },
            {
                startAngle:90 - start * 3.6,
                clockwise: true,
                data: [
                    {
                        value: v,
                        name: '',
                        // animationTypeUpdate: 'expansion',
                        itemStyle: {
                            color: color[i]
                        }
                    },
                    {
                        value: 100 - v,
                        name: '',
                        itemStyle: {
                            color: 'rgba(0,0,0,0)'
                        }
                    }
                ]
            }
        ]
    })
}

setCarousel()

option = {
    backgroundColor: '#0E1327',
    fontSize: 16,
    tooltip: {
        trigger: 'item',
        textStyle: {
            color: '#fff'
        },
        backgroundColor: 'rgba(16, 32, 40, 0.88)',
        borderRadius: 4,
        borderColor: '#20749e',
        formatter: params => {
            return params.marker + params.name + ': ' + params.value
        }
    },
    legend: {
        right: '0%',
        width: '10%',
        itemGap: 10,
        itemWidth: 14,
        itemHeight: 14,
        top: 'center',
        textStyle: {
            color: '#fff',
            rich: {
                a: {
                    fontSize: 12,
                    padding: [1, 0, 0, 0],
                    width: 85
                },
                b: {
                    fontSize: 10,
                    width: 55
                }
            }
        },
        data: series.map((o, i) => {
            o.itemStyle = {
                color: color[i]
            }
            return o
        })
    },
    series: [
        {
            type: 'pie',
            hoverAnimation: false,
            color: color,
            center: [centerX, '50%'],
            radius: ['43%', '70%'],
            startAngle: 90,
            avoidLabelOverlap: false,
            label: null,
            emphasis: null,
            labelLine: null,
            itemStyle: {
                borderWidth: 5, // 间距的宽度
                borderColor: 'rgba(0, 0, 0, 0.6)' //背景色
            },
            data: series
        },
        {
            type: 'pie',
            clockWise: true,
            hoverAnimation: false,
            center: [centerX, '50%'],
            radius: ['75%', '80%'],
            startAngle: 90,
            label: null,
            emphasis: null,
            labelLine: null,
            data: [
                {
                    value: 0,
                    name: ''
                },
                {
                    value: 100,
                    name: '',
                    itemStyle: {
                        color: 'rgba(0,0,0,0)'
                    }
                }
            ]
        }
    ]
};
