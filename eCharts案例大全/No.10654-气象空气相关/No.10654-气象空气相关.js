var category = ["PM₂.₅", "PM₁₀", "SO₂", "O₃", "NO₂", "CO", "温度", "气压", "湿度", "风速"];
option = {
    backgroundColor: '#ddd',
    "visualMap": {
        "type": "continuous",
        "text": ["%", ""],
        "itemHeight": 200,
        "show": true,
        "min": -100,
        "max": 100,
        "calculable": true,
        "align": "left",
        "color":"black",
        "orient": "vertical",
        "left": "right",
        "top": "middle",
        "symbolSize": 800,
        "inRange": {
            "color": ["#00FF00", "#ADFF2F", "#FFFF00", "#FFD700", "#FFA500", "#FF4500", "#FF0000", "#C71585", "#800080"],
            "opacity": 1
        }
    },
    "grid": {
        "y": 15
    },
    "tooltip": {
        formatter : function(obj) {
        var value = obj.value;
        var i = value[0];
        var j = value[1];
        var axisX = category[j];
        var axisY = category[i];
        return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); padding-bottom: 7px;margin-bottom: 7px">' + axisX + ' 与 ' + axisY + '</div>' + '相关性系数:  ' + value[2] + '<br>';
        }
    },
    "xAxis": {
        "type": "category",
        "data": ["PM₂.₅", "PM₁₀", "SO₂", "O₃", "NO₂", "CO", "温度", "气压", "湿度", "风速"],
        "name": "日期",
        "axisLabel": {
            "color": "white"
        },
        "nameTextStyle": {
            "color": "#fff",
            "fontSize": 14
        },
        "splitLine": {
            "show": false
        },
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "rgba(200,200,200,0.1)"
            }
        }
    },
    "yAxis": {
        "type": "category",
        "data": ["PM₂.₅", "PM₁₀", "SO₂", "O₃", "NO₂", "CO", "温度", "气压", "湿度", "风速"],
        "name": "AQI指数",
        "nameLocation": "start",
        "nameTextStyle": {
            "color": "#fff",
            "fontSize": 16
        },
        "splitLine": {
            "show": false
        },
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "rgba(200,200,200,0.1)"
            }
        },
        "axisLabel": {
            "color": "white"
        }
    },
    "series": {
        "name": "北京",
        "type": "scatter",
        "symbol": "circle",
        "hoverAnimation": true,
        symbolSize: function(params) {
            var value = params[2];
            var ratio = -Math.sqrt(Math.abs(params[2])) / 13 + 1;
            if (category.length <= 15) {
                w = Math.abs(value) > 70 ? 55 : 40;
                h = 40 * ratio
            } else if (category.length <= 30) {
                w = Math.abs(value) > 70 ? 33 : 25;
                h = 25 * ratio;
            } else {
                var w = Math.abs(value) > 70 ? 26 : 18;
                var h = 18 * ratio;
            }
            return [w, h];
        },
        "itemStyle": {
            "normal": {
                "opacity": 0.8
            },
            "emphasis": {
                "opacity": 1,
                "borderType": "solid",
                "borderWidth": 1,
                "borderColor": "#ccc",
                "shadowColor": "#ccc",
                "shadowBlur": 2,
                "shadowOffsetX": 2,
                "shadowOffsetY": 2
            }
        },
        "data": [{
            "value": [0, 0, 100],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [0, 1, 92],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [0, 2, 34],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [0, 3, 8],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [0, 4, 34],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [0, 5, 56],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [0, 6, 36],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [0, 7, 24],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [0, 8, -6],
            "symbol": "circle",
            "symbolRotate": -45
        }, {
            "value": [0, 9, -10],
            "symbol": "circle",
            "symbolRotate": -45
        }, {
            "value": [1, 0, 92],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [1, 1, 100],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [1, 2, 47],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [1, 3, 17],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [1, 4, 41],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [1, 5, 55],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [1, 6, 48],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [1, 7, 21],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [1, 8, -19],
            "symbol": "circle",
            "symbolRotate": -45
        }, {
            "value": [1, 9, -12],
            "symbol": "circle",
            "symbolRotate": -45
        }, {
            "value": [2, 0, 34],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [2, 1, 47],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [2, 2, 100],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [2, 3, 28],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [2, 4, 21],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [2, 5, 61],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [2, 6, 53],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [2, 7, 41],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [2, 8, -45],
            "symbol": "circle",
            "symbolRotate": -45
        }, {
            "value": [2, 9, 2],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [3, 0, 8],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [3, 1, 17],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [3, 2, 28],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [3, 3, 100],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [3, 4, -48],
            "symbol": "circle",
            "symbolRotate": -45
        }, {
            "value": [3, 5, 0],
            "symbol": "circle",
            "symbolRotate": -45
        }, {
            "value": [3, 6, 74],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [3, 7, 22],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [3, 8, -74],
            "symbol": "circle",
            "symbolRotate": -45
        }, {
            "value": [3, 9, 16],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [4, 0, 34],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [4, 1, 41],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [4, 2, 21],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [4, 3, -48],
            "symbol": "circle",
            "symbolRotate": -45
        }, {
            "value": [4, 4, 100],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [4, 5, 47],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [4, 6, -12],
            "symbol": "circle",
            "symbolRotate": -45
        }, {
            "value": [4, 7, -22],
            "symbol": "circle",
            "symbolRotate": -45
        }, {
            "value": [4, 8, 25],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [4, 9, -32],
            "symbol": "circle",
            "symbolRotate": -45
        }, {
            "value": [5, 0, 56],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [5, 1, 55],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [5, 2, 61],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [5, 3, 0],
            "symbol": "circle",
            "symbolRotate": -45
        }, {
            "value": [5, 4, 47],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [5, 5, 100],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [5, 6, 28],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [5, 7, 34],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [5, 8, -9],
            "symbol": "circle",
            "symbolRotate": -45
        }, {
            "value": [5, 9, 6],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [6, 0, 36],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [6, 1, 48],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [6, 2, 53],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [6, 3, 74],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [6, 4, -12],
            "symbol": "circle",
            "symbolRotate": -45
        }, {
            "value": [6, 5, 28],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [6, 6, 100],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [6, 7, 19],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [6, 8, -91],
            "symbol": "circle",
            "symbolRotate": -45
        }, {
            "value": [6, 9, 19],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [7, 0, 24],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [7, 1, 21],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [7, 2, 41],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [7, 3, 22],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [7, 4, -22],
            "symbol": "circle",
            "symbolRotate": -45
        }, {
            "value": [7, 5, 34],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [7, 6, 19],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [7, 7, 100],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [7, 8, -7],
            "symbol": "circle",
            "symbolRotate": -45
        }, {
            "value": [7, 9, 4],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [8, 0, -6],
            "symbol": "circle",
            "symbolRotate": -45
        }, {
            "value": [8, 1, -19],
            "symbol": "circle",
            "symbolRotate": -45
        }, {
            "value": [8, 2, -45],
            "symbol": "circle",
            "symbolRotate": -45
        }, {
            "value": [8, 3, -74],
            "symbol": "circle",
            "symbolRotate": -45
        }, {
            "value": [8, 4, 25],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [8, 5, -9],
            "symbol": "circle",
            "symbolRotate": -45
        }, {
            "value": [8, 6, -91],
            "symbol": "circle",
            "symbolRotate": -45
        }, {
            "value": [8, 7, -7],
            "symbol": "circle",
            "symbolRotate": -45
        }, {
            "value": [8, 8, 100],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [8, 9, -30],
            "symbol": "circle",
            "symbolRotate": -45
        }, {
            "value": [9, 0, -10],
            "symbol": "circle",
            "symbolRotate": -45
        }, {
            "value": [9, 1, -12],
            "symbol": "circle",
            "symbolRotate": -45
        }, {
            "value": [9, 2, 2],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [9, 3, 16],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [9, 4, -32],
            "symbol": "circle",
            "symbolRotate": -45
        }, {
            "value": [9, 5, 6],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [9, 6, 19],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [9, 7, 4],
            "symbol": "circle",
            "symbolRotate": 45
        }, {
            "value": [9, 8, -30],
            "symbol": "circle",
            "symbolRotate": -45
        }, {
            "value": [9, 9, 100],
            "symbol": "circle",
            "symbolRotate": 45
        }],
        "label": {
            "normal": {
                "show": true,
                "color": "#000",
                 formatter : function(params) {
                var data = params.value[0];
                return data[2];
                }
            },
           
            "emphasis": {
                "fontStyle": "italic",
                "fontWeight": "bold",
                "fontSize": 16
            }
        }
    }
}