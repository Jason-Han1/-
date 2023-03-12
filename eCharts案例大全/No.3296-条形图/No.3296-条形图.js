option = {
    backgroundColor: '#00265f',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        top: '3%',
        right: '3%',
        left: '3%',
        bottom: '5%'
    },
    xAxis: [{
        type: 'category',
        data: ['北京', '天津', '河北', '山西', '山东', '河南', '上海'],
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,0.12)'
            }
        },
        axisLabel: {
            margin: 10,
            color: '#e2e9ff',
            textStyle: {
                fontSize: 14
            },
        },
    }],
    yAxis: [{
        show:false,
        axisLabel: {
            formatter: '{value}',
            color: '#e2e9ff',
        },
        axisLine: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(255,255,255,0.12)'
            }
        }
    }],
    series: [{
        name: '正常',
        type: 'bar',
        data: [302, 450, 770, 203, 255, 188, 156],
        barWidth: '20%',
        itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0,132,238,1)' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: 'rgba(0,132,238,1)' // 100% 处的颜色
                }], false),
                barBorderRadius: [30, 30, 0, 0],
                shadowColor: 'rgba(0,132,238,1)',
                shadowBlur: 4
        },
        label: {
                show: true,
                position: 'insideTopRight',
                distance: 5,
                offset:[0, -20]
        }
    },{
        name: '异常',
        type: 'bar',
        data: [302, 450, 770, 203, 255, 188, 156],
        barWidth: '20%',
        itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(255,119,34,1)' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: 'rgba(255,119,34,1)' // 100% 处的颜色
                }], false),
                barBorderRadius: [30, 30, 0, 0],
                shadowColor: 'rgba(255,119,34,1)',
                shadowBlur: 4
        },
        label: {
                show: true,
                position: 'insideTopLeft',
                distance: 5,
                offset:[0, -20]
        }
    }]
};