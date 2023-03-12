option = {
    // D3D3D3
    // FFFAF0
    
    // BE7889
    // 0AA0E6
    backgroundColor: "#FFFFFF",
    "title": {
        text: "2020年1月-7月Boss骑士月活",
        left: "center",
        top: "5%",
        textStyle: {
            color: "#808080",
            fontSize: 20,

        }
    ,
    },
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow",
            textStyle: {
                color: "#808080"
            }

        },
    },
      "grid": {
        top: '20%',
        left: '10%',
        right: '10%',
        bottom: '10%',
        containLabel: true,
    },
    
    "legend": {
        x: '85%',
        top: '7%',
        textStyle: {
            color: '#808080',
            fontSize: 14,
        },
        "data": [ '活跃用户总数','活跃用户(新)', '活跃用户(老)']
    },

    "calculable": true,
    "xAxis": [{
        "type": "category",
         "boundaryGap": "false",
        "axisLine": {
            lineStyle: {
                color: '#808080'
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
        "data": [
        '一月',
        '二月',
        '三月',
        '四月',
        '五月',
        '六月',
        '七月',
        ]
,
    }],
    "yAxis": [{
        'name': '人数',
        "type": "value",
        "splitLine": {
            "show": false
        },
        "axisLine": {
            lineStyle: {
                color: '#808080'
            }
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            formatter: '{value}',
            "interval": 0,

        },
        "splitArea": {
            "show": false
        },

    }],
    "series": [{
            "name": "活跃用户(老)",
            "type": "bar",
            "stack": "总量",
            "barMaxWidth": 35,
            "barGap": "10%",
            "itemStyle": {
                "normal": {
                    "color": "#ADC5D9",
                    "label": {
                        "show": true,
                        "textStyle": {
                            "color": "#808080 "
                        },
                        "position": "insideTop",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [12780,16233,22426,25617,23523,21991,21958],
        },

        {
            "name": "活跃用户(新)",
            "type": "bar",
            "stack": "总量",
            "itemStyle": {
                "normal": {
                    "color": "#B3E6D8",
                    "barBorderRadius": 0,
                    "label": {
                        "show": true,
                        "position": "insideTop",
                        "color":'#808080',
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [3241,2938,12766,9695,8995,9815,10769]
        }, {
            "name": "活跃用户总数",
            "type": "line",
            "symbol": 'circle',
            "stack": "总量",
            symbolSize:10,

            "itemStyle": {
                "normal": {
                    "color": "#54AFEB",
                    "barBorderRadius": 0,
                    "label": {
                        "show": true,
                        "position": "top",
                        "color":'#808080',
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [16021,19171,35192,35272,32518,31806,32637]
        },
    ]
}