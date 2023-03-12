classData = ['初三一班\n张老师', '初三二班\n李老师', '初三三班\n赵老师', '初三四班\n王老师'];
option = {
    backgroundColor: '#fff',
    legend: {
        data: ['班级平均得分率', '班级优秀率', '班级合格率']
    },
    grid:{
      right:'18%'  
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    xAxis: [{
        type: 'category',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#666666'
            }
        },
        data: classData
    }],
    yAxis: [{
        type: 'value',
        name: '份数',
        position: 'left',
        axisLine: {
            lineStyle: {
                color: '#666666'
            }
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
    }],
    series: [{
            name: '班级平均得分率',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2],
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#1f79ff' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#56c8ff' // 100% 处的颜色
                    }], false),
                    barBorderRadius: [6, 6, 0, 0],
                }
            },
            markLine: { //数据标准线
                data: [{
                    name: '标准值为5', //数值名称
                    yAxis: 2 //数值大小
                }],
                label: {
                    normal: {
                        show: true, //是否显示数值
                        formatter:'年级优秀率2'
                    }
                },
                lineStyle: {
                    normal: {
                        color: '#4b94ff', //标准线颜色
                        width: 2 //标准线宽度
                    }
                },
            },
        },
        {
            name: '班级优秀率',
            type: 'bar',
            data: [2.6, 5.9, 9.0, 26.4],
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#06b34e' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#42f1a2' // 100% 处的颜色
                    }], false),
                    barBorderRadius: [6, 6, 0, 0],
                }
            },
            markLine: { //数据标准线
                data: [{
                    name: '标准值为5', //数值名称
                    yAxis: 5 //数值大小
                }],
                label: {
                    normal: {
                        show: true, //是否显示数值
                        formatter:'年级平均得分率5'
                    }
                },
                lineStyle: {
                    normal: {
                        color: '#4bd07a', //标准线颜色
                        width: 2 //标准线宽度
                    }
                },
            },
        },
        {
            name: '班级合格率',
            type: 'bar',
            data: [2.0, 2.2, 3.3, 4.5],
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#f09520' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#f5d65c' // 100% 处的颜色
                    }], false),
                    barBorderRadius: [6, 6, 0, 0],
                }
            }
        }
    ]
};