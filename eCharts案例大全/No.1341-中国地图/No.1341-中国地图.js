var mapData = echarts.getMap('china').geoJson;
var data = [];
mapData.features.forEach((item) => {
    data.push({
        name: item.properties.name,
        value: Math.floor(Math.random() * 100),
    });
});
option = {
    "title": {
        "text": "中国",
        "show": true,
        "top": 3,
        "left": 90,
        "textStyle": {
            "color": "#fff",
            "fontSize": 22,
            "fontWeight": "normal"
        }
    },
    "visualMap": {
        "show": true,
        "left": "3%",
        "bottom": "6%",
        "itemHeight": 15,
        "itemWidth": 15,
        "pieces": [
            {
                "gte": 100,
                "label": 100,
                "color": "#11469B"
            },
            {
                "gte": 80,
                "lt": 100,
                "label": "80-100",
                "color": "#0050B3"
            },
            {
                "gte": 60,
                "lt": 80,
                "label": "60-80",
                "color": "#127AD9"
            },
            {
                "gte": 30,
                "lt": 60,
                "label": "30-60",
                "color": "#1890FF"
            },
            {
                "gte": 0,
                "label": "0-30",
                "color": "#69B7FF",
                "lt": 30
            }
        ],
        "textStyle": {
            "color": "#fff"
        }
    },
    "geo": {
        "map": "china",
        "label": {
            "normal": {
                "show": false,
                "color": "#a6212199"
            }
        },
        "roam": false,
        "zoom": 1.2,
        "itemStyle": {
            "normal": {
                "areaColor": "#ffffff",
                "borderWidth": 1,
                "borderColor": "#ff0000",
                "shadowBlur": 5,
                "shadowOffsetX": -5,
                "shadowOffsetY": 15
            }
        },
        "emphasis": {
            "itemStyle": {
                "areaColor": "#3B72FD"
            },
            "label": {
                "color": "#e81111"
            }
        }
    },
    "series": [
        {
            "name": "中国",
            "type": "map",
            "map": "china",
            "zoom": 1.2,
            "geoIndex": 0,
            "nameMap": {},
            "data": [
                {
                    "name": "河北",
                    "value": 8413
                },
                {
                    "name": "云南",
                    "value": 8413
                },
                {
                    "name": "唐山",
                    "value": 8243
                },
                {
                    "name": "邢台",
                    "value": 8243
                },
                {
                    "name": "秦皇岛",
                    "value": 7027
                },
                {
                    "name": "张家口",
                    "value": 7027
                }
            ]
        }
    ]
}
