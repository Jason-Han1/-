option = {
    backgroundColor: '#051d40',
    "color": ["#59cb42", "#39712e"],
    "series": [{
        "type": "pie",
        "center": ["40%", "47%"],
        "radius": ["35%", "47%"],
        "hoverAnimation": false,
        "data": [{
            "name": "当月",
            "value": 45,
            "z": 5,
            "labelLine": {
                "length2": 80,
                "lineStyle": {
                    "color": "#3cefff",
                    "width": 1.5
                }
            },
            "label": {
                "color": "#3cefff",
                "formatter": "{b}：{c}%"
            }
        }, {
            "name": "",
            "value": 55,
            "labelLine": {
                "show": false,
                "emphasis": {
                    "show": false
                }
            }
        }]
    }, {
        "type": "pie",
        "center": ["40%", "47%"],
        "radius": ["65%", "77%"],
         "z": 1,
        "hoverAnimation": false,
        "data": [{
            "name": "均值",
            "value": 60,
            "labelLine": {
                "length": 5,
                "lineStyle": {
                    "width": 1.5
                }
            },
            "label": {
                "formatter": "{b}：{c}%"
            }
        }, {
            "name": "",
            "value": 40,
            "labelLine": {
                "show": false,
                "emphasis": {
                    "show": false
                }
            },
            "label": {
                "show": true,
                "position": "center",
                "color": "#59cb42",
                "fontSize": 18,
                "fontWeight": "bold",
                "formatter": function(o){return 100 - o.value + '%'}
            }
        }]
    }]
}