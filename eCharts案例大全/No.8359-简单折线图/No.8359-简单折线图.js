    var data = []
    var datas = [{
        name: '1000名以上员工',
        value: 56
    }, {
        name: '60-100名员工',
        value: 30
    }, {
        name: '20-60名员工',
        value: 157
    }, {
        name: '20名一下员工',
        value: 75
    }]
    for (let i = 0; i < datas.length; i++) {
        data[i] = datas[i].value
    }
    option = {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        title: {
            show: false
        },
        tooltip: {
            trigger: 'item'
        },
        grid: {
            borderWidth: 0,
            top: '5%',
            left: '5%',
            right: '20%',
            bottom: '0%'
        },
        yAxis: {
            type: 'category',
            position: 'right',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                inside: false,
                textStyle: {
                    color: '#b3ccf8',
                    fontSize: '14',
                    fontFamily: 'PingFangSC-Regular'
                },
                formatter: function(val) {
                    return `${val}家`
                }
            },
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            },
            data: data
        },
        xAxis: {
            type: 'value',
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false
            }
        },
        series: [{
            name: '',
            type: 'bar',
            zlevel: 2,
            barWidth: '10px',
            data: datas,
            animationDuration: 1500,
            itemStyle: {
                normal: {
                    show: true,
                    color:new echarts.graphic.LinearGradient(
                        0,
                        0,
                        1,
                        0,
                        [{
                                offset: 0,
                                color: '#4734f8'
                            },
                            {
                                offset: 1,
                                color: '#54fcf1'
                            }
                        ],
                        false
                    ),
                    barBorderRadius: 10
                }
            },
            label: {
                normal: {
                    color: '#b3ccf8',
                    show: true,
                    position: [0, '-24px'],
                    textStyle: {
                        fontSize: 16
                    },
                    formatter: function(a, b) {
                        return a.name
                    }
                }
            }
        }],
        animationEasing: 'cubicOut'
    };