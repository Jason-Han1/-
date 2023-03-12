//var colors = ['orange', '#d14a61', '#1E90FF'];
option = {
    backgroundColor: '#ffffff',
    title: [{
        text: '2017年诸城土地出让-月成交量分析（宗）',
        left: '28%',
        top: '1%',
        textAlign: 'center'
    }, {
        text: '2017年诸城土地出让-月成交面积分析（万平方米）',
        left: '78%',
        top: '1%',
        textAlign: 'center'
    }, {
        text: '2017年诸城土地出让-月成交金额分析（亿元）',
        left: '28%',
        top: '51%',
        textAlign: 'center'
    }, {
        text: '持续时间的概率分布函数',
        left: '78%',
        top: '51%',
        textAlign: 'center'
    }],
    tooltip: {
        trigger: 'axis'
    },
    grid: [{
        show: false,
        left: '3%',
        top: '5%',
        containLabel: true,
        width: '45%',
        height: '40%'
    }, {
        show: false,
        left: '53%',
        top: '5%',
        containLabel: true,
        width: '45%',
        height: '40%'
    }, {
        show: false,
        left: '3%',
        top: '55%',
        containLabel: true,
        width: '45%',
        height: '40%'
    }, {
        show: false,
        left: '53%',
        top: '55%',
        containLabel: true,
        width: '45%',
        height: '40%'
    }],
    // legend: [{
    //   data:['各幅值区间暂降频次', '暂降频次2'],
    //   x:'right',
    // },{data:['暂降频次3', '暂降频次4'],
    //      x:'right',
    // }],
    xAxis: [{
        gridIndex: 0,
        type: 'category',
        name: '2017年度',
        nameLocation: 'center',
        nameGap: '30',
        nameTextStyle: {
            fontSize: 16
        },
        //axisLabel:{  
        //             interval:0,//横轴信息全部显示  
        //            rotate:-30,//-30度角倾斜显示  
        //       }  ,
        axisTick: {
            alignWithLabel: true
        },
        data: ['2017.1', '2017.3', '2017.6', '2017.7', '2017.8', '2017.9', '2017.10', '2017.11', '2017.12' ]
    }, {
        gridIndex: 1,
        type: 'category',
        name: '月成交面积',
        nameLocation: 'center',
        nameGap: '30',
        nameTextStyle: {
            fontSize: 16
        },
        boundaryGap: false,
        //axisLabel:{  
        //             interval:0,//横轴信息全部显示  
        //            rotate:-30,//-30度角倾斜显示  
        //       }  ,
        axisTick: {
            alignWithLabel: true
        },
        data: ['2017.1', '2017.3', '2017.6', '2017.7', '2017.8', '2017.9', '2017.10', '2017.11', '2017.12']
    }, {
        gridIndex: 2,
        type: 'category',
        //axisLabel:{  
        //         interval:0,//横轴信息全部显示  
        //         rotate:-30,//-30度角倾斜显示  
        //   }  ,
        name: '月成交金额',
        nameLocation: 'center',
        nameGap: '30',
        nameTextStyle: {
            fontSize: 16
        },
        axisTick: {
            alignWithLabel: true
        },
        data: ['2017.1', '2017.3', '2017.6', '2017.7', '2017.8', '2017.9', '2017.10', '2017.11', '2017.12']

    }, {
        gridIndex: 3,
        type: 'category',
        //axisLabel:{  
        //         interval:0,//横轴信息全部显示  
        //         rotate:-30,//-30度角倾斜显示  
        //   }  ,
        name: '暂降持续时间（s）',
        nameLocation: 'center',
        nameGap: '30',
        nameTextStyle: {
            fontSize: 16
        },
        axisTick: {
            alignWithLabel: true
        },
        boundaryGap: false,
        data: ['0', '0.1', '0.25', '0.5', '1', 'inf']

    }],
    yAxis: [{
        gridIndex: 0,
        type: 'value',
        name: '月成交宗数',
        nameLocation: 'center',
        nameGap: '30',
        nameTextStyle: {
            fontSize: 16
        },
        axisLine: {
            lineStyle: {
                //color: colors[1]
            }
        },
        splitLine: {
            show: false
        }
    }, {
        gridIndex: 1,
        type: 'value',
        name: '月成交面积',
        nameLocation: 'center',
        nameGap: '40',
        nameTextStyle: {
            fontSize: 16
        },
        axisLine: {
            lineStyle: {
                //color: colors[0]
            }
        },
        splitLine: {
            show: false
        }
    }, {
        gridIndex: 2,
        type: 'value',
        name: '月成交金额',
        nameLocation: 'center',
        nameGap: '30',
        nameTextStyle: {
            fontSize: 16
        },
        axisLine: {
            lineStyle: {
                //color: colors[0]
            }
        },
        splitLine: {
            show: false
        },
        position: 'left'
    }, {
        gridIndex: 3,
        type: 'value',
        name: '概率分布',
        nameLocation: 'center',
        nameGap: '40',
        nameTextStyle: {
            fontSize: 16
        },
        axisLabel: {
            show: true,
            interval: 'auto',
            formatter: '{value} %'
        },
        axisLine: {
            lineStyle: {
                //color: colors[1]
            }
        },
        splitLine: {
            show: false
        },
        position: 'left'
    }],
    series: [{
            name: '成交宗数',
            type: 'bar',
            xAxisIndex: 0,
            yAxisIndex: 0,
            label: {
                normal: {
                    show: true,
                    position: 'top',

                }
            },
            data: [12, 21, 3, 1, 10, 8, 9, 20, 32]
        }, {

            name: '成交面积',
            type: 'line',
            smooth: true,
            barWidth: 25,
            xAxisIndex: 1 ,
            yAxisIndex: 1,
            symbolSize: 8, //拐点大小
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    color: '#0a398f',
                }
            },
            lineStyle: {
                normal: {
                    width: 4,
                    color: '#145de4'
                }
            },

            data: [22.73, 5.77, 3.60, 0.68, 16, 42.62, 36.84, 5.57, 128.68]
        }, {

            name: '成交金额',
            type: 'bar',
            xAxisIndex: 2,
            yAxisIndex: 2,
            label: {
                normal: {
                    show: true,
                    position: 'top',
                }
            },

            data: [3.86, 0.99, 0.74, 0.11, 3.01, 1.93, 2.38, 1.24, 57.27 ]
        }, {

            name: '持续时间概率分布',
            type: 'line',
            smooth: true,
            barWidth: 25,
            xAxisIndex: 3,
            yAxisIndex: 3,
            symbolSize: 8, //拐点大小
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    color: '#9BCA63',
                }
            },
            lineStyle: {
                normal: {
                    width: 4,
                    color: '#9BCA63'
                }
            },
            data: [0, 72.1, 82.8, 87.6, 89.6, 100]
        }

    ]
};