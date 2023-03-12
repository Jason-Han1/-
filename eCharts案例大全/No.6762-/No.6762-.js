let lineData = [1000, 1600, 1100, 2000, 2000, 2200, 1900, 2450, 2350, 2400, 2550, 1500, 2000, 2000, 2200, 1900, 2450, 2450, 2350, 2400, 2550, 2450, 2450, 2350, 2400, 2550, 2300, 2330, 2300, 2630]
let xAxisData =  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30']
option = {
    backgroundColor: '#010f1c',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            },
        }
    },

    grid: {
        left: '3%',
        top: '10%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        name: 'h',
        nameTextStyle: { //单位的颜色
            color: '#8fd5f3'
        },
        boundaryGap: false,
        axisTick: {
            show: true,

            lineStyle: {
                color: '#b28850',
                width: 3
            }
        },
        axisLine: {

            lineStyle: {
                color: '#273f55'
            }
        },
        axisLabel: {
            interval: 0, //设置x轴的标签显示可自适应
            show: true,
            textStyle: {
                color: '#8fd5f3'
            }
        },
        data:xAxisData

    }],
    yAxis: [{
        type: 'value',
        name: '单位/kwh',
        nameTextStyle: { //y轴上方单位的颜色
            color: '#8fd5f3'
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: true, //y轴线
            lineStyle: {
                show: false,

            }
        },
        axisLabel: {
            // margin: 10,
            textStyle: {
                fontSize: 12,
                color: '#8fd5f3',
            }
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: ['#56859d'],
                width: 1,
                type: 'solid'
            }
        },


    }],
    series: [{
            name: '本月',
            type: 'line',
            symbol: 'circle',
            symbolSize: 2,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 2,
                    color: '#1ee0e4',
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(9,78,122,0.4)'
                        },
                        {
                            offset: 0.5,
                            color: 'rgba(9,78,122,0.4)'
                        },
                        {
                            offset: 0.8,
                            color: 'rgba(9,78,122,0.2)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(9,78,122,0)'
                        }
                    ], false),
                    // shadowColor: 'rgba(232,246,254,0.2)',
                    shadowBlur: 30
                }
            },
            itemStyle: {
                normal: {
                    color: '#1dc2ff',
                    borderColor: '#1dc2ff',
                    borderWidth: 0

                }
            },

            data:lineData ,
        },


    ]
}