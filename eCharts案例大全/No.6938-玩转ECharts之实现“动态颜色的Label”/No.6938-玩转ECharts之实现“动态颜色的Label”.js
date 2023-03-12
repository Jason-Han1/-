var formats = {}
option = {
    "backgroundColor": 'rgb(0,0,0)',
    "color": ["#1576d2", "#d14a82", "#26c1f2", "#a166ff", "#1271cc", "#272f67", "rgba(156, 43, 182, 1)"],
    "series": [{
        "radius": ["8%", "10%", 0],
        "data": [{
            "value": 1,
            "itemStyle": {
                "color": "#a0a0a0",
                "matchColor": true,
                "opacity": 0.3
            }
        }],
        "type": "pie",
        "silent": true,
        "label": {
            "show": false
        },
        "labelLine": {
            "show": false
        },
        "animation": false
    }, {
        "type": "pie",
        "data": [{
            "name": "苹果",
            "value": 32,
            "itemStyle": {},
            "_startArc": 0,
            "_endArc": 1.6589268137767885,
            "_color": "#1576d2",
            "_percent": 0.264026402640264
        }, {
            "name": "三星",
            "value": 26,
            "itemStyle": {},
            "_startArc": 1.6589268137767885,
            "_endArc": 3.6911121606533546,
            "_color": "#d14a82",
            "_percent": 0.3234323432343234
        }, {
            "name": "华为",
            "value": 12,
            "itemStyle": {},
            "_startArc": 3.6911121606533546,
            "_endArc": 3.898478012375453,
            "_color": "#26c1f2",
            "_percent": 0.033003300330033
        }, {
            "name": "小米",
            "value": 26,
            "itemStyle": {},
            "_startArc": 3.898478012375453,
            "_endArc": 5.557404826152241,
            "_color": "#a166ff",
            "_percent": 0.264026402640264
        }, {
            "name": "其他",
            "value": 3,
            "itemStyle": {},
            "_startArc": 5.557404826152241,
            "_endArc": 6.283185307179586,
            "_color": "#1271cc",
            "_percent": 0.11551155115511551
        }],
        "radius": ["10%", "35%"],
        "label": {
            "nameColor": "#CACACA",
            "valueColor": "color",
            "labelStyle": "style2",
            "fontSize": 20,
            "formatter": '{b} {d}',
            "opacity": 1,
            "position": "outside",
            "matchColor": true,
        },
        "labelLine": {
            "lineStyle": {
                "color": "#fff"
            }
        },
        "itemStyle": {
            "borderColor": "#000",
            "borderWidth": 2
        },
        "hoverAnimation": false
    }]
}