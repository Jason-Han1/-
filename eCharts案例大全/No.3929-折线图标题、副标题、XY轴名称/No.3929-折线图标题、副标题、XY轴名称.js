var _gridX = '15%';
var _gridY = '45%';
var _gridX2 = '5%';
var _gridY2 = '15%';
var _unit = 'k';
var _rotate = 0;
var _minInterval = 0;
var _xName = "x轴";
var _yName = "y轴";
option = {
    title: {
        text: '标题',
        subtext: '副标题'
    },
    xAxis: {
        name: _xName,
        type: 'category',
        boundaryGap: false,
        axisTick: { // 去除坐标轴上的刻度线
            show: false
        },
        splitLine: { // 控制网格线是否显示
            lineStyle: { //  改变样式
                width: '0.2',
                color: '#507b7d' // 修改网格线颜色    
            }
        },
        axisLine: { // y轴的颜色和宽度
            show: false,
            lineStyle: {
                color: 'rgba(0,0,0,0.4)', // y坐标轴的轴线颜色
            }
        },
        axisLabel: { // x轴的字体样式
            show: true, //这行代码控制着坐标轴x轴的文字是否显示
            textStyle: {
                fontSize: 10, // x轴字体大小
            },
            rotate: _rotate
        },
        data: ['10/03', '11/03', '12/03', '13/03', '14/03', '15/03', '16/03']
    },
    yAxis: {
        scale: true,
        name: _yName,
        nameTextStyle: {
            color: "rgba(251, 42, 42, 1)",
            fontSize: 12
        },
        type: 'value',
        minInterval: _minInterval,
        axisTick: { // 去除坐标轴上的刻度线
            show: false
        },
        splitLine: { // 控制网格线是否显示
            lineStyle: { //  改变样式
                width: '0.2',
                color: '#507b7d' // 修改网格线颜色    
            }
        },
        axisLine: { // y轴的颜色和宽度
            show: false,
            lineStyle: {
                color: 'rgba(0,0,0,0.4)', // y坐标轴的轴线颜色
            }
        },
        axisLabel: { // x轴的字体样式
            show: true, //这行代码控制着坐标轴x轴的文字是否显示
            textStyle: {
                fontSize: 10, // x轴字体大小
            }
        }
    },
    tooltip: {
        confine: true,
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                type: "dashed",
                color: "#cccccc"
            }
        },
        formatter: function(param) {
            var resultTooltip = "";
            resultTooltip =
                "<div style='text-align:center;'>" + param[0].name + "</div>" +
                "<div style='padding-top:5px;'>"
            for (var i = 0; i < param.length; i++) {
                if (i > 0) {
                    resultTooltip += "<div style='padding-top:2px;'>"
                }
                resultTooltip +=
                    param[i].marker +
                    param[i].value + "</span><span style = 'float:right;'>" + _unit + "</span>"

            }
            return resultTooltip
        },
        borderColor: "rgba(245, 245, 245, 0.8)",
    },
    grid: {
        height: 'auto',
        width: 'auto',
        x: _gridX,
        y: _gridY,
        x2: _gridX2,
        y2: _gridY2,
        //containLabel: true
    },
    legend: {
        selectedMode: false,
        right: "0%",
        data: ['Courier App', 'Customer App', 'Customer Scheduling Order', 'Official Website', 'PC Client', 'VIP Customer Portal'],
        icon: "circle"
    },
    series: [{
        "name": "Courier App",
        "data": ["0.00", "0.00", "0.00", "0.00", "0.00", "0.00", "0.00"],
        "type": "line",
        "showSymbol": false,
        "smooth": 0.15,
        "itemStyle": {
            "color": "rgba(116,41,201,1.0)"
        },
        "lineStyle": {
            "width": 3
        },
        "areaStyle": {
            "color": {
                "type": "line",
                "x": 0,
                "y": 0,
                "x2": 0,
                "y2": 1,
                "colorStops": [{
                    "offset": 0,
                    "color": "rgba(116,41,201,0.2)"
                }, {
                    "offset": 0,
                    "color": "rgba(116,41,201,0.1)"
                }],
                "global": false
            }
        }
    }, {
        "name": "Customer App",
        "data": ["0.00", "0.00", "0.00", "0.00", "0.00", "0.00", "0.00"],
        "type": "line",
        "showSymbol": false,
        "smooth": 0.15,
        "itemStyle": {
            "color": "rgba(255,108,62,1.0)"
        },
        "lineStyle": {
            "width": 3
        },
        "areaStyle": {
            "color": {
                "type": "line",
                "x": 0,
                "y": 0,
                "x2": 0,
                "y2": 1,
                "colorStops": [{
                    "offset": 0,
                    "color": "rgba(255,108,62,0.05)"
                }, {
                    "offset": 0,
                    "color": "rgba(255,108,62,0.01)"
                }],
                "global": false
            }
        }
    }, {
        "name": "Customer Scheduling Order",
        "data": ["0.01", "0.02", "0.02", "0.00", "0.00", "0.01", "0.00"],
        "type": "line",
        "showSymbol": false,
        "smooth": 0.15,
        "itemStyle": {
            "color": "rgba(253,189,76,1.0)"
        },
        "lineStyle": {
            "width": 3
        },
        "areaStyle": {
            "color": {
                "type": "line",
                "x": 0,
                "y": 0,
                "x2": 0,
                "y2": 1,
                "colorStops": [{
                    "offset": 0,
                    "color": "rgba(253,189,76,0.05)"
                }, {
                    "offset": 0,
                    "color": "rgba(253,189,76,0.01)"
                }],
                "global": false
            }
        }
    }, {
        "name": "Official Website",
        "data": ["0.00", "0.00", "0.00", "0.00", "0.00", "0.00", "0.00"],
        "type": "line",
        "showSymbol": false,
        "smooth": 0.15,
        "itemStyle": {
            "color": "rgba(63,194,151,1.0)"
        },
        "lineStyle": {
            "width": 3
        },
        "areaStyle": {
            "color": {
                "type": "line",
                "x": 0,
                "y": 0,
                "x2": 0,
                "y2": 1,
                "colorStops": [{
                    "offset": 0,
                    "color": "rgba(63,194,151,0.05)"
                }, {
                    "offset": 0,
                    "color": "rgba(63,194,151,0.01)"
                }],
                "global": false
            }
        }
    }, {
        "name": "PC Client",
        "data": ["0.00", "0.00", "0.00", "0.00", "0.00", "0.00", "0.00"],
        "type": "line",
        "showSymbol": false,
        "smooth": 0.15,
        "itemStyle": {
            "color": "rgba(74,128,244,1.0)"
        },
        "lineStyle": {
            "width": 3
        },
        "areaStyle": {
            "color": {
                "type": "line",
                "x": 0,
                "y": 0,
                "x2": 0,
                "y2": 1,
                "colorStops": [{
                    "offset": 0,
                    "color": "rgba(74,128,244,0.05)"
                }, {
                    "offset": 0,
                    "color": "rgba(74,128,244,0.01)"
                }],
                "global": false
            }
        }
    }, {
        "name": "VIP Customer Portal",
        "data": ["0.00", "0.00", "0.00", "0.00", "0.00", "0.00", "0.00"],
        "type": "line",
        "showSymbol": false,
        "smooth": 0.15,
        "itemStyle": {
            "color": "rgba(255,108,207,1.0)"
        },
        "lineStyle": {
            "width": 3
        },
        "areaStyle": {
            "color": {
                "type": "line",
                "x": 0,
                "y": 0,
                "x2": 0,
                "y2": 1,
                "colorStops": [{
                    "offset": 0,
                    "color": "rgba(255,108,207,0.05)"
                }, {
                    "offset": 0,
                    "color": "rgba(255,108,207,0.01)"
                }],
                "global": false
            }
        }
    }]
};