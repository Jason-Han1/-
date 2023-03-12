var bg = "/asset/get/s/data-1558682977554-T9P2HTfDR.png";

var ma = "/asset/get/s/data-1557476825388-EOu-7uwpi.png";

var tu = "/asset/get/s/data-1557476829205-pC1W8Hc32.png";

var wugui = "/asset/get/s/data-1557476832002-bIcP0vhB2.png";

let data = [{
        "name": "A",
        "speed": 100
    },
    {
        "name": "C",
        "speed": 268
    }
]
const canvas = document.querySelector('#chart-panel')
canvas.style.background = 'url("' + bg + '") no-repeat'
canvas.style.backgroundPositionX = 'center'
canvas.style.backgroundPositionY = 'center'
canvas.style.backgroundSize = '490px'
const [left, right] = data
setInterval(function() {
    data.map(v=>{
        v.speed = (Math.random()*268).toFixed(0)
    })
    option = {
    series: [{
            name: 'left',
            type: 'gauge',
            center: ['50%', '50%'],
            radius: '87%',
            startAngle: 268,
            // 防止一个0和一个1时全部填满红色，全部为268时没有间隔
            endAngle: 268 - 176 * (left.speed / 268),
            splitNumber: -1,
            z: 5,
            min: 0,
            max: 268,
            axisTick: {
                show: false
            },
            markLine: {
                symbol: 'none',
                lineStyle: {
                    type: 'solid'
                },
                symbolSize: 25,
                data: [
                    [{
                            x: '50%',
                            y: '32.5%',
                            lineStyle: {
                                width: 1,
                                color: '#d1d1d1'
                            }
                        },
                        {
                            x: '50%',
                            y: '67.5%'
                        }
                    ]
                ]
            },
            splitLine: {
                show: false
            },
            axisLine: {
                show: false, // 坐标轴线
                lineStyle: {
                    // 属性lineStyle控制线条样式
                    width: 26,
                    color: [
                        [268, getColorBySpeed(left.speed)]
                    ],
                    shadowColor: '#e9e9e9'
                }
            },
            pointer: {
                show: false
            },
            title: getTitleStyleObj(true, left.speed),
            detail: getDetailStyleObj(true, left.speed),
            data: [{
                value: left.speed,
                name: left.name
            }]
        },
        {
            name: 'right',
            type: 'gauge',
            center: ['50%', '50%'],
            startAngle: 450 - 180 * ((268 - right.speed) / 268),
            endAngle: 270,
            z: 5,
            splitNumber: -1,
            min: 268,
            max: 0,
            radius: '87%',
            axisLine: {
                show: false, // 坐标轴线
                lineStyle: {
                    // 属性lineStyle控制线条样式
                    width: 26,
                    color: [
                        [268, getColorBySpeed(right.speed)]
                    ],
                    shadowColor: '#e9e9e9'
                }
            },
            splitLine: {
                show: false
            },
            data: [{
                value: right.speed,
                name: right.name
            }],
            axisTick: {
                show: false
            },
            pointer: {
                show: false
            },
            title: getTitleStyleObj(false, right.speed),
            detail: getDetailStyleObj(false, right.speed)
        }
    ]
}
    myChart.setOption(option);
}, 1000);


function getDetailStyleObj(isLeft, speed) {
    const title = data[isLeft ? 0 : 1].name
    return {
        fontFamily: 'PingFang SC Regular',
        color: getTextColorBySpeed(speed),
        offsetCenter: [isLeft ? '-40%' : '40%', '15%'],
        formatter: function(paramas) {
            return '{number|' + paramas + '}{speed|m/m}' + '\n\n' + '{title| ' + title + '}'
        },
        width: 193 / 4,
        height: 235 / 4,
        rich: {
            number: {
                fontSize: 40,
                color: getTextColorBySpeed(speed)
            },
            speed: {
                fontSize: 25,
                color: '#333'
            },
            title: {
                fontSize: 40,
                color: '#333'
            }
        }
    }
}

function getTitleStyleObj(isLeft, speed) {
    const image = speed < 170 ? wugui : speed < 186 ? tu : ma
    return {
        fontFamily: 'PingFang SC Regular',
        fontSize: 40,
        color: 'transparent',
        offsetCenter: [isLeft ? '-40%' : '40%', '-25%'],
        formatter: '2',
        rich: {},
        width: 400 / 3,
        height: 260 / 3,
        backgroundColor: {
            image: image
        }
    }
}

function getColorBySpeed(speed) {
    if (speed < 170) {
        return new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
            offset: 0,
            color: '#eb3349'
        }, {
            offset: 1,
            color: '#ea162c'
        }], false)
    } else if (speed < 186) {
        return new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
            offset: 0,
            color: '#27e164'
        }, {
            offset: 1,
            color: '#20c556'
        }], false)
    } else if (speed > 185) {
        return new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
            offset: 0,
            color: '#509aff'
        }, {
            offset: 1,
            color: '#387bd6'
        }], false)
    }
}

function getTextColorBySpeed(speed) {
    if (speed < 170) {
        return '#f81129'
    } else if (speed < 186) {
        return '#0dd64f'
    } else if (speed > 185) {
        return '#5095f3'
    }
}