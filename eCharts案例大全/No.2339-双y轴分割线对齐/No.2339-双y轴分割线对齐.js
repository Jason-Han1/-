let dataSource = [
    ["product", "bsntq", "zje", "B"],
    ["库存材料", 102, 230, 236],
    ["半成品", 596, 250, 509],
    ["产成品", 459, 550, 356],
    ["在制品", 308, 785, 119],
    ["印度工厂", 120, 340, 550],
    ["工程施工", 230, 340, -650],
    ["库存存货", 540, 120, 760],
    ["发出商品", 560, -230, 550],
    ["美国", -1230, 456, 142],
    ["售后库存", 654, 450, -869]
]

option = {
    "grid": {
        "left": "3%",
        "right": "4%",
        "bottom": "3%",
        "containLabel": true
    },
   
    "title": {
        "left": "center",
        "show": true,
        "text": "双y轴分割线对齐",
        "textStyle": {
            "color": "#333",
            "fontSize": 18
        }
    },
    "xAxis": [{
        "type": "category"
    }],
    "yAxis": [{
        "type": "value"
    }, {
        "type": "value"
    }],
    "legend": {
        "show": true,
        "type": "scroll",
        "bottom": 0,
        "textStyle": {
            "fontSize": 12
        }
    },
    "series": [{
        "name": "上年同期",
        "type": "bar",
        "barGap": "30%"
    }, {
        "name": "增减额",
        "type": "bar",
        "barGap": "30%"
    }, {
        "name": "累计数",
        "type": "line",
        "yAxisIndex": 1
    }],
    "dataset": {
        "source": dataSource
    },
    "tooltip": {
        "axisPointer": {
            "type": "none"
        }
    }
}

// 刻度最大值
function yAxisMax(maxValue) {
    if (isNaN(maxValue / 1) || maxValue / 1 < 10) {
        return 10
    }
    const max = Math.ceil(maxValue) + '';
    const itemValue = Math.ceil(max / 5) + '';
    const mins = Math.ceil((itemValue / Math.pow(10, itemValue.length - 1)))
    const item = mins * Math.pow(10, itemValue.length - 1) + '';
    // item 需要是5的整数倍
    const res = Math.ceil(item / 5) * 5 * 5;
    return res
}

// 获取y轴 数值，上部分割数，下部分割数
function getYAxisConfig(dataSource, serieIndexs = []) {
    // y轴数值
    let yData = []
    dataSource.forEach((item, index) => {
        if (index > 0) { // 第一行数据不取值
            serieIndexs.forEach(serie => {
                yData.push(item[serie + 1] || 0)
            })
        }
    })
    // 绝对值最大值
    let absMax = yData.reduce((num1, num2) => {
        return Math.abs(num1) > Math.abs(num2) ? Math.abs(num1) : Math.abs(num2)
    })
    // 间隔值：默认分割段数 5
    let interval = yAxisMax(absMax) / 5

    // 取最大值
    let max = Math.max(...yData)
    // 取最小值
    let min = Math.min(...yData)

    let topSplitNumber = max > 0 ? Math.ceil(max / interval) : 0
    let downSplitNumber = min < 0 ? Math.ceil(Math.abs(min) / interval) : 0
    return {
        interval: interval,
        yData: interval,
        topSplitNumber: topSplitNumber,
        downSplitNumber: downSplitNumber
    }

}

// 获取各y轴对应的serie
function getYAxisIndexSeries(series, dataSource) {
    let yAxisIndexSeries = {}
    series.forEach((item, index) => {
        if (!item.yAxisIndex) { // 默认y轴
            if (!yAxisIndexSeries.hasOwnProperty("0")) {
                yAxisIndexSeries['0'] = [index]
            } else {
                yAxisIndexSeries['0'].push(index)
            }
        } else if (item.yAxisIndex) {
            let key = item.yAxisIndex + ""
            if (!yAxisIndexSeries.hasOwnProperty(key)) {
                yAxisIndexSeries[key] = [index]
            } else {
                yAxisIndexSeries[key].push(index)
            }
        }
    })

    if (Object.keys(yAxisIndexSeries).length > 1) { // 存在多条y轴
        splitLineAlign(dataSource, yAxisIndexSeries)
        // yAxisIndexSeries = {
        //     0: [0, 1],
        //     1: [2]
        // }
    }

}

// 解决分割线不对齐
function splitLineAlign(dataSource, yAxisIndexSeries) {
    let applyObj = {}
    let topSplitNumbers = []
    let downSplitNumbers = []
    for (let key in yAxisIndexSeries) {
        applyObj[key] = getYAxisConfig(dataSource, yAxisIndexSeries[key])
        topSplitNumbers.push(applyObj[key].topSplitNumber)
        downSplitNumbers.push(applyObj[key].downSplitNumber)
    }
    let topSplitNumber = Math.max(...topSplitNumbers)
    let downSplitNumber = Math.max(...downSplitNumbers)

    for (let key in applyObj) {
        if (option.yAxis[key]) {
            option.yAxis[key]['max'] = applyObj[key].interval * topSplitNumber
            option.yAxis[key]['min'] = applyObj[key].interval * downSplitNumber * (-1) // x轴下部分 负数
            option.yAxis[key]['interval'] = applyObj[key].interval
        }
    }
}



getYAxisIndexSeries(option.series, dataSource)