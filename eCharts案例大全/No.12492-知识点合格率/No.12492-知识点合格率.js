option = {
    title: {
        text: '',
        subtext: ''
    },
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        left: '3%',
        top: '10%',
        containLabel: true
    },
    backgroundColor: '#fff',
    legend: {
        data: ['最高值', '当前班级']
    },
    calculable: true,
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLabel: {
            textStyle: {
                fontSize: 18
            }
        },
        interval: 0,
        data: ['at', 'bor', 'cat', 'dear', 'eye', 'four', 'get', 'hour', 'iea', 'juct', 'king', 'light']
    }],
    yAxis: {
        type: 'value'
    },
    series: [{
            name: '最高值',
            type: 'line',
            areaStyle: {
                normal: {
                    type: 'default',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(199, 37, 50,0.2)'
                    }, {
                        offset: 1,
                        color: 'rgba(199, 37, 50,0.2)'
                    }], false)
                }
            },
            markLine: { //数据标准线
                data: [{
                    name: '标准值为80', //数值名称
                    yAxis: 80 //数值大小
                }, ],
                label: {
                    normal: {
                        show: true, //是否显示数值
                        formatter:'合格率80%'
                    }
                },
                lineStyle: {
                    normal: {
                        color: 'green', //标准线颜色
                        width: 2 //标准线宽度
                    }
                },
            },
            smooth: true,
            itemStyle: {
                normal: {
                    areaStyle: {
                        type: 'default'
                    }
                }
            },
            data: [100, 90, 95, 100, 88, 85, 87, 79, 92, 94, 89, 85]
        },
        {
            name: '当前班级',
            type: 'line',
            areaStyle: {
                normal: {
                    type: 'default',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(19, 37, 250,0.2)'
                    }, {
                        offset: 1,
                        color: 'rgba(19, 37, 250,0.2)'
                    }], false)
                }
            },
            smooth: true,
            itemStyle: {
                normal: {
                    areaStyle: {
                        type: 'default'
                    }
                }
            },
            data: [50, 40, 35, 58, 45, 56, 60, 65, 37, 46, 54, 37]
        }
    ]
};