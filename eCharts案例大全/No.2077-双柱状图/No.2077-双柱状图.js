var xdata=["企业养老", "居民养老", "居民医保", "工伤", "失业"]
var ydata=["1.99", "25.99", "32.85", "5.08", "1.15"]
var ydata2=["1.80", "16.28", "32.85", "5.08", "1.12"]
option = {
    backgroundColor: '#031245',
    "textStyle": {
        "color": "#c0c3cd",
        "fontSize": 14
    },
    "toolbox": {
        "show": false,
        "feature": {
            "saveAsImage": {
                "backgroundColor": "#031245"
            },
            "restore": {}
        },
        "iconStyle": {
            "borderColor": "#c0c3cd"
        }
    },
    "legend": {
        "top": 10,
        "itemWidth": 8,
        "itemHeight": 8,
        "icon": "circle",
        "left": "center",
        "padding": 0,
        "textStyle": {
            "color": "#c0c3cd",
            "fontSize": 14,
            "padding": [2, 0, 0, 0]
        }
    },
    "color": ["#63caff", "#49beff", "#edab31", "#fff8df",],
    "grid": {
        "containLabel": true,
        "left": 20,
        "right": 20,
        "bottom": 10,
        "top": 40
    },
    "xAxis": {
        "nameTextStyle": {
            "color": "#c0c3cd",
            "padding": [0, 0, -10, 0],
            "fontSize": 14
        },
        "axisLabel": {
            "color": "#c0c3cd",
            "fontSize": 14,
            "interval": 0
        },
        "axisTick": {
            "lineStyle": {
                "color": "#384267",
                "width": 1
            },
            "show": true
        },
        "splitLine": {
            "show": false
        },
        "axisLine": {
            "lineStyle": {
                "color": "#384267",
                "width": 1,
                "type": "dashed"
            },
            "show": true
        },
        "data": xdata,
        "type": "category"
    },
    "yAxis": {
        "nameTextStyle": {
            "color": "#c0c3cd",
            "padding": [0, 0, -10, 0],
            "fontSize": 14
        },
        "axisLabel": {
            "color": "#c0c3cd",
            "fontSize": 14
        },
        "axisTick": {
            "lineStyle": {
                "color": "#384267",
                "width": 1
            },
            "show": true
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": "#384267",
                "type": "dashed"
            }
        },
        "axisLine": {
            "lineStyle": {
                "color": "#384267",
                "width": 1,
                "type": "dashed"
            },
            "show": true
        },
        "name": ""
    },
    "series": [{
        name:"参保人数",
        "data":ydata,
        "type": "bar",
        "barMaxWidth": "auto",
        "barWidth": 15,
        "itemStyle": {
            "color": {
                "x": 0,
                "y": 0,
                "x2": 0,
                "y2": 1,
                "type": "linear",
                "global": false,
                "colorStops": [{
                    "offset": 0,
                    "color": "#0b9eff"
                }, {
                    "offset": 1,
                    "color": "#63caff"
                }]
            }
        },
        "label": {
            "show": true,
            "position": "top",
            "distance": 10,
            "color": "#fff"
        }
    },{
        "data": [1, 1, 1, 1, 1, 1, 1, 1],
        "type": "pictorialBar",
        "barMaxWidth": "20",
        "symbol": "diamond",
        "symbolOffset": ["-9", "7"],
        "symbolSize": [15, 13]
    }, {
        "data": ydata,
        "type": "pictorialBar",
        "barMaxWidth": "20",
        "symbolPosition": "end",
        "symbol": "diamond",
        "symbolOffset": ["-9", "-7"],
        "symbolSize": [15, 13],
        "zlevel": 2
    }, {
        name:"实际缴费人数",
        "data":ydata2,
        "type": "bar",
        "barMaxWidth": "auto",
        "barWidth": 15,
        "itemStyle": {
            "color": {
                "x": 0,
                "y": 0,
                "x2": 0,
                "y2": 1,
                "type": "linear",
                "global": false,
                "colorStops": [{
                    "offset": 0,
                    "color": "#feeeb7"
                }, {
                    "offset": 1,
                    "color": "#edab31"
                }]
            }
        },
        "label": {
            "show": true,
            "position": "top",
            "distance": 10,
            "color": "#fff"
        }
    }, {
        "data": [1, 1, 1, 1, 1, 1, 1, 1],
        "type": "pictorialBar",
        "barMaxWidth": "20",
        "symbol": "diamond",
        "symbolOffset": ["9", "7"],
        "symbolSize": [15, 13]
    }, {
        "data":ydata2,
        "type": "pictorialBar",
        "barMaxWidth": "20",
        "symbolPosition": "end",
        "symbol": "diamond",
        "symbolOffset": ["9", "-7"],
        "symbolSize": [15, 13],
        "zlevel": 3
    },],
    "tooltip": {
        "trigger": "axis",
        "show": true,
        backgroundColor:'rgba(0,0,0,0.8)',
        borderWidth:0,
        textStyle: { fontSize: '100%' },
        formatter:function(item){
            returnData1 =
                    '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background:' +
                    item[1].color +
                    '"></span>';
            returnData2=
                    '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background:' +
                    item[4].color +
                    '"></span>';
            //console.log(item);
            return '<div style="color:#FFF">'+item[0].axisValue+"<br/>"+returnData1+item[0].seriesName+":"+item[0].value+'人<br/>'+returnData2+item[3].seriesName+":"+item[3].value+'人</div>';
        }
    }
}