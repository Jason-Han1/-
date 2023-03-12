option = {
    title: {
        text: 'Awesome Chart'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            shadowStyle: {
                // color: 'rgba(150,150,150,0.1)',
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: 'rgba(218, 218, 218, 0)' // 0% 处的颜色
                    }, {
                        offset: 0.5, color: 'rgba(218,218,218,0.3)' // 50% 处的颜色
                    }, {
                       offset: 1, color: 'rgba(218, 218, 218, 0)' // 100% 处的颜色 
                    }],
                    global: false // 缺省为 false
                },
                opacity: 0.5
            }
        },
        formatter: function (params) {
            return ''
        }
    },
    xAxis: [{
        position: 'top',
        splitLine: {
            show: true,
            color: '#eee'
        },
        axisLabel: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    }, {
        position: 'top',
        offset: -26,
        splitLine: {
            show: false
        },
        axisLabel: {
            show: true,
            color: '#000',
            fontSize: 14
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        data: ['昨天', '今天', '周五', '周六', '周日', '周一', '周二']
    }, {
        position: 'top',
        offset: -50,
        splitLine: {
            show: false
        },
        axisLabel: {
            show: true
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        data: ['6日', '7日', '8日', '9日', '10日', '11日', '12日']
    }, {
        position: 'bottom',
        offset: -50,
        splitLine: {
            show: false
        },
        axisLabel: {
            show: true
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        data: ['6日', '7日', '8日', '9日', '10日', '11日', '12日']
    }, {
        position: 'bottom',
        offset: -26,
        splitLine: {
            show: false
        },
        axisLabel: {
            show: true
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        data: ['昨天', '今天', '周五', '周六', '周日', '周一', '周二']
    }],
    yAxis: {
        min: -30,
        max: 60,
        axisLabel: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
    },
    series: [{
        type: 'line',
        symbol: 'circle',
        symbolSize:1,
        hoverAnimation: false,
        smooth:true,
        label: {
            show: true,
            formatter: '{c}℃' ,
            offset: [0, -10]
        },
        data:[20, 26, 29, 29, 32, 29, 31]
    }, {
        type: 'line',
        symbol: 'circle',
        symbolSize:1,
        hoverAnimation: false,
        smooth:true,
        label: {
            show: true,
            position: 'bottom',
            formatter: '{c}℃' ,
            offset: [0, 10]
        },
        data:[15, 18, 19, 17, 18, 17, 18]
    }]
};