const xAxisData = ["2020-05-11", "2020-05-12", "2020-05-13", "2020-05-14", "2020-05-15", "2020-05-16", "2020-05-17", "2020-05-18", "2020-05-19", "2020-05-20", "2020-05-21", "2020-05-22", "2020-05-23", "2020-05-24", "2020-05-25", "2020-05-26", "2020-05-27", "2020-05-28", "2020-05-29", "2020-05-30", "2020-05-31", "2020-06-01", "2020-06-02", "2020-06-03", "2020-06-04", "2020-06-05", "2020-06-06", "2020-06-07", "2020-06-08", "2020-06-09", "2020-06-10"]
option = {
    "color": ["#ff7e85"],
    title:{
        text:'数据时间 2020-6-21 18：00',
        top:'5%',
        left:'5%',
         "textStyle": {
            "color": "rgba(127, 129, 137)",
             fontWeight:'normal',
             fontSize:14
        },
    },
    "tooltip": {
        "backgroundColor": "#fff",
        "trigger": "axis",
        "axisPointer": {
            "type": "none"
        },
        "textStyle": {
            "color": "#565656",
            "lineHeight": 28
        },
        "confine": true,
        "padding": 12,
    },
    "grid": {
        "left":'8%',
        "right": '3%',
        "top": '10%',
        "bottom": '10%'
    },
    "xAxis": {
        "type": "category",
        "data": xAxisData,
        "axisLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        }
    },
    "yAxis": {
        "type": "value",
        "splitLine": {
            "lineStyle": {
                "type": "dashed"
            }
        },
        "axisLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        }
    },
    "series": [ {
        "name": "许墨",
        "data": [20, 37, 91, 72, 68, 67, 54, 42, 42, 115, 41, 33, 64, 312, 4, 0, 0, 0, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "type": "line",
        "smooth": true,
        "smoothMonotone": "x",
        "cursor": "pointer",
        "showSymbol": false,
        "lineStyle": {
            "shadowColor": "rgba(255,126,133,0.5)",
            "shadowBlur": 10
        }
    }]
}