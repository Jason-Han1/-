// import echarts from 'echarts'
var charts = { // 按顺序排列从大到小
    cityList: ['首检'],
    cityData: [70, 60]
}
var top10CityList = charts.cityList
var top10CityData = charts.cityData
var color = ['#01c997', '#ff4747']

let lineY = []
for (var i = 0; i < charts.cityList.length; i++) {
    var x = i
    if (x > color.length - 1) {
        x = color.length - 1
    }
    var data = {
        name: charts.cityList[i],
        color: color[x],
        value: top10CityData[i],
        itemStyle: {
            normal: {
                show: true,
                color: '#fff',
                barBorderRadius: 10
            },
            emphasis: {
                shadowBlur: 15,
                shadowColor: 'rgba(0, 0, 0, 0.1)'
            }
        }
    }
    lineY.push(data)
}

console.log(lineY)
option = {
    backgroundColor: '#fff',
    title: {
        show: false
    },
    tooltip: {
        trigger: 'item'
    },
    grid: {
        borderWidth: 0,
        top: '10%',
        left: '5%',
        right: '5%',
        bottom: '3%'
    },
    color: color,
    yAxis: [{
        type: 'category',
        inverse: true,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false,
            inside: false
        },
        data: top10CityList
    }, {
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        //  offset:'[10,0]',
        axisLabel: {
            show: false,
            inside: true,
            textStyle: {
                color: '#7e7e80',
                fontSize: '20',
                fontFamily: 'PingFangSC-Regular',
                
            },
            margin :'60',
            // formatter: function(val) {
            //     return `合格率：{value}`
            // }
            formatter: '{value} kg'
        },
        splitArea: {
            show: false
        },
        splitLine: {
            show: false
        },
        data: top10CityData
    }],
    xAxis: {
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        }
    },
    series: [{
            name: '',
            type: 'bar',
            zlevel: 2,
            barWidth: '1px',
            data: lineY,
            label: {
                normal: {
                    color: '#7e7e80',
                    show: true,
                    position: [0, '-24px'],
                    textStyle: {
                        fontSize: 16
                    },
                    formatter: function(a, b) {
                        return a.name
                    }
                }
            }
        },
        {
            gridIndex: 0, //y轴所在的 grid 的索引
            name: '合格',
            type: 'bar',
            stack: '总量',
            barWidth: 30,
            label: {
                normal: {
                    show: true,
                    position: 'insideRight',
                    formatter: '{a} {c}'
                }
            },
            z: 10,
            data: [320]
        },
        {
            gridIndex: 0, //y轴所在的 grid 的索引
            name: '不合格',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            z: 5,
            data: [120]
        }
    ],
    animationEasing: 'cubicOut'
}