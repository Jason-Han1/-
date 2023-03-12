var xAxisData = ['09-01', '09-02', '09-03', '09-04', '09-05', '09-06', '09-07', '09-08', '09-09', '09-10'];
var seriesData = [0.5, 0.2, 0.1, 0.4, 0.5, 1, 0.5, 0.2, 0.1, 0.4, 0.5, 1];
var arrowArr = ['W', 'WSW', 'SW', 'SSW', 'S', 'SSE', 'SE', 'ESE', 'E', 'E'];
var preditDate = '09-05';
var beforeEnsure = '09-04';
var afterEnsure = '09-07';

//总长度
var num = xAxisData.length - 1;
var index = 0;
var actualPercent = '';
var preditPercent = '';

var firstNum = 0;
var firstIndex = 0;
var secondNum = 0;

var arrowDataArr = [];
xAxisData.forEach(function(item, i) {
    var arr = [];
    arr.push(xAxisData[i]);
    arr.push(seriesData[i]);
    arr.push(arrowArr[i]);
    arrowDataArr.push(arr);



    if (item == preditDate) {
        index = i;
        //实测比例
        actualPercent = i / num * 90;
        preditPercent = (num - i) / num * 90;
    }

    if (item == beforeEnsure) {
        firstIndex = i;
        firstNum = i / num * 90;
    }


    if (item == afterEnsure) {
        secondNum = (i - firstIndex) / num * 90;
    }
})




//箭头处理函数
var directionMap = {};
echarts.util.each(
    ['W', 'WSW', 'SW', 'SSW', 'S', 'SSE', 'SE', 'ESE', 'E', 'ENE', 'NE', 'NNE', 'N', 'NNW', 'NW', 'WNW'],
    function(name, index) {
        directionMap[name] = Math.PI / 8 * index;
    }
);

var dims = {
    time: 0,
    windSpeed: 1,
    R: 2,
    waveHeight: 3,
    weatherIcon: 2,
    minTemp: 3,
    maxTemp: 4
};
var arrowSize = 18;
var weatherIconSize = 45;

function renderArrow(param, api) {
    var point = api.coord([
        api.value(dims.time),
        api.value(dims.windSpeed)
    ]);

    return {
        type: 'path',
        shape: {
            pathData: 'M31 16l-15-15v9h-26v12h26v9z',
            x: -arrowSize / 2,
            y: -arrowSize / 2,
            width: arrowSize,
            height: arrowSize
        },
        rotation: directionMap[api.value(dims.R)],
        position: point,
        style: api.style({
            stroke: '#555',
            lineWidth: 1
        })
    };
}



