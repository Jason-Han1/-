let xAxisData = ["1", "2", "3", "4", "5", "6", "7", "8"];
let yAxisData1 = [333, 333, 150, 113, 120, 100, 110, 333];
let yAxisData2 = [233, 233, 233, 233, 233, 233, 233, 233];

option = {
    "backgroundColor": "#fff",
    "tooltip": {
        "trigger": "axis"
    },
    "legend": {
        "data": ["1",'2'],
        "top": "10%"
    },
    "toolbox": {
        "show": false,
        "feature": {
            "dataZoom": {}
        }
    },
    "grid": {
        "top": "30%",
        "left": "0%",
        "right": "0%",
        "bottom": "9%"
    },
    "xAxis": {
        "show": false,
        "type": "category",
        "boundaryGap": false,
        "axisLabel": {
            "color": "rgba(0,0,0,0.8)",
            "fontSize": 30
        },
        "data": xAxisData
    },
    "yAxis": {
        "show": false,
        "type": "value",
        "axisLabel": {
            "formatter": "{value} °C",
            "color": "rgba(0,0,0,0.8)",
            "fontSize": 30
        }
    },
    "series": [ {
        "name": "1",
        "type": "line",
        
        "smooth":"true",
        "color": "#7f7f7f",
        "areaStyle": {
            color: "#7f7f7f",
            "opacity":1
        },
        "data": yAxisData1,
        z:1

    }, 
    {
        "name": "2",
        "type": "line",
        "color": "#0b8fb066",
        "areaStyle": {
            "color": "#0b8fb066",
            // "opacity":1
        },
        "data": yAxisData2,
        z:0
    },
    {
        
        "type": "line",
        "markLine": {
            "data": [{
                "lineStyle": {
                    "color": "red"
                },
                "label": {
                    "position": "middle"
                },
                "name": "min",
                "yAxis": 300
            }, {
                "lineStyle": {
                    "color": "green"
                },
                "label": {
                    "position": "middle"
                },
                "name": "max",
                "yAxis": 200
            }]
        }
    }]
}