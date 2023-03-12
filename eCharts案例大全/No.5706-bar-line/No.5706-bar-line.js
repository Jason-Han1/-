const colorList = ["#9E87FF", '#73DDFF', '#fe9a8b', '#F56948', '#9E87FF']
option = {
    backgroundColor: '#fff',
    title: {
        text: '111',
        textStyle: {
            fontSize: 12,
            fontWeight: 400
        },
        left: 'center',
        top: '5%'
    },
    legend: {
        icon: 'circle',
        top: '5%',
        right: '5%',
        itemWidth: 6,
        itemGap: 20,
        textStyle: {
            color: '#556677'
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            label: {
                show: true,
                backgroundColor: '#fff',
                color: '#556677',
                borderColor: 'rgba(0,0,0,0)',
                shadowColor: 'rgba(0,0,0,0)',
                shadowOffsetY: 0
            },
            lineStyle: {
                width: 0
            }
        },
        backgroundColor: '#fff',
        textStyle: {
            color: '#5c6c7c'
        },
        padding: [10, 10],
        extraCssText: 'box-shadow: 1px 0 2px 0 rgba(163,163,163,0.5)'
    },
    grid: {
        top: '15%'
    },
    xAxis: [{
        type: 'category',
        data: ['北京', '上海', '广州'],
        boundaryGap:true,
        axisLine: {
            lineStyle: {
                color: '#DCE2E8'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            textStyle: {
                color: '#556677'
            },
            // 默认x轴字体大小
            fontSize: 12,
            // margin:文字到x轴的距离
            margin: 15
        },
        axisPointer: {
            label: {
                // padding: [11, 5, 7],
                padding: [0, 0, 10, 0],
                margin: 15,
                // 移入时的字体大小
                fontSize: 12,

            }
        },
    }],
    yAxis: [{
        type: 'value',
        splitNumber:4, 
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#DCE2E8'
            }
        },
        axisLabel: {
            margin:16,
            textStyle: {
                color: '#556677'
            }
        },
        splitLine: {
            show: false
        }
    }, {
        type: 'value',
        position: 'right',
        // splitNumber:5, 
        max:100,
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#556677'
            },
            formatter: '{value}'+'%'
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#DCE2E8'
            }
        },
        splitLine: {
            show: true,
            lineStyle:{
                type:'dashed'
            }
        }
    }],
    series: [{
            name: 'Adidas',
            type: 'bar',
            data: [10, 10, 30],
            symbolSize: 1,
            symbol: 'circle',
            smooth: true,
            yAxisIndex: 0,
            showSymbol: false,
            barWidth: 6,
            barGap:'50%',
            label:{
                show: true,
                position:'top'
            },
            itemStyle: {
                normal: {
                    barBorderRadius:3,
                    color: '#0DF3AB',
                    borderColor: '#0DF3AB'
                }
            }
        },
        {
            name: '123',
            type: 'line',
            data: [90, 80, 20],
            symbolSize: 1,
            yAxisIndex: 1,
            symbol: 'circle',
            smooth: true,
            showSymbol: false,
            lineStyle: {
                width: 2,

            },
            itemStyle: {
                normal: {
                    color: '#FECF43',
                    borderColor: '#FECF43'
                }
            }
        }
    ]
};