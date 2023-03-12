var uploadedDataURL = "/asset/get/s/data-1576201390556-VjqFUwdV.json";
//定义x轴和所有数据
var xData = [];
var data = {};
//获取json数据
$.getJSON(uploadedDataURL, function(result) {
    data = result[0];
    //设置
    var showFlag = true;
    for (var n = 0; n < data.dataBlue.length; n++) {
        xData.push(data.dataBlue[n].time);
    }
    var colors = ['#0306f0', '#2e95f3', '#fd5150'];
    myChart.setOption(option = {
        color: colors,
        legend: {
            //图例
            textStyle: {
                color: '#777'
            },
            itemGap: 10,
            x: 'center',
            y: 'top',
            data: data.lendName
        },
        animation: true,
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        toolbox: {
            left: 'center',
            itemSize: 10,
            top: 55
        },
        grid: [{
                top: 35,
                left: 45,
                height: 240,
                right: 60
            },
            {
                top: 275,
                left: 45,
                right: 60,
                height: 400
            }
        ],
        axisPointer: {
            link: {
                xAxisIndex: 'all'
            }
        },
        dataZoom: [
            //横向滚动条
            {
                type: 'inside',
                throttle: 50,
                show: true,
                start: 30,
                end: 70,
                xAxisIndex: [0, 1]
            },
            {
                type: 'slider',
                start: 30,
                end: 70,
                xAxisIndex: [0, 1]
            }
        ],
        xAxis: [{
                type: 'category',
                data: xData,
                axisPointer: {
                    snap: true,
                    lineStyle: {
                        color: '#004E52',
                        opacity: 0.5,
                        width: 2
                    }
                },
                axisLabel: {
                    //轴线文字
                    show: false,
                    textStyle: {
                        fontSize: '10',
                        color: '#999'
                    }
                },
                axisLine: {
                    //轴线颜色
                    lineStyle: {
                        color: '#ccc'
                    },
                    onZero: true
                }
            },
            {
                gridIndex: 1,
                data: xData,
                type: 'category',
                boundaryGap: false,
                axisPointer: {
                    snap: true,
                    lineStyle: {
                        color: '#004E52',
                        opacity: 0.5,
                        width: 2
                    }
                },
                axisLabel: {
                    //轴线文字
                    show: true,
                    textStyle: {
                        fontSize: '10',
                        color: '#999'
                    }
                },
                axisLine: {
                    //轴线颜色
                    lineStyle: {
                        color: '#999'
                    },
                    onZero: true
                }
                //position: 'top'
            }
        ],
        yAxis: [{
                name: data.lendName[0] + '℃',
                nameLocation: 'middle',
                nameTextStyle: {
                    padding: [0, 0, 10, 0] // 四个数字分别为上右下左与原位置距离
                },
                //inverse: true,
                gridIndex: 1,
                max: function(value) {
                    return Math.ceil(value.max / 10) * 10;
                },
                position: 'left',
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: colors[0]
                    }
                },
                axisLabel: {
                    formatter: '{value}'
                }
            },
            {
                name: data.lendName[1] + '℃',
                nameLocation: 'middle',
                nameTextStyle: {
                    padding: [10, 0, 0, 0] // 四个数字分别为上右下左与原位置距离
                },
                //inverse: true,
                gridIndex: 1,
                max: function(value) {
                    return Math.ceil(value.max / 10) * 10;
                },
                position: 'right',
                type: 'value',
                // inverse: true,

                axisLine: {
                    lineStyle: {
                        color: colors[1]
                    }
                },
                axisLabel: {
                    formatter: '{value}'
                }
            },
            {
                show: showFlag,
                type: 'value',
                max: 6,
                name: data.lendName[2],
                axisLine: {
                    lineStyle: {
                        color: colors[2]
                    }
                },
                axisLabel: {
                    formatter: function(value) {
                        var tests = [];
                        if (value === 0) {} else if (value === 1) {
                            tests.push('故障');
                        } else if (value === 2) {
                            tests.push('严重');
                        } else if (value === 3) {
                            tests.push('警告');
                        } else if (value === 4) {
                            tests.push('初级');
                        } else if (value === 5) {
                            tests.push('预警');
                        } else if (value === 6) {
                            tests.push('正常');
                        }
                        return tests;
                    }
                }
            }
        ],
        series: [{
                name: data.lendName[0],
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                zlevel: 1,
                xAxisIndex: 1,
                data: data.dataBlue
            },
            {
                name: data.lendName[1],
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                zlevel: 1,
                xAxisIndex: 1,
                yAxisIndex: 1,
                data: data.dataLight
            },
            {
                name: data.lendName[2],
                type: 'line',
                step: 'start',
                yAxisIndex: 2,
                data: data.dataRed
            }
        ]
    });

});