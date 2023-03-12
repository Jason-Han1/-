var xdata=["企业养老", "居民养老", "居民医保", "工伤", "失业"]
var ydata=["1.99", "25.99", "32.85", "5.08", "1.15"]
var ydata2=["1.80", "16.28", "32.85", "5.08", "1.12"]
option = {
    backgroundColor: '#031245',
    "legend": {
        "top": 10,
        "itemWidth": 9,
        "itemHeight": 5,
        "icon": "roundRect",
        "left": "center",
        "padding": 0,
        "textStyle": {
            "color": "#E6E6E7",
            "fontSize": 14,
            "padding": [2, 0, 0, 0]
        }
    },
    "color": ["#00E4F2", "#6EEBFF", "#F4DA00", "#ECD206",],
    "grid": {
        "containLabel": true,
        "left": 20,
        "right": 20,
        "bottom": 10,
        "top": 40
    },
    "xAxis": {
        "axisLabel": {
            "color": "#19C3D4",
            "fontSize": 14,
            "interval": 0
        },
        "axisTick": {
            "show": false
        },
        "splitLine": {
            "show": false
        },
        "axisLine": {
            "lineStyle": {
                "color": "#04497D",
            },
            "show": true
        },
        "data": xdata,
        "type": "category"
    },
    "yAxis": {
        "axisLabel": {
            "color": "#9AAEB2",
            "fontSize": 14
        },
        "axisTick": {
            "show": false
        },
        "splitLine": {
            "show": false,
        },
        "axisLine": {
            "lineStyle": {
                "color": "#04497D",
            },
            "show": true
        },
        // "name": ""
    },
    "series": [{
        name:"Connect成功率",
        "data":ydata,
        "type": "bar",
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
                    "color": "#092250"
                }, {
                    "offset": 1,
                    "color": "#00E4F2"
                }]
            }
        },
        "label": {
            "show": false,
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
        name:"Connect重传后成功率",
        "data":ydata2,
        "type": "bar",
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
                    "color": "#0D2559"
                }, {
                    "offset": 1,
                    "color": "#F4DA00"
                }]
            }
        },
        "label": {
            "show": false,
        }
    }, 
    {
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
    },
    ],
    "tooltip": {
        "trigger": "axis",
        "show": true,
        backgroundColor:'rgba(0,0,0,0.8)',
        borderWidth:0,
        textStyle: { fontSize: '100%' },
        formatter:function(item){
            returnData1 =
                    '<span style="display:inline-block;margin-right:5px;width:9px;height:5px;background:' +
                    item[1].color +
                    '"></span>';
            returnData2=
                    '<span style="display:inline-block;margin-right:5px;width:9px;height:5px;background:' +
                    item[4].color +
                    '"></span>';
            //console.log(item);
            return '<div style="color:#FFF">'+item[0].axisValue+"<br/>"+returnData1+item[0].seriesName+":"+item[0].value+'人<br/>'+returnData2+item[3].seriesName+":"+item[3].value+'人</div>';
        }
    }
}