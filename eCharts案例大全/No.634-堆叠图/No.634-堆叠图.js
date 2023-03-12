var xData = function() {
    var data = [];
    for (var i = 1; i < 13; i++) {
        data.push(i + "月份");
    }
    return data;
}();

 option = {
     "backgroundColor":'#152439',
    "tooltip": {
        "axisPointer": {
            "type": "shadow",
            textStyle: {
                color: "#fff"
            }
        },
    },
    "grid": {
        "borderWidth": 0,
        "top": 10,
        "bottom": 40,
        "left": 90,
        textStyle: {
            color: "#fff"
        }
    },
    "legend": {
        icon: 'circle',
        right: '4%',
        top: '8%',
        textStyle: {
            color: '#90979c',
        },
        "data": ['一级', '二级', '三级']
    },
    "calculable": true,
    "xAxis": [{
        "type": "value",
        "trigger": "axis",
        "axisLine": {
            lineStyle: {
                color: '#fff'
            }
        },
        "splitLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "splitArea": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,
        },
        "data": xData,
    }],
    "yAxis": [{
        "type": "category",
        "splitLine": {
            "show": false
        },
        "axisLine": {
            lineStyle: {
                color: '#fff'
            }
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,

        },
        "splitArea": {
            "show": false
        },
        data: ['一级', '二级', '三级', '四级', '五级'],
    }],
    "series": [{
            "name": "一级",
            "type": "bar",
            "stack": "总量",
            "barMaxWidth": 15,
            "barGap": "10%",
            "itemStyle": {
                "normal": {
                    color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                        offset: 0,
                        color: 'rgba(245,221,111,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(245,221,111,0)'
                    }]),
                    borderColor: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                        offset: 0,
                        color: 'rgba(245,221,111,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(245,221,111,0)'
                    }]),
                }
            },
            "data": [709, 1917, 2455, 2610, 1719],
        },
        {
            "name": "二级",
            "type": "bar",
            "stack": "总量",
            "itemStyle": {
                "normal": {
                    color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                        offset: 0,
                        color: 'rgba(24,191,207,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(24,191,207,0)'
                    }]),
                    borderColor: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                        offset: 0,
                        color: 'rgba(24,191,207,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(24,191,207,0)'
                    }]),
                }
            },
            "data": [327, 1776, 507, 1200, 800]
        },
        {
            "name": "三级",
            "type": "bar",
            "stack": "总量",
            "itemStyle": {
                "normal": {
                    color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                        offset: 0,
                        color: 'rgba(98,113,228,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(40,54,117,0)'
                    }]),
                    borderColor: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                        offset: 0,
                        color: 'rgba(98,113,228,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(40,54,117,0)'
                    }]),
                    "barBorderRadius": 0,
                }
            },
            "data": [327, 1776, 507, 1200, 800]
        }
    ]
}