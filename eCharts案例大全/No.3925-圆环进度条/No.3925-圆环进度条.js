var data = [{
        name: '25岁及以下',
        value: 10
    },
    {
        name: '25-35岁',
        value: 3
    },
    {
        name: '35-45岁',
        value: 1
    },
    {
        name: '45-55岁',
        value: 2
    },
    {
        name: '55岁以上',
        value: 1
    }
]
var arrValue = getArrayValue(data, 'value')
var sumValue = eval(arrValue.join('+'))
var optionData = getData(data)

function getArrayValue(array, key = 'value') {
    var res = []
    if (array) {
        array.forEach(function(t) {
            res.push(t[key])
        })
    }
    return res
}

function getData(data) {
    var res = {
        series: [],
        yAxis: []
    }
    for (let i = 0; i < data.length; i++) {
        res.series.push({
            name: '学历',
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: [95 - i * 12 + '%', 100 - i * 12 + '%'],
            label: {
                show: false
            },
            itemStyle: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                borderRadius: 30,
                borderColor: 'transparent',
                borderWidth: 45
            },
            data: [{
                    value: data[i].value,
                    name: data[i].name
                },
                {
                    value: sumValue - data[i].value,
                    name: '',
                    itemStyle: {
                        color: 'transparent'
                    },
                    tooltip: {
                        show: false
                    },
                    hoverAnimation: false
                }
            ]
        })
        res.series.push({
            name: '',
            type: 'pie',
            silent: true,
            z: 1,
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: [95 - i * 12 + '%', 100 - i * 12 + '%'],
            label: {
                show: false
            },
            itemStyle: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                borderWidth: 5
            },
            data: [{
                    value: 7.5,
                    itemStyle: {
                        color: 'transparent',
                        borderWidth: 0
                    },
                    tooltip: {
                        show: false
                    },
                    hoverAnimation: false
                },
                {
                    value: 2.5,
                    name: '',
                    itemStyle: {
                        color: 'rgba(0,0,0,0)',
                        borderWidth: 0
                    },
                    tooltip: {
                        show: false
                    },
                    hoverAnimation: false
                }
            ]
        })
        res.yAxis.push(((data[i].value / sumValue) * 100).toFixed(2) + '%')
    }
    return res
}
option = {
    color: ['#FFD383', '#77D5FF', '#85FBF7', '#F98181', '#A9FBD8'],
    series: optionData.series
}