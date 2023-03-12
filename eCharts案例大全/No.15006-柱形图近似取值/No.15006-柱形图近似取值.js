function valFomat(val) {
    // body...
    if (val < 10) {
        return val * 2000
    } else if (val < 100) {
        return 20000 + (val - 10) * 200
        return val * 100
    } else if (val < 1000) {
        return 40000 + (val - 100) * 20
    } else if (val < 10000) {
        return 60000 + (val - 1000) * 2
    } else if (val < 100000) {
        return 80000 + (val - 10000) / 5
    }
}

var arr = [1200, 8, 356, 76666, 25647, 55, 6375]
var option = {
    color: ['#3398DB'],
    tooltip: {
        trigger: 'item',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
            alignWithLabel: true
        }
    }],
    yAxis: [{
        type: 'value',
        splitNumber: '6',
        min: 0,
        max: 100000,
        axisLabel: {
            formatter(value, index) {
                if (index === 0) {
                    return 0
                } else if (index === 1) {
                    return 10
                } else if (index === 2) {
                    return 100
                } else if (index === 3) {
                    return 1000
                } else if (index === 4) {
                    return 10000
                } else if (index === 5) {
                    return 100000
                } else {
                    return ''
                }
            }
        }
    }],
    series: [{
        type: 'bar',
        barWidth: '30%',
        data: [{
            value: valFomat(arr[0]),
            tooltip: {
                formatter(param) {
                    return arr[0]
                }
            }
        }, {
            value: valFomat(arr[1]),
            tooltip: {
                formatter(param) {
                    return arr[1]
                }
            }
        }, {
            value: valFomat(arr[2]),
            tooltip: {
                formatter(param) {
                    return arr[2]
                }
            }
        }, {
            value: valFomat(arr[3]),
            tooltip: {
                formatter(param) {
                    return arr[3]
                }
            }
        }, {
            value: valFomat(arr[4]),
            tooltip: {
                formatter(param) {
                    return arr[4]
                }
            }
        }, {
            value: valFomat(arr[5]),
            tooltip: {
                formatter(param) {
                    return arr[5]
                }
            }
        }, {
            value: valFomat(arr[6]),
            tooltip: {
                formatter(param) {
                    return arr[6]
                }
            }
        }]
    }]
};
myChart.setOption(option)