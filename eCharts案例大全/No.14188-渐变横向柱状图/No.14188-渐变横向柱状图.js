option = {
    backgroundColor: '#000',
    color: ['#5490CB', '#CCCCCC'],
    tooltip: {
        trigger: 'item',
        formatter: '数量:{c0}',
        backgroundColor: 'rgba(255,255,255,0.7)',
        borderColor: '#458CDC',
        borderWidth: 1,
        borderRadius: 0,
        textStyle: {
            color: '#333',
        },
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        name: '（条）',
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        },
        splitLine: {
            show: false
        },
        max:70
    },
    yAxis: {
        type: 'category',
        data: ['涉枪舆情', '涉黄舆情', '涉赌舆情', '渉爆舆情', '重点人员舆情'],
        axisTick: {
            alignWithLabel: true
        },
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        },
        axisLabel: {
            color: '#fff',
            fontSize: 14
        },
        splitLine: {
            show: false
        }
    },
    series: [{
        type: 'bar',
        data: [70, 70, 70, 70, 70],
        barWidth: '30%',
        barGap: '200%',
        barMaxWidth: '40px',
        label: {
            normal: {
                show: false,
                position: 'right',
                formatter: '{c}',
                color: '#fff',
                fontSize: 14
            }
        },
        itemStyle: {
            normal: {
                barBorderRadius: 50,
                color: 'rgba(1,119,212,0.2)'
            }
        }
    },{
        type: 'bar',
        data: [22, 6, 7, 0, 37],
        barWidth: '30%',
        barGap: '-100%',
        barMaxWidth: '40px',
        label: {
            normal: {
                show: true,
                position: 'right',
                formatter: '{c}',
                color: '#fff',
                fontSize: 18
            }
        },
        itemStyle: {
            normal: {
                barBorderRadius: 50,
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: '#00A0FD'
                }, {
                    offset: 0.8,
                    color: '#B0DD5B'
                }], false)
            }
        }
    }],
};