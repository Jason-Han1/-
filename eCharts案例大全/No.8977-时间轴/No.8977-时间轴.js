function generateData(count) {
    var baseValue = Math.random() * 1000
    var time = +new Date()
    var smallBaseValue

    function next(idx) {
        smallBaseValue = idx % 30 === 0 ?
            Math.random() * 700 :
            (smallBaseValue + Math.random() * 500 - 250)
        baseValue += Math.random() * 20 - 10
        return Math.max(
            0,
            Math.round(baseValue + smallBaseValue) + 3000
        )
    }

    var categoryData = []
    var valueData = []

    for (var i = 0; i < count; i++) {
        const category = echarts.format.formatTime('yyyy-MM-dd', time)
        categoryData.push(category)
        valueData.push(next(i).toFixed(2))
        time -= 24 * 60 * 60 * 1000
    }

    return {
        categoryData: categoryData.reverse(),
        valueDataOne: valueData.reverse(),
        valueDataTwo: valueData.reverse().map(item => item * 1.32),
        valueDataThree: valueData.reverse().map(item => item * 1.5)
    }
}

var count = 30
var data = generateData(count)

var timeToday = echarts.format.formatTime('yyyy-MM-dd', new Date())
var timeTodayBefore7 = echarts.format.formatTime('yyyy-MM-dd', new Date(Date.now() - 24 * 60 * 60 * 1000 * 7))

option = {
    title: {
        left: 70,
        top: -5
    },
    legend: {
        type: 'scroll',
        data: ['上岗人力', '出单人力', '在职人力']
    },
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        bottom: 90
    },
    xAxis: {
        data: data.categoryData,
        silent: false,
        splitLine: {
            show: false
        },
        splitArea: {
            show: false
        }
    },
    yAxis: {
        splitArea: {
            show: false
        }
    },
    series: [{
            name: '上岗人力',
            type: 'line',
            data: data.valueDataOne
        },
        {
            name: '出单人力',
            type: 'line',
            data: data.valueDataTwo
        },
        {
            name: '在职人力',
            type: 'line',
            data: data.valueDataThree
        }
    ]
};