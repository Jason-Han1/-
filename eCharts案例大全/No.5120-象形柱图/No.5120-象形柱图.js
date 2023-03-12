option = option = {
    "title": {
        "text": "",
        "left": "center",
        "textStyle": {
            "fontSize": 20,
            "color": "rgb(85,85,85)"
        }
    },
    "dataset": {
        "source": [{
            "year": "2016",
            "value": 7222
        },
        {
            "year": "2017",
            "value": 16216
        },
        {
            "year": "2018",
            "value": 25987
        },
        {
            "year": "2019",
            "value": 37152
        },
        {
            "year": "2020",
            "value": 25512
        }]
    },
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow"
        },
        "enterable": true,
    },
    "legend": {
        "show": false,
    },
    "xAxis": [{
        "inverse": false,
        "name": "",
        "type": "category",
        "position": "bottom",
        "boundaryGap": true,
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#2db2ee",
                "width": 1
            }
        },
        "splitLine": {
            "show": false,
            "lineStyle": {
                "color": "#44a2ee"
            }
        },
        "axisLabel": {
            "show": true,
            "fontSize": 13,
            "color": "#ffffff",
            "rotate": 0
        },
        "axisTick": {
            "show": false
        },
        "nameTextStyle": {
            "color": "rgb(85,85,85)",
            "fontSize": 12
        }
    }],
    "yAxis": [{
        "inverse": false,
        "name": "",
        "type": "value",
        "boundaryGap": [0, "20%"],
        "position": "left",
        "axisLabel": {
            "show": true,
            "fontSize": 12,
            "color": "#ffffff"
        },
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#2db2ee",
                "width": 1
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": "#2db2ee"
            }
        },
        "axisTick": {
            "show": false
        },
        "nameTextStyle": {
            "color": "rgb(85,85,85)",
            "fontSize": 12
        }
    }],
    "series": [{
        "type": "pictorialBar",
        "smooth": true,
        "name": "bar",
        "symbolRepeat": "fixed",
        "symbolMargin": 2,
        "symbol": "rect",
        "symbolClip": true,
        "symbolSize": [40, 5],
        "symbolPosition": "start",
        "symbolOffset": [1, -1],
        "z": 2,
        "animationEasing": "elasticOut",
        "dimensions": ["year", "value"],
        "label": {
            "normal": {
                "show": false,
                "textStyle": {
                    "fontSize": 14,
                    "color": "#1890ff"
                },
                "position": "top",
                "formatter": "{@[1]}"
            }
        },
        "itemStyle": {
            "normal": {
                "color": function(params){
                    let colors = ['rgb(93,222,254)','rgb(108,254,173)',
                    'rgb(252,221,64)','rgb(247,147,70)','rgb(172,101,213)'];
                    return colors[params.dataIndex];
                },
                "barBorderRadius": [5, 5, 5, 5]
            }
        }
    }],
    "backgroundColor": "#010d3a",
}