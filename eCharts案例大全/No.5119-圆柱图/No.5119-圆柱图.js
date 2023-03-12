option = {
    backgroundColor: '#031245',
    "textStyle": {
        "color": "#c0c3cd",
        "fontSize": 14
    },
    "legend": {
        "show":false,
    },
    "color": ["#63caff", "#49beff", "rgb(2,47,87)", "rgb(2,47,87)"],
    "grid": {
        "containLabel": true,
        "left": 20,
        "right": 20,
        "bottom": 10,
        "top": 40
    },
    "xAxis": {
        "axisLabel": {
            "color": "#c0c3cd",
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
                "color": "#384267",
                "width": 1,
                "type": "dashed"
            },
            "show": true
        },
        "data": ["2016", "2017", "2018", "2019", "2020"],
        "type": "category"
    },
    "yAxis": {
        "axisLabel": {
            "color": "#c0c3cd",
            "fontSize": 14
        },
        "axisTick": {
            "show": false
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
    "series": [
        {
        "data": [200, 85, 112, 275, 305],
        "type": "bar", // 柱图
        "barMaxWidth": "auto",
        "barWidth": 30,
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
            "show": false,
        }
        }, {
        "data": [1, 1, 1, 1, 1],
        "type": "pictorialBar", // 底部
        "barMaxWidth": "20",
        "symbolOffset": [0, "50%"],
        "symbolSize": [30, 15]
    }, {
        "data": [200, 85, 112, 275, 305],
        "type": "pictorialBar",  // 顶部
        "barMaxWidth": "20",
        "symbolPosition": "end",
        "symbolOffset": [0, "-50%"],
        "symbolSize": [30, 12],
        "zlevel": 2
    }, {
        "data": [741, 741, 741, 741, 741],
        "type": "bar",
        "barMaxWidth": "auto",
        "barWidth": 30,
        "barGap": "-100%",
        "zlevel": -1 // 背景
    }, {
        "data": [741, 741, 741, 741, 741],
        "type": "pictorialBar", // 背景顶部
        "barMaxWidth": "20",
        "symbolPosition": "end",
        "symbolOffset": [0, "-50%"],
        "symbolSize": [30, 12],
        "zlevel": -1
    }],
    "tooltip": {
        "trigger": "axis",
        "show": false
    }
}