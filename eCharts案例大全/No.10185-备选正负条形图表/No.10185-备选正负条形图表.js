option = {
    backgroundColor: '#222',
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['支出', '收入'],
        textStyle: {
            color: '#fff',
            fontWeight: 300,
            fontSize: 14,
            fontFamily: 'PingFangSC'
        }
    },
    grid: [{
        height: 400,
        width: 510
    },{
        height: 400,
        width: 520
    }, {
        width: 510,
        top: 85,
        height: 375
    }],
    xAxis : [
        {
            type : 'value',
            axisLine: {
                lineStyle: {
                    color: '#44FCF7'
                }
            },
            axisLabel: {
                color: '#06D3CD',
                fontWeight: 300,
                fontSize: 14,
                fontFamily: 'PingFangSC'
            },
            axisTick: {
                inside: true,
                lineStyle: {
                    color: '#44FCF7'
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#00566D'
                }
            }
        },{
            gridIndex: 1,
            axisLine: {
                lineStyle: {
                    color: '#44FCF7'
                }
            }
        }, {
            gridIndex: 2,
            axisLine: {
                lineStyle: {
                    color: '#44FCF7'
                }
            }
        }
    ],
    yAxis : [
        {
            type : 'category',
            axisTick : {show: false},
            axisLabel: {
                color: '#06D3CD',
            },
            axisLine: {
                lineStyle: {
                    color: '#3697AD'
                }
            }
        },{
            gridIndex: 1,
            axisLine: {
                lineStyle: {
                    color: '#00566D'
                }
            }
        }, {
            gridIndex: 2,
            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
            axisTick: {
                lineStyle: {
                    color: '#44FCF7'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#00566D'
                }
            },
            axisLabel: {
                color: '#06D3CD',
                formatter: (params)=>{
                    return '{marginTop| '+params+'}'
                },
                rich: {
                    marginTop: {
                        padding: [0, 0, -28, 0],
                        fontWeight: 300,
                        fontSize: 14,
                        fontFamily: 'PingFangSC'
                    }
                }
            }
        }
    ],
    series : [
        {
            name:'收入',
            type:'pictorialBar',
            stack: '扫描量',
            symbolRepeat: 'fliex',
            symbolSize: 10,
            itemStyle: {
              color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: '#37FFF9' // 0% 处的颜色
                    }, {
                        offset: 1, color: 'rgba(0,222,215,0.2)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }  
            },
            data:[320, 302, 341, 374, 390, 450, 420]
        },
        {
            name:'支出',
            type:'pictorialBar',
            stack: '扫描量',
            symbolRepeat: 'fliex',
            symbolSize: 10,
            data:[-120, -132, -101, -134, -190, -230, -210],
            itemStyle: {
              color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: '#FF5624' // 0% 处的颜色
                    }, {
                        offset: 1, color: 'rgba(255,86,36,0.2)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }  
            },
        }
    ]
};
