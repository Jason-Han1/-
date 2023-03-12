var getname = ['专必', '专选'];
var getvalue = [18, 19];
var getvalue1 = [17, 14];
var getvalue2 = [15, 17];
var getvalue3 = [14, 15];

var colorFirst = {
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0,
                color: '#4EA4F3' // 0% 处的颜色
            }, {
                offset: 1,
                color: '#0A79DF' // 100% 处的颜色
            }],
        };
var colorFirst1 = '#80C3FF';
var colorFirst2 = '#82AFC6';//第一系列颜色


var colorSecond = {
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0,
                color: '#FFBF64' // 0% 处的颜色
            }, {
                offset: 1,
                color: '#F7CB6B' // 100% 处的颜色
            }],
        };
var colorSecond1 = '#FFDD9B';
var colorSecond2 = '#82AFC6';//第二系列颜色


var colorThird = {
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0,
                color: '#0BC991' // 0% 处的颜色
            }, {
                offset: 1,
                color: '#61E9C1' // 100% 处的颜色
            }],
        };
var colorThird1 = '#7AF0CD';
var colorThird2 = '#82AFC6';//第三系列颜色


var colorForth = {
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0,
                color: '#C2B4FF' // 0% 处的颜色
            }, {
                offset: 1,
                color: '#A48FFF' // 100% 处的颜色
            }],
        };
var colorForth1 = '#D9D0FF';
var colorForth2 = '#82AFC6';//第四系列颜色


