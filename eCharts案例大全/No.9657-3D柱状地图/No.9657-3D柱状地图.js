const data = [["123.97", "47.33", 47], ["121.15", "31.89", 25], ["121.1", "31.45", 33], ["120.33", "36.07", 66], ["120.13", "33.38", 62], ["119.3", "26", 29], ["118.87", "42.28", 12], ["109.781327", "39.608266", 54], ["103.79", "25.51", 64]];
option = {
    "title": {
        "text": "",
        "left": "center",
        "textStyle": {
            "fontSize": 20,
            "color": "rgb(85,85,85)"
        }
    },
    "geo3D": {
        "map": "china",
        "itemStyle": {
            "borderColor": "#43e2c7",
            "borderWidth": 1,
        },
        "emphasis": {
            "label": {
                "show": false
            }
        },
        "viewControl": {
            "autoRotate": false,
            "autoRotateSpeed": 5,
            "autoRotateAfterStill": 10,
            "minBeta": -360,
            "maxBeta": 360,
            "distance": 100
        }
    },
    "series": [{
        "type": "bar3D",
        "coordinateSystem": "geo3D",
        "shading": "lambert",
        "minHeight": 0.2,
        "itemStyle": {
            "normal": {
                "label": {
                    "show": false,
                }
            },
            "emphasis": {
                "label": {
                    "show": false
                }
            }
        },
        "data":data,
    }],
    "color": ["#e2ad48", "#e347ca", "#e1e767", "rgba(99, 181, 78, 1)", "rgba(23, 171, 181, 1)", "rgba(30, 129, 196, 1)", "rgba(71, 198, 205, 1)", "rgba(143, 202, 110, 1)", "rgba(24, 172, 136, 1)", "rgba(204, 204, 51, 1)"]
}