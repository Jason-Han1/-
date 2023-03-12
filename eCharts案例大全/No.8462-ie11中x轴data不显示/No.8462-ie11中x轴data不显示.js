var anchor = [
    ['1583769600', 34],
    ['1583856000', 34]
]
var tem = [
    [1583799281, 21.5],
    [1583799516, 21.6],
    [1583799876, 21.8],
    [1583800237, 22],
    [1583802156, 23.1],
    [1583802276, 22.8],
    [1583803715, 22.4]
]

function parseTime(time, cFormat) {
    if (arguments.length === 0) {
        return null
    }
    const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
    let date
    if (typeof time === 'object') {
        date = time
    } else {
        if (('' + time).length === 10) time = parseInt(time) * 1000
        date = new Date(parseInt(time))
    }
    const formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay()
    }
    const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
        let value = formatObj[key]
        if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
        if (result.length > 0 && value < 10) {
            value = '0' + value
        }
        return value || 0
    })
    return time_str
}
option = {
    xAxis: {
        type: 'value',
        boundaryGap: true,
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#f4ba74',
                opcity: 0.3
            },
            onZero: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            color: '#625f5f',
            rotate: -60,
            formatter: function(value, index) {
                let v = parseTime(value, '{h}:{i}')
                if (index > 0 && v === '00:00') {
                    v = '24:00'
                }
                return v
            }
        },
        interval: 3600,
        min: anchor[0][0],
        max: anchor[1][0]
    },
    yAxis: {
        type: 'value',
        name: '温度',
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#f4ba74',
                opcity: 0.3
            }
        }, // 坐标轴线
        axisLabel: {
            color: '#625f5f'
        }, // 设置刻度值
        nameTextStyle: {
            color: '#625f5f',
            align: 'left'
        },
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: '#f4ba74',
                opacity: 0.2
            }
        }
    },
    grid: {
        left: 20,
        right: 20,
        bottom: 15,
        top: 30,
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            animation: false,
            label: {
                backgroundColor: '#505765'
            }
        }
    },
    series: [{
        name: '温度',
        type: 'line',
        data: tem,
        // sampling: 'average',
        smooth: true,
        showSymbol: false,
        itemStyle: {
            normal: {
                color: '#458ff7', // 折线点的颜色
                lineStyle: {
                    color: '#458ff7' // 折线的颜色
                }
            }
        }
    }]
};