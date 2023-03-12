option = {
    title: {
        text: '流量压力变化性能分析',
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
        name:'Qmax',
        data: ['0','','','','','','','','','','20','','','','','','','','','','40','','','','','','','','','','60','','','','','','','','','','80','','','','','','','','','','100'],
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
        max:20,
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
        name: '开阀压力',
        type: 'line',
        smooth: true,
        show:true,
        showSymbol: false,
        symbol: 'circle',
        symbolSize: 6,
        data: [16.5,14.7,14.55,13.23,13.38,12.75,12.85,12.43,12.55,12.25,12.29,12.1,12.21,11.96,12.05,11.81,11.88,11.78,11.88,11.75,11.79,11.65,11.48,11.76,11.19,11.61,11.68,11.30,11.89,11.71,11.81,11.40,11.63,11.49,11.36,11.49,11.28,11.43,11.06,11.15,10.91,10.99,10.75,10.83,10.70,10.43,10.35,10.03,9.56,8.51],
        
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
        name: '关阀压力',
        type: 'line',
        smooth: true,
        showSymbol: false,
        symbol: 'circle',
        symbolSize: 6,
        data: [16.5,15.39,15.58,14.90,14.79,14.60,14.85,14.46,14.73,14.35,14.70,14.36,14.60,14.69,14.26,14.52,14.18,14.48,14.08,14.30,14.09,14.25,14.00,14.26,13.43,14.28,14.68,13.90,14.29,13.91,14.23,13.80,13.59,13.79,13.16,13.38,12.88,12.96,12.82,12.85,12.61,12.72,12.22,12.33,11.90,11.88,11.25,11.33,10.26,8.51],
        
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