option = {
    tooltip: {
        trigger: 'axis',
        backgroundColor: '#FFF',
        extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3)',
        textStyle: {
            color:'#000',
        },
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '0%',
        height:'100%',
        right: '0%',
        bottom: '0%',
        containLabel: true,
    },
    xAxis: {
        splitNumber: 6,
        splitLine:{
            show: true,
            color:'#A3A2B1',
            lineStyle: {
                type: "dashed"
             },
        },
        type: 'value',
        axisTick: {
            show: true, // 隐藏Y轴刻度
        },
        axisLine: {
            show: false, // 隐藏Y轴线段
            lineStyle: {
            
                color:'#8c8c8c',
            },
        },

    },
    yAxis: {
        axisLine: {
            lineStyle: {
                color:'#8c8c8c',
            },
        },
        axisTick: {
            show: true,
            alignWithLabel: true
        },
        type: 'category',
        data: ['巴西', '印尼', '美国', '印度', '中国','sadas' ],
    },
    series: [{
        name: '2011年',
        type: 'bar',
        textStyle: {
            color: '#8C8C8C',
        },
        itemStyle: {
            normal: {
                color:'rgba(90,219,227,0.8)',
            },
        },
        data: [18203, 23489, 29034, 104970, 131744,65465],
        barWidth: "50%"
    }]
    };