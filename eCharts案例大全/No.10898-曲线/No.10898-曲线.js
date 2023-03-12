var linedata = [
    [{
        "name": "机械厂",
        "x": 50,
        "y": 400
    },{
        "name": "火车南站",
        "x": 50,
        "y": 4400
    }],
    [{
        "source": "机械厂",
        "target": "火车南站",
        "lineStyle": {
            "normal": {
                "width": 6.0,
                "curveness": 1,
                "color": "#d73027"
            }
        },
        "label": {
            "emphasis": {
                "textStyle": {
                    "color": "#a50026",
                    "fontSize": 50
                },
                "show": "true",
                "formatter": "{b}:46"
            }
        }
    }]
]
var data = linedata[0]
var links = linedata[1]

option = {
    animationDurationUpdate: 1500,
    animationEasingUpdate: "quinticInOut",
    series: [{
        type: "graph",
        layout: "none",
        symbol: "circle",
        symbolSize: [100, 25],
        roam: true,
        label: {
            normal: {
                textStyle: {
                    color: "#fff",
                    fontSize: 15,
                },
                show: true
            },

        },
        edgeSymbol: ["circle", "arrow"],
        edgeSymbolSize: [5, 12],
        edgeLabel: {
            normal: {
                textStyle: {
                    color: "#000",
                    fontSize: 100,
                    show: true
                }
            }
        },
        data: data,
        links: links,
        lineStyle: {
            normal: {
                opacity: 1,
                width: 2,
                curveness: 0
            }
        }
    }]
};