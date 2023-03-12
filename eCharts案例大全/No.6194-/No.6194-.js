var getdata = [
    [34,54,67,75,86],
    [10,25,45,67,73],
    [24,34,45,55,66],
    [32,45,50,60,70],
    [44,59,70,75,88],
    [28,38,48,58,68],
    [38,48,58,68,78],
]
var getname=['机电工程学院','自动化学院','计算机学院','轻工化工学院','材料与能源学院','信息工程学院','管理学院'];
option = {
    tooltip: {
        trigger: 'item',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '50',
        right: '20',
        top:'40',
        bottom:'40',
    },
    xAxis: {
        type: 'category',
        data: getname,
        axisLabel: {
            color: '#777777',
            textStyle: {
                fontSize: '13'
            },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            lineStyle: {
                color: '#333333',
            }
        },
        splitLine: {
            show: false
        }
    },

    yAxis: {
        type: 'value',
		name:'分数（分）',
        nameTextStyle: {
            color: '#777777',
            fontSize: 13,
            padding:[0,0,0,60]
        },
        axisLabel: {
            color: '#777777',
            textStyle: {
                fontSize: '13'
            },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            lineStyle: {
                color: '#333333',
            }
        },
        splitLine: {
            lineStyle: {
                color: '#D1D1D1',
            },
        }

    },
    series: [{
            name: 'boxplot',
            type: 'boxplot',
            data: getdata,
            itemStyle: {
                normal: {
                    borderColor: '#4B96F3',
                    borderWidth: 2,
                    color: '#D9EAFF',
                }
            },
            tooltip: {
                formatter: function(param) {
                    return [

                        'Upper: ' + param.data[5] + ' 分',
                        'Q3: ' + param.data[4] + ' 分',
                        'Median: ' + param.data[3] + ' 分',
                        'Q1: ' + param.data[2] + ' 分',
                        'Lower: ' + param.data[1] + ' 分'
                    ].join('<br/>')
                }
            }
        }, {
            name: '异常',
            type: 'scatter',
            symbolSize: 10,
            data: [
                [0, 17, "异常"],
            ],
            itemStyle: {
                normal: {
                    color: 'rgba(75,150,243,.7)',
                }
            },
            label: {
                show: false,
            },
        },{
            name: '异常',
            type: 'scatter',
            symbolSize: 10,
            data: [
                [3, 75, "异常"],
            ],
            itemStyle: {
                normal: {
                    color: 'rgba(75,150,243,.7)',
                }
            },
            label: {
                show: false,
            },
        }
    ]
};