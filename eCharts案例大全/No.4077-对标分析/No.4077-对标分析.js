var getname = ['东北师范大学', '北京师范大学', '华东师范大学', '华中师范大学', '陕西师范大学', '西南大学'];
var getvalue = [18, 19, 19, 17, 14, 24];
var colorList = [];
var colorList1 = [];
var colorList2 = [];
var colorList3 = [];
for (var i = 0; i <= getname.length; i++) {
    if (i === 0) {
        colorList[i] = {
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0,
                color: '#F7CB6B' // 0% 处的颜色
            }, {
                offset: 1,
                color: '#FFBF64' // 100% 处的颜色
            }],
        }
    } else {
        colorList[i] = {
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
        }
    }
}
for (var i = 0; i <= getname.length; i++) {
    if (i === 0) {
        colorList1[i] = '#FFDD9B';
        colorList2[i] = '#FFBA00';
        colorList3[i] = '#FFFAEB';
    } else {
        colorList1[i] = '#80C3FF';
        colorList2[i] = '#009CFF';
        colorList3[i] = '#EBFAFF';
    }
}


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
            return '收入类别分布<br>' + params[0].name + ': ' + params[0].value + '万元'
        }
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
        name: '专业数：个',
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
        type: 'bar',
        data: getvalue,
        barWidth: '20px',
        itemStyle: {
            normal: {
                color: function(params) {
                    return colorList[params.dataIndex]
                },
                barBorderRadius: [0, 0, 9, 9],
            }
        },
    }, {
        type: "pictorialBar",
        symbolSize: [20, 15], //调整截面形状
        symbolOffset: [0, -7.5],
        z: 12,
        symbolPosition: "end",
        itemStyle: {
            normal: {
                color: function(params) {
                    return colorList1[params.dataIndex]
                },
                label: {
                    show: false,
                }
            },

        },
        data: getvalue
    }, {
        type: "pictorialBar",
        symbolSize: [20, 15], //调整截面形状
        symbolOffset: [0, -7.5],
        z: -1,
        symbolPosition: "end",
        itemStyle: {
            normal: {
                color: function(params) {
                    return colorList2[params.dataIndex]
                },
                label: {
                    show: true,
                    position: 'top',
                    lineHeight: 15,
                    padding: [0, 5],
                    borderRadius: 4,
                    
                    formatter: function(params) {
                        return params.value;
                    },
                    textStyle: {
                        fontSize: 13,

                    },
                }
            },

        },
        data: getvalue
    }, {
        type: "pictorialBar",
        symbolSize: [28, 15], //调整截面形状
        symbolOffset: [0, -27.5],
        symbol: "roundRect",
        z: -10,
        symbolPosition: "end",
        itemStyle: {
            normal: {
                color: function(params) {
                    return colorList3[params.dataIndex]
                },
                label: {
                    show: false,
                },
                barBorderRadius: [0, 0, 9, 9]
            },

        },
        data: getvalue
    }]
};