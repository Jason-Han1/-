var value = [
    ['2016-09', 2242.6, 7.1, 7.2],
    ['2016-10', 3312.5, 7.4, 7.2],
    ['2016-11', 2127.5, 6.4, 8.2],
    ['2016-12', 3527, 8.1, 6.2],
    ['2017-01', 3547.3, 7.1, 6.2],
    ['2017-02', 2927.5, 17.4, 9.2],
    ['2017-03', 3126.5, 7.4, 4.2],
    ['2017-04', 2677, 7.1, 9.2],
    ['2017-05', 3546.5, 27.2, 11.2],
    ['2017-06', 3327.1, 7.2, 11.2],
    ['2017-07', 2226.1, 7.1, 7.2],
    ['2017-08', 3116.5, 7.4, 21.2],
    ['2017-09', 3336.6, 7.4, 19.2],
    ['2017-10', 3222, 17.1, 16.2],
    ['2017-11', 3337.5, 7.2, 12.2],
    ['2017-12', 2447.1, 7.2, 11.2],
    ['2018-01', 3117, 7.1, 12.2],
    ['2018-02', 417.5, 1.4, 11.2],
    ['2018-03', 2227.5, 7, 15.2],
    ['2018-04', 3117, 7.1, 5.2],
    ['2018-05', 3117.3, 8.1, 7.2],
    ['2018-06', 3227.6, 7.1, 12.2],
    ['2018-07', 2337.3, 7.1, 1.2],
];

option = {
    dataset: {
        source: value //数据源
    },
    backgroundColor: "#344b58",
    "title": {
        "text": "服务调用统计",
        "subtext": "BY Wang Dingding",
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
        top: '11%',
        textStyle: {
            color: '#90979c',
        },
       
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
            "name": "成功",
            "type": "bar",
            "stack": "总量",
            "barMaxWidth": 35,
            "barGap": "10%",
            "itemStyle": {
                "normal": {
                    "color": "rgba(103,194,58,1)",
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
          
        },

        {
            "name": "失败",
            "type": "bar",
            "stack": "总量",
            "itemStyle": {
                "normal": {
                    "color": "rgba(245,108,108,1)",
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

        }, {
            "name": "总数",
            "type": "line",
            "stack": "总量",
            symbolSize:10,
            symbol:'circle',
            "itemStyle": {
                "normal": {
                    "color": "rgba(230,162,60,1)",
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

        },
    ]
}