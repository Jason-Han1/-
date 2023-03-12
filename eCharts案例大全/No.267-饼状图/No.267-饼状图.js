const colors = ['#3c90ff', '#fff225', '#00aaff', '#33ffbb', '#ffec8c', '#ff9c3c', '#657aff', '#ffffff', '#ffab66', '#7cff33']
const series = [
    { name: '制造', value: 134 },
    { name: '餐饮', value: 0 },
    { name: '房地产', value: 4 },
    { name: '批发零售', value: 16 },
    { name: '医疗卫生', value: 210 },
    { name: '文化体育和娱乐', value: 5 },
    { name: '金融', value: 12 },
    { name: '国家行政机构', value: 130 },
    { name: '科学研究', value: 230 },
    { name: '社会团体', value: 58 }
]
const centerX = '40%'
const angle = 0

function total() {
    let count = 0
    series.forEach(o => {
        count += o.value
    })
    return count
}

function getCirlPoint(x0, y0, r, angle) {
    //获取圆上面某点的坐标(x0,y0表示坐标，r半径，angle角度)
    let x1 = x0 + r * Math.cos((angle * Math.PI) / 180)
    let y1 = y0 + r * Math.sin((angle * Math.PI) / 180)
    return {
        x: x1,
        y: y1
    }
}

function _pie1() {
    let data = []
    series.forEach((o, i) => {
        o.itemStyle = {
            normal: {
                borderWidth: 1,
                shadowBlur: 20,
                borderRadius: 20,
                borderColor: colors[i],
                shadowColor: colors[i]
            }
        }
        data.push(o, {
            value: total / 50,
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    color: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgba(0, 0, 0, 0)',
                    borderWidth: 0
                }
            }
        })
    })
    return data
}

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
    color: colors,
    legend: [
        {
            orient: 'vertical',
            right: '0%',
            itemGap: 20,
            itemWidth: 14,
            itemHeight: 14,
            top: 'center',
            textStyle: {
                color: '#fff'
            },
            data: series.slice(Math.floor(series.length / 2), series.length)
        },
        {
            orient: 'vertical',
            right: '15%',
            itemGap: 20,
            itemWidth: 14,
            itemHeight: 14,
            top: 'center',
            textStyle: {
                color: '#fff'
            },
            data: series.slice(0, Math.ceil(series.length / 2))
        }
    ],
    series: [
        {
            name: '',
            type: 'pie',
            clockWise: false,
            radius: ['60%', '70%'],
            center: [centerX, '50%'],
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    }
                }
            },
            data: _pie1()
        },
        {
            name: 'ring5',
            type: 'custom',
            coordinateSystem: 'none',
            renderItem: (params, api) => {
                return {
                    type: 'arc',
                    shape: {
                        // cx: api.getWidth() / 2,
                        cx: centerX,
                        cy: api.getHeight() / 2,
                        r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.45,
                        startAngle: ((0 + angle) * Math.PI) / 180,
                        endAngle: ((360 + angle) * Math.PI) / 180
                    },
                    style: {
                        stroke: {
                            type: 'linear',
                            x: 1,
                            y: 0.5,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: 'transparent' // 0% 处的颜色
                                },
                                {
                                    offset: 0.6,
                                    color: '#00eaff' // 100% 处的颜色
                                }
                            ]
                        },
                        fill: 'transparent',
                        lineWidth: 1
                    },
                    // style: api.style(),
                    silent: true
                }
            },
            data: [0]
        },
        {
            name: 'ring5',
            type: 'custom',
            coordinateSystem: 'none',
            renderItem: (params, api) => {
                // let x0 = api.getWidth() / 2
                let x0 = centerX
                let y0 = api.getHeight() / 2
                let r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.45
                let point = getCirlPoint(x0, y0, r, -95 + angle)
                return {
                    type: 'circle',
                    shape: {
                        cx: point.x,
                        cy: point.y,
                        r: 2.5
                    },
                    style: {
                        stroke: '#00eaff', //绿
                        fill: '#00eaff'
                    },
                    silent: true
                }
            },
            data: [0]
        }
    ]
};
