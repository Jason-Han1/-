var xData = function() {
    var data = [];
    for (var i = 1978; i < 2017; i++) {
        data.push(i + "");
    }
    return data;
}();

option = {
    backgroundColor: "#344b58",
    "title": {
        "text": "成都变电容量与GDP关系图",
        "subtext": "BY Li Mao",
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
    toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
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
        "data": ['女', '男', '平均']
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
        "name":'变电容量',
        "nameLocation":'end',
        "splitLine": {
            "show": false
        },
        
        "axisLine": {
            lineStyle: {
                color: "rgba(255,144,128,1)"
            }
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,
            formatter: '{value} MVA'

        },
        "splitArea": {
            "show": false
        },

    },
    {
        "type": "value",
        "name":'GDP总量',
        "nameLocation":'end',
        "splitLine": {
            "show": false
        },
        
        "axisLine": {
            lineStyle: {
                color: "rgba(252,230,48,1)"
            }
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,
            formatter: '{value} 亿元'

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
        "start": 40,//起始位置
        "end": 80,
        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '110%',//灰色条的比例
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
            "name": "变电容量",
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
               254,
                274 ,
                337,
                463 ,
                477 ,
                487,
                487,
                629, 
                729,
                881,
                1048 ,
                1214,
                1366,
                1486 ,
                1772 ,
                1984 ,
                2320 ,
                3076 ,
                4316 ,
                4789,
                5416 ,
                6000 ,
                7411 ,
                8227 ,
                10155 ,
                11128 ,
                11368 ,
                12078,
                13385,
                15447 ,
                16837 ,
                19144 ,
                20878 ,
                25901 ,
                29793 ,
                31702 ,
                35936 ,
                38314,
                40972,
                41350 



            ],        },

         {
            "name": "GDP总量",
            "type": "line",
            yAxisIndex: 1,
           // "stack": "总量",
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
            "data": [
                35.94,
                41.3,
                46.29,
                49,
                55.4,
                62.7,
                71.2,
                86.4,
                94.8,
                115.8,
                146.4,
                163.9,
                194,
                236.9,
                300.6,
                418.6,
                558.3,
                713.6,
                869.3,
                1007,
                1102,
                1190,
                1310,
                1491,
                1663,
                1871,
                2186,
                2371,
                2750,
                3323,
                3901,
                4502,
                5551,
                6854,
                7080,
                9108,
                10056,
                10801,
                12170
            ]
        },
    ]
}