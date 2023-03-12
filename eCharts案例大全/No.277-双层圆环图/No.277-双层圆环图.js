
/*
 * echart 不支持配置块之间的间隔，所以需要额外插入数据来生成间隔。
 * 外环的间隔要比内环大一些，想要达到这样的效果，需要每个块的数据减去一个固定的数值
*/

/*
 * 确认问题：
 * 1. hover选中时，内环颜色、外环颜色、字体颜色如何设置
 * 2. 外环的背景色是否都一样
 * 3. label 固定显示在外环的中间。如果要调整 label 离块的距离，需要调整外环的大小 
*/
const sourceData = [
    {
        name: '小学',
        value: 129
    },
    {
        name: '中学',
        value: 224
    },
    {
        name: '高中',
        value: 384
    },
    {
        name: '大专',
        value: 420
    },
    {
        name: '本科',
        value: 558
    },
    {
        name: '研究生',
        value: 238
    }
]

const total = sourceData.reduce((num, item) => {
    num += item.value
    return num
}, 0)

// 内环间隔距离
const inSplitWidth = 3
// 为了实现内环间隔距离，需要额外插入的数值。200 只是个系数，值越大，单位间隔的距离越小。
const inSplitValue = Math.floor(total / (200 / inSplitWidth))

// 外环间隔比内环间隔大的值
const itemSplitWidth = 2
// 外环间隔距离
const outSplitWidth = inSplitWidth + itemSplitWidth
// 为了实现外环间隔距离，需要额外插入的数值。
const outSplitValue = Math.floor(total / (200 / outSplitWidth))

// 内环数据的总数
const valueTotal = total + inSplitValue * sourceData.length

function getTextAngle(currentAngle, angle) {
    currentAngle = currentAngle + angle
    console.log('currentAngle', currentAngle)
    if (currentAngle <= 90) {
        return -currentAngle;
    } else if (currentAngle <= 180 && currentAngle > 90) {
        return 180 - currentAngle;
    } else if (currentAngle < 270 && currentAngle > 180) {
        return 180 - currentAngle;
    } else if (currentAngle < 360 && currentAngle >= 270) {
        return 360 - currentAngle;
    }
}

// 内环数据。在原数据的后面添加间隔数据（间隔块设置颜色透明）
const valueData = sourceData.reduce((arr, item) => {
    const currentTotal = arr.reduce((total, item) => {
        total += item.value
        return total
    }, 0)
    
    const currentAngle = 360 * (currentTotal / valueTotal)
    const angle = 360 * (item.value / valueTotal) / 2
    console.log('current  angle', currentAngle)
    arr.push({
        name: item.name,
        value: item.value,
        itemStyle: {
            
        },
        label: {
            lineHeight: 80,
            rotate: getTextAngle(currentAngle, angle)
        }
    }, {
        name: '',
        value: inSplitValue,
        itemStyle: {
            color: 'transparent',
            opacity: 0
        },
        label: {
            show: false
        },
        labelLine: {
            show: false
        }
    })
    return arr
}, [])


// 原数据需要减去的值（外环每块的数据都要比原数据少一点才能达到外环嵌在内环的效果）
const itemReduced = outSplitValue - inSplitValue
// 外环数据
const outValueData = sourceData.reduce((arr, item, index) => {
    const currentTotal = arr.reduce((total, item) => {
        total += item.value
        return total
    }, 0)
    
    const currentAngle = 360 * (currentTotal / valueTotal)
    const angle = 360 * (item.value / valueTotal) / 2
    
    arr.push({
        name: item.name,
        value: item.value - itemReduced,
        itemStyle: {
            // color: 'rgba(160, 60, 60, 0.3)'
        },
        label: {
            color: 'rgb(160, 60, 60)',
            position: 'inside',
            align: 'center',
            // lineHeight: 20,
            // verticalAlign: 'top',
            rotate: getTextAngle(currentAngle, angle)
        }
    }, {
        name: '',
        value: outSplitValue,
        itemStyle: {
            color: 'transparent',
            opacity: 0
        },
        label: {
            show: false
        },
        labelLine: {
            show: false
        }
    })
    
    return arr
}, [])

option = {
    title: {
        text: 'Awesome Chart'
    },
    series: [
        {
        type: 'pie',
        data: valueData,
        // startAngle: 0,
        label: {
            show: false,
            position: 'outside',
            align: 'center',
            verticalAlign: 'middle',
            // rotate: true,
            formatter(params) {
                // console.log('label params', params)
                return params.data.name
            }
        },
        labelLine: {
            show: false
        },
        emphasis: {
            scale: true,
            scaleSize: 20
        },
        blur: {
            itemStyle: {
                opacity: 1
            }  
        },
        // labelLayout(params) {
        //     return {
        //         x: params.rect.x,
        //         y: params.rect.y + params.rect.height / 2
        //     }  
        // },
        radius: ['60%', '80%'],
        itemStyle: {
            // borderWidth: 5,
            // borderColor: '#000',
            // borderRadius: [10, 20],
            // opacity: 0.5,
            // borderCap: 'square',
            // borderJoin: 'round'
        }
    },
    {
        type: 'pie',
        startAngle: -360 * (itemReduced / 2 / valueTotal) + 90,
        radius: ['79%', '95%'],
        itemStyle: {
            // color: 'rgba(160, 60, 60, 0.5)',
            opacity: 0.3,
            // borderWidth: 15,
            // borderColor: 'rgba(0, 0, 0, 0)'
        },
        label: {
            show: true,
            formatter(params) {
                return '{a|'+ params.data.name +'}'
            },
            rich: {
                a: {
                    lineHeight: 50,
                    color: 'red'
                }
            }
        },
        labelLine: {
            show: false,
            length: 10,
        },
        data: outValueData
    }
    ]
};
