var oldData = [{
        "rpt_date": "2020-05-01",
        "task_type": "上门收款",
        "amount": 243.35
    },
    {
        "rpt_date": "2020-05-01",
        "task_type": "网点解现",
        "amount": 40.34
    },
    {
        "rpt_date": "2020-05-01",
        "task_type": "银医通上门收款",
        "amount": 123.54
    },
    {
        "rpt_date": "2020-05-01",
        "task_type": "自助机具卸钞",
        "amount": 342
    },
    {
        "rpt_date": "2020-05-02",
        "task_type": "上门收款",
        "amount": 132.35
    },
    {
        "rpt_date": "2020-05-02",
        "task_type": "网点解现",
        "amount": 165.1
    },
    {
        "rpt_date": "2020-05-02",
        "task_type": "银医通上门收款",
        "amount": 34.54
    },
    {
        "rpt_date": "2020-05-02",
        "task_type": "自助机具卸钞",
        "amount": 23.78
    },
    {
        "rpt_date": "2020-05-03",
        "task_type": "上门收款",
        "amount": 243.35
    },
    {
        "rpt_date": "2020-05-03",
        "task_type": "网点解现",
        "amount": 40.34
    },
    {
        "rpt_date": "2020-05-03",
        "task_type": "银医通上门收款",
        "amount": 123.54
    },
    {
        "rpt_date": "2020-05-03",
        "task_type": "自助机具卸钞",
        "amount": 342
    },
    {
        "rpt_date": "2020-05-04",
        "task_type": "上门收款",
        "amount": 132.35
    },
    {
        "rpt_date": "2020-05-04",
        "task_type": "网点解现",
        "amount": 165.1
    },
    {
        "rpt_date": "2020-05-04",
        "task_type": "银医通上门收款",
        "amount": 34.54
    },
    {
        "rpt_date": "2020-05-04",
        "task_type": "自助机具卸钞",
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
    if (dateArr.indexOf(item.rpt_date) < 0) {
        dateArr.push(item.rpt_date);
    }
    if (taskArr.indexOf(item.task_type) < 0) {
        taskArr.push(item.task_type);
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
            if (dataset.source[i][0] == oldData[k].rpt_date &&
                dataset.source[0][j] == oldData[k].task_type) {
                dataset.source[i][j] = oldData[k].amount;
            }
        }
    }
}
//console.log(dataset);

// var dataset = {
//         // 提供一份数据。
//         source: [
//             ['clrDate', '上门收款','网点解现','银医通上门收款','自助机具卸钞'],
//             ['2020-05-01', 120, 234, 343,423],
//             ['2020-05-02', 132, 165, 155,150],
//             ['2020-05-03', 101, 215, 326,317],
//             ['2020-05-04', 134, 233, 361,205],
//             ['2020-05-05', 90, 324, 445,234],
//             ['2020-05-06', 230, 348, 123,134],
//             ['2020-05-07', 210, 124, 453,342],
//             ['2020-05-08', 182, 123, 234,295],
//             ['2020-05-09', 191, 342, 164,274],
//             ['2020-05-10', 234, 231, 567,184]
//         ]
//     };
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