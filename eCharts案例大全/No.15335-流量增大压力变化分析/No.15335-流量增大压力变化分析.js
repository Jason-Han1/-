option = {
    title: {
        text: '流量增大压力变化分析',
        left: '50%',
        textAlign: 'center'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#000'
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
        data: ['出口压力','进口压力']
    },
    xAxis: {
        type: 'category',
        name:'时间',
        data: ['0','5','10','15','20','25','30','35','40','45','50','55','60','65'],
        boundaryGap: false,
        splitLine: {
            show: true,
            interval: 'auto',
            lineStyle: {
                color: ['#D4DFF5']
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#609ee9'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 18
            }
        }
    },
    yAxis: {
        type: 'value',
        name:'压力/Mpa',
        splitLine: {
            lineStyle: {
                color: ['#D4DFF5']
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#609ee9'
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
        show:true,
        showSymbol: false,
        symbol: 'circle',
        symbolSize: 6,
        data: [8,8,5,9.5,7,8.5,7.8,8.1,7.95,8,8,8,8,8,8],
        
        itemStyle: {
            normal: {
                color: '#f7b851'
            }
        },
        lineStyle: {
            normal: {
                width: 3
            }
        }
    }, {
        name: '昨日',
        type: 'line',
        smooth: true,
        showSymbol: false,
        symbol: 'circle',
        symbolSize: 6,
        data: [15,15,14.8,15.2,14.95,15.02,15,15,15,15,15,15,15,15,15,15,15],
        
        itemStyle: {
            normal: {
                color: '#58c8da'
            }
        },
        lineStyle: {
            normal: {
                width: 3
            }
        }
    }]
};