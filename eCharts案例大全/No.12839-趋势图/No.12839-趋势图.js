option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line'
        }
    },
    legend: {
        x: 'right',
        icon:'rect',
        textStyle: {
            color: '#fff',
            fontSize: 12
        },
        right: '5%',
        top: '5%',
        data: ['系统风险', '站点风险',],
    },
    grid: { //图表的位置
        top: '10%',
        left: '5%',
        right: '5%',
        bottom: '5%',
        containLabel:true,
    },
    yAxis: [{
        name:"次数",
        type: 'value',
        splitLine: {
            show: false
        },
        axisLabel: {
            color: '#fff'
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#409EFF'
            }
        },
    }],
    xAxis: [{
        type: 'category',
        data: ['9-27', '9-27', '9-27', '9-27', '9-27', '9.27', '9.27'],
        axisLabel: {
            color: '#fff'
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#409EFF'
            }
        }
    }],
    series: [{
            name: '系统风险',
            type: 'line',
            data: [100, 120, 82, 70, 57, 240, 44],
            smooth: true,
            symbolSize: 6,
            itemStyle: {
                color: '#409EFF'
            }
        },
        {
            name: '站点风险',
            type: 'line',
            data: [57, 88, 68, 89, 74, 14, 300],
            smooth: true,
            symbolSize: 6,
            itemStyle: {
                color: '#08fcfe'
            }
        },
    ]
}