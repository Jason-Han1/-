var data = [{
    "name": "婚姻家庭",
    "value": 80
}, {
    "name": "物业纠纷",
    "value": 87.8
}, {
    "name": "消费维权",
    "value": 71
}, {
    "name": "劳动纠纷",
    "value": 80
}, {
    "name": "民事纠纷",
    "value": 66
}];
var xData = [],
    yData = [];
data.map(function(a, b) {
    xData.push(a.name);
    yData.push(a.value);
});
option = {
    backgroundColor: '#354149',
    tooltip: {
        trigger: 'item',
        // formatter: "{a} <br/>{b} : {c}",
        formatter: function(params) {
            let index = params.dataIndex
            let seriesName = '调解类型'
            let name = data[index].name
            let value = data[index].value
            let str = seriesName
            str += '<br />' + name + ': ' + value
            return str
        },
        backgroundColor: 'rgba(255, 68, 2, 0.1)',
        borderColor: 'rgba(250, 193, 53, 1)',
        borderWidth: 2
    },
    grid: {
        left: '0%',
        right: '0%',
        bottom: '5%',
        top: '7%',
        height: '85%',
        containLabel: true,
        z: 22
    },
    xAxis: [{
        type: 'category',
        gridIndex: 0,
        data: xData,
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,0.5)'
            }
        },
        axisLabel: {
            show: true,
            color: 'rgba(255,255,255,0.8)',
            fontSize:24
        }
    }],
    yAxis: [{
            type: 'value',
            gridIndex: 0,
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
                color: 'rgba(255,255,255,0.8)',
                fontSize:24
            }
        },
        {
            type: 'value',
            gridIndex: 0,
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            }
        }
    ],
    series: [
        {
            name: '调解类型',
            type: 'bar',
            barWidth: 12,
            xAxisIndex: 0,
            yAxisIndex: 0,
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    offset: [0, 5],
                    formatter: '{b|}',
                    rich: {
                        b: {
                            width: 36,
                            height: 1,
                            backgroundColor: 'rgba(255, 137, 9, 0.26)',
                            align: 'center'
                        },
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(245, 101, 13, 0.79)'
                            },
                            {
                                offset: 0.5,
                                color: 'rgba(237, 118, 46, 0.49)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(255, 142, 67, 0.38)'
                            }
                        ]
                    )
                }
            },
            data: yData,
            zlevel: 11
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 36,
            xAxisIndex: 0,
            yAxisIndex: 1,
            barGap: '-200%',
            data: [1,1,1,1,1],
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    color: '#fff',
                    fontSize: 20,
                    offset: [0, 586],
                    formatter: (params) => {
                        return yData[params.dataIndex] + '\n{c|}\n{a|}'
                    },
                    rich:{
                        a: {
                            width: 13,
                            height: 580,
                            backgroundColor: 'rgba(255, 175, 104, 0.1)',
                            align: 'center'
                        },
                        c: {
                            width: 13,
                            height: 13,
                            backgroundColor: 'rgba(0, 0, 0, 0)',
                            align: 'center'

                        }
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgba(255, 129, 28, .26)',
                    shadowColor: 'rgba(255, 129, 28, .26)',
                    shadowBlur: 5,
                    borderWidth: 1
                }
            },
            zlevel: 9
        }
      
    ]
};

