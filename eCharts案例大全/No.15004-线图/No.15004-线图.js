

option = {
    backgroundColor: "#344b58",
    
    "grid": {
        "borderWidth": 0,
        "top": 110,
        "bottom": 95,
        textStyle: {
            color: "#fff"
        }
    },
    "legend": {
        x: '30%',
        top: '11%',
        textStyle: {
            color: '#90979c',
        },
        "data": ['老用户', '新用户']
    },
     

    "calculable": true,
    "xAxis": [{
        "type": "category",
        show:false,
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
        "data": ['2011','2012','2013','2014','2015'],
    }],
    "yAxis": [{
        "type": "value",
        show:false,
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
    
    "series": [{
            "name": "老用户",
            "type": "line",
            "stack": "总量",
            symbolSize:20,
            symbol:'circle',
            "barMaxWidth": 35,
            "barGap": "10%",
            "itemStyle": {
                "normal": {
                    "color": "rgba(255,144,128,1)",
                    "label": {
                        "show": false,
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
                198.66,
                330.81,
                151.95,
                160.12,
                222.56,
            ],
        },

        {
            "name": "新用户",
            "type": "line",
            "stack": "总量",
            symbolSize:20,
            symbol:'circle',
            "itemStyle": {
                "normal": {
                    "color": "rgba(0,191,183,1)",
                    "barBorderRadius": 0,
                    "label": {
                        "show": false,
                        "position": "top",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
                82.89,
                167.54,
                262.07,
                359.43,
                467.02,
            ]
        }
    ]
}