//声明数据
var dataTime = [0, 1, 3, 5, 10, 15, 20, 22, 25]; //间隔天数 = 接收日期 - 告知日期
var data1 = [150, 170, 220, 495, 290, 210, 180, 160, 158],
    data2 = [140, 150, 160, 180, 220, 288, 435, 200, 140];
var data3 = []; /*取到的数组应为比较之后的较大值 [170, 220, 495, 290, 188, 435, 200, 158]*/
for (var i = 0; i < data1.length || i < data2.length; i++) {
    var _d1 = data1[i],
        _d2 = data2[i];
    if (_d1 > _d2) {
        data3.push(data1[i])
    } else {
        data3.push(data2[i])
    }
    console.log(data3)
}

//初始化echarts

option = {
    backgroundColor: '#191b4b', //背景色
    title: {
        show: false
    },
    tooltip: {
        trigger: 'axis', //item
        formatter: function(params) {
            var res = '间隔' + params[0].name + '天 <br>';
            for (var i = 0, l = params.length - 1; i < l; i++) { //console.log(params)
                res += '<i style="display:inline-block;width:8px;height:8px;border-radius:8px;background:' + params[i].color + ';margin-right:5px;"></i>' + params[i].seriesName + ' ' + params[i].value + '<br>';
            }
            return res;
        },
        axisPointer: {
            type: 'line', //'line' | 'cross' | 'shadow' | 'none
            lineStyle: {
                color: 'rgba(255, 255, 255, .5)',
                width: 2,
                type: 'solid'
            }
        },
        confine: 'true' //是否将 tooltip 框限制在图表的区域内
    },
    legend: {
        show: false,
        selectedMode: true,
        itemWidth: 12,
        itemHeight: 10,
        itemGap: 20,
        textStyle: {
            fontSize: 16,
            color: 'white'
        },
        x: 'center',
        y: 'top'
    },
    grid: {
        top: '11%',
        left: '9%',
        right: '10%',
        bottom: '11%',
    },
    toolbox: {
        show: false
    },
    xAxis: {
        type: 'category',
        name: '\n\n天数',
        nameTextStyle: {
            color: '#8aa5ab',
            fontSize: 15
        },
        nameLocation: "end", //坐标轴名称显示位置,可选: start | middle | end
        boundaryGap: true, //边界间隙
        axisLabel: {
            show: true,
            textStyle: {
                color: '#8aa5ab',
                fontSize: 15
            },
            formatter: '{value}'
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(255, 255, 255, .5)'
            }
        },
        axisTick: {
            show: false //坐标轴小标记
        },
        data: dataTime,
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            show: true,
            textStyle: {
                color: 'white',
                fontSize: 15
            },
            margin: 10,
            formatter: '{value}'
        },
        axisLine: { //y轴线
            show: true,
            lineStyle: {
                color: 'rgba(255, 255, 255, .5)'
            }
        },
        axisTick: {
            show: false //坐标轴小标记
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(72, 81, 119, .5)', //横向网格线颜色
                width: 1,
                type: 'solid'
            }
        }
    },
    series: [{
        name: '接收',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        lineStyle: {
            normal: {
                width: 5,
                color: '#00b0f0' //曲线颜色
            }
        },
        itemStyle: {
            normal: {
                color: '#00b0f0',
                label: {
                    show: false
                }
            }
        },
        data: data1, //载入数据
        markPoint: { //设置最高点的显示内容
            symbol: 'path://M5.500,0.500 C8.261,0.500 10.500,2.739 10.500,5.500 C10.500,8.261 8.261,10.500 5.500,10.500 C2.739,10.500 0.500,8.261 0.500,5.500 C0.500,2.739 2.739,0.500 5.500,0.500 Z', //'circle', 'rect', 'roundRect'
            symbolSize: 12,
            //symbolOffset:[0, 0],
            itemStyle: {
                color: 'white'
            },
            label: {
                show: true,
                offset: [65, 1],
                color: '#fff',
                fontSize: 15,
                formatter: function(params) { //console.log(params)
                    var res = params.data.text
                    return res;
                }
            },
            data: [{
                type: 'max',
                name: '最大值',
                text: '接收'
            }]
        }
    }, {
        name: '反馈',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        lineStyle: {
            normal: {
                width: 5,
                color: '#01f274' //曲线颜色
            }
        },
        itemStyle: {
            normal: {
                color: '#01f274',
                label: {
                    show: false
                }
            }
        },
        data: data2, //载入数据
        markPoint: { //设置最高点的显示内容
            symbol: 'path://M5.500,0.500 C8.261,0.500 10.500,2.739 10.500,5.500 C10.500,8.261 8.261,10.500 5.500,10.500 C2.739,10.500 0.500,8.261 0.500,5.500 C0.500,2.739 2.739,0.500 5.500,0.500 Z',
            symbolSize: 12,
            itemStyle: {
                color: 'white'
            },
            label: {
                show: true,
                offset: [65, 1],
                color: '#fff',
                fontSize: 15,
                formatter: function(params) {
                    var res = params.data.text
                    return res;
                }
            },
            data: [{
                type: 'max',
                name: '最大值',
                text: '反馈'
            }]
        }
    }, {
        type: 'pictorialBar',
        data: data3, //载入白色虚线数据(比较之后得出的数组)
        barGap: "10%",
        symbolRepeat: true,
        symbolMargin: 2,
        silent: true,
        symbol: "rect",
        symbolSize: 2,
        symbolClip: true,
        itemStyle: {
            normal: {
                color: 'rgba(255, 255, 255, .7)',
                label: {
                    show: false
                }
            }
        }
    }]
};

//使用刚指定的配置项和数据显示图表。
myChart.setOption(option);