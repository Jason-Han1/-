// ===================数据================
let data = new Array(50).fill(1).map((d) => {
    return {
        name: ~~(Math.random() * 400),
        value: ~~(Math.random() * 40),
        value3: ~~(Math.random() * 40),
        value2: ~~(Math.random() * 40)
    }
})

// =================右边要放的字段名及颜色===========
let items = [{
    key: 'value', color: "#419840"
}, {
     key: 'value2', color: "#7db9ae"
}, {
     key: 'value3', color: "#74a029"
}] 
    
data.forEach((d) => {
    let sum = 0
    items.forEach((i) => {
        sum += (d[i.key] || 0)
    })
    d.sum = sum
})

// =========================排序================
data.sort((a, b) => a.sum - b.sum)

// 
let yData = data.map((d) => d.name)

let itemSeries = items.map((d, i) => {
    let values = data.map((p) => p[d.key])
    return {
        type: 'bar',
        name: d.key,
        data: values,
        stack: 'all',
        xAxisIndex: 1,
        yAxisIndex: 1,
        label: {
                normal: {
                    show: true,
                    position: 'insideLeft'
                }
            },
            itemStyle: {
                normal: {
                    color: d.color
                }
            }
    }
})

option = {
    backgroundColor: '#000', // 背景
    tooltip : {
        trigger: 'axis',
        axisPointer : {  
            type : 'shadow'
        }
    },
    legend: {
        data: items.map((d) => d.key),
            textStyle: {
            color: '#fff'
       }
    },
    grid: [{
        left: '3%',
        right: '55%',
        bottom: '3%',
        containLabel: true
    }, {
        left: '45%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    }],
    xAxis:  [{
        type: 'value',
        inverse: true,
        splitLine: {
            show: false
        }
    }, {
        type: 'value',
        gridIndex: 1,
        splitLine: {
            show: false
        }
    }],
    yAxis: [{
        type: 'category',
        data: yData,
        axisLine: {
            show: false
        },
        axisLabel: {
        show: false
        },
        axisTick: {
            show: false
        }
    }, {
        type: 'category',
        data: yData,
        gridIndex: 1,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    }],
    series: [
        ...itemSeries, 
        {
            name: '总计',
            type: 'bar',
            data: data.map((d) => d.sum),
            xAxisIndex: 1,
            yAxisIndex: 1,
            stack: 'all',
            label: {
                normal: {
                    show: true,
                    position: 'insideLeft',
                    color: '#fff'
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgba(0,0,0,0)'
                }
            }
        },
        // ===================左边===================
        {
            type: 'bar',
            data: data.map((d) => d.sum),
            label: {
                normal: {
                    show: true,
                    position: 'left',
                    color: '#fff'
                }
            },
            itemStyle: {
                normal: {
                    color: '#7DB9AE'
                }
            }
        }
    ]
}