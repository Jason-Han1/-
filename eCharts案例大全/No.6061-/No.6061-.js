var labelData = ['2020', '2019', '2018', '2018', '2016', '2015'];
var manData = [1500, 1600, 1600, 1500, 1600,500];
var womanData = [-12000, -10000, -8000, -8000, -6000, -6000];
var seriescolor = ['#4B96F3', '#03C9AC'];
option = {
    legend: {
        data: ['实体图书', '电子图书'],
        type: "scroll",
        //icon: 'ret',
        height: '88%',
        right: '20',
        top: '10',
        itemGap: 25,
        itemWidth: 14,
        itemHeight: 14,
        textStyle: {
            fontSize: '14',
            color: '#999',
        },

    },
    tooltip: {
        trigger: 'axis',
        extraCssText: 'padding-left:8px;line-height:25px;width:170px;height:60px;background:rgba(0,0,0,0.7);border-radius:6px;',
        axisPointer: {
            type: 'none'
        },
        textStyle: {
            fontSize: '14',
            color: '#fff',
        },
        formatter: function(params) {
            var str = ''; //声明一个变量用来存储数据
            str += '<div>' + params[0].name + '年</div>';
            for (var i = 0; i < params.length; i++) {
                if (params[i].seriesName == '实体图书') {
                    str += '<span style="display:inline-block;margin-right:5px;margin-bottom:2px;width:6px;height:6px;border-radius:50%;background-color:' + seriescolor[0] + ';"></span>新购' + params[i].seriesName + '</span> : <span>' + -params[i].value + '册</br>';
                } else if (params[i].seriesName == '电子图书') {
                    str += '<span style="display:inline-block;margin-right:5px;margin-bottom:2px;width:6px;height:6px;border-radius:50%;background-color:' + seriescolor[1] + ';"></span>新购' + params[i].seriesName + '</span> : <span>' + params[i].value + '册</br>';
                }
            }
            return str;
        }
    },
    xAxis: [{
        type: 'value',
        gridIndex: 0,
        axisTick: {
            show: false,
            inside: false
        },
        axisLabel: {
            show: false
        },
        axisLine: { // Y轴轴线样式
            show: false,
            lineStyle: {
                color: '#000',
            }
        },
        splitLine: {
            show: false
        }
    }, {
        type: 'value',
        gridIndex: 1,
        axisTick: {
            show: false
        }, //是否显示刻度
        axisLine: { // Y轴轴线样式
            show: false, // 是否显示X轴
            lineStyle: {
                color: '#000',
            }
        },
        axisLabel: {
            show: false //是否显示X轴内容
        },
        splitLine: {
            show: false
        }
    }, {
        type: 'value',
        gridIndex: 2,
        axisTick: {
            show: false
        }, //是否显示刻度
        axisLine: { // Y轴轴线样式
            show: false, // 是否显示X轴
            lineStyle: {
                color: '#000',
            }
        },
        axisLabel: {
            show: false //是否显示X轴内容
        },
        splitLine: {
            show: false
        }
    }],
    yAxis: [{
        type: 'category',
        gridIndex: 0,
        inverse: true,
        data: labelData,
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisLine: { // Y轴轴线样式
            show: false,
            lineStyle: {
                color: '#D9D9D9',
            }
        }
    }, {
        type: 'category',
        gridIndex: 1,
        inverse: true,
        data: labelData,
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisLine: {
            show: false //是否显示轴线
        }
    }, {
        type: 'category',
        gridIndex: 2,
        inverse: true,
        data: labelData,
        position:'left',
        axisTick: {
            show: false
        },
        axisLabel: {
            margin: 10,
            color: '#666',
            textStyle: {
                fontSize: 14
            },
        },
        axisLine: {
            show: false //是否显示轴线
        }
    }],
    grid: [{
        top: 50,
        width: '34%',
        left: '10%',
        bottom: 30,
    }, {
        top: 50,
        left: '56%',
        right: '10%',
        bottom: 30,
    },{
        top: 50,
        left: '52.5%',
        bottom: 30,
    }],
    color: ['#2FACFA', '#F5A623'],
    series: [{
            name: '实体图书',
            type: 'bar',
            barWidth: '14',
            xAxisIndex: 0,
            yAxisIndex: 0,
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: '#7BB2FF'
                    }, {
                        offset: 1,
                        color: '#4186FF'
                    }], false),
                    barBorderRadius: [6,0,0,6],
                    label: {
                        show: true,
                        position: 'left',
                        formatter: function(params) {
                            return (params.value * -1);
                        },
                        textStyle: {
                            fontSize: 14,
                            color: '#666',
                        },
                    }
                }
            },
            data: womanData
        },
        {
            name: '电子图书',
            type: 'bar',
            barWidth: '14',
            xAxisIndex: 1,
            yAxisIndex: 1,
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                        offset: 0,
                        color: '#00D0BF'
                    }, {
                        offset: 1,
                        color: '#05C399'
                    }], false),
                    barBorderRadius: [0,6,6,0],
                    label: {
                        show: true,
                        position: 'right',
                        formatter: function(params) {
                            return params.value;
                        },
                        textStyle: {
                            fontSize: 14,
                            color: '#666',
                        },
                    }
                }
            },
            data: manData
        }
    ]
};