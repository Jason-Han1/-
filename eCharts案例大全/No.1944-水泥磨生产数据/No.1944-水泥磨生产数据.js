var xData = function() {
    var data = [];
    for (var i = 26; i < 32; i++) {
        data.push(i + "日");
    }
    for (var i = 1; i < 26; i++) {
        data.push(i + "日");
    }
    return data;
}();
var d1 = function() {
    var data = [];
    for (var i = 1; i < 32; i++) {
        data.push(i*10);
    }
    
    return data;
}();
var d2 = function() {
    var data = [];
    for (var i = 1; i < 32; i++) {
        data.push(i*5);
    }
    return data;
}();
//数组从0开始
var ds = function() {
    var data = [];
    for (var i = 0; i < 32; i++) {
        data.push(d1[i]+d2[i]);
    }
    
    return data;
}();
var colors = ['#00BFB7', '#FFA07A', '#26C7C8', '#73DEBD', '#26C978', '#8CDF6C', '#FBD657', '#F56679', '#E07BCE', '#9D50E0', '#634FDA']
var name = ['一线', '二线']
option = {
    backgroundColor: "#344b58",
    "title": {
        "text": "生产数据",
        x: "4%",
        textStyle: {
            color: '#fff',
            fontSize: '22'
        },
        subtextStyle: {
            color: '#90979c',
            fontSize: '16',

        },
    },
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow",
            textStyle: {
                color: "#fff"
            }

        },
    },
    "grid": {
        "borderWidth": 0,
        "top": 110,
        "bottom": 95,
        textStyle: {
            color: "#fff"
        }
    },
    "legend": {
        x: '4%',
        top: '8%',
        textStyle: {
            color: '#90979c',
        },
        "data": name
    },
     

    "calculable": true,
    "xAxis": [{
        "type": "category",
        "axisLine": {
            lineStyle: {
                color: '#90979c'
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
        "type": "value",
        "splitLine": {
            "show": false
        },
        "axisLine": {
            lineStyle: {
                color: '#90979c'
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

    }],
    "dataZoom": [{
        "show": true,
        "height": 30,
        "xAxisIndex": [
            0
        ],
        bottom: 30,
        "start": 10,
        "end": 80,
        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '110%',
        handleStyle:{
            color:"#d3dee5",
            
        },
           textStyle:{
            color:"#fff"},
           borderColor:"#90979c"
        
        
    }, {
        "type": "inside",
        "show": true,
        "height": 15,
        "start": 1,
        "end": 35
    }],
    "series": [{
            "name": name[0],
            "type": "bar",
            "stack": "总量",
            "barMaxWidth": 35,
            "barGap": "10%",
            "itemStyle": {
                "normal": {
                    "color": "rgba(255,144,128,1)",
                    "label": {
                        "show": true,
                        "textStyle": {
                            "color": "#fff"
                        },
                        "position": "inside",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": d1,
        },

        {
            "name": name[1],
            "type": "bar",
            "stack": "总量",
            "itemStyle": {
                "normal": {
                    "color": "rgba(0,191,183,1)",
                    "barBorderRadius": 0,
                    "label": {
                        "show": true,
                        "position": "inside",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": d2,
        }, {
            "name": "总数",
            "type": "line",
            symbolSize:10,
            symbol:'circle',
            "itemStyle": {
                "normal": {
                    "color": "rgba(252,230,48,1)",
                    "barBorderRadius": 0,
                    "label": {
                        "show": true,
                        "position": "top",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data":ds
        },
    ]
}