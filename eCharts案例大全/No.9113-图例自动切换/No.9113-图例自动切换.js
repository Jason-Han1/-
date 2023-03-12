var legendData = ['完成值', '完成率', '增长值'];
option = {
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow"
        }
    },
    axisPointer: {
        type: 'shadow',
        link: {
            xAxisIndex: 'all'
        }
    },
    legend: {
        show: true,
        data: legendData,
        left: "center",
        top: "bottom",
        selected: {
            '完成值': true,
            '完成率': true,
            '较上日': true,
            '较上月': false,
            '较上季': false,
            '较上年': false
        }
    },
    grid: {
        left: '10%',
        right: '5%',
        top: '5%',
        bottom: '12%',
        containLabel: true
    },
    xAxis: {
        type: "category",
        triggerEvent: true,
        axisLine: {
            lineStyle: {
                color: '#88E0F2',
                width: 2
            }
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitArea: {
            show: false
        },
        axisLabel: {
            show: true,
            interval: 0,
            rotate: 20,
            //"splitNumber": 15,
            textStyle: {
                fontFamily: "微软雅黑",
                color: '#000',
                fontSize: 12
            }
        },
        data: ['部门A', '部门B', '部门C', '部门D', '部门E']
    },
    yAxis: [{
        name: '完成值(亿)',
        axisLine: {
            show: false,
            color: '#5470E4'
        },
        axisTick: {
            show: false,
            color: '#5470E4'
        },
        nameTextStyle: {
            color: '#000000',
            align: 'right', //水平对齐方式
            verticalAlign: 'top' //垂直对齐方式
        },
        splitLine: {
            color: 'rgba(176,158,157,0.3)',
            show: true,
            lineStyle: {
                color: '#ccc',
                type: 'solid',
                opacity: 0.5
            }
        },
        axisLabel: {
            show: false,
            color: '#274BDD'
        }
    }, {
        name: '完成率(%)',
        axisLine: {
            show: false,
            color: '#ccc'
        },
        axisTick: {
            show: false,
            color: '#ccc'
        },
        nameTextStyle: {
            color: '#000000',
            align: 'right', //水平对齐方式
            verticalAlign: 'top' //垂直对齐方式
        },
        splitLine: {
            color: 'rgba(128,128,128,0.3)',
            show: false,
            lineStyle: {
                color: '#ffffff',
                type: 'solid',
                opacity: 1
            }
        },
        axisLabel: {
            show: false,
            color: '#274BDD'
        }
    }],
    series: [{
        type: "bar",
        name: "完成值",
        yAxisIndex: 0,
        label: {
            normal: {
                show: true,
                position: 'top',
                offset: [0, 10],
                color: '#274BDD'
            }
        },
        itemStyle: {
            normal: {
                color: { //设置渐变色
                    colorStops: [{
                        color: '#4D60FD',
                        offset: 0
                    }, {
                        color: '#578FFF',
                        offset: 0.7
                    }],
                    x: 0,
                    x2: 0,
                    y: 0,
                    y2: 1
                },
                barBorderRadius: [5, 5, 5, 5]
            }
        },
        data: [100, 102, 104, 106, 98]

    }, {
        type: "bar",
        name: "增长值",
        yAxisIndex: 0,
        label: {
            normal: {
                show: true,
                position: 'top',
                offset: [0, 10],
                //color: '#274BDD'
            }
        },
        itemStyle: {
            normal: {
                color: { //设置渐变色
                    colorStops: [{
                        color: 'green',
                        offset: 0
                    }, {
                        color: 'yellow',
                        offset: 0.7
                    }],
                    x: 0,
                    x2: 0,
                    y: 0,
                    y2: 1
                },
                barBorderRadius: [5, 5, 5, 5]
            }
        },
        data: [50, 38, 64, 59, 21]

    }, {
        type: "line",
        name: "完成率",
        yAxisIndex: 1,
        barCategoryGap: '20%',
        label: {
            normal: {
                show: true,
                position: 'top',
                offset: [0, -10],
                color: '#274BDD'
            }
        },
        yAxisIndex: 1,
        itemStyle: {
            normal: {
                color: { //设置渐变色
                    colorStops: [{
                        color: 'red',
                        offset: 0
                    }, {
                        color: '#4D60FD',
                        offset: 1
                    }],
                    x: 1,
                    x2: 0,
                    y: 0,
                    y2: 0
                }
            }
        },
        data: [0.5, 0.76, 0.99, 0.32, 0.6]
    }]
}

var index = -1,
    unIndex = [0, 1, 2];
setInterval(function() {
    index = (index + 1) % 3;
    unIndex.splice(index, 1);
    setInterval(function() {
        myChart.dispatchAction({
            type: 'legendSelect',
            name: legendData[index]
        })
        myChart.dispatchAction({
            type: 'legendUnSelect',
            name: legendData[unIndex[0]]
        })
        myChart.dispatchAction({
            type: 'legendUnSelect',
            name: legendData[unIndex[1]]
        })
    })
    unIndex = [0, 1, 2];
}, 2000)