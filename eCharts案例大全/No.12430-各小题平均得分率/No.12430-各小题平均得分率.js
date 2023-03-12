var xData = function() {
    var data = [];
    for (var i = 1; i <= 30; i++) {
        data.push(i);
    }
    return data;
}();
var zData = function() {
    var res = [];
    for (var j = 0; j < 30; j++) {
        res.push(parseInt(Math.random() * 100));
    }
    return res;
}();
option = {
    backgroundColor: '#fff',
    "title": {
        "text": "试题平均得分率",
        "subtext": "",
        textStyle:{
            color:'#333333'
        },
        "x": "center"
    },
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow"
        },
        formatter:'得分率：{c}%'
    },
    "grid": {
        "borderWidth": 0,
        "y2": 120
    },
    "legend": {
        "x": "right",
        "data": []
    },
    "calculable": true,
    "xAxis": [{
        name:'题号',
        "type": "category",
        "splitLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        axisLine:{
          lineStyle:{
                color:'#999999'
            }  
        },
        "splitArea": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,
            "rotate": 45,
            "show": true,
            "splitNumber": 15,
            "textStyle": {
                "fontFamily": "微软雅黑",
                "fontSize": 12,
                color:'#999999'
            }
        },
        "data": xData,
    }],
    "yAxis": [{
        name:'得分率(%)',
        "type": "value",
        "splitLine": {
            "show": true,
            lineStyle:{
                type:'dashed',
                color:'#e8e8e8'
            }
        },
        "axisLine": {
            "show": true,
            lineStyle:{
                color:'#999999'
            }
        },
        "axisTick": {
            "show": false
        },
        "splitArea": {
            "show": false
        },
        axisLabel:{
            textStyle:{
                color:'#999999'
            }
        }
    }],
    //"dataZoom": [{
    //        "show": true,
    //        "height": 30,
    //        "xAxisIndex": [
    //            0
    //        ],
    //        bottom: 40,
    //        "start": 0,
    //        "end": 80
    //    },
    //    {
    //        "type": "inside",
    //        "show": true,
    //        "height": 15,
    //        "xAxisIndex": [
    //            0
    //        ],
    //        "start": 1,
    //        "end": 35
    //    }
    //],
    "series": [{
        "name": "平均得分率",
        "type": "bar",
        "barMaxWidth": 50,
        "barGap": "10%",
        "itemStyle": {
            "normal": {
                    barBorderRadius: [4, 4, 0, 0],
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                                offset: 0,
                                color: '#1dc249'
                            },
                            {
                                offset: 1,
                                color: '#d3f3dc'
                            }
                        ]
                    ),
                "label": {
                    "show": true,
                    "textStyle": {
                        "color": "#1dc249"
                    },
                    "position": "top",
                    formatter: function(p) {
                        return p.value > 0 ? (p.value) : '';
                    }
                }
            }
        },
        "data": zData
    }]
}