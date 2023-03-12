var jsonData = {
    data: [{
        name: "设计",
        value: "8"
    }, {
        name: "监理",
        value: "14"
    }, {
        name: "其它服务",
        value: "20"
    }]
}

option = {
    "backgroundColor": "#142058",
    "color": [
        "#10A0FF",
        "#FF7723",
        "#8E30FF"
    ],
    "tooltip": {
        "trigger": "item"
    },
    "legend": [{
        "show": true,
        "left": "20%",
        "y": "center",
        "itemWidth": 8,
        "itemHeight": 8,
        "orient":"vertical",
        "textStyle": {
            "color": "#fff"
        },
        "formatter": function(name) {
            const data = option.series[0].data;
            for (var i = 0; i < data.length; i++) {
                if(name == data[i].name){
                    return name + '     ' + parseFloat(data[i].value).toFixed(2) + '元';
                }
            }
        }
    }],
    "series": [
        {
            "type": "pie",
            "radius": [
                "0%",
                "46%"
            ],
            "center": [
                "50%",
                "50%"
            ],
            "roseType": false,
            "startAngle": "90",
            "clockWise": true,
            "legendHoverLink": false,
            "hoverAnimation": true,
            "label": {
                "normal": {
                    "show": true,
                    "position":"inside",
                    "color": "#ffffff",
                    "fontWeight": "lighter",
                    "fontSize": 12,
                    "formatter":"{d}"+"%"
                },
                "emphasis": {
                    "show": false
                }
            },
            "labelLine": {
                "normal": {
                    "show": false,
                    "length": 50,
                    "length2": 30
                },
                "emphasis": {
                    "show": false
                }
            },
            "itemStyle": {
                "normal": {},
                "emphasis": {
                    "show": false
                }
            },
            "zlevel": 2,
            "data": jsonData.data
        }
    ]
};