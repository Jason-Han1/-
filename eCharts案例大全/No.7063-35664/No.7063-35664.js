option = {
    backgroundColor: '#000000',
    color: '#1C4EBE',
    "title": [{
        "show": false,
        "textAlign": "left",
        "text": 35664,
        "textStyle": {
            "fontSize": 16,
            "color": "yellow",
            "fontWeight": "normal"
        },
        "left": "46.5%",
        "top": "0.5%"
    }, {
        "show": false,
        "textAlign": "left",
        "text": 5446,
        "textStyle": {
            "fontSize": 16,
            "color": "yellow",
            "fontWeight": "normal"
        },
        "left": "46.5%",
        "top": "50.5%"
    }],
    "grid": [{
        "show": false,
        "containLabel": false,
        "borderWidth": 0,
        "borderColor": "#fff",
        "left": "8%",
        "top": "24%",
        "width": "87%",
        "height": "25%"
    }, {
        "show": false,
        "containLabel": false,
        "borderWidth": 0,
        "borderColor": "#fff",
        "left": "8%",
        "top": "52%",
        "width": "87%",
        "height": "25%"
    }],
    "xAxis": [{
        "type": "category",
        "show": true,
        "nameGap": "1",
        "nameTextStyle": {
            "color": "#F5F5FA"
        },
        "gridIndex": 0,
        "axisLabel": {
            "show": true,
            "interval": 0,
            "textStyle": {
                "color": "#F5F5FA",
                "fontSize": 14
            }
        },
        axisLine: {
            show: false
        },
        "axisTick": {
            "show": false
        },
        "data": ["周一", "周二", "周三", "周四", "周五"]
    }, {
        "type": "category",
        "show": false,
        "name": "日",
        "nameGap": "1",
        "nameTextStyle": {
            "color": "#F5F5FA"
        },
        "gridIndex": 1,
        "axisLabel": {
            "show": true,
            "interval": 0,
            "textStyle": {
                "color": "#F5F5FA",
                "fontSize": 14
            }
        },
        "axisTick": {
            "show": false
        },
        "data": ["周一", "周二", "周三", "周四", "周五"]
    }],
    "yAxis": [{
        "type": "value",
        "show": true,
        "min": 0.001,
        "axisLabel": {
            "show": true,
            color: '#F5F5FA',
        },
        "splitLine": {
            "show": false
        },
        axisLine: {
            show: false
        },
        "nameGap": "1",
        "axisTick": {
            "show": false
        },
        "nameTextStyle": {
            "color": "#fff",
            "fontSize": 14
        },
        "gridIndex": 0
    }, {
        "type": "value",
        "show": true,
        "min": 0.001,
        inverse: true,
        "axisLabel": {
            "show": true,
            color: '#F5F5FA',
        },
        axisLine: {
            show: false
        },
        "splitLine": {
            "show": false,
        },
        "nameGap": "1",
        "axisTick": {
            "show": false
        },
        "nameTextStyle": {
            "color": "#fff",
            "fontSize": 14
        },
        "gridIndex": 1
    }],
    "series": [{
        "type": "bar",
        barWidth: 3,
        "xAxisIndex": 0,
        "yAxisIndex": 0,
        "data": [23, 45, 12, 32, 11],
        "lineStyle": {
            "normal": {
                "color": "#EE8262",
                "width": 2
            }
        },
        "animationEasing": "北京",
        "animationDuration": 1000
    }, {
        "type": "bar",
        barWidth: 3,
        "xAxisIndex": 1,
        "yAxisIndex": 1,
        "data": [23, 45, 12, 32, 11],
        "lineStyle": {
            "normal": {
                "color": "#B5C334",
                "width": 2
            }
        },
        "animationEasing": "天津",
        "animationDuration": 1000
    },{
        "type": "line",
        barWidth: 3,
        "xAxisIndex": 0,
        "yAxisIndex": 0,
        "data": [23, 45, 12, 32, 11],
        "lineStyle": {
            "normal": {
                "color": "#EE8262",
                "width": 2
            }
        },
        "animationEasing": "北京",
        "animationDuration": 1000
    }, {
        "type": "line",
        barWidth: 3,
        "xAxisIndex": 1,
        "yAxisIndex": 1,
        "data": [23, 45, 12, 32, 11],
        "lineStyle": {
            "normal": {
                "color": "#B5C334",
                "width": 2
            }
        },
        "animationEasing": "天津",
        "animationDuration": 1000
    }]
}