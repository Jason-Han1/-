let now = new Date()
let curYear = now.getFullYear()
let curMonth = now.getMonth()

let start = new Date(0)
start.setYear(curYear - 5)
start.setMonth(curMonth)
start = start.getTime()

let i = 0
let months = []
let nums = []
while (i < 60) {
    let d = new Date(start)
    d.setMonth(curMonth + i)
    months.push(d)
    nums.push(Math.round(Math.random() * 400))
    i++
}

option = {
    tooltip: {
        show: true,
        trigger: 'axis'
    },
    dataZoom: [{
        show: true,
        height: 20,
        start: 80,
        end: 100,
        minSpan: 2.5,
        maxSpan: 20,
        labelFormatter: (params) => {
            let d = months[params]
            let month = d.getMonth()
            return (d.getFullYear() + '年') + (month + 1) + '月'
        }
    }],
    axisPointer: {
        type: 'line',
        label: {
            formatter: (params) => {
                params = new Date(params.value)
                return params.getFullYear() + '-' + (params.getMonth() + 1)
            }
        }
    },
    xAxis: {
        type: 'category',
        data: months,
        axisLabel: {
            formatter: (params) => {
                params = new Date(params)
                let month = params.getMonth()
                return (month + 1) + '月'
            }
        }
    },
    yAxis: {},
    series: [{
        type: 'bar',
        data: nums
    }]
}