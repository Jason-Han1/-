var wcldata = [56, 48, 63, 77, 96, 48, 63, 77];
var areadata = ['银行', '证券', '金融', '保险', '农业', '租赁', '建设', '开采'];
var color2 = '#43FFFE';
var color3 = 'rgba(2,160,171,'
var color4 = '#064C52'
var color5 = '#521F2B'
var color6 = 'rgba(208,52,83,'
option = {
    backgroundColor: '#08100D',
    grid: {
        top: '17%',
        bottom: '21%',
    },
    xAxis: {
        data: areadata,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: true,
            margin: 10,
            textStyle: {
                color: '#fff',
                fontSize: 12,
                fontFamily: 'PFZT',
            }
        }
    },
    yAxis: {
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        }
    },
    series: [{
        name: '', //顶
        type: 'pictorialBar',
        symbolSize: [24, 8],
        symbolOffset: [0, 0],
        z: 12,
        itemStyle: {
            normal: {
                color: function(params) {
                    var colorList = [color4,color4,color4,color5,color4,color4,color4,color4];
                    return colorList[params.dataIndex];
                },
            }
        },
        data: [{
            value: wcldata[0],
            symbolPosition: 'end'
        }, {
            value: wcldata[1],
            symbolPosition: 'end'
        }, {
            value: wcldata[2],
            symbolPosition: 'end'
        }, {
            value: wcldata[3],
            symbolPosition: 'end'
        }, {
            value: wcldata[4],
            symbolPosition: 'end'
        }, {
            value: wcldata[5],
            symbolPosition: 'end'
        }, {
            value: wcldata[6],
            symbolPosition: 'end'
        }, {
            value: wcldata[7],
            symbolPosition: 'end'
        }, ]
    }, {
        name: '', //顶
        type: 'pictorialBar',
        symbolSize: [12, 3],
        symbolOffset: [0, 2],
        z: 13,

        data: [{
            value: wcldata[0],
            symbolPosition: 'end',
            itemStyle: {
                normal: {
                    color: color3 + '1)'
                }
            },
        }, {
            value: wcldata[1],
            symbolPosition: 'end',
            itemStyle: {
                normal: {
                    color: color3 + '1)'
                }
            },
        }, {
            value: wcldata[2],
            symbolPosition: 'end',
            itemStyle: {
                normal: {
                    color: color3 + '1)'
                }
            },
        }, {
            value: wcldata[3],
            symbolPosition: 'end',
            itemStyle: {
                normal: {
                    color: color6+'1)'
                }
            },
        }, {
            value: wcldata[4],
            symbolPosition: 'end',
            itemStyle: {
                normal: {
                    color: color3 + '1)'
                }
            },
        }, {
            value: wcldata[5],
            symbolPosition: 'end',
            itemStyle: {
                normal: {
                    color: color3 + '1)'
                }
            },
        }, {
            value: wcldata[6],
            symbolPosition: 'end',
            itemStyle: {
                normal: {
                    color: color3 + '1)'
                }
            },
        }, {
            value: wcldata[7],
            symbolPosition: 'end',
            itemStyle: {
                normal: {
                    color: color3 + '1)'
                }
            },
        }, ]
    }, {
        name: '', //底
        type: 'pictorialBar',
        symbolSize: [24, 8],
        symbolOffset: [0, 0],
        z: 15,
        itemStyle: {
            normal: {
                color: function(params) {
                    var colorList = [color4,color4,color4,color5,color4,color4,color4,color4];
                    return colorList[params.dataIndex];
                },
            }
        },
        data: wcldata
    }, {
        type: 'bar',
        itemStyle: {
            normal: {
                color: function(params) {
                    var colorList = [color3+'0.3)',color3+'0.3)',color3+'0.3)',color6+'0.3)',color3+'0.3)',color3+'0.3)',color3+'0.3)',color3+'0.3)'];
                    return colorList[params.dataIndex];
                },
                barBorderRadius: 7,
                borderWidth: 1,
                // borderColor: color3 + '1)'
            },
        },
        silent: true,
        barWidth: 24,
        barGap: '-100%',
        data: wcldata,
        z: 16,
        label: {
            normal: {
                show: true,
                position: 'top',
                textStyle: {
                    color: color2,
                    fontSize: 12,
                },
                formatter: function(param) {
                    if(param.dataIndex==3){
                        return '{red|'+param.value+'%}'
                    }else{
                        return  param.value+ '%';
                    }
                },
                rich:{
                    red:{
                        color:color6+'1)'
                    }
                }
            }
        },
    }]
};