option = {
    backgroundColor: '#0E2A43',
   
    legend: {
        top: 20,
        textStyle: {
            color: '#fff',
        },
        data: ['政府方', '社会资本方']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
    },

    tooltip: {
        show: "true",
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params, ticket, callback) {
            if(params.length == 4){  //项目资本金约定情况
                return '社会资本方:'+ '<br>合同约定数:'+params[2].value+'万元'
                                    + '<br>实际到位数:'+params[0].value+'万元'
                      +'<br>政府方:'+ '<br>合同约定数:'+params[3].value+'万元'
                                    + '<br>实际到位数:'+params[1].value+'万元'
                                    debugger
            }
            if(params.length == 5){  //项目资本金约定情况
                return '社会资本方:'+ '<br>合同约定数:'+params[1].value[1]+'万元'
                                    + '<br>实际到位数:'+params[0].value[1]+'万元'
                      +'<br>政府方:'+ '<br>政府债券:'+params[4].value[1]+'万元'
                                    + '<br>银行贷款:'+params[2].value[1]+'万元'
                                    + '<br>其他:'+params[3].value[1]+'万元'
                                    debugger
            }
        }
    },
    yAxis: {
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#fff',
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#aaa',
            }
        },
    },
    xAxis: [{
            type: 'category',
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#fff',
                }
            },
            data: ['项目资本金约定情况', '项目建设资金筹集情况']
        }
        , {
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
            data: ['项目资本金约定情况', '项目建设资金筹集情况']
        },

    ],
    series: [
        //-------1
        {
            name: '社会资本方',
            type: 'bar',
            xAxisIndex: 0,
            barWidth:50,
            itemStyle: {
                normal: {
                    show: true,
                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#00FFE6'
                    }, {
                        offset: 1,
                        color: '#007CC6'
                    }]),
                    barBorderRadius: 50,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            data: [13]
        },
        {
            name: '社会资本方',
            type: 'bar',
            xAxisIndex: 1,
            itemStyle: {
                normal: {
                    show: true,
                    color: '#277ace',
                    barBorderRadius: 30,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            barWidth:50,
            z: 1,
            data: [15]
        },
        //-------2
        {
            name: '政府方',
            type: 'bar',
            xAxisIndex: 1,
            barWidth:50,
            z: 1,
            itemStyle: {
                normal: {
                    show: true,
                    color: '#277ace',
                    barBorderRadius: 30,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            data: [19]
        },
        {
            name: '政府方',
            type: 'bar',
            xAxisIndex: 0,
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#3023AE'
                    }, {
                        offset: 1,
                        color: '#C96DD8'
                    }]),
                    barBorderRadius: 50,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            barWidth:50,
            data: [11]
        },
        //-------3
        {
            name: '社会资本方',
            type: 'bar',
            xAxisIndex: 1,
            color: ['blue'],
            barWidth:50,
            z: 1,
            itemStyle: {
                normal: {
                    show: true,
                    color: '#277ace',
                    barBorderRadius: 30,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            data: [[1,12]]
        },
        
        {
            name: '社会资本方',
            type: 'bar',
            xAxisIndex: 0,
            barWidth:50,
            itemStyle: {
                normal: {
                    show: true,
                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#00FFE6'
                    }, {
                        offset: 1,
                        color: '#007CC6'
                    }]),
                    barBorderRadius: 50,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            data: [[1,9]]
        },
        
        //-------4
        {
            name: '政府方',
            type: 'bar',
            xAxisIndex: 1,
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#3023AE'
                    }, {
                        offset: 1,
                        color: '#C96DD8'
                    }]),
                    barBorderRadius: 50,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            barWidth:50,
            data: [[1,22]]
        }, 
        {
            name: '政府方',
            type: 'bar',
            xAxisIndex: 1,
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#3023AE'
                    }, {
                        offset: 1,
                        color: '#C96DD8'
                    }]),
                    barBorderRadius: 50,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            barWidth:50,
            data: [[1,22]]
        }, 
         //-------5
         {
            name: '政府方',
            type: 'bar',
            xAxisIndex: 1,
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#3023AE'
                    }, {
                        offset: 1,
                        color: '#C96DD8'
                    }]),
                    barBorderRadius: 50,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            barWidth:50,
            data: [[1,22]]
        },
         
         
        {
            name: '政府方',
            type: 'bar',
            xAxisIndex: 0,
            barWidth:50,
            data: []
        },
        //-------6
        {
            name: '政府方',
            type: 'bar',
            xAxisIndex: 0,
            barWidth:50,
            data: []
        },
        {
            name: '政府方',
            type: 'bar',
            xAxisIndex: 0,
            barWidth:50,
            data: []
        },
        
        
    ]
};