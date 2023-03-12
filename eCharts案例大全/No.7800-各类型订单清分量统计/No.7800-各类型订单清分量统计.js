var oldData = [{
        "clrDate": "2020-05-01",
        "taskType": "上门收款",
        "amount": 243.35
    },
    {
        "clrDate": "2020-05-01",
        "taskType": "网点解现",
        "amount": 40.34
    },
    {
        "clrDate": "2020-05-01",
        "taskType": "银医通上门收款",
        "amount": 123.54
    },
    {
        "clrDate": "2020-05-01",
        "taskType": "自助机具卸钞",
        "amount": 342
    },
    {
        "clrDate": "2020-05-02",
        "taskType": "上门收款",
        "amount": 132.35
    },
    {
        "clrDate": "2020-05-02",
        "taskType": "网点解现",
        "amount": 165.1
    },
    {
        "clrDate": "2020-05-02",
        "taskType": "银医通上门收款",
        "amount": 34.54
    },
    {
        "clrDate": "2020-05-02",
        "taskType": "自助机具卸钞",
        "amount": 23.78
    },
    {
        "clrDate": "2020-05-03",
        "taskType": "上门收款",
        "amount": 243.35
    },
    {
        "clrDate": "2020-05-03",
        "taskType": "网点解现",
        "amount": 40.34
    },
    {
        "clrDate": "2020-05-03",
        "taskType": "银医通上门收款",
        "amount": 123.54
    },
    {
        "clrDate": "2020-05-03",
        "taskType": "自助机具卸钞",
        "amount": 342
    },
    {
        "clrDate": "2020-05-04",
        "taskType": "上门收款",
        "amount": 132.35
    },
    {
        "clrDate": "2020-05-04",
        "taskType": "网点解现",
        "amount": 165.1
    },
    {
        "clrDate": "2020-05-04",
        "taskType": "银医通上门收款",
        "amount": 34.54
    },
    {
        "clrDate": "2020-05-04",
        "taskType": "自助机具卸钞",
        "amount": 23.78
    },
];


var dataset = {
    source: [
        ['clrDate']
    ]
};

let taskArr = [],
    dateArr = [];
oldData.forEach((item) => {
    if (dateArr.indexOf(item.clrDate) < 0) {
        dateArr.push(item.clrDate);
    }
    if (taskArr.indexOf(item.taskType) < 0) {
        taskArr.push(item.taskType);
    }
});

for (var i = 0; i < dateArr.length + 1; i++) {
    if (i === 0) {
        for (var j = 0; j < taskArr.length; j++) {
            dataset.source[i][j + 1] = taskArr[j];
        }
    } else {
        dataset.source[i] = [];
        dataset.source[i][0] = dateArr[i - 1];
    }
}

for (var i = 1; i < dataset.source.length; i++) {
    for (var j = 1; j < dataset.source[0].length; j++) {
        for (var k = 0; k < oldData.length; k++) {
            //console.log(i+'-'+j+'-'+k);
            if (dataset.source[i][0] == oldData[k].clrDate &&
                dataset.source[0][j] == oldData[k].taskType) {
                dataset.source[i][j] = oldData[k].amount;
            }
        }
    }
}

var fontColor = '#30eee9';
option = {
    title: {
        text: '各类型订单清分业务统计',
        top: '5%',
        left: 'center',
        textStyle: {
            color: '#FFF',
            align: 'center',
        }
    },
    dataset: dataset,
    backgroundColor: '#11183c',
    grid: {
        left: '9%',
        right: '10%',
        top: '20%',
        bottom: '15%',
        containLabel: true
    },
    tooltip: {
        show: true,
        trigger: 'item'
    },
    legend: {
        show: true,
        x: 'center',
        top: '12%',
        y: '35',
        icon: 'stack',
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
            color: '#1bb4f6'
        }
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLabel: {
            color: fontColor
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#397cbc'
            }
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#195384'
            }
        }
    }],
    yAxis: [{
        type: 'value',
        name: '清分量（万元）',
        axisLabel: {
            formatter: '{value}',
            textStyle: {
                color: '#2ad1d2'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#27b4c2'
            }
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#11366e'
            }
        }
    }],
    series: [{
            name: '上门收款',
            type: 'line',
            stack: '总量',
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
                normal: {
                    color: '#0092f6',
                    lineStyle: {
                        color: "#0092f6",
                        width: 1
                    },
                    areaStyle: {
                        //color: '#94C9EC'
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 0,
                            color: 'rgba(7,44,90,0.3)'
                        }, {
                            offset: 1,
                            color: 'rgba(0,146,246,0.9)'
                        }]),
                    }
                }
            },
            markPoint: {
                itemStyle: {
                    normal: {
                        color: 'red'
                    }
                }
            }
        },
        {
            name: '网点解现',
            type: 'line',
            stack: '总量',
            symbol: 'circle',
            symbolSize: 8,

            itemStyle: {
                normal: {
                    color: '#00d4c7',
                    lineStyle: {
                        color: "#00d4c7",
                        width: 1
                    },
                    areaStyle: {
                        //color: '#94C9EC'
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 0,
                            color: 'rgba(7,44,90,0.3)'
                        }, {
                            offset: 1,
                            color: 'rgba(0,212,199,0.9)'
                        }]),
                    }
                }
            }

        },
        {
            name: '银医通上门收款',
            type: 'line',
            stack: '总量',
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
                normal: {
                    color: '#aecb56',
                    lineStyle: {
                        color: "#aecb56",
                        width: 1
                    },
                    areaStyle: {
                        //color: '#94C9EC'
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 0,
                            color: 'rgba(7,44,90,0.3)'
                        }, {
                            offset: 1,
                            color: 'rgba(114,144,89,0.9)'
                        }]),
                    }
                }
            }
        },
        {
            name: '自助机具卸钞',
            type: 'line',
            stack: '总量',
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
                normal: {
                    color: '#3A44FB',
                    lineStyle: {
                        color: "#3A44FB",
                        width: 1
                    },
                    areaStyle: {
                        //color: '#94C9EC'
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 0,
                            color: 'rgba(7,46,101,0.3)'
                        }, {
                            offset: 1,
                            color: 'rgba(0,166,246,0.9)'
                        }]),
                    }
                }
            }
        }

    ]
};