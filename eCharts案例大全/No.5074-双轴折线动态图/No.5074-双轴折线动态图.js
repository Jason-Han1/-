var getname = ['2016', '2017', '2018', '2019', '2020'];
var getvalue = [2301, 1935, 1535, 1303, 998];
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
        trigger: "axis",
        enterable:true,  
         axisPointer: {
            lineStyle: {
                color: {
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(0,0,0,0)' // 0% 处的颜色
                    }, {
                        offset: 0.3,
                        color: 'rgba(0,225,231,0.59)' // 100% 处的颜色
                    }, {
                        offset: 0.7,
                        color: 'rgba(0,225,231,0.59)' // 100% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(0,0,0,0)' // 100% 处的颜色
                    }],

                }
            }
        },
        confine: true,
         
        formatter: '{b0}<br/>{a0}: {c0}元<br/>{a1}: {c1}元',
    },
    legend: {
        data: [{
            name: '教师月消费金额',
            icon:'circle'
        }, {
            name: '学生月消费金额',
            icon:  'circle'
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
        show: false,
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
        splitLine:{show: false}
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
        name: '元',
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
    series: [ {
        name: "教师月消费金额",
        type: 'line',
        data: getvalue,
        symbol: 'circle',
        yAxisIndex: 1,
        symbolSize: 8,
        lineStyle: {
            normal: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 1,
                    colorStops: [ {
                        offset: 0.8,
                        color: '#00E4FF' // 100% 处的颜色
                    } ],

                },
                width: 2,
                shadowColor: 'rgba(0,132,255,0.14)',
                shadowBlur: 8,

            },
        },
        itemStyle: {
            normal: {
                color: {
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.5,
                    colorStops: [{
                        offset: 0,
                        color: '#fff'
                    }, {
                        offset: 0.8,
                        color: '#00E4FF'
                    }, {
                        offset: 1,
                        color: '#00E4FF'
                    }],
                    global: false // 缺省为 false
                },
                borderColor: 'rgba(0, 236, 242, 0.35)',
                borderWidth: 10,
                opacity: 0,
            }
        },
        emphasis: {
            itemStyle: {
                opacity: 1
            }
        }
        //smooth: true,
    }, {
        name: "学生月消费金额",
        type: 'line',
        data: getvalue1,
        symbol: 'circle',
        yAxisIndex: 1,
        symbolSize: 8,
        lineStyle: {
            normal: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 1,
                    colorStops: [ {
                        offset: 0.8,
                        color: '#1FA17F' // 100% 处的颜色
                    } ],

                },
                width: 3,
                shadowColor: 'rgba(0,132,255,0.14)',
                shadowBlur: 8,

            },
        },
        itemStyle: {
            normal: {
                color: {
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.5,
                    colorStops: [{
                        offset: 0,
                        color: '#fff'
                    }, {
                        offset: 0.8,
                        color: '#2BFAB7'
                    }, {
                        offset: 1,
                        color: '#2BFAB7'
                    }],
                    global: false // 缺省为 false
                },
                borderColor: 'rgba(0, 236, 242, 0.35)',
                borderWidth: 10,
                opacity: 0,
            }
        },
        emphasis: {
            itemStyle: {
                opacity: 1
            }
        }
        //smooth: true,
    },]
};

let i = 0
setInterval(function(){
    i = i === getname.length ? 0 : i+1
	myChart.dispatchAction({
        type: 'showTip',
        seriesIndex:0,  // 显示第几个series
        dataIndex: i // 显示第几个数据
    });
}, 2000)
myChart.setOption(option);
window.addEventListener("resize",function(){   
	setTimeout(function(){
		myChart.resize();
	},2000);
});
