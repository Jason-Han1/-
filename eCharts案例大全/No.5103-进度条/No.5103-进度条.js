// import echarts from 'echarts'

let charts = [{
        name: '车场类',
        value: 83,
        color: 'RGBA(66, 216, 139'
    },
    {
        name: '服务类',
        value: 64,
        color: 'RGBA(2, 161, 221'
    },
    {
        name: '租售类',
        value: 88,
        color: 'RGBA(236, 169, 82'
    }
]
let lineY = []
let lineY1 = []
let top10CityList=[]
let top10CityData=[]
for (var i = 0; i < charts.length; i++) {
    top10CityList.push(charts[i].name)
    top10CityData.push(charts[i].value)
    var data = {
        name: charts[i].name,
        color: charts[i].color + ')',
        value: charts[i].value,
        itemStyle: {
            normal: {
                show: true,
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: charts[i].color + ', 0.3)'
                }, {
                    offset: 1,
                    color: charts[i].color + ', 1)'
                }], false),
                barBorderRadius: 10
            },
            emphasis: {
                shadowBlur: 15,
                shadowColor: 'rgba(0, 0, 0, 0.1)'
            }
        }
    }
    var data1 = {
        name: charts[i].name,
        color: charts[i].color + ')',
        value: 100,
        itemStyle: {
            normal: {
                show: true,
                color: charts[i].color + ', 0.4)',
                barBorderRadius: 10
            },
            emphasis: {
                shadowBlur: 15,
                shadowColor: 'rgba(0, 0, 0, 0.1)'
            }
        }
    }
    lineY.push(data)
    lineY1.push(data1)
}

console.log(lineY)
option = {
    backgroundColor: '#000',
    title: {
        show: false
    },
    tooltip: {
        trigger: 'item'
    },
    grid: {
        borderWidth: 0,
        top: '10%',
        left: '15%',
        right: '15%',
        bottom: '3%'
    },
    // color: color,
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
            show: true,
            inside: false,
            color:'#ffffff',
            fontSize:16,
            margin: 60
        },
        data: top10CityList
    }, {
        inverse: true,
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            inside: false,
            textStyle: {
                color: '#b3ccf8',
                fontSize: '14',
                fontFamily: 'PingFangSC-Regular'
            },
            formatter: function(val) {
                return `${val}%`
            }
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
        max:100,
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
        zlevel: 10,
        barWidth: '10px',
        data: lineY,
        animationDuration: 1500,
        // label: {
        //     normal: {
        //         color: '#b3ccf8',
        //         show: true,
        //         position: [0, '-24px'],
        //         textStyle: {
        //             fontSize: 19
        //         },
        //         formatter: function(a, b) {
        //             return a.name
        //         }
        //     }
        // }
    },{
        name: '',
        type: 'bar',
        zlevel: 2,
        barWidth: '10px',
        data: lineY1,
            barGap:'-100%',
        animationDuration: 1500,
        label: {
            normal: {
                color: '#b3ccf8',
                show: false,
                position: [0, '-50%'],
                textStyle: {
                    fontSize: 16
                },
                formatter: function(a, b) {
                    return a.name
                }
            }
        }
    }],
    animationEasing: 'cubicOut'
}