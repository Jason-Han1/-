var data = [{
    "name": "3年",
    "value": 8
}, {
    "name": "6年",
    "value": 11
}, {
    "name": "9年",
    "value": 13
}, {
    "name": "12年",
    "value": 12
}, {
    "name": "15年",
    "value": 15
}, {
    "name": "20年",
    "value": 16
}];
var xData = [],
    yData = [];
y1Data = [];
y2Data = [];
data.map(function(a, b) {
    xData.push(a.name);
    yData.push(a.value);
    y1Data.push((Math.random(0, 1) * 14).toFixed(0));
    y2Data.push((Math.random(0, 1) * 100).toFixed(0));
});

var option = {
    backgroundColor: "#fff",
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross' //
        }
    },
    legend: {
        show: true,
        //icon:'roundRect',
        itemWidth: 20,
        itemHeight: 8,
        itemGap: 12,
        top: '8%',
        data: ['计划数', '实际数','执行率' ]
    },
    grid: {
        left: '5%',
        right: '2%',
        bottom: '4%',
        top: '15%',
        //	        height: '85%',
        containLabel: true,
        z: 1
    },
    xAxis: [{
        type: 'category',
        data: xData,
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgb(205,205,205)'
            }
        },
        axisLabel: {
            show: true,
            color: 'rgb(170,170,170)',
            fontSize: 16
        }
    }],
    yAxis: [{
       
        nameTextStyle: {
            color: 'rgb(68,68,68)',
            align: 'left',
            padding: [0, 26, 0, 0]
        },
        type: 'value',
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgb(205,205,205)'
            }
        },
        axisLabel: {
            color: 'rgb(68,68,68)',
            //formatter: '{value} %'
        }
    }, {
       
        nameTextStyle: {
            color: 'rgb(68,68,68)',
            align: 'right',
            padding: [0, 0, 0, 50]
        },
        type: 'value',
        position: 'right',
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgb(205,205,205)'
            }
        },
        axisLabel: {
            color: 'rgb(68,68,68)',
            formatter: '{value} %'
        },
        //data:['20','40','60','80','100']
        max: 100
    }],
    series: [{
            name: '计划数',
            yAxisIndex: 0,
            type: 'bar',
            barWidth: '20',
            itemStyle: {
                normal: {
                    //barBorderRadius: [30, 30, 0, 0],
                    color:'#61A5E8'
                }
            },
            data: yData,
            zlevel: 1
        }, {
            name: '实际数',
            yAxisIndex: 0,
            type: 'bar',
            barWidth: '12',
            itemStyle: {
                normal: {
                    barBorderRadius: [30, 30, 0, 0],
                    color:'#7ECF51'
                }
            },
            data: y1Data,
            zlevel: 1
        }, {
            name: '执行率',
            type: 'line',
            yAxisIndex: 1,
            data: y2Data,
            itemStyle: {
                normal: {
                    color: '#EECB5F',
                    lineStyle: {
                        width: 2,
                        type: 'solid',
                    }
                }
            },
            label: {
                normal: {
                    show: false, //折线上方label控制显示隐藏
                    position: 'top',
                }
            },
            symbol: 'circle',
            symbolSize: 6,
            zlevel: 1
        }

    ]
};