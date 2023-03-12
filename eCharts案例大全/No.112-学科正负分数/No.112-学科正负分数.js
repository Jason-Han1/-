 let xData = ['语文', '数学', '英语', '地理', '物理', '化学', '生物']
let yData = [320, 302, -341, -374, 390, 450, -420]
let max = Math.max(...yData);
let emptyData = yData.map((v, i) => {
    let xColor = null
    if (v >= 0) {
        xColor = '#3B2C79'
    } else {
        xColor = '#F23B6B'
    }
    let item = {
        value: max,
        label: {
            formatter: '{a|' + v + '}',
            position: 'right',
            distance: 11,
            rich: {
                a: {
                    color: xColor,
                    fontSize: 16,
                    fontFamily: 'Semibold',
                    align: 'center',
                    verticalAlign: 'middle',
                }
            }
        }
    }
    return item
})
option = {
    grid: {
        left: '3.5%',
        right: '8%',
        bottom: '15%',
        containLabel: true
    },
    xAxis: [{
        type: 'value',
        axisLine: {
            show: true,
            symbol: ['arrow', 'arrow']
        },
        max: function (value) {
            return value.max
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#E6E6EB',
                type: 'dashed'
            },
        },
        axisLabel: {
            show: false,
        }
    }],
    yAxis: [{
        type: 'category',
        axisTick: {
            show: false
        },
        axisLabel: {
            fontFamily: 'Semibold',
            fontSize: '20',
            color: '#3B2C79',
        },
        data: xData
    },
    {
        type: "category",
        name: "",
        position: 'right',
        offset: 20,
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisLine: {
            show: false
        },
        data: xData
    }],
    series: [{
        type: 'bar',
        barWidth: 18,
        showBackground: true,
        backgroundStyle: {
            color: '#E6E6EB'
        },
        itemStyle: {
            borderRadius: [0, 2, 2, 0],
            color: function (params) {
                let valueNum = params.value
                if (valueNum >= 0) {
                    return '#FDB703'
                } else {
                    return '#F23B6B'
                }
            }
        },
        data: yData
    },
    {
        type: 'bar',
        barWidth: 10,
        yAxisIndex: 1,
        itemStyle: {
            color: 'rgba(225,225,225,0)',
        },
        label: {
            show: true,
            position: 'right',
        },
        data: emptyData
    }]
};
