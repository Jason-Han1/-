data = [{
    'name': '省内',
    'value': 2287285
}, {
    'name': '省外',
    'value': 255746
}, {
    'name': '境外',
    'value': 233
}]
let color = ['#00C7FF', '#3068FF', '#1D38C9']
let seriesObj = []
let invisibleStyle = {
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
let showStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        color: 'rgba(0,99,187,0.3)',
        borderColor: 'rgba(0, 0, 0, 0)',
        borderWidth: 0
    }
}
let styleDatas = []
data.forEach(item => {
    styleDatas.push({
        value: item.value,
        dataObj: item,
        itemStyle: invisibleStyle
    })
})
if (data) {
    data.forEach((item, index) => {
        let n = index % 3
        let radius = 58 - index * 4
        // 实现数组对象的深拷贝
        let tempData = JSON.parse(JSON.stringify(styleDatas))
        tempData[index].itemStyle = {
            normal: {
                color: color[n]
            }
        }
        seriesObj.push(
            {
                name: '',
                type: 'pie',
                radius: ['35%', radius + '%'],
                hoverAnimation: false,
                z: 0,
                zlevel: 0,
                startAngle: 90,
                minAngle: 10,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: false
                    }
                },
                data: tempData
            }
        )
    })
}
let pieData1 = [
    { value: 41, show: true }, { value: 39, show: false }, { value: 41, show: true }, { value: 39, show: false }
]
let pieData2 = [
    { value: 2, show: true },
    { value: 60, show: false },
    { value: 2, show: true },
    { value: 12, show: false },
    { value: 2, show: true },
    { value: 12, show: false },
    { value: 2, show: true },
    { value: 12, show: false },
    { value: 2, show: true },
    { value: 12, show: false },
    { value: 2, show: true },
    { value: 60, show: false },
    { value: 2, show: true },
    { value: 60, show: false },
    { value: 2, show: true },
    { value: 12, show: false },
    { value: 2, show: true },
    { value: 12, show: false },
    { value: 2, show: true },
    { value: 12, show: false },
    { value: 2, show: true },
    { value: 12, show: false },
    { value: 2, show: true },
    { value: 60, show: false }
]
let pieData3 = [
    { value: 2, show: true },
    { value: 88, show: false },
    { value: 2, show: true },
    { value: 88, show: false },
    { value: 2, show: true },
    { value: 88, show: false },
    { value: 2, show: true },
    { value: 88, show: false }
]
let pieData4 = [
    { value: 1, show: true }
]
let pieData5 = [
    { value: 10, show: true },
    { value: 10, show: false },
    { value: 45, show: true },
    { value: 15, show: false },
    { value: 50, show: true },
    { value: 50, show: false },
    { value: 135, show: true },
    { value: 45, show: false }
]
let bgPieStyle = function (data, radius, startAngle) {
    let dataArr = data
    dataArr.forEach(item => {
        if (item.show) {
            item.itemStyle = showStyle
        } else {
            item.itemStyle = invisibleStyle
        }
    })
    seriesObj.push({
        type: 'pie',
        radius: radius,
        silent: true,
        startAngle: startAngle,
        hoverAnimation: false,
        labelLine: {
            normal: {
                show: false
            },
            emphasis: {
                show: false
            }
        },
        data: dataArr
    })
}
// 最里面的圈
bgPieStyle(pieData4, ['25%', '28%'], 90)
// 第三圈 有断开的两个弧线
bgPieStyle(pieData1, ['64%', '66%'], -45)
// 第三圈 短竖线 分割线
bgPieStyle(pieData2, ['64%', '70%'], 90)
// 长竖线 分割线
bgPieStyle(pieData3, ['66%', '96%'], 135)
// 第二圈 完整的细的那圈
bgPieStyle(pieData4, ['80%', '82%'], 90)
// 第二圈 有断开的较宽的那圈
bgPieStyle(pieData5, ['75%', '87%'], 60)
// 第一圈 断开的两端弧线
bgPieStyle(pieData1, ['96%', '98%'], 45)
let maxData = function () {
    let sum = 0
    let max = 0
    let flag = false
    data.forEach(item => {
        sum += item.value
        max = max > item.value ? max : item.value
    })
    data.forEach(item => {
        if (item.value / sum < 0.01) {
            flag = true
        }
    })
    return {
        max: max,
        flag: flag
    }
}
let percentData = maxData()
option = {
    backgroundColor: "#09384E",
    tooltip: {
        trigger: 'item',
        formatter: function (params) {
            if (params.data.dataObj) {
                let data = params.data.dataObj
                if (percentData.flag === true && data.value === percentData.max) {
                    params.percent -= 0.01
                    return `${data.name} : ${params.percent.toFixed(2)}%`
                } else if (params.percent <= 0.01) {
                    return `${data.name} : ≤0.01%`
                } else {
                    return `${data.name} : ${params.percent.toFixed(2)}%`
                }
            }
        }
    },
    series: seriesObj
}