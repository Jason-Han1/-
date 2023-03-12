var getname = ['2016', '2017', '2018', '2019', '2020'];
var getvaluemx = [2301232.23, 1935235.23, 1532531.52, 1303235.22, 99845.2];
var getvalue = [];
for(i=0;i<getvaluemx.length;i++){
    getvalue[i]=(getvaluemx[i]/10000).toFixed(2)
}
var getvalue1 = [1301, 2135, 935, 1503, 1098];

//计算最大值  
var maxnum = Math.max.apply(null, getvalue);
var maxnum1 = Math.max.apply(null, getvalue1);
var maxlen = Math.pow(10, String(Math.ceil(maxnum)).length - 2);
var maxlen1 = Math.pow(10, String(Math.ceil(maxnum1)).length - 2);
if (maxnum >= 5) {
    var max = Math.ceil(maxnum / (9.5 * maxlen)) * maxlen * 10;
} else {
    var max = 5;
}
if (maxnum1 >= 5) {
    var max1 = Math.ceil(maxnum1 / (9.5 * maxlen1)) * maxlen1 * 10;
} else {
    var max1 = 5;
}

option = {
    backgroundColor: '#000',
    grid: {
        top: 65,
        bottom: 35,
        left: 50,
        right: 50
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function (params) {
            if(params[0]){
                if(params[1]){
                    return params[0].name+'<br>'+params[0].seriesName+'：¥'+
                    getvaluemx[params[0].dataIndex]+'<br>'+params[1].seriesName+'：'+
                    params[1].value
                }else{
                    if(params[0].seriesName=='销售金额'){
                        return params[0].name+'<br>'+params[0].seriesName+'：¥'+
                        getvaluemx[params[0].dataIndex]
                    }
                    if(params[0].seriesName=='门板面积'){
                        return params[0].name+'<br>'+params[0].seriesName+'：'+
                        params[0].value
                    }
                }
            }
        }
    },
    legend: {
        data: [{
            name: '销售金额',
            icon:'circle'
        }, {
            name: '门板面积',
            icon: 'circle'
        }],
        type: "scroll",
        top: '5',
        right: '20',
        itemGap: 25,
        itemWidth: 12,
        itemHeight: 12,
        textStyle: {
            fontSize: '13',
            color: '#A9C1E5',
        },

    },
    xAxis: [{
        data: getname,
        axisLabel: {
            margin: 10,
            color: '#C5DCFF',
            textStyle: {
                fontSize: 13
            },
        },
        axisLine: {
            lineStyle: {
                color: '#3E5B7D',
            }
        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [{
        type: 'value',
        min: 0,
        max: max, // 计算最大值
        interval: max / 5, //  平均分为5份
        splitNumber: 5,
        name: '万元',
        nameTextStyle: {
            color: '#C5DCFF',
            fontSize: 13,
            padding: [0, 0, -8, 30]
        },
        axisLabel: {
            formatter: function(value) {
                num = value
                if (num && num != 'undefined' && num != 'null') {
                    let numS = num;
                    numS = numS.toString();
                    numS = numS.replace(/,/gi, '');
                    return numS;
                } else {
                    return num;
                }
            },
            color: '#C5DCFF',
            textStyle: {
                fontSize: 13
            },
        },
        axisLine: {
            lineStyle: {
                color: '#3E5B7D',
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(62,91,125,.25)',
            }
        }
    }, {
        type: 'value',
        min: 0,
        max: max1, // 计算最大值
        interval: max1 / 5, //  平均分为5份
        splitNumber: 5,
       // name: '个',
        nameTextStyle: {
            color: '#C5DCFF',
            fontSize: 13,
            padding: [0, 0, -8, -20]
        },
        axisLabel: {
            formatter: function(value) {
                num = value
                if (num && num != 'undefined' && num != 'null') {
                    let numS = num;
                    numS = numS.toString();
                    numS = numS.replace(/,/gi, '');
                    return numS;
                } else {
                    return num;
                }
            },
            color: '#C5DCFF',
            textStyle: {
                fontSize: 13
            },
        },
        axisLine: {
            lineStyle: {
                color: '#3E5B7D',
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(62,91,125,.25)',
            }
        }
    }],
    animation: false,
    series: [{
        name: "销售金额",
        type: 'bar',
        barGap:'120%',
        data: getvalue,
        barWidth: '12px',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: '#22CFF5'
                }, {
                    offset: 1,
                    color: '#1F70EC'
                }], false),
                barBorderRadius: 6,
            }
        },
        label: {
                show: true,
                position: 'top',
                formatter: function(params) {
                    return params.value;
                },
                textStyle: {
                    fontSize: 13,
                    color: '#22CFF5',
                },
            }
    }, {
        name: "门板面积",
        type: 'bar',
        data: getvalue1,
        barWidth: '12px',
        yAxisIndex: 1,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#05C399' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#0FE4D3' // 100% 处的颜色
                }], false),
                barBorderRadius: 5,
            }
        },                        
        label: {
                show: true,
                position: 'top',
                formatter: function(params) {
                    return params.value;
                },
                textStyle: {
                    fontSize: 13,
                    color: '#05C399',
                },
            }
    }]
};