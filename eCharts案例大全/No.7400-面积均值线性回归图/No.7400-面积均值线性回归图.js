var ckqList = [{
    year: '2013',
    value: -3
},{
    year: '2014',
    value: -2
},{
    year: '2015',
    value: 0
},{
    year: '2016',
    value: -1
},{
    year: '2017',
    value: 2
},{
    year: '2018',
    value: 2
},{
    year: '2019',
    value: 3
},{
    year: '2020',
    value: 5
}];

var xData = [],
    data1 = [],
    data2 = [],
    data3 = [],
    data4 = [];

for (var i=0; i<ckqList.length; i++) {
    xData.push(ckqList[i].year);
    data4.push([i, ckqList[i].value]);
    data2.push(1);
}


var myRegression = ecStat.regression('linear', data4, 3);
myRegression.points.sort(function(a, b) {
    return a[0] - b[0];
});
data3 = myRegression.points;

var data3Min = 0;
for (var j=0; j<data3.length; j++) {
    let num = (data3[j][1] - 0.5).toFixed(3);
    data1.push(Number(num));
    
    if (Number(num) < data3Min) {
        data3Min = Number(num);
    }
}

var data4Min = 0;
for (var i=0; i<data4.length; i++) {
    if (Number(data4[i][1]) < data4Min) {
        data4Min = Number(data4[i][1]);
    }
}


var min = 0;
if (data3Min < 0 || data4Min < 0) {
    if (data3Min < data4Min) {
        min = -data3Min;
    } else {
        min = -data4Min;
    }
    
    min = Math.ceil(min);

    for (var i=0; i<data4.length; i++) {
        data1[i] = data1[i] + min;
        data3[i][1] = data3[i][1] + min;
        data4[i][1] = data4[i][1] + min;
    }
}

option = {
    toolbox: {
        show: true,
        feature: {
            saveAsImage: {
                show: true
            }
        },
        x: "right",
        y: 12,
        padding: 10,
        itemSize: 14
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line',
        },
        formatter: function (params, ticket, callback) {
            let msgStr = params[0].axisValue + "<br>";
            let vl1 = params[0].value - min;
            let vl2 = params[0].value + params[1].value - min;
            vl1 = vl1.toFixed(3);
            vl2 = vl2.toFixed(3);
            msgStr += "95%置信区间："+vl1+" mil k㎡ ~ "+vl2+" mil k㎡<br>";
            msgStr += "异常值："+(params[3].value[1] - min)+" mil km2";
            return msgStr;
        }
    },
    calculable: false,
    xAxis: {
        name: '年',
        type: 'category',
        boundaryGap: false,
        data: xData,
        axisLine: {
            lineStyle: {
                color: "rgba(0,0,0,0.7)"
            }
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: true,
            lineStyle: {
                color: "rgba(0,0,0,0.85)"
            }
        },
        axisLabel: {
            textStyle: {
                fontSize: 12,
                color: "rgba(0,0,0,0.85)"
            }
        }
    },
    yAxis: {
        type: 'value',
        name: 'million k㎡',
        axisLabel: {
            formatter: function (value, index) {
                // 格式化成月/日，只在第一个刻度显示年份
                var str = value - min;
                return str;
            }
        },
        axisLine: {
            lineStyle: {
                color: "rgba(0,0,0,0.7)"
            }
        },
        splitLine: {
            show: false
        }
    },
    series: [{
        name: '最小值',
        type: 'line',
        stack: '总量',
        data: data1,
        symbol: 'none',
        areaStyle: { // 填充区域
            color: 'rgba(255,255,255,0)'
        },
        lineStyle: {
            normal: {
                width: 0
            }
        }
    },{
        name: '差值',
        type: 'line',
        stack: '总量',
        data: data2,
        symbol: 'none',
        areaStyle: { // 填充区域
            normal: {
                color: '#ddd'
            }
        },
        lineStyle: {
            normal: {
                width: 0
            }
        }
    },{
        name: '线性回归',
        type: 'line',
        smooth: true,
        showSymbol: false,
        data: data3,
        symbol: 'none',
        lineStyle: {
            normal: {
                color: '#aaa',
                type: 'dashed',
                width: 1
            }
        }
    },{
        name: '折线',
        type: 'line',
        data: data4,
        lineStyle: {
            normal: {
                color: '#222'
            }
        },
        symbol: 'diamond',
        symbolSize: 8,
        itemStyle: {
            normal: {
                color: '#222'
            }
        }
    }],
    grid: {
        x: 80,
        y: 35,
        x2: 60,
        y2: 50,
        borderWidth: 0,
        containLabel: true
    }
};
