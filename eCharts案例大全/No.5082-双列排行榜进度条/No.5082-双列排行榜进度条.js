var data = [{
        name: 'item1',
        value: parseInt(Math.random() * 100)
    },
    {
        name: 'item2',
        value: parseInt(Math.random() * 100)
    },
    {
        name: 'item3',
        value: parseInt(Math.random() * 100)
    },
    {
        name: 'item4',
        value: parseInt(Math.random() * 100)
    },
    {
        name: 'item5',
        value: parseInt(Math.random() * 100)
    },
    {
        name: 'item6',
        value: parseInt(Math.random() * 100)
    },
    {
        name: 'item7',
        value: parseInt(Math.random() * 100)
    },
    {
        name: 'item8',
        value: parseInt(Math.random() * 100)
    },
    {
        name: 'item9',
        value: parseInt(Math.random() * 100)
    },
    {
        name: 'item10',
        value: parseInt(Math.random() * 100)
    }
]
var data = data.sort((a, b) => b.value - a.value)
var max = Math.max(...data.map(item => item.value))
var len = Math.ceil(data.length / 2)
var otherLen = data.length - len
var data1 = data.slice(0, len)
var data2 = data.slice(len)
console.log(data1)

option = {
    backgroundColor: 'rgba(0,0,0,.5)',
    color: '#409EFF',
    legend: {
        right: 10,
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: [{
        x: '5%',
        y: '5%',
        width: '40%',
        height: '100%'
        // containLabel: true
    }, {
        x2: '5%',
        y: '5%',
        width: '40%',
        height: otherLen / len * 100 + '%'
        // containLabel: true
    }],
    yAxis: [{
        type: 'category',
        gridIndex: 0,
        axisLine: {
            show: 0
        },
        axisLabel: {
            verticalAlign: 'bottom',
            align: 'left',
            padding: [0, 0, 15, 10],
            color: '#fff',
            fontSize: '16',
            formatter: (p, index) => {
                return '{index|' + (index + 1) + '} ' + p
            },
            rich: {
                index: {
                    color: '#26BCFF',
                    fontSize: '26',
                    fontWeight: 'bold'
                }
            }
        },
        axisTick: {
            show: 0
        },
        inverse: true,
        data: data1.map(item => item.name)
    }, {
        type: 'category',
        gridIndex: 0,
        axisLine: {
            show: 0
        },
        axisLabel: {
            verticalAlign: 'bottom',
            align: 'right',
            padding: [0, 0, 15, 10],
            textStyle: {
                color: '#fff',
                fontSize: '16',
            },
            formatter: params => {
                return '{num|' + params + '}%'
            },
            rich: {
                num: {
                    color: '#FF982E',
                    fontSize: '26',
                    fontWeight: 'bold'
                }
            }
        },
        axisTick: {
            show: 0
        },
        inverse: true,
        data: data1.map(item => item.value)
    }, {
        type: 'category',
        gridIndex: 1,
        axisLine: {
            show: 0
        },
        axisLabel: {
            verticalAlign: 'bottom',
            align: 'left',
            padding: [0, 0, 15, 10],
            color: '#fff',
            fontSize: '16',
            formatter: (p, index) => {
                return '{index|' + (index + len + 1) + '} ' + p
            },
            rich: {
                index: {
                    color: '#26BCFF',
                    fontSize: '26',
                    fontWeight: 'bold'
                }
            }
        },
        axisTick: {
            show: 0
        },
        inverse: true,
        data: data2.map(item => item.name)
    }, {
        type: 'category',
        gridIndex: 1,
        axisLine: {
            show: 0
        },
        axisLabel: {
            verticalAlign: 'bottom',
            align: 'right',
            padding: [0, 0, 15, 10],
            textStyle: {
                color: '#fff',
                fontSize: '26',
            },
            formatter: params => {
                return '{num|' + params + '}%'
            },
            rich: {
                num: {
                    color: '#FF982E',
                    fontSize: '26',
                    fontWeight: 'bold'
                }
            }
        },
        axisTick: {
            show: 0
        },
        inverse: true,
        data: data2.map(item => item.value)
    }],
    xAxis: [{
        show: 0,
        type: 'value',
        gridIndex: 0,
        max: max,
        axisLine: {
            show: 0
        },
        axisTick: {
            show: 0
        },
        splitLine: {
            show: 0
        }
    }, {
        show: 0,
        gridIndex: 1,
        max: max,
        type: 'value',
        axisLine: {
            show: 0
        },
        axisTick: {
            show: 0
        },
        splitLine: {
            show: 0
        }
    }],
    series: [{
        type: 'bar',
        barWidth: 10,
        xAxisIndex: 0,
        yAxisIndex: [0, 1],
        itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: '#72AEFF' // 0% 处的颜色
            }, {
                offset: 1,
                color: '#0084FF' // 100% 处的颜色
            }], false),
            barBorderRadius: 5
        },
        showBackground: true,
        backgroundStyle: {
            color: '#263877',
            barBorderRadius: 5,
        },
        data: data1
    }, {
        type: 'bar',
        barWidth: 10,
        xAxisIndex: 1,
        yAxisIndex: [2, 3],
        itemStyle: {
            barBorderRadius: 5
        },
        showBackground: true,
        backgroundStyle: {
            color: '#263877',
            barBorderRadius: 5,
        },
        data: data2
    }]
}
// background-image: linear-gradient(0deg, rgba(34,115,135,0.46) 0%, #3DE2ED 100%);