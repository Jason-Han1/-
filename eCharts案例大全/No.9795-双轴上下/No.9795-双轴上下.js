var xdata = [1, 2, 3, 4]
var seriesdata1 = [100, 200, 300, 400];
var seriesdata2 = [10, 20, 30, 40];
option = {
    title: {},
    axisPointer: {
        link: {
            xAxisIndex: 'all'
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
        formatter: function(params) {
            var str = "";
            str += params[0].name + "</br>";
            str += params[1].marker + params[1].seriesName + "：" + params[1].data + "次</br>";
            str += params[0].marker + params[0].seriesName + "：" + params[0].data + "户";
            return str;
        },

    },
    grid: [{
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            height: '60%'
        },
        {
            left: 0,
            right: 0,
            bottom: 0,
            top: '60%',
            height: '40%'
        }
    ],
    color: ['#BCBDFD', '#A4F0C9'],
    calculable: true,
    xAxis: [{
            show: false,
            type: 'category',
            boundaryGap: false,
            data: xdata,

        },
        {
         
            type: 'category',
            boundaryGap: false,
            data: xdata,
            gridIndex: 1,
            position: 'top'
        }

    ],
    yAxis: [{
           
            type: "value",
            name: '数量',
            splitLine: {
                lineStyle: {
                    color: '#f5f5f5'
                }
            }
        },
        {
           
            type: 'value',
            splitLine: {
                lineStyle: {
                    color: '#f5f5f5'
                }
            },
            name: '数量',
            gridIndex: 1,
            inverse: true
        }

    ],
    series: [{
            name: '次数',
            type: 'line',
            areaStyle: {
                normal: {
                    type: 'default',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#BCBDFD'
                    }, {
                        offset: 1,
                        color: '#BCBDFD'
                    }], false)
                }
            },
            // smooth:true,
            itemStyle: {
                normal: {
                    areaStyle: {
                        type: 'default'
                    }
                }
            },
            symbol: 'none', //这句就是去掉点的  
            lineStyle: {
                normal: {
                    width: 0
                }
            },
            data: seriesdata1
        },
        {
            name: '户数',
            type: 'line',
            areaStyle: {
                normal: {
                    type: 'default',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#A4F0C9'
                    }, {
                        offset: 1,
                        color: '#A4F0C9'
                    }], false)
                }
            },
            // smooth:true,
            itemStyle: {
                normal: {
                    areaStyle: {
                        type: 'default'
                    }
                }
            },
            symbol: 'none', //这句就是去掉点的  
            lineStyle: {
                normal: {
                    width: 0
                }
            },
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: seriesdata2
        }
    ]
}