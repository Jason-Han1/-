// let chart = null;

// 必须固定echarts高度,以及计算出来相应宽度

var jisuanmax = 1000; //那些分界线
var lineList = getTableLine(3);
option = {
    title: [{
        text: ' \n日期\n日变异率\n时间',
        top: -25,
        left: 0,
        textStyle: {
            lineHeight: 20,
            fontSize: 10,
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

    //整个图表的上下左右边距
    grid: {
        // width:300,
        left: 65, //图的x,y轴象限内有效区域距离，也就是y轴刻度区域的宽 65
        right: 1,
        // top:0,
        bottom: 1 //1
    },

    xAxis: [{
            type: 'category',
            z: 1,
            data: ['早', '晚', '早', '晚', '早', '晚', '早', '晚', '早', '晚', '早', '晚', '早', '晚'],
            position: 'top',
            offset: 0,
            splitArea: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                length: 179, //早晚中间的分界线 必须是图表显示区域高度
                lineStyle: {
                    width: 0.3,
                }
            },
            axisLabel: {
                interval: 0,
                textStyle: {
                    fontSize: 10,
                },
                margin: 5, //刻度标签与轴线之间的距离。
            },
             axisLine: {
                show: false,
                lineStyle: {
                    // color: '#ddd', // 颜色
                    // width: 0.5 // 粗细
                }
            }
           

        },
        {
           	type: 'category',
    		z:1,
    		data: ['10', '20', '10', '20', '10', '20', '10'],
    		offset: 20,
    		position: 'top',
    		splitArea: {
    			show: false
    		},
    		axisTick: {
                show: true,
                length: -30, //可以多设置反正超过了就隐藏了 上面表格部分内容里面左右的线 因为是从下面网上划线 所以要很高
                lineStyle: {
                    width: 0.3,
                }
            },
    		axisLabel: {
    			interval: 0,
    			formatter: '{value}%',
    			textStyle: {
    				fontSize: 10,
    				color: function (value, index) {
    					return value > 10 ? 'red' : 'green';
    				}
    			},
    			margin: 5,//刻度标签与轴线之间的距离。
    		},
            splitLine: {
                show: false,
            },
           axisLine: {
                show: false,
                lineStyle: {
                    // color: '#ddd', // 颜色
                    // width: 0.5 // 粗细
                }
            }

        },
        {
            type: 'category',
            z: 1,
            data: ['12/07', '12/08', '12/09', '12/10', '12/11', '12/12', '12/13'],
            position: 'top',
            offset: 40,
            splitArea: {
                show: false
            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                interval: 0,
                textStyle: {
                    fontSize: 10,
                },
                margin: 5, //刻度标签与轴线之间的距离。
            },
            //刻度轴是否显示,以及设置长度 
            axisTick: {
                show: true,
                length: -300, //可以多设置反正超过了就隐藏了 上面表格部分内容里面左右的线 因为是从下面网上划线 所以要很高
                lineStyle: {
                    width: 0.3,
                }
            },
             axisLine: {
                show: false,
                lineStyle: {
                    // color: '#ddd', // 颜色
                    // width: 0.5 // 粗细
                }
            }

        }

    ],
    yAxis: [{
        // 设置最大最小值为了在数据较少的时候也显示分层，max后面加的数根据实际业务情况估计
            min: '0',
            max: function(e){
    			return e.max + 10;
    		},
            axisLabel: {
                showMinLabel: false,
                showMaxLabel: false,
                textStyle: {
                    fontSize: 10,
                },
            },
            type: 'value',
            z: 3,
            //图里的横线样式
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['black'],
                    width: 0.5,
                    // type: 'solid'
                }
            },
          
            axisTick: {
                show: false
            },
           
        },
        {
            name: '峰值流速(PEF)L/min',
            position: 'left',
            nameLocation: 'center',
            nameGap: 45, //与轴线间距
            nameTextStyle: { //文字样式
                fontSize: '12'
            },
            axisLine: {
                lineStyle: {
                    color: '#606266'
                }
            },
        },
    ],
    series: [{
            name: '',
            type: 'line',
            z: 1,
            stack: '',
            // symbol: 'circle',
            symbolSize: 2,
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
            data: [1],
        },
        //这个区域单独拿出来是为了设置其它的折线zlevel
        //颜色区域划分
        {
            type: 'line',
            markArea: {
                silent: true,
                z: -10,
                data: [
                    [{
                        // name: '绿区',
                        yAxis: 0,
                        itemStyle: {
                            color: '#FAE3E0',
                            opacity: 1
                        },
                    }, {
                        yAxis: 100 //	name: '绿区'-黄区分割线 需要后台传过来,
                    }],
                    [{
                        // name: '黄区',
                        yAxis: 100,
                        itemStyle: {
                            color: '#FFEECB',
                            opacity: 1
                        },
                    }, {
                        yAxis: 200, //	name: 黄区 红区 分割线 需要后台传过来,
                    }],
                    [{
                        // name: '红区',
                        // yAxis: 200,
                        yAxis: 200,
                        itemStyle: {
                            color: '#C1EFDA',
                            opacity: 1
                        },
                    }, {
                        yAxis: 10000, //这个需要计算出来 红色最上面分割线 可以设置很大的
                    }],
                ]
            }
        }
    ],
    graphic: lineList
};

function getTableLine(num) {
    var list = [];
    var top = 0;
    var height = 20;
    for (var i = 0; i < num; i++) {
        list.push({
            type: 'line',
            top: 40 - i * height,
            right: 1,
            // left:'100%',
            style: {
                fill: '#FFFFFF',
                lineWidth: 0.5,
            },
            shape: {
                x1: 0,
                y1: 0,
                x2: 500, //数据多的时候长度是计算出来的 可以设置无限大
                percent: 1,
                y2: 0
            }
        });
    };
    //标题左侧侧的竖线
    list.push({
        type: 'line',
        style: {
            fill: '#FFFFFF',
            lineWidth: 1,
        },
        shape: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 221,
        }
    });

    //标题右侧的竖线
    list.push({
        type: 'line',
        style: {
            fill: '#FFFFFF',
            lineWidth: 0.5,
        },
        shape: {
            x1: 30,
            y1: 60,
            x2: 30,
            y2: 221,
            // percent:1
        }
    });

    //日变异率下的横线
    list.push({
        type: 'line',
        style: {
            fill: '#FFFFFF',
            lineWidth: 0.5,
        },
        shape: {
            x1: 0,
            y1: 60.5,
            x2: 90,
            y2: 60.5,
        }
    });

    // 标题下面的横线
    list.push({
        type: 'line',
        style: {
            fill: '#FFFFFF',
            lineWidth: 0.5,
        },
        shape: {
            x1: 0,
            y1: 219.5,
            x2: 100,
            y2: 219.5,
        }
    });

    return list;
}