const payload = {
    data: {
        x: ['已覆盖', '未覆盖'],
        title: {
            value: '',
            unit: '',
            name: '透明现场情况'
        },
        data: [11, 22],
        color: ['#f2c96b', '#ed8a5d'],
        titleColor: {
            value: '',
            unit: '',
            name: 'rgba(255,255,255,0.7)'
        },
        legendShowValue: false
    }
}

const { x: dataX, title, data: dataY, color, legendShowValue, titleColor = {} } = payload.data

const getSum = arr => {
    return arr.reduce(function (prev, curr) {
        return Number(prev) + Number(curr)
    }, 0)
}

const total = getSum(dataY)
const data1 = []
dataY.forEach((item, index) => {
    data1.push({
        name: dataX[index],
        value: item,
        itemStyle: {
            color: color[index] || 'transparent'
        }
    })
})
data1.push({
    name: '',
    value: total,
    itemStyle: {
        color: 'transparent'
    }
})

option = {
    title: {
        text: '{a|' + title.value + '}{c|' + title.unit + '}\n{b|' + title.name + '}',
        x: 'center',
        y: '40%',
        textStyle: {
            fontSize: 12,
            rich: {
                a: {
                    color: titleColor.value,
                    fontSize: 18,
                    align: 'center'
                },
                c: {
                    color: titleColor.unit,
                    fontSize: 12,
                    height: 16,
                    align: 'center'
                },
                b: {
                    color: titleColor.name,
                    fontSize: 16,
                    height: 16,
                    align: 'center'
                }
            }
        }
    },
    legend: {
        icon: 'circle',
        bottom: '45%',
        itemWidth: 12,
        itemHeight: 6,
        align: 'left',
        textStyle: {
            color: '#77899c',
            fontSize: 12,
            rich: {
                a: {
                    color: '#ABD5FA'
                },
                c: {
                    color: '#f2c96b',
                    align: 'right',
                    padding: [0, 0, 0, 4]
                }
            }
        },
        formatter(name) {
            const obj = data1.find(item => item.name === name)
            if (obj) {
                if (legendShowValue) return `{a|${name}}{c|${obj.value} 个}`
                else return `{a|${name}}{c|${(obj.value / total).toFixed(4) * 100} %}`
            }
        }
    },
    series: [
        {
            type: 'pie',
            emphasis: {
                scale: false
            },
            label: {
                show: false
            },
            center: ['50%', '50%'],
            radius: ['0%', '40%'],
            startAngle: 180,
            data: [
                {
                    name: '',
                    value: 100,
                    itemStyle: {
                        color: 'rgba(226, 107, 67, 0.2)'
                    }
                },
                {
                    name: '',
                    value: 100,
                    itemStyle: {
                        color: 'transparent'
                    }
                }
            ]
        },
        {
            type: 'pie',
            emphasis: {
                scale: false
            },
            label: {
                show: false
            },
            center: ['50%', '50%'],
            radius: ['72%', '73%'],
            startAngle: 180,
            data: [
                {
                    name: '',
                    value: 100,
                    itemStyle: {
                        color: 'rgba(226, 107, 67, 0.2)'
                    }
                },
                {
                    name: '',
                    value: 100,
                    itemStyle: {
                        color: 'transparent'
                    }
                }
            ]
        },
        {
            type: 'pie',
            emphasis: {
                scale: false
            },
            label: {
                show: false
            },
            center: ['50%', '50%'],
            radius: ['50%', '70%'],
            startAngle: 180,
            data: [
                {
                    name: '',
                    value: 100,
                    itemStyle: {
                        color: 'rgba(226, 107, 67, 0.2)'
                    }
                },
                {
                    name: '',
                    value: 100,
                    itemStyle: {
                        color: 'transparent'
                    }
                }
            ]
        },
        {
            name: '',
            type: 'gauge',
            min: 0, //最小刻度
            max: 100, //最大刻度
            splitNumber: 20, //刻度数量
            center: ['50%', '50%'],
            radius: '50%',
            startAngle: 180,
            endAngle: 0,
            axisLine: {
                show: false
            }, //仪表盘轴线
            axisLabel: {
                show: false
            }, //刻度标签。
            axisTick: {
                show: true,
                splitNumber: 7,
                lineStyle: {
                    color: 'rgba(235, 185, 33, 1)', //用颜色渐变函数不起作用
                    width: 1
                },
                length: 0 //不显示的刻度长度
            }, //刻度样式
            splitLine: {
                show: true,
                length: 8, //显示的刻度长度
                lineStyle: {
                    color: 'rgba(235, 185, 33, 1)' //用颜色渐变函数不起作用
                }
            }, //分隔线样式
            detail: {
                show: false
            },
            pointer: {
                show: false
            }
        },
        {
            type: 'pie',
            label: {
                show: false
            },
            center: ['50%', '50%'],
            radius: ['57%', '63%'],
            startAngle: 180,
            data: data1
        }
    ]
}