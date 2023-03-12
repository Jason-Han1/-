var normalColor = "#94a1a9";
var fontSize = 20;
var datas = {
    xData: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月"
    ],
    yData1: [
        104,
        56,
        136,
        86,
        98,
        86
    ],
    yData2: [
        100,
        206,
        236,
        106,
        80,
        160
    ],
    borderData: [1, 1, 1, 1, 1, 1],
    color1: {
        "type": "linear",
        "x": 0,
        "y": 0,
        "x2": 0,
        "y2": 1,
        "colorStops": [{
                "offset": 0,
                "color": "rgba(59, 190, 255,1)"
            },
            {
                "offset": 0.5,
                "color": "rgba(45, 230, 248,1)"
            },
            {
                "offset": 1,
                "color": "rgba(45, 230, 248,1)"
            }
        ],
        "globalCoord": false
    },
    color2: {
        "type": "linear",
        "x": 0,
        "y": 0,
        "x2": 0,
        "y2": 1,
        "colorStops": [{
                "offset": 0,
                "color": "rgba(5, 198, 67,1)"
            },
            {
                "offset": 0.5,
                "color": "rgba(5, 198, 67,1)"
            },
            {
                "offset": 1,
                "color": "rgba(105, 241, 149,1)"
            }
        ],
        "globalCoord": false
    }
}
option = {
    "backgroundColor": "#1c2e40",
    "color": "#384757",
    "tooltip": {
        "trigger": "axis",
        formatter: function(params) {
            console.log('===', params);
            var str = "";
            for (var i = 0; i < params.length; i++) {
                if (params[i].seriesName !== "") {
                    str += params[i].name + ':' + params[i].seriesName + params[i].value + '<br/>'
                }

            }
            return str;
        }
    },
    "legend": {
        icon: "roundRect",
        itemWidth: 18,
        itemHeight: 8,
        "top": "10%",
        "textStyle": {
            "color": "#fff"
        },
        "data": ["数量", "金额", ],
    },
    "xAxis": [{
        "type": "category",
        "data": datas.xData,
        "axisPointer": {
            "type": "shadow"
        },
        axisLabel: {
            textStyle: {
                color: normalColor,
                fontSize: fontSize
            }
        },
        axisLine: {
            lineStyle: {
                color: normalColor
            }
        },
        axisTick: {
            "show": false
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: "dashed",
                color: normalColor
            }
        },
    }],
    "yAxis": [{
            "type": "value",
            "name": "数量",
            "nameTextStyle": {
                "color": normalColor,
                fontSize: fontSize
            },
            // "min": 0,
            // "max": 50,
            "interval": 50,
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    color: normalColor,
                    fontSize: fontSize
                }
            },
            axisLine: {
                lineStyle: {
                    color: normalColor
                }
            },
            axisTick: {
                "show": false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: "dashed",
                    color: normalColor
                }
            },
        },
        {
            "type": "value",
            "name": "金额",
            "nameTextStyle": {
                "color": normalColor,
                fontSize: fontSize
            },
            "interval": 50,
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    color: normalColor,
                    fontSize: fontSize
                }
            },
            axisLine: {
                lineStyle: {
                    color: normalColor
                }
            },
            axisTick: {
                "show": false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: "dashed",
                    color: normalColor
                }
            },
        },
    ],
    "grid": {
        "top": "20%"
    },
    "series": [{
            "name": "数量",
            "type": "bar",
            stack: '数量',
            "data": datas.yData1,
            "barWidth": "auto",
            "itemStyle": {
                "normal": {
                    "color": datas.color1
                }
            }
        }, {
            name: '',
            type: 'bar',
            stack: '数量',
            itemStyle: {
                normal: {
                    color: '#fff',
                }
            },
            data: datas.borderData
        },
        {
            "name": "金额",
            "type": "bar",
            stack: '金额',
            yAxisIndex: 1,
            "data": datas.yData2,
            "barWidth": "auto",
            "itemStyle": {
                "normal": {
                    "color": datas.color2
                }
            },
            "barGap": "10%"
        }, {
            name: '',
            type: 'bar',
            stack: '金额',
            itemStyle: {
                normal: {
                    color: '#fff',
                }
            },
            data: datas.borderData
        },
    ]
};