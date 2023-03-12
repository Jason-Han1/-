option = {
    title: {
        subtext: '近一周出库',
        subtextStyle: {
            color: '#686868',
            fontSize: 12,
        },
    },
    grid: {
        left: '4.9%',
        right: '2%',
        bottom: '3%',
        containLabel: true
    },
    tooltip: {
        // trigger: 'item',
        // axisPointer: { // 坐标轴指示器，坐标轴触发有效
        //     type: 'none', // 默认为直线，可选为：'line' | 'shadow'
        // }
        trigger: 'axis', //item
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    xAxis: {
        data: ['12月01日','12月02日','12月03日','12月04日','12月05日','12月06日','12月07日'],
        splitLine: {
            show: false
        }, //去除网格线
        splitArea: {
            show: false
        }, //保留网格区域
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#979797',
                width: 1.2, //这里是为了突出显示加上的
            },
            symbol: ['none', 'arrow'],
            symbolSize: [6, 12],
            symbolOffset: [0, 8]
        },
        axisLabel: {
            showMinLabel: true,
            textStyle: {
                color: '#686868'
            }
        },
    },
    yAxis: {
        splitLine: {
            show: false
        }, //去除网格线
        splitArea: {
            show: false
        }, //保留网格区域
        axisLine: {
            show: true,
            lineStyle: {
                color: '#979797',
                width: 1.2, //这里是为了突出显示加上的
            },
            symbol: ['none', 'arrow'],
            symbolSize: [6, 12],
            symbolOffset: [0, 8]
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#686868'
            }
        }
    },
    // dataZoom: [{//开启缩放
    //     type: 'inside'
    // }],
    series: { // For shadow
        type: 'bar',
        name: '数量',
        barWidth: 12, //柱图宽度
        animation: false,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1, [{
                            offset: 0,
                            color: '#6faafd'
                        },
                        {
                            offset: 0.5,
                            color: '#5891fd'
                        },
                        {
                            offset: 1,
                            color: '#5883EE'
                        }
                    ]
                ),
                //柱形图圆角，初始化效果
                barBorderRadius: [10, 10, 10, 10],
                label: {
                    // show: true,//是否展示
                    // textStyle: {
                    //     fontWeight:'bolder',
                    //     fontSize : '12',
                    //     fontFamily : '微软雅黑',
                    // }
                }
            },
            emphasis: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1, [{
                            offset: 0,
                            color: '#5883EE'
                        },
                        {
                            offset: 0.7,
                            color: '#5883EE'
                        },
                        {
                            offset: 1,
                            color: '#5883EE'
                        }
                    ]
                )
            }
        },
        data: [100,200,400,300,500,400,600,200]
    }
}