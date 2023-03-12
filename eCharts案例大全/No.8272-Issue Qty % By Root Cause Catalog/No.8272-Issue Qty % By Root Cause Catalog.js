option = {
    "series": [{
        "data": [{
            "name": "Design",
            "value": 47
        }, {
            "name": "Manufacture",
            "value": 40
        }, {
            "name": "Material",
            "value": 12
        }, {
            "name": "Others",
            "value": 4
        }],
        "type": "pie",
        "selectedMode": false,
        "hoverAnimation": true,
        "roseType": false,
        "center": ["50%", 200],
        "radius": [90, 110],
        "label": {
            "show": true,
            "position": "inside",
            "fontSize": 14,
            formatter:''
        },
        "labelLine": {
            "show": false
        }
    }, {
        "data": [{
            "name": "Design",
            "value": 47
        }, {
            "name": "Manufacture",
            "value": 40
        }, {
            "name": "Material",
            "value": 12
        }, {
            "name": "Others",
            "value": 4
        }],
        "type": "pie",
        "selectedMode": false,
        "hoverAnimation": false,
        "roseType": false,
        "center": ["50%", 200],
        "radius": [0, 90],
        "label": {
            "show": true,
            "position": "inside",
            "fontSize": 12,
            formatter:'{d}%'
        },
        "labelLine": {
            "show": false
        },
        "itemStyle": {
            "color": "#efefef"
        }
    }],
    "legend": {
        "top": 15,
        "right": 15,
        "orient": "vertical",
        "textStyle": {
            "fontSize": 10
        },
        "type": "scroll"
    },
    "tooltip": {
        "confine": true
    },
    "color": ["rgb(252,191,100)", "rgb(243,118,23)", "rgb(109,198,114)", "rgb(157,195,230)"],
    "grid": {
        "left": 20,
        "right": 20,
        "top": 50,
        "bottom": 20
    },
    "title": {
        "textStyle": {
            "fontWeight": "normal",
            "fontSize": 15
        },
        "top": 10,
        "left": 10,
        "text": "Issue Qty % By Root Cause Catalog"
    },
    "textStyle": {
        "fontFamily": "Arial",
        "color": "#9d9d9d"
    }
}