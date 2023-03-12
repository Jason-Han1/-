option = {
    backgroundColor: '#0B1822',
    title: {
        text: '安检情况统计',
        textStyle: {
            color: '#62c8cd',
            fontSize: '18',
        },
        x: 12,
        y: 5,
    },
    legend: {
        data: ['上客量', '下客量'],
        //data:['fff','sdfdjk'],
        textStyle: {
            color: '#a8aab0',
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 12,
        },
        itemWidth: 9,
        itemHeight: 9,
        color: '#fff',
        itemGap: 10,
        icon: 'rect',
        left: '66%',
        top: '10%',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        }
    },
    color: ['brown', 'blue'],
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    textStyle: {
        color: '#a8aab0',
        fontStyle: 'normal',
        fontFamily: '微软雅黑',
        fontSize: 12,
    },
    xAxis: [{
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        axisTick: {
            show: false
        }
    },{
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
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            },
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        },],
    yAxis: [{
        type: 'value',
        name: '乘客(人次)',
        nameTextStyle: {
            padding: [0, 0, 0, 5],
        },
        min: 0,
        max: 120,
        interval: 20,
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        }
    }],
    series: [{
            name: '上客量最大值',
            type: 'bar',
            tooltip:{show:false},
            xAxisIndex: 1,
            itemStyle: {
                normal: {
                    show: true,
                    color: '#212D36',
                    //barBorderRadius: 50,
                    borderWidth: 1,
                    borderColor: '#212D36',
                }
            },
            barWidth: '12',
            barGap: '0',
            data: [120, 120, 120,120,120,120,120]
        },{
            name: '下客量最大值',
            type: 'bar',
            xAxisIndex: 1,
            tooltip:{show:false},
            itemStyle: {
                normal: {
                    show: true,
                    color: '#212D36',
                    //barBorderRadius: 50,
                    borderWidth: 1,
                    borderColor: '#212D36',
                }
            },
            barWidth: '12',
           data: [120, 120, 120,120,120,120,120]
        },{
        name: '上客量',
        type: 'bar',
        barGap: '0',
        // xAxisIndex:1,
        barWidth: 12,
        data: [20, 80, 100, 60, 20, 70, 10],
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: '#2f4455'
                }, {
                    offset: 0.3,
                    color: '#2c433d'
                }, {
                    offset: 0.5,
                    color: '#304627'
                }, {
                    offset: 0.8,
                    color: '#42542b'
                }, {
                    offset: 1,
                    color: '#4d552b'
                }], false),
                borderWidth: 1,
                borderColor: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: 'rgba(133,188,247,0.9)'
                }, {
                    offset: 0.3,
                    color: 'rgba(92,167,148,0.9)'
                }, {
                    offset: 0.7,
                    color: 'rgba(143,212,0,0.9)'
                }, {
                    offset: 1,
                    color: 'rgba(252,255,18,0.9)'
                }], false),
            },
        },
    }, {
        name: '下客量',
        type: 'bar',
        barWidth: 12,
        // xAxisIndex:1,
        data: [100, 60, 80, 90, 30, 60, 16],
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: '#36506c'
                }, {
                    offset: 0.3,
                    color: '#36416a'
                }, {
                    offset: 0.5,
                    color: '#3e3069'
                }, {
                    offset: 0.8,
                    color: '#5f5270'
                }, {
                    offset: 1,
                    color: '#523371'
                }], false),
                borderWidth: 1,
                borderColor: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: '#4f7cb1'
                }, {
                    offset: 0.3,
                    color: '#4f4ba9'
                }, {
                    offset: 0.5,
                    color: '#6239a8 '
                }, {
                    offset: 0.7,
                    color: '#9e79b5 '
                }, {
                    offset: 1,
                    color: '#8b3bb8'
                }], false),
            },
        },
    },]
};