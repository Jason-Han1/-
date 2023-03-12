option = {
        backgroundColor: '#000E1A',
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
    "color": ["#63caff", "#49beff", "#03387a", "#03387a", "#03387a", "#6c93ee", "#a9abff", "#f7a23f", "#27bae7", "#ff6d9d", "#cb79ff", "#f95b5a", "#ccaf27", "#38b99c", "#93d0ff", "#bd74e0", "#fd77da", "#dea700"],
    "grid": {
        "containLabel": true,
        "left": 0,
        "right": 0,
        "bottom": 0,
        "top": 0,
        containLabel:true
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
            "interval": 0,
            formatter:function(name){
                return name+'\n{value|'+1+'}'
            },
            textStyle:{
                rich:{
                    value:{
                        color:'#f99',
                        fontWeight:'bold',
                        fontSize: 16,
                        lineHeight:30,
                        margin:[10,0,0,0]
                    }
                }
            }
        },
        "axisTick": {
            "lineStyle": {
                "color": "#384267",
                "width": 1
            },
            "show": false
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
            "show": false
        },
        "data": ["a", "b", "c", "d"],
        "type": "category"
    },
    "yAxis": {
        "nameTextStyle": {
            "color": "#c0c3cd",
            "padding": [0, 0, -10, 0],
            "fontSize": 14
        },
        axisLabel: {
            show: false
        },
        "axisTick": {
            "lineStyle": {
                "color": "#384267",
                "width": 1
            },
            "show": false
        },
        "splitLine": {
            "show": false,
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
            "show": false
        },
        "name": ""
    },
    "series": [{
        "data": [80, 85, 50, 25],
        "type": "bar",
        "barMaxWidth": "auto",
        "barWidth": 90,
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
        label: {
            normal: {
                position: 'top',
                show: true,
                color: 'white',
                formatter: '{c}%'
            }
        },
    }, {
        "data": [1, 1, 1, 1, 1, 1, 1, 1],
        "type": "pictorialBar",
        "barMaxWidth": "20",
        "symbol": "diamond",
        "symbolOffset": [0, "50%"],
        "symbolSize": [90, 15]
    }, {
        "data": [80, 85, 50, 25],
        "type": "pictorialBar",
        "barMaxWidth": "20",
        "symbolPosition": "end",
        "symbol": "diamond",
        "symbolOffset": [0, "-50%"],
        "symbolSize": [90, 12],
        "zlevel": 2
    }, {
        "data": [100, 100, 100, 100],
        "type": "bar",
        "barMaxWidth": "auto",
        "barWidth": 90,
        "barGap": "-100%",
        "zlevel": -1
    }, {
        "data": [1, 1, 1, 1],
        "type": "pictorialBar",
        "barMaxWidth": "20",
        "symbol": "diamond",
        "symbolOffset": [0, "50%"],
        "symbolSize": [90, 15],
        "zlevel": -2
    }, {
        "data": [100, 100, 100, 100],
        "type": "pictorialBar",
        "barMaxWidth": "20",
        "symbolPosition": "end",
        "symbol": "diamond",
        "symbolOffset": [0, "-50%"],
        "symbolSize": [90, 12],
        "zlevel": -1
    }],
    "tooltip": {
        "trigger": "axis",
        "show": false
    }
}