option = {
    "backgroundColor": 'rgb(0,0,0)',
    "color": ["#1576d2", "#d14a82", "#26c1f2", "#a166ff", "#1271cc", "#272f67", "rgba(156, 43, 182, 1)"],
    "series": [{
        "radius": ["8%", "10%"],
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
            "_startArc": 0,
            "_endArc": 1.6589268137767885,
        }, {
            "name": "三星",
            "value": 26,
            "_startArc": 1.6589268137767885,
            "_endArc": 3.6911121606533546,
        }, {
            "name": "华为",
            "value": 12,
            "_startArc": 3.6911121606533546,
            "_endArc": 3.898478012375453,
        }, {
            "name": "小米",
            "value": 26,
            "_startArc": 3.898478012375453,
            "_endArc": 5.557404826152241,
        }, {
            "name": "其他",
            "value": 3,
            "_startArc": 5.557404826152241,
            "_endArc": 6.283185307179586,
        }],
        "radius": ["10%", "35%"],
        "label": {
            "nameColor": "#CACACA",
            "valueColor": "color",
            "labelStyle": "style2",
            "fontSize": 20,
            "formatter": function formatterFunc(params) {
                const values = params.data; // 内容
                const formatter = [`{rect|}{name|${values.name}} ${values.value}%`, `${values.value}% {name|${values.name}}{rect|}`];
                // 这里拿到了开始角度和结束角度，计算了一个label指示线的标注角度
                const midAngle = (values._startArc + values._endArc) / 2;
                // 分情况判断了一下 决定采用左边的还是右边的
                if (midAngle <= Math.PI) {
                    return formatter[0];
                } else {
                    return formatter[1];
                }
            },
            "rich": {
                "name": {
                    "color": '#fff',
                    "borderColor": '#264884',
                    "borderWidth": 1,
                    "padding": [10, 15],
                },
                "rect": {
                    "height": 12,
                    "width": 8,
                    "backgroundColor": "#264884"
                }
            },
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