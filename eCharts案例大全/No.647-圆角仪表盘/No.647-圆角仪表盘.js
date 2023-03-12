var option = {
    angleAxis: {
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        min: 0,
        max: 160,
        boundaryGap: ['0', '100'],
        startAngle: 225
    },
    radiusAxis: {
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
        data: ['a', 'b', 'c'],
        z: 10
    },
    polar: {
        radius: '80%'
    },
    series: [{
        type: 'bar',
        data: [, , 40],
        coordinateSystem: 'polar',
        barMaxWidth: 20,
        z: 2,
        name: '抢修项目',
        roundCap: true,
        color: '#1779ee',
        barGap: '-100%',
    }, {
        type: 'bar',
        data: [, , 110],
        z: 1,
        coordinateSystem: 'polar',
        barMaxWidth: 20,
        name: '警告事件',
        roundCap: true,
        color: '#29e2b0',
        barGap: '-100%',
    }, {
        type: 'bar',
        data: [, , 120],
        z: 0,
        silent: true,
        coordinateSystem: 'polar',
        barMaxWidth: 20,
        name: 'C',
        roundCap: true,
        color: '#F1F3F8',
        barGap: '-100%',
    }, {
        type: 'pie',
        z: -1,
        radius: [0, '50%'],
        itemStyle: {
          borderWidth: 0,
          shadowBlur:44,
          shadowColor:'rgba(14,73,206,0.23)'
        },
        data: [{
            value: 100,
            itemStyle: {
                color: '#fff',
            }
        }]
    }, {
        type: 'gauge',
        radius: '48%',
        max: 120,
        
        detail: {
            show: false,
            offsetCenter: [0, '90%'],
            fontSize: 48,
            color: '#333'
        },
        axisLine: {
            show: true,
            lineStyle: {
                width: 0,
            }
        },
        splitLine: {
            show: true,
            length: 15,
            lineStyle: {
                color: '#fff'
            }
        },
        axisTick: {
            show: true,
            lineStyle: {
                color: '#fff'
            }
        },
        axisLabel: {
            show: true,
            color: '#333',
            fontSize: 18,
        },
        pointer: {
            show: false,
            itemStyle: {
                color: '#333'
            }
        }
    }],
    legend: {
        show: true,
        icon: 'circle',
        itemWidth: 20,
        itemHeight: 20,
        textStyle: {
            fontSize: 16,
            color: '#c0c0c0'
        },
        bottom: 30,
        left: 'center',
        data: ['抢修项目', '警告事件']
    },
    tooltip: {
        show: false
    },

};