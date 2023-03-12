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
        name: '（件）',
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        },
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: 'category',
        data: ['学校管理', '旅馆管理', '危爆管理', '物流寄递页', '精神病人管理', '娱乐场所', '保安监管', '油气管理', '重点人员管理'],
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
        data: [320, 730, 815, 323, 630, 415, 723, 830, 715],
        barWidth: '30%',
        barGap: '200%',
        barMaxWidth: '40px',
        label: {
            normal: {
                show: true,
                position: 'right',
                formatter: '{c}',
                color: '#fff',
                fontSize:14
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