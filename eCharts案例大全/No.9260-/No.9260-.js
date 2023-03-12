var fontColor = '#30eee9';
var jisuanmax = 330 + 50 - 20;
// 颜色，0-100绿 100-200橙色，200-300红
function getTableLine(num) {
    var list = [];
    var bottom = 120;
    var height = 25;
    for (var i = 0; i < num; i++) {
        list.push({
            type: 'line',
            bottom: bottom - i * height,
            right: 40,
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
    }
    list.push({
        type: 'line',
        top: 84,
        style: {
            fill: '#333',
            text:'34',
            
        },
        shape: {
            x1: 0,
            y1: 0,//80
            x2: 90,
            y2: 0,
        }

    });
    list.push({
        type: 'rect',
        top: 109,
        style: {
            stroke:'#000',
            
            fill: '#fff',
            lineWidth:1,
            text:'12',
            right: '50px',
        },
        shape: {
            x: 0,
            y: 0,//80
           width:79,
           height:56
        }

    });
    return list;
}
function getTableLine2(num) {
    var list = [];
    var left = 0;
    var width = 25;
    for (var i = 0; i < num; i++) {
        list.push({
            type: 'line',
            left: left + i * width,
            style: {
                fill: '#333'
            },
            shape: {
                x1: 0,
                y1: 85,//距离顶部
                x2: 0,
                y2: 3320
            }

        });
    }
    return list;
}
var lineList = getTableLine(5);
option = {
    backgroundColor: '#fff',
    grid: {
        left: '50px',
        right: '50px',
        top: '50px',
        bottom: '50px',
        containLabel: true
    },
    
    tooltip: {
        show: true,
        trigger: 'item'
    },

    xAxis: [{
            zlevel: 1,
            type: 'category',
            // boundaryGap : false,//从零刻线
            axisLabel: {
                color: fontColor,
                // 	backgroundColor:'red',
                width: 100,
                padding: [0, 0, 0, 30], //这个需要计算出来
                // 	interval:1,
                // 	margin:40
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#397cbc'
                }
            },

            axisTick: {
                yAxisIndex: 1,
                show: true,
                 length: 108
            },
            splitLine: {
                show: true,
                lineStyle: {
                    //  	color:'#195384',
                    color: ['rgba(0,146,246,0.2)', '#1262a7'],

                }
            },
            data: ['1号1', '', '2号1', '', '3号1', '', '4号1', '', '5号1', '', '6号1', '', '7号1', '']
        },
        {

            // type : 'category',
            // boundaryGap : false,//从零刻线
            axisLabel: {
                color: fontColor,
                margin: 5
            },
            z: -1,
            offset: -25,
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#132d5c'
                },
            },
            axisTick: {
                yAxisIndex: 1,
            },
            splitLine: {
                show: false,
                lineStyle: {
                    //  	color: ['#132d5c','#1262a7'],
                }
            },
            data: ['早', '晚', '早', '晚', '早', '晚', '早', '晚', '早', '晚', '早', '晚', '早', '晚']
        },
        {

            // type : 'category',
            // boundaryGap : false,//从零刻线
            axisLabel: {
                color: fontColor,
                margin: 5
            },
            z: -1,
            offset: -0,
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#132d5c'
                },
            },
            axisTick: {
                yAxisIndex: 1,
                show: false,
            },
            splitLine: {
                show: false,
                lineStyle: {
                    //  	color: ['#132d5c','#1262a7'],
                }
            },
            data: ['1早', '晚1', '早2', '晚', '早', '晚', '早', '晚', '早', '晚', '早', '晚', '早', '晚']
        }
    ],
    yAxis: [{
            type: 'value',
            zlevel: 1,
            type: 'value',
            name: '电导率us/cm',
            nameLocation:'center',
            nameGap: 40,//与轴线间距
            nameTextStyle:{ //文字样式
            //   color: '',
              fontSize: '18'
            },
                // name : '信息量',
            // min:0,
            // max:1000,
            boundaryGap: true,
            max: function(e) {
                return e.max + 50;
            },
            //  splitNumber: 6,   
            axisLabel: {
                formatter: '{value}',
                showMaxLabel: false,
                showMinLabel: false,
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
            },
        },

    ],
    series: [{
            name: '已采纳',
            type: 'line',
            stack: '总量',
            symbol: 'circle',
            symbolSize: 6,
            zlevel: 2,
            itemStyle: {
                normal: {
                    color: '#0092f6',
                    lineStyle: {
                        color: "#0092f6",
                        width: 1
                    },
                    //           areaStyle: { 
                    // 			//color: '#94C9EC'
                    // 			color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    // 				offset: 0,
                    // 				color: 'rgba(7,44,90,0.3)'
                    // 			}, {
                    // 				offset: 1,
                    // 				color: 'rgba(0,146,246,0.9)'
                    // 			}]),
                    //           }
                }
            },
            // markPoint:{
            // 	itemStyle:{
            // 		normal:{
            // 			color:'red'
            // 		}
            // 	}
            // },
            xAxisIndex: 0,
            data: [120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 290, 330, 214, 220],
        },
        //这个区域单独拿出来是为了设置其它的折线zlevel
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
    graphic: lineList //文档https://www.echartsjs.com/zh/option.html#graphic
};
myChart.on('click', function(t) {
    console.log(t)
})