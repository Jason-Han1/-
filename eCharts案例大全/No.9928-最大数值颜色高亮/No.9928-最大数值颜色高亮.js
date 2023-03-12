const data = [{
        value: 70,
        name: 2012,
    },
    {
        value: 165,
        name: 2013,
    },
    {
        value: 90,
        name: 2014,
    },
    {
        value: 40,
        name: 2015,
    },
    {
        value: 20,
        name: 2016,
    },
    {
        value: 0,
        name: 2017,
    },
]

option = {
    title: {
        text: '逐年生成个数',
        top: 10,
        left: 'center',
        textStyle: {
            fontSize: 16,
            color: "#1F78B4"
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '5%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        axisTick: {
            show: false,
            color: '#707070'
        },
        axisLabel: {
            textStyle: {
                fontSize: 14,
                color: '#4D4D4D'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#707070'
            }
        },
        data: data.map((v) => v.name)
    }],
    yAxis: {
        type: 'value',
        name: '单位（个）',
        nameTextStyle: {
            fontSize: 14,
            color: '#4D4D4D'
        },
        axisLabel: {
            textStyle: {
                fontSize: 12,
                color: '#4D4D4D'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#707070'
            }
        },
        axisTick: {
            show: false
        }
    },
    series: [{
        name: '直接访问',
        type: 'bar',
        barWidth: '20%',
        itemStyle: {
            normal: {
                color: function(params) {
                    const arr = data.map((i) => i.value)
                    const maxData = Math.max(...arr)
                    if (params.value < maxData) {
                        return "#ccc"
                    } else {
                        return "orange"
                    }
                }
            }
        },
        data: data.map((k) => k.value)
    }]
};