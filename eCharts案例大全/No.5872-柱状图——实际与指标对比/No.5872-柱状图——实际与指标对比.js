option = {
    backgroundColor: '#fff',
    title: {
        text: '柱状图——实际与指标对比'
    },
    legend: {
        top: 0,
        left: 20,
        show: false,
        icon: 'rect',
        orient: 'horizontal',
        data: ['A指标', 'B指标', 'A数量', 'B数量']
    },
    grid: {
        left: 30,
        right: 60,
        top: 40,
        bottom: '10%',
        containLabel: true
    },
    tooltip: {
        show: 'true',
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            shadowStyle: {
                color: 'rgba(240,242,245,0.3)',
                type: 'default'
            }
        },
        formatter: (params) => {
            const anum = (params[2].value - params[0].value) >= 0 ? (params[2].value - params[0].value) : 0
            const bnum = (params[3].value - params[1].value) >= 0 ? (params[3].value - params[1].value) : 0
            let result = '<div>待完成' + `${anum}` + '个A，' + `${bnum}` + '个B</br></div>'
            params.forEach(function(item) {
                result += item.marker + '  ' + item.seriesName + ' : ' + item.value + '</br>'
            })
            return result
        }
    },
    xAxis: [{
        type: 'category',
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#D9D9D9'
            }
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#000'
            }
        },
        data: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月"]
    }, {
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitArea: {
            show: false
        },
        splitLine: {
            show: false
        },
        data: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月"]
    }],
    yAxis: {
        type: 'value',
        axisLabel: {
            color: '#000000',
            textStyle: {
                fontSize: 12
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed',
                color: '#E8E8E8'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        }
    },
    series: [{
        name: "A指标",
        type: 'bar',
        xAxisIndex: 1,
        itemStyle: {
            color: '#E8E8E8'
        },
        barWidth: '24',
        data: [5, 4, 7, 5, 6, 1, 2, 3]
    }, {
        name: "B指标",
        type: 'bar',
        xAxisIndex: 1,
        itemStyle: {
            color: '#E8E8E8'
        },
        barWidth: '24',
        data: [6, 2, 1, 2, 3, 3, 1, 4]
    }, {
        name: "A数量",
        type: 'bar',
        barWidth: '24',
        itemStyle: {
            color: '#00FFFF'
        },
        data: [3, 2, 5, 6, 5, 1, 4, 1]
    }, {
        name: "B数量",
        type: 'bar',
        itemStyle: {
            color: '#1E90FF'
        },
        barWidth: '24',
        data: [4, 2, 3, 3, 2, 1, 0, 3]
    }]
}