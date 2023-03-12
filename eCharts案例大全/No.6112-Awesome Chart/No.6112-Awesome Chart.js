function getBaseLog(x, y = 10) {
    const isNegativeNumber = x < 0 ? -1 : 1
    x = x * isNegativeNumber
    return Math.log(x) / Math.log(y) * isNegativeNumber
}

function getBaseData(num, x = 10) {
    const isNegativeNumber = num < 0 ? -1 : 1
    num = num * isNegativeNumber
    return parseFloat(Math.pow(x, num).toFixed(5)) * isNegativeNumber
}

function randomData(idx, now = new Date()) {
    const random = Math.random() * 1000 * (Math.random() * 10 > 5 ? 1 : -1)
    let value = idx * 20 + 10 + getBaseLog(random);
    if (Math.random() * 10 < 2) {
        value = null
        // return
    }
    // const now = new Date()
    return {
        name: now.toString(),
        value: [
            +now,
            value
        ]
    };
}

var seriesData = [];
const seriesNameList = [
    '轧制力(N)',
    '轧制速度(m/s)',
    '后张力(N)',
    '前张力(N)',
    '钢带出口厚度(mm)',
    '钢带入口厚度(mm)',
    '钢带2出口厚度(mm)',
    '钢带2入口厚度(mm)',
]
let productionLen = 0
for (var i = 1; i < 9; i++) {
    seriesData.push({
        name: seriesNameList[i - 1],
        type: 'line',
        showSymbol: false,
        hoverAnimation: false,
        data: []
    });
}
seriesData.push({
    name: '',
    type: 'line',
    yAxisIndex: 1,
    tooltip: {
        show: false
    },
    data: []
})
seriesData.push({
    name: '',
    type: 'line',
    xAxisIndex: 1,
    zlevel: -1,
    show: false,
    data: []
})
option = {
    title: {
        text: '实时参数录制'
    },
    legend: {
        show: true,
    },
    tooltip: {
        trigger: 'axis',
        formatter: function(params) {
            const textList = params.map(param => {
                const {
                    marker,
                    seriesName,
                    value,
                    seriesIndex: idx,
                } = param
                const paramValue = value[1]
                return `${marker} ${seriesName}: ${paramValue === null ? null : getBaseData(paramValue - 10 - 20 * idx)}`
            })
            textList.reverse()
            params = params[0];
            var date = new Date(params.name);
            const time = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} 
            ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
            textList.unshift(time)
            return textList.join('<br />');
        },
        axisPointer: {
            animation: false,
            snap: true,
        }
    },
    xAxis: [{
            type: 'time',
            splitLine: {
                show: false
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false, //  坐标轴刻度隐藏
            },
        },
        {
            type: 'category',
            name: '长度',
            axisTick: {
                show: false, //  坐标轴刻度隐藏
            },
            minorSplitLine: {
                show: false,
            },
            axisPointer: {
                show: false,
            },
            data: []
        }
    ],
    yAxis: [{
            type: 'value',
            splitLine: {
                show: false
            },
            show: false,
            scale: true,
            // max: (value) => {
            //     const range = value.max - value.min
            //     return value.max + range / 20
            // },
            // min: (value) => {
            //     const range = value.max - value.min
            //     return value.min - range / 20
            // },
            // splitNumber: 8,
            interval: 20,
            min: 0,
            max: 160,
            axisLabel: {
                show: false,
            },
        },
        {
            type: 'category',
            splitLine: {
                show: true
            },
            scale: true,
            interval: 20,
            position: 'left',
            axisTick: {
                show: false, //  坐标轴刻度隐藏
            },
            axisPointer: {
                show: false,
            },
            // min: 10,
            // max: 170,
            data: seriesNameList
        }
    ],
    series: seriesData
};

const interval = setInterval(function() {
    const ChartOption = myChart.getOption()
    const {
        xAxis
    } = ChartOption
    const xAxisData = xAxis[1].data
    const now = new Date()
    for (var i = 0; i < 8; i++) {
        const data = seriesData[i].data
        if (data.length > 20) {
            // clearInterval(interval)
            data.shift()
        }
        const seriesValueNew = randomData(i, now)
        if (seriesValueNew) {
            data.push(seriesValueNew)
        }
    }
    if (xAxisData.length > 20) {
        xAxisData.shift()
    }
    productionLen++
    xAxisData.push(productionLen)

    myChart.setOption({
        xAxis,
        series: seriesData
    });
}, 1000);