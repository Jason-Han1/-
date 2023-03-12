var oldData = [{
        "ALLOCATION_DATE": "2020-05-01",
        "COFFERS_NO": "第一金库",
        "sumAmt": 243.35
    },
    {
        "ALLOCATION_DATE": "2020-05-02",
        "COFFERS_NO": "第一金库",
        "sumAmt": 40
    },
    {
        "ALLOCATION_DATE": "2020-05-03",
        "COFFERS_NO": "第一金库",
        "sumAmt": 300
    },
    {
        "ALLOCATION_DATE": "2020-05-01",
        "COFFERS_NO": "第二金库",
        "sumAmt": 100
    },
    {
        "ALLOCATION_DATE": "2020-05-02",
        "COFFERS_NO": "第二金库",
        "sumAmt": 341.4514
    },
    {
        "ALLOCATION_DATE": "2020-05-03",
        "COFFERS_NO": "第二金库",
        "sumAmt": 45.78
    },
    {
        "ALLOCATION_DATE": "2020-05-01",
        "COFFERS_NO": "第三金库",
        "sumAmt": 89.6
    },
    {
        "ALLOCATION_DATE": "2020-05-02",
        "COFFERS_NO": "第三金库",
        "sumAmt": 25.645
    },
    {
        "ALLOCATION_DATE": "2020-05-03",
        "COFFERS_NO": "第三金库",
        "sumAmt": 7.685
    },
];


var dataset = {
    source: [
        ['product']
    ]
};

let coffersArr = [],
    dateArr = [];
oldData.forEach((item) => {
    if (dateArr.indexOf(item.ALLOCATION_DATE) < 0) {
        dateArr.push(item.ALLOCATION_DATE);
    }
    if (coffersArr.indexOf(item.COFFERS_NO) < 0) {
        coffersArr.push(item.COFFERS_NO);
    }
});

for (var i = 0; i < dateArr.length + 1; i++) {
    if (i === 0) {
        for (var j = 0; j < coffersArr.length; j++) {
            dataset.source[i][j + 1] = coffersArr[j];
        }
    } else {
        dataset.source[i] = [];
        dataset.source[i][0] = dateArr[i - 1]
    }
}

for (var i = 1; i < dataset.source.length; i++) {
    for (var j = 1; j < dataset.source[0].length; j++) {
        for (var k = 0; k < oldData.length; k++) {
            //console.log(i+'-'+j+'-'+k);
            if (dataset.source[i][0] == oldData[k].ALLOCATION_DATE &&
                dataset.source[0][j] == oldData[k].COFFERS_NO) {
                dataset.source[i][j] = oldData[k].sumAmt;
            }
        }
    }
}
console.log(dataset);
/*
var dataset={
    source: [
        ['product', '第一金库', '第二金库', '第三金库'],
        ['2020-05-01', 41.1, 30.4, 65.1],
        ['2020-05-02', 86.5, 92.1, 85.7],
        ['2020-05-03', 24.1, 67.2, 79.5]
    ]
};
console.log(dataset);
*/

var fontColor = '#30eee9';

option = {
    title: {
        text: '人民币配款量趋势图',
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
        name: '配款量（万元）',
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
            name: '第一金库',
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
            name: '第二金库',
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
            name: '第三金库',
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
            },
            markPoint: {
                itemStyle: {
                    normal: {
                        color: 'red'
                    }
                }
            }
        }

    ]
};