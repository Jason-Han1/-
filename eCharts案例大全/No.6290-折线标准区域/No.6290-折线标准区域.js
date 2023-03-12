var data = {
    type: "", // 01=> 血氧
    text: "心率趋势图", //标题
    markUp: "182", //标准上限
    markDown: "100", //标准上下限
    min: "135", //最小值
    max: "140" //最大值
};

function min(array) {
    var min = array[0];
    var len = array.length;
    for (var i = 1; i < len; i++) {
        if (array[i] && array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

function max(array) {
    var max = array[0];
    var len = array.length;
    for (var i = 1; i < len; i++) {
        if (array[i] && array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

var art = [Number(data.markUp), Number(data.markDown), Number(data.min), Number(data.max)];
var minarr = Number(min(art)),
    maxarr = Number(max(art)),
    min, max;
if (maxarr - minarr <= 0.5) {
    min = minarr / 1.02, max = maxarr * 1.02;
} else if (maxarr - minarr <= 1) {
    min = minarr / 1.04, max = maxarr * 1.04;
} else if (maxarr - minarr <= 1.5) {
    min = minarr / 1.06, max = maxarr * 1.06;
} else if (maxarr - minarr <= 2) {
    min = minarr / 1.08, max = maxarr * 1.08;
} else if (maxarr - minarr <= 2.5) {
    min = minarr / 1.1, max = maxarr * 1.1;
} else if (maxarr - minarr <= 3) {
    min = minarr / 1.12, max = maxarr * 1.12;
} else if (maxarr - minarr <= 3.5) {
    min = minarr / 1.14, max = maxarr * 1.14;
} else if (maxarr - minarr <= 4) {
    min = minarr / 1.16, max = maxarr * 1.16;
} else if (maxarr - minarr <= 10) {
    min = minarr / 1.18, max = maxarr * 1.18;
} else if (maxarr - minarr <= 20) {
    min = minarr / 1.2, max = maxarr * 1.2;
} else {
    min = minarr / 1.4, max = maxarr * 1.4;
}
/*if(data.type=="01"){
     min=80,max=110;
}*/
var minPointColor = "",
    maxPointColor = "";
if (data.min >= data.markDown && data.min <= data.markUp) { //if(data.minPointColor){
    minPointColor = "#1F9B21";
} else {
    minPointColor = "#EB6100";
}
if (data.max >= data.markDown && data.max <= data.markUp) { //if(data.maxPointColor){
    maxPointColor = "#1F9B21";
} else {
    maxPointColor = "#EB6100";
}

var option = {
    backgroundColor: "#FFFFFF",
    title: {
        text: data.text,
        textStyle: {
            color: "#666666",
            fontSize: 18,
            fontWeight: "normal"
        },
        top: "0",
        left: "2%"
    },
    grid: {
        left: '5%',
        right: '5%',
        top: '30px',
        bottom: '0',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        splitLine: {
            show: false
        },
        boundaryGap: true,
        data: [1, 2],
        axisLabel: {
            formatter: function(xVal) {
                return "";
            }
        },
        axisLine: {
            lineStyle: {
                color: "#e4e4e4"
            }
        },
        axisTick: {
            show: false
        }
    },
    yAxis: [{
            type: 'value',
            position: 'left',
            splitLine: {
                show: false
            },
            splitNumber: 10,
            axisLine: {
                lineStyle: {
                    color: "#e4e4e4"
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                formatter: ''
            },
            min: Number(min).toFixed(1),
            max: Number(max).toFixed(1)
        },
        {
            type: 'value',
            position: 'right',
            splitLine: {
                show: false
            },
            splitNumber: 10,
            axisLine: {
                lineStyle: {
                    color: "#e4e4e4"
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                formatter: ''
            },
            min: min.toFixed(0) < 10 ? 0 : min.toFixed(0),
            max: max.toFixed(0) < 10 ? 10 : max.toFixed(0)
        }

    ],
    /*         dataZoom: [
                 {
                     type: 'inside'
                 }
             ],*/
    series: [{
        type: 'line',
        symbol: "circle",
        symbolSize: 10,
        showAllSymbol: true,
        smooth: false,
        data: [{
            value: data.min,
            itemStyle: {
                color: minPointColor
            }
        }, {
            value: data.max,
            itemStyle: {
                color: maxPointColor
            }
        }],
        markPoint: {
            symbolSize: 80,
            label: {
                fontSize: 18
            },
            data: [

                {
                    coord: [0, data.min],
                    value: data.min,
                    itemStyle: {
                        color: minPointColor
                    }
                },
                {
                    coord: [1, data.max],
                    value: data.max,
                    itemStyle: {
                        color: maxPointColor
                    }
                },

            ]
        },
        /*markPoint: {
            label:{
                fontSize:"14"
            },
            data: [
                {
                    type: 'min',
                    name: '最小值',
                    value:data.min,
                    itemStyle : {
                        color : minpointColor
                    }
                },
                {
                    type: 'max',
                    name: '最大值',
                    value:data.max,
                    itemStyle : {
                        color : pointColor
                    }
                }
            ]
        },*/
        lineStyle: {
            opacity: "0"
        },
        itemStyle: {
            normal: {
                color: 'red',
                opacity: '1'
            }
        },
        markArea: {
            silent: true,
            show: true,
            itemStyle: {
                normal: {
                    color: "#DEF0DE",
                    opacity: '1'
                }
            },

            data: [
                [{
                    yAxis: data.markUp
                }, {
                    yAxis: data.markDown
                }]
            ]
        },
        markLine: {
            silent: true,
            show: true,
            animation: false,
            symbol: 'none',
            lineStyle: {
                normal: {
                    type: 'solid',
                    color: '#C3E4C3',
                    width: '0.5'
                }
            },
            tooltip: {
                formatter: ''
            },
            data: [

                {
                    xAxis: 0,
                    yAxis: data.markUp,
                    lineStyle: {
                        color: '#999999',
                        width: "0"
                    },
                    label: {
                        formatter: data.markUp,
                        position: 'start'
                    }
                },
                {
                    xAxis: 0,
                    yAxis: data.markUp,
                    lineStyle: {
                        color: '#999999',
                        width: "0"
                    },
                    label: {
                        formatter: data.markUp,
                        position: 'end'
                    }
                },
                {
                    xAxis: 0,
                    yAxis: data.markDown,
                    lineStyle: {
                        color: '#999999',
                        width: "0"
                    },
                    label: {
                        formatter: data.markDown,
                        position: 'start'
                    }
                },
                {
                    xAxis: 0,
                    yAxis: data.markDown,
                    lineStyle: {
                        color: '#999999',
                        width: "0"
                    },
                    label: {
                        formatter: data.markDown,
                        position: 'end'
                    }
                }
            ]
        }
    }]
};