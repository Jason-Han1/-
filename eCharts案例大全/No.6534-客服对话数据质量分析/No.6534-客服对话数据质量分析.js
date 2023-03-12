// var xData = function() {
//     var data = [];
//     for (var i =1; i < 9; i++) {
//         data.push(i + "");
//     }
//     return data;
// }();

var dataTime = ['20191101', '20191111', '20200601', '20200618', '20200720', '20200721', '20200722', '20200723', '20200724', '20200725', '20200726'];

option = {
    backgroundColor: "#344b58",
    "title": {
        "text": "客服对话数据质量分析",
        // "subtext": "BY MICVS",
        x: "center",
        y: '4%',

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
        x: '65%',
        top: '11%',
        textStyle: {
            color: '#90979c',
        },
        "data": ['有效数据', '无效数据', '实际数据']
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
        "data": dataTime,
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
        "start": 0,
        "end": 90,
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
        "height": 9,
        "start": 1,
        "end": 35
    }],
    "series": [{
            "name": "有效数据",
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
                        "position": "insideTop",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
                8189991,
                15929639,
                11573734,
                21456082,
                3843820,
                3839429,
                3865451,
                3878751,
                3818849,
                3417269,
                3148423
            ],
        },

        {
            "name": "无效数据",
            "type": "bar",
            "stack": "总量",
            "itemStyle": {
                "normal": {
                    "color": "rgba(0,191,183,1)",
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
            "data": [
                555847,
                1114844,
                654548,
                1229325,
                229619,
                228483,
                234095,
                232322,
                226314,
                196876,
                177340
            ]
        }, {
            "name": "实际数据",
            "type": "line",
            "stack": "总量",
            symbolSize:20,
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
            "data": [
                8745838,
                17044483,
                12228282,
                22685407,
                4073439,
                4067912,
                4099546,
                4111073,
                4045163,
                3614145,
                3325763
            ]
        },
    ]
}