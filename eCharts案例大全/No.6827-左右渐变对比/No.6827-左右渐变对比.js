var labelData = ['普高高中生毕业生数', '普高高中生就业生数', '普高高中生比例', '三校生毕业生数', '三校生就业生数', '三校生比例', '五年制高职毕业生数', '五年制高职就业生数'];
var manData = [50, 28, 80, 65, 68];
var womanData = [-50, -28, -40, -45, -38];
var seriescolor = ['#4B96F3', '#03C9AC'];
option = {
    backgroundColor: '#fff',
    legend: {
        data: ['本校数据', '全国示范院校平均数'],
        type: "scroll",
        //icon: 'ret',
        height: '88%',
        right: '20',
        top: '10',
        itemGap: 25,
        itemWidth: 13,
        itemHeight: 13,
        textStyle: {
            fontSize: '13',
            color: '#666',
        },

    },
    // tooltip（提示框组件）
    tooltip: {
        trigger: 'axis',
        extraCssText: 'padding-left:8px;line-height:30px;width:200px;height:70px;background:rgba(255,255,255,1);box-shadow:1px 5px 20px 0px rgba(1,11,19,0.2);border-radius:6px;',
        axisPointer: {
            type: 'none'
        },
        textStyle: {
            fontSize: '14',
            color: '#666',
        },
        formatter: function(params) {
            var str = ''; //声明一个变量用来存储数据
            str += '<div>' + params[0].name + '</div>';
            for (var i = 0; i < params.length; i++) {
                if (params[i].seriesName == '本校数据') {
                    str += '<span style="display:inline-block;margin-right:5px;margin-bottom:2px;width:6px;height:6px;border-radius:50%;background-color:' + seriescolor[0] + ';"></span>' + params[i].seriesName + '</span> : <span>' + -params[i].value + '</br>';
                } else if (params[i].seriesName == '全国示范院校平均数') {
                    str += '<span style="display:inline-block;margin-right:5px;margin-bottom:2px;width:6px;height:6px;border-radius:50%;background-color:' + seriescolor[1] + ';"></span>' + params[i].seriesName + '</span> : <span>' + params[i].value + '</br>';
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
    }],
    grid: [{
        top: 50,
        width: '39%',
        left: '10%',
        bottom: 30,
    }, {
        top: 50,
        left: '50%',
        right: '10%',
        bottom: 30,
    }],
    color: ['#2FACFA', '#F5A623'],
    series: [{
            name: '本校数据',
            type: 'bar',
            barWidth: '14',
            gridIndex: 0,
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                        offset: 0,
                        color: '#5FBEFF'
                    }, {
                        offset: 1,
                        color: '#589AFC'
                    }], false),
                    barBorderRadius: 60,
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
            name: '全国示范院校平均数',
            type: 'bar',
            barWidth: '14',
            xAxisIndex: 1,
            yAxisIndex: 1,
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: '#02D1C2'
                    }, {
                        offset: 1,
                        color: '#0BC198'
                    }], false),
                    barBorderRadius: 60,
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
        },
        {
            type: 'bar',
            barWidth: '14',
            xAxisIndex: 1,
            yAxisIndex: 1,
            barGap: '-100%',
            itemStyle: {
                normal: {
                    barBorderRadius: 60,
                    color: 'transparent'
                }
            },
            label: {
                normal: {
                    show: true,
                    position: ['-10', '20'],
                    textStyle: {
                        fontSize: 15,
                        align: 'center',
                        color: '#333',
                    },
                    formatter: function(params) {
                        return labelData[params.dataIndex];
                    }
                }
            },
            data: manData
        }

    ]
};