option = {
    color: ['#259e72', '#178fcd'],
    tooltip: {
        trigger: 'axis',
        formatter: function(params) {
            return [
                params[1].value[dims.time] + '<br/>' +
                '风速：' + params[1].value[dims.windSpeed],
                '风向：' + params[1].value[dims.R],
            ].join('<br>');
        }
    },
    xAxis: [{
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff'
                }
            },
            axisTick: { //刻度值线
                show: false
            },
            splitLine: { //网格线
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(200,200,200,0.3)'
                }
            },
            boundaryGap: false,
            data: xAxisData
        },
        {
            "gridIndex": 1,
            "type": "category",
            "position": "bottom",
            "name": "保障前",
            "nameLocation": "center",
            "nameTextStyle": {
                //"fontWeight": "bold",
                color: 'white'
            },
            "nameGap": -5,
            "offset": 40,
            "data": [""],
            "axisTick": {
                "length": 40,
                "inside": true,
                lineStyle: {
                    color: 'rgba(200,200,200,0.9)'
                },
                "show": true
            },
            "axisLabel": {
                "inside": false,
                "show": true
            },
            "axisLine": {
                "show": false,
                "onZero": false
            }
        },
        {
            "gridIndex": 2,
            "type": "category",
            "position": "bottom",
            "name": "保障中",
            "nameLocation": "center",
            "nameTextStyle": {
                //"fontWeight": "bold"
                color: 'white'
            },
            "nameGap": -5,
            "offset": 40,
            "data": [""],
            "axisTick": {
                "length": 40,
                "inside": true,
                lineStyle: {
                    color: 'rgba(200,200,200,0.9)'
                },
                "show": true
            },
            "axisLabel": {
                "inside": false,
                "show": true
            },
            "axisLine": {
                "show": false,
                "onZero": false
            }
        },
        {
            "gridIndex": 3,
            "type": "category",
            "position": "bottom",
            "name": "保障后",
            "nameLocation": "center",
            "nameTextStyle": {
                //"fontWeight": "bold"
                color: 'white'
            },
            "nameGap": -5,
            "offset": 40,
            "data": [""],
            "axisTick": {
                "length": 40,
                lineStyle: {
                    color: 'rgba(200,200,200,0.9)'
                },
                "inside": true,
                "show": true
            },
            "axisLabel": {
                "inside": false,
                "show": true
            },
            "axisLine": {
                "show": false,
                "onZero": false
            }
        },
        {
            "gridIndex": 4,
            "type": "category",
            "position": "top",
            "name": "实测",
            "nameLocation": "center",
            "nameTextStyle": {
                //"fontWeight": "bold"
                color: 'white'
            },
            "nameGap": -5,
            "offset": 10,
            "data": [""],
            "axisTick": {
                lineStyle: {
                    color: 'rgba(200,200,200,0.9)'
                },
                "length": 10,
                "inside": true,
                "show": true
            },
            "axisLabel": {
                "inside": false,
                "show": true
            },
            "axisLine": {
                "show": false,
                "onZero": false
            }
        },
        {
            "gridIndex": 5,
            "type": "category",
            "position": "top",
            "name": "预测",
            "nameLocation": "center",
            "nameTextStyle": {
                //"fontWeight": "bold"
                color: 'white'
            },
            "nameGap": -5,
            "offset": 10,
            "data": [""],
            "axisTick": {
                "length": 10,
                "inside": true,
                "show": true,
                lineStyle: {
                    color: 'rgba(200,200,200,0.9)'
                }
            },
            "axisLabel": {
                "inside": false,
                "show": true
            },
            "axisLine": {
                "show": false,
                "onZero": false
            }
        },
    ],
    "grid": [{
            "left": "5%",
            "right": "5%",

            "show": false
        }, //
        {
            "show": true,
            tooltip: {
                trigger: 'item',
                axisPointer: {
                    type: 'none'
                }
            },
            "borderWidth": 0,
            "shadowColor": "rgba(0, 0, 0, 0.3)",
            "shadowBlur": 1,
            axisLabel: {
                padding: [10, 0]
            },
            "width": firstNum + "%",
            "left": "5%"
        },
        {
            "show": true,
            "borderWidth": 0,
            "shadowColor": "rgba(0, 0, 0, 0.3)",
            "shadowBlur": 1,
            tooltip: {
                trigger: 'item',
                axisPointer: {
                    type: 'none'
                }
            },
            axisLabel: {
                padding: [10, 0]
            },
            "width": secondNum + "%",
            "left": (firstNum + 5) + "%"
        }, {
            "show": true,
            "borderWidth": 0,
            "shadowColor": "rgba(0, 0, 0, 0.3)",
            "shadowBlur": 1,
            tooltip: {
                trigger: 'item',
                axisPointer: {
                    type: 'none'
                }
            },
            axisLabel: {
                padding: [10, 0]
            },
            "width": (90 - (secondNum + firstNum + 5)) + "%",
            "left": (secondNum + firstNum + 5) + "%"
        }, {
            "show": true,
            "borderWidth": 0,
            "shadowColor": "rgba(0, 0, 0, 0.3)",
            "shadowBlur": 1,
            tooltip: {
                trigger: 'item',
                axisPointer: {
                    type: 'none'
                }
            },
            axisLabel: {
                padding: [10, 0]
            },
            "width": actualPercent + "%",
            "left": "5%"
        }, {
            "show": true,
            "borderWidth": 0,
            tooltip: {
                trigger: 'item',
                axisPointer: {
                    type: 'none'
                }
            },
            "shadowColor": "rgba(0, 0, 0, 0.3)",
            "shadowBlur": 1,
            axisLabel: {
                padding: [10, 0]
            },
            "width": preditPercent + "%",
            "left": (actualPercent + 5) + "%"
        }
    ],
    yAxis: [{
        name: '',
        axisLabel: {
            color: '#ccc'
        },
        axisTick: { //刻度值线
            show: false
        },
        splitLine: { //网格线
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgba(200,200,200,0.3)'
            }
        }
    }, {
        "gridIndex": 1,
        "type": "value",
        "interval": 20,
        "max": 100,
        "min": 0,
        "axisTick": {
            "show": false
        },
        splitLine: { //网格线
            show: false
        },
        "axisLine": {
            "show": false,
            "onZero": true
        },
        "axisLabel": {
            "show": false
        }
    }, {
        "gridIndex": 2,
        "type": "value",
        "interval": 20,
        "max": 100,
        "min": 0,
        "axisTick": {
            "show": false
        },
        splitLine: { //网格线
            show: false
        },
        "axisLine": {
            "show": false,
            "onZero": true
        },
        "axisLabel": {
            "show": false
        }
    }, {
        "gridIndex": 3,
        "type": "value",
        "interval": 20,
        "max": 100,
        "min": 0,
        splitLine: { //网格线
            show: false
        },
        "axisTick": {
            "show": false
        },
        "axisLine": {
            "show": false,
            "onZero": true
        },
        "axisLabel": {
            "show": false
        }
    }, {
        "gridIndex": 4,
        "type": "value",
        "interval": 20,
        "max": 100,
        "min": 0,
        splitLine: { //网格线
            show: false
        },
        "axisTick": {
            "show": false
        },
        "axisLine": {
            "show": false,
            "onZero": true
        },
        "axisLabel": {
            "show": false
        }
    }, {
        "gridIndex": 5,
        "type": "value",
        "interval": 20,
        "max": 100,
        "min": 0,
        "axisTick": {
            "show": false
        },
        splitLine: { //网格线
            show: false
        },
        "axisLine": {
            "show": false,
            "onZero": true
        },
        "axisLabel": {
            "show": false
        }
    }],
    "visualMap": [{
        "show": false,
        "dimension": 0,
        "seriesIndex": 0,
        "pieces": [{
            "lte": index,
            "color": "#259e72"
        }, {
            "gt": index,
            "lte": seriesData.length + 1,
            "color": "#51d9a7"
        }]
    }],
    "visualMap": [{
        "show": false,
        "dimension": 0,
        "seriesIndex": 0,
        "pieces": [{
            "lte": index,
            "color": "#259e72"
        }, {
            "gt": index,
            "lte": seriesData.length + 1,
            "color": "#51d9a7"
        }]
    }],
    series: [{
        name: '风速',
        type: 'line',
        smooth: true,
        "xAxisIndex": "0",
        data: seriesData,
        markLine: {
            label: {
                color: '#666',
                position: 'middle',
                textStyle: {
                    padding: -50
                }
            },
            lineStyle: {
                color: '#666'
            }
        }
    }, {
        name: '风向',
        "type": "custom",
        renderItem: renderArrow,
        "encode": {
            "x": 0,
            "y": 1
        },
        "data": arrowDataArr,
        "z": 10
    }, {
        name: '平行于y轴的趋势线',
        type: 'line',
        color: ['black'],
        markLine: {
            data: [
                [{
                    symbol: "line",
                    coord: [preditDate, 0]
                }, {
                    symbol: "line",
                    coord: [preditDate, 1]
                }]
            ]
        }
    }]
};

setTimeout(function() {
    var chart = document.getElementById('chart-panel');
    var myChart = echarts.init(chart);
    myChart.dispatchAction({
        type: 'showTip',
        // 系列的 index，在 tooltip 的 trigger 为 axis 的时候可选。
        seriesIndex: 1,
        // 数据的 index，如果不指定也可以通过 name 属性根据名称指定数据
        dataIndex: 3
        // 可选，数据名称，在有 dataIndex 的时候忽略
        //name?: string
    });
}, 10);