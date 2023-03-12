option = {
   
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#ddd'
            }
        },
        backgroundColor: 'rgba(255,255,255,1)',
        padding: [5, 10],
        textStyle: {
            color: '#7588E4',
        },
        extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)'
    },
    legend: {
        right: 20,
        orient: 'vertical',
        data: ['今日','昨日']
    },
    xAxis: {
        type: 'category',
        data: ['00:00','2:00','4:00','6:00','8:00','10:00','12:00','14:00','16:00','18:00','20:00',"22:00"],
        boundaryGap: false,
        splitLine: {
            show: true,
            interval: 'auto',
            lineStyle: {
                color: ['yellow']
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14
            }
        }
    },
    yAxis: {
        type: 'value',
        splitLine: {
            lineStyle: {
                color: ['red']
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: 'blue'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14
            }
        }
    },
    series: [{
        name: '今日',
        type: 'line',
        smooth: true,
        showSymbol: false,
        symbol: 'circle',
        symbolSize: 6,
        
        
        data: ['1200', '1400', '1008', '1411', '1026', '1288', '1300', '800', '1100', '1000', '1118', '1322'],
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0,  color: 'rgba(61,234,255, 0.9)'},
                       { offset: 1,  color: 'rgba(61,234,255, 0)'}
                    ], false)
            }
        },
        itemStyle: {
            normal: {
                color: '#3deaff',
                shadowBlur: 10,
                shadowColor: 'green',
                shadowOffset: [10,10,10,10]
            }
        },
        lineStyle: {
            normal: {
                width: 3
            }
        }
    }, ]
};