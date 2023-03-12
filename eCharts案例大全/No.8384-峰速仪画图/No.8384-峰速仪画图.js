var jisuanmax = 330 + 50 - 20;
//画横线
function getTableLine(num) {
    var list = [];
    //   var bottom = 122;
    var top = 0;
    var height = 20;
    for (var i = 0; i < num; i++) {
        list.push({
            type: 'line',
            top: 40 - i * height,
            right: 85,
            //   left:80,
            style: {
                fill: '#333'
            },
            shape: {
                x1: 0,
                y1: 0,
                x2: 3200,
                y2: 0
            }

        });
    };
    list.push({
        type: 'line',
        style: {
            fill: '#333'
        },
        shape: {
            x1: 0,
            y1: 0, //80
            x2: 0,
            y2: 625,
        }
    });
    
    list.push({
        type: 'line',
        style: {
            fill: '#333'
        },
        shape: {
            x1: 50,
            y1: 60, //80
            x2: 50,
            y2: 625,
        }
    });
    
    list.push({
        type: 'line',
        style: {
            fill: '#333'
        },
        shape: {
            x1: 0,
            y1: 61, //80
            x2: 80,
            y2: 61,
        }
    });
    
    list.push({
        type: 'line',
        style: {
            fill: '#333'
        },
        shape: {
            x1: 0,
            y1: 625, //80
            x2: 80,
            y2: 625,
        }
    });
    
    return list;
}

var lineList = getTableLine(5);

option = {
    title: [{
        text: ' \n日期\n时间\n日变异率',
        top: -25,
        left: 1,
        textStyle: {
            lineHeight: 20,
            fontSize: 13,
            fontWeight: 'normal',
            formatter: function(value) {
                return '{table|' + value + '}';
            },
            rich: {
                table: {
                    align: 'center'
                }
            }
        }
    }],
    //   dataZoom: {
    //       show: true,
    //       start: 0,
    //       end: 50,
    //       maxSpan: 80
    //       // zoomLock: true
    //   },

    xAxis: [
        {
            type: 'category',
            data: ['早', '晚', '早', '晚', '早', '晚', '早', '晚', '早', '晚', '早', '晚', '早', '晚'],
            position: 'top',
            offset: 20,
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['red'],
                    width: 1,
                    type: 'solid'
                }
            }
        },
        {
            type: 'category',
            data: ['02/01', '02/02', '02/03', '02/04', '02/05', '02/06', '02/07'],
            position: 'top',
            offset: 40,
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['red'],
                    width: 1,
                    type: 'solid'
                }
            },
            axisTick: {
                length: 1080
            }
        },
        {
            type: 'category',
            data: ['10%', '20%', '15%', '4%', '10%', '10%', '10%'],
            nameTextStyle: {
                // borderColor:'black',
                // borderWidth:10,
                // color:'white',
                fontSize: '200'
            },
            position: 'top',
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['red'],
                    width: 1,
                    type: 'solid'
                }
            }
        }
    ],
    yAxis: [{
            type: 'value',
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['blue'],
                    width: 1,
                    type: 'solid'
                }
            }
        },
        {
            name: '峰值流速(PEF)L/min',
            position: 'left',
            nameLocation: 'center',
            nameGap: 40, //与轴线间距
            nameTextStyle: { //文字样式
                // borderColor: 'black',
                // borderWidth: 1,
                // color:'white',
                fontSize: '18'
            },
            axisLine: {
                lineStyle: {
                    color: '#27b4c2'
                }
            },
        },
    ],
    series: [ //折线图
        {
            name: '',
            type: 'line',
            stack: '',
            // symbol: 'circle',
            symbolSize: 6,
            zlevel: 2,
            itemStyle: {
                normal: {
                    color: '#0092f6',
                    lineStyle: {
                        color: "#0092f6",
                        width: 1
                    },
                }
            },
            xAxisIndex: 0,
            data: [120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 290, 330, 214, 220],
        },
        //这个区域单独拿出来是为了设置其它的折线zlevel
        //颜色区域划分
        {
            type: 'line',
            markArea: {
                silent: true,
                data: [
                    [{
                        // name: '绿区',
                        yAxis: 0,
                        itemStyle: {
                            color: 'green',
                            opacity: 0.3
                        },
                    }, {
                        yAxis: 100
                    }],
                    [{
                        // name: '黄区',
                        yAxis: 100,
                        itemStyle: {
                            color: 'yellow',
                            opacity: 0.3
                        },
                    }, {
                        yAxis: 200,
                    }],
                    [{
                        // name: '红区',
                        // yAxis: 200,
                        yAxis: 200,
                        itemStyle: {
                            color: 'red',
                            opacity: 0.3
                        },
                    }, {
                        yAxis: jisuanmax, //这个需要计算出来
                    }],
                ]
            }
        }
    ],
    graphic: lineList
};