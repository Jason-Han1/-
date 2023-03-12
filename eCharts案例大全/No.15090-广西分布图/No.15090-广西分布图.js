option = {
    "backgroundColor": '#013769',
    "geo": {
        "map": "云南",
        "layoutCenter": ["50%", "50%"],
        "layoutSize": "90%",
        "label": {
            "emphasis": {
                "show": true,
                textStyle: {
                    color: '#ccc',
                },
            }
        },
        "roam": true,
        "mapLocation": {
            "width": "100%",
            "height": "100%"
        },
        "itemStyle": {
            "normal": {
                shadowBlur: 20,
                shadowColor: 'rgba(0, 0, 0,0.8)',
                "areaColor": "#004571",
                "borderColor": "#6AC6E6"
            },
            "emphasis": {
                "areaColor": "#00385E"
            }
        }
    },
    "series": [{
        "name": "地方",
        "type": "effectScatter",
        "coordinateSystem": "geo",
        "data": [{
            "name": "个旧市",
            "value": [103.160034, 23.359121]
        }, {
            "name": "开远市",
            "value": [103.267143, 23.714316]
        }, {
            "name": "蒙自市",
            "value": [103.364905, 23.396201]
        }, {
            "name": "弥勒市",
            "value": [103.414874, 24.411912]
        }, {
            "name": "屏边苗族自治县",
            "value": [103.687612, 22.98356]
        }, {
            "name": "建水县",
            "value": [102.826557, 23.6347]
        }, {
            "name": "石屏县",
            "value": [102.494984, 23.705936]
        }, {
            "name": "泸西县",
            "value": [103.766196, 24.532025]
        }, {
            "name": "元阳县",
            "value": [102.835223, 23.219932]
        }, {
            "name": "红河县",
            "value": [102.4206, 23.369161]
        }, {
            "name": "金平苗族瑶族傣族自治县",
            "value": [103.226448, 22.779543]
        }, {
            "name": "绿春县",
            "value": [102.392463, 22.993718]
        }, {
            "name": "河口瑶族自治县",
            "value": [103.96056, 22.509593]
        }],
        "rippleEffect": {
            "period": 1,
            "scale": 1,
            "brushType": "stroke",

        },
        "label": {
            "normal": {
                "formatter": "{b}",
                "position": "right",
                "show": true
            },
            "emphasis": {
                "show": true
            }
        },
        "itemStyle": {
            "normal": {
                "color": "#4DFFFF"
            }
        }
    }]
};