option = {
    grid: {
        top: '33',
        right: '15',
        left: '50',
        bottom: '55'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function(params) {
            var str = ''; //声明一个变量用来存储数据
            str += '<div>' + params[0].name + '</div>';
            for (var i = 0; i < params.length; i++) {
                    str = '<span>' + params[0].name + '</span></br><span style="display:inline-block;float:left;width:12px;height:12px;margin-top:5px;background:#0A79DF;color:#fff;border-radius:30%;"></span><span>&nbsp&nbsp30人及以下：</span><span style="display:block;width:60px;float:right;text-align:right">'+getvalue[params[i].dataIndex]+'门</span></br><span style="display:inline-block;float:left;width:12px;height:12px;margin-top:5px;background:#F7CB6B;color:#fff;border-radius:30%;"></span><span>&nbsp&nbsp31-60人：</span><span style="display:block;width:60px;float:right;text-align:right">'+getvalue1[params[i].dataIndex]+'门</span></br><span style="display:inline-block;float:left;width:12px;height:12px;margin-top:5px;background:#61E9C1;color:#fff;border-radius:30%;"></span><span>&nbsp&nbsp61-90人：</span><span style="display:block;width:60px;float:right;text-align:right">'+getvalue2[params[i].dataIndex]+'门</span></br><span style="display:inline-block;float:left;width:12px;height:12px;margin-top:5px;background:#A48FFF;color:#fff;border-radius:30%;"></span><span>&nbsp&nbsp90人以上：</span><span style="display:block;width:60px;float:right;text-align:right">'+getvalue3[params[i].dataIndex]+'门</span>';
            }
            return str;
        }
    },
    color:['#0A79DF','#F7CB6B','#61E9C1','#A48FFF'],
    legend: {
        type: "scroll",
        right: '10',
        top: '0',
        data: ['30人及以下', '31-60人', '61-90人', '90人以上'],
        itemGap: 25,
        itemWidth: 16,
        itemHeight: 16,
        textStyle: {
            fontSize: '13',
            color: '#666666',
        },

    },
    xAxis: [{
        data: getname,
        axisLabel: {
            //interval: 0,  
            formatter: function(value) {
                var ret = ""; //拼接加\n返回的类目项  
                var maxLength = 4; //每项显示文字个数  
                var valLength = value.length; //X轴类目项的文字个数  
                var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数  
                if (rowN > 1) //如果类目项的文字大于4,
                {
                    for (var i = 0; i < rowN; i++) {
                        var temp = ""; //每次截取的字符串  
                        var start = i * maxLength; //开始截取的位置  
                        var end = start + maxLength; //结束截取的位置  
                        //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧  
                        temp = value.substring(start, end) + "\n";
                        ret += temp; //凭借最终的字符串  
                    }
                    return ret;
                } else {
                    return value;
                }
            },
            margin: 10,
            color: '#666666',
            textStyle: {
                fontSize: 13
            },
        },
        axisLine: {
            lineStyle: {
                color: '#B0C5DB',
            }
        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [{
        name: '门',
        nameTextStyle: {
            color: '#999999',
            fontSize: 13,
            padding: [0, 0, 0, 65]
        },
        axisLabel: {
            color: '#666666',
            textStyle: {
                fontSize: 13
            },
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: '#CCDBEB',
                type: 'dashed',
                opacity: 0.5
            }
        }
    }],
    series: [{
        name:'30人及以下',
        stack:'30人及以下',
        type: 'bar',
        data: getvalue,
        barWidth: '20px',
        itemStyle: {
            normal: {
                color: function(params) {
                    return colorFirst
                },
                barBorderRadius: [0, 0, 9, 9],
            }
        },
    },{
        name:'30人及以下',
        stack:'30人及以下',
        type: "pictorialBar",
        symbolSize: [20, 15], //调整截面形状
        symbolOffset: [-39, -7.5],
        z: 12,
        symbolPosition: "end",
        itemStyle: {
            normal: {
                color: function(params) {
                    return colorFirst1
                },
                label: {
                    show: false,
                }
            },

        },
        data: getvalue
    },{
        name:'30人及以下',
        stack:'30人及以下',
        type: "pictorialBar",
        symbolSize: [20, 15], //调整截面形状
        symbolOffset: [-39, -7.5],
        z: -1,
        symbolPosition: "end",
        itemStyle: {
            normal: {
                color: function(params) {
                    return colorFirst2
                }
            },

        },
        data: getvalue
    },//第一系列
    
    
    
    
    
    
    
    
    {
        name:'31-60人',
        stack:'31-60人',
        type: 'bar',
        data: getvalue1,
        barWidth: '20px',
        itemStyle: {
            normal: {
                color: function(params) {
                    return colorSecond
                },
                barBorderRadius: [0, 0, 9, 9],
            }
        },
    },{
        name:'31-60人',
        stack:'31-60人',
        type: "pictorialBar",
        symbolSize: [20, 15], //调整截面形状
        symbolOffset: [-13, -7.5],
        z: 12,
        symbolPosition: "end",
        itemStyle: {
            normal: {
                color: function(params) {
                    return colorSecond1
                },
                label: {
                    show: false,
                }
            },

        },
        data: getvalue1
    },{
        name:'31-60人',
        stack:'31-60人',
        type: "pictorialBar",
        symbolSize: [20, 15], //调整截面形状
        symbolOffset: [-13, -7.5],
        z: -1,
        symbolPosition: "end",
        itemStyle: {
            normal: {
                color: function(params) {
                    return colorSecond2
                }
            },

        },
        data: getvalue1
    },//第二系列
    
    
    
        {
        name:'61-90人',
        stack:'61-90人',
        type: 'bar',
        data: getvalue2,
        barWidth: '20px',
        itemStyle: {
            normal: {
                color: function(params) {
                    return colorThird
                },
                barBorderRadius: [0, 0, 9, 9],
            }
        },
    },{
        name:'61-90人',
        stack:'61-90人',
        type: "pictorialBar",
        symbolSize: [20, 15], //调整截面形状
        symbolOffset: [13, -7.5],
        z: 12,
        symbolPosition: "end",
        itemStyle: {
            normal: {
                color: function(params) {
                    return colorThird1
                },
                label: {
                    show: false,
                }
            },

        },
        data: getvalue2
    },{
        name:'61-90人',
        stack:'61-90人',
        type: "pictorialBar",
        symbolSize: [20, 15], //调整截面形状
        symbolOffset: [13, -7.5],
        z: -1,
        symbolPosition: "end",
        itemStyle: {
            normal: {
                color: function(params) {
                    return colorThird2
                }
            },

        },
        data: getvalue2
    },//第三系列
    
    
    
        {
        name:'90人以上',
        stack:'90人以上',
        type: 'bar',
        data: getvalue3,
        barWidth: '20px',
        itemStyle: {
            normal: {
                color: function(params) {
                    return colorForth
                },
                barBorderRadius: [0, 0, 9, 9],
            }
        },
    },{
        name:'90人以上',
        stack:'90人以上',
        type: "pictorialBar",
        symbolSize: [20, 15], //调整截面形状
        symbolOffset: [39, -7.5],
        z: 12,
        symbolPosition: "end",
        itemStyle: {
            normal: {
                color: function(params) {
                    return colorForth1
                },
                label: {
                    show: false,
                }
            },

        },
        data: getvalue3
    },{
        name:'90人以上',
        stack:'90人以上',
        type: "pictorialBar",
        symbolSize: [20, 15], //调整截面形状
        symbolOffset: [39, -7.5],
        z: -1,
        symbolPosition: "end",
        itemStyle: {
            normal: {
                color: function(params) {
                    return colorForth2
                }
            },

        },
        data: getvalue3
    }//第四系列
    
    
    
    
    ]
};