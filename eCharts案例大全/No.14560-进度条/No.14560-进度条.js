var startTime = '2001-05-03';
var endTime = '2007-05-02';
var currentTime = '2006-11-25';
var startDate = new Date(startTime.split('-')[0], startTime.split('-')[1], startTime.split('-')[2]);
var endDate = new Date(endTime.split('-')[0], endTime.split('-')[1], endTime.split('-')[2]);
var currentDate = new Date(currentTime.split('-')[0], currentTime.split('-')[1], currentTime.split('-')[2]);
var es = endDate.getTime() - startDate.getTime();
var cs = currentDate.getTime() - startDate.getTime();

var payTime0 = '2002-11-11';
var payDate0 = new Date(payTime0.split('-')[0], payTime0.split('-')[1], payTime0.split('-')[2]);
var p0_s = payDate0.getTime() - startDate.getTime();

var payTime1 = '2005-05-02';
var payDate1 = new Date(payTime1.split('-')[0], payTime1.split('-')[1], payTime1.split('-')[2]);
var p1_s = payDate1.getTime() - startDate.getTime();

var payTime2 = '2006-08-22';
var payDate2 = new Date(payTime2.split('-')[0], payTime2.split('-')[1], payTime2.split('-')[2]);
var p2_s = payDate2.getTime() - startDate.getTime();

var payTime3 = '2007-01-31';
var payDate3 = new Date(payTime3.split('-')[0], payTime3.split('-')[1], payTime3.split('-')[2]);
var p3_s = payDate3.getTime() - startDate.getTime();

var progressValueC = Math.round((cs / es) * 100);
var progressValue0 = Math.round((p0_s / es) * 100);
var progressValue1 = Math.round((p1_s / es) * 100);
var progressValue2 = Math.round((p2_s / es) * 100);
var progressValue3 = Math.round((p3_s / es) * 100);

option = {
    tooltip: {
        //formatter: '<font color="#FF0000" size=3 block style=" font-weight:800">点击</font>进度条上方的各个付款日点以确认该节点已付款成功',
        showContent: false,
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            shadowStyle: {
                opacity: 0
            }
        }
    },
    xAxis: {
        min: startTime,
        type: 'time',
        show: false
    },
    yAxis: {
        type: 'category',
        data: ['进度'],
        show: false
    },
    series: [{
        name: '计划开始时间',
        type: 'bar',
        barWidth: 20,
        stack: '总量',
        label: {
            normal: {
                show: true,
                position: 'insidRight'
            }
        },
        markPoint: {
            symbol: 'diamond',
            symbolSize: 40,
            data: [{
                coord: [startTime, '进度'],
                itemStyle: {
                    normal: {
                        color: '#666666'
                    }
                }
            }]
        },
        itemStyle: {
            normal: {
                barBorderColor: '#0000',
                color: '#0000'
            },
            emphasis: {
                barBorderColor: '#0000',
                color: '#0000'
            }
        },
        data: [startTime]
    }, {
        name: '进度0',
        type: 'bar',
        stack: '总量',
        label: {
            normal: {
                show: true,
                position: 'insideRight',
                formatter: progressValue0 + '%'
            }
        },
        markPoint: {
            symbol: 'triangle',
            symbolOffset: [0, '80%'],
            symbolSize: 30,
            data: [{
                coord: [payTime0, '进度'],
                itemStyle: {
                    normal: {
                        color: '#666666'
                    }
                }
            }]
        },
        itemStyle: {
            normal: {
                color: '#00D020',
                barBorderRadius: 4,
                shadowBlur: 7,
                shadowColor: '#00D020'
            }, //emphasis//#30E939
            emphasis: {
                color: '#00D020',
                shadowBlur: 7,
                shadowColor: '#00D020'
            }
        },
        data: [payTime0]
    }, {
        name: '进度1',
        type: 'bar',
        stack: '总量',
        label: {
            normal: {
                show: true,
                position: 'insideRight',
                formatter: progressValue1 + '%'
            }
        },
        markPoint: {
            symbol: 'triangle',
            symbolOffset: [0, '80%'],
            symbolSize: 30,
            data: [{
                coord: [payTime1, '进度'],
                itemStyle: {
                    normal: {
                        color: '#666666'
                    }
                }
            }]
        },
        itemStyle: {
            normal: {
                color: '#00D020',
                barBorderRadius: 4,
                shadowBlur: 7,
                shadowColor: '#00D020'
            }, //emphasis//#30E939
            emphasis: {
                color: '#00D020',
                shadowBlur: 7,
                shadowColor: '#00D020'
            }
        },
        data: [payTime1]
    }, {
        name: '进度2',
        type: 'bar',
        stack: '总量',
        label: {
            normal: {
                show: true,
                position: 'insideRight',
                formatter: progressValue2 + '%'
            }
        },
        markPoint: {
            symbol: 'triangle',
            symbolOffset: [0, '80%'],
            symbolSize: 30,
            data: [{
                coord: [payTime2, '进度'],
                itemStyle: {
                    normal: {
                        color: '#666666'
                    }
                }
            }]
        },
        itemStyle: {
            normal: {
                color: '#DD1111',
                barBorderRadius: 4,
                shadowBlur: 7,
                shadowColor: '#DD1111'
            },
            emphasis: {
                color: '#EE3333',
                shadowBlur: 15,
                shadowColor: '#EE3333'
            }
        },
        data: [payTime2]
    }, {
        name: '当前',
        type: 'bar',
        stack: '总量',
        label: {
            normal: {
                show: true,
                position: 'insideRight',
                formatter: progressValueC + '%'
            }
        },
        markPoint: {
            symbol: 'pin',
            symbolOffset: [0, '-15%'],
            data: [{
                coord: [currentTime, '进度'],
                itemStyle: {
                    normal: {
                        color: '#666666'
                    }
                }
            }]
        },
        itemStyle: {
            normal: {
                color: '#DD1111',
                barBorderRadius: 4,
                shadowBlur: 7,
                shadowColor: '#DD1111'
            },
            emphasis: {
                color: '#EE3333',
                shadowBlur: 15,
                shadowColor: '#EE3333'
            }
        },
        data: [currentTime]
    }, {
        name: '进度3',
        type: 'bar',
        stack: '总量',
        label: {
            normal: {
                show: true,
                position: 'insideRight',
                formatter: progressValue3 + '%'
            }
        },
        markPoint: {
            symbol: 'triangle',
            symbolOffset: [0, '80%'],
            symbolSize: 30,
            data: [{
                coord: [payTime3, '进度'],
                itemStyle: {
                    normal: {
                        color: '#666666'
                    }
                }
            }]
        },
        itemStyle: {
            normal: {
                color: '#007EBA',
                barBorderRadius: 4,
                shadowBlur: 7,
                shadowColor: '#007EBA'
            },
            emphasis: {
                color: '#009EDA',
                shadowBlur: 15,
                shadowColor: '#009EDA'
            }
        },
        data: [payTime3]
    }, {
        name: '计划结束时间',
        type: 'bar',
        stack: '总量',
        markPoint: {
            symbol: 'diamond',
            symbolSize: 40,
            data: [{
                coord: [endTime, '进度'],
                itemStyle: {
                    normal: {
                        color: '#666666'
                    }
                }
            }]
        },
        itemStyle: {
            normal: {
                color: '#007EBA',
                barBorderRadius: 4,
                shadowBlur: 7,
                shadowColor: '#007EBA'
            },
            emphasis: {
                color: '#009EDA',
                shadowBlur: 15,
                shadowColor: '#009EDA'
            }
        },
        data: [endTime]
    }]
};