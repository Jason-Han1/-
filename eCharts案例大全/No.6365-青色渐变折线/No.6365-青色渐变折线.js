option = {
    tooltip: {
        formatter: '{a}: <br/>{b} : {c}%',
        axisPointer: {
            lineStyle: {
                color: '#029aab'
            }
        },
        trigger: 'axis',
        backgroundColor: 'rgba(9,38,106,0.5)',
        borderWidth: 1,
        borderColor: '#00F5FF'
    },
    grid: {
        top: '29%',
        left: '6%',
        right: '12%',
        bottom: '6%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        splitLine: {
            show: false,
            lineStyle: {
                color: 'rgba(255,255,255,0.28)'
            }
        },
        boundaryGap: false,
        data: [8.1, 8.3, 8.4, 8.5, 8.6, 8.7],
        axisLabel: {
            textStyle: {
                color: '#FFFFFF',
                fontSize: '16'
            }
        },
        axisTick: {
            show: true,
            inside: true,
            lineStyle: {
                color: '#fff'
            }
        }
    }],
    yAxis: [{
        type: 'value',
        max: 100,
        interval: 25,
        splitLine: {
            show: false,
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            formatter: '{value} %',
            show: true,
            textStyle: {
                color: 'rgba(255, 255, 255, 0.5)',
                fontSize: '14'
            }
        }
    }, ],
    series: [{
        name: '在线趋势',
        type: 'line',
        smooth: true,
        showSymbol: true,
        color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0,
                color: 'rgba(55, 242, 255, 0.5)' // 0% 处的颜色
            }, {
                offset: 1,
                color: 'rgba(55, 242, 255, 0)' // 100% 处的颜色
            }],
            global: false // 缺省为 false
        },
        lineStyle: {
            color: 'rgb(55, 242, 255)'
        },
        itemStyle: {
            borderColor: 'rgb(55, 242, 255)',
            borderWidth: 3,
        },
        label: {
            show: true,
            distance: 10,
            color: '#bae0fd',
            formatter: '{c} %'
        },
        areaStyle: {},
        data: [56, 66, 55, 83, 22, 32, 92]
    }]
}