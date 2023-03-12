/*
    作者：banwagong     编辑于2020-08-29
*/

var colorListPie = ['#dd2020', '#e9990f', '#24A2DD', '#3EB66C', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'];
option = {
    "title": {
        "text": "",
        "x": "center",
        "y": "20"
    },
    "legend": {
        "show": true,
        "x": "center",
        "y": "20",
        "icon": "stack",
        "itemWidth": 10,
        "itemHeight": 10,
        "textStyle": {
            "color": "#1bb4f6"
        },
        "left": 20,
        "right": 20,
        "type": "scroll",
        "orient": "vertical",
        "data": ["党支部", "离退休党总支", "能源公司党委"]
    },
    "tooltip": {
        "trigger": "item",
        "formatter": function(param) {
            let xVal = param.marker +
                param.name +
                ": " +
                param.value +
                "（" + param.percent + "%）";
            return xVal;
        }
    },
    "series": [{
        "type": "pie",
        "data": [{
            "name": "党支部",
            "value": 85
        }, {
            "name": "离退休党总支",
            "value": 20
        }, {
            "name": "能源公司党委",
            "value": 14
        }],
        "radius": ["45%", "60%"],
        "center": ["50%", "50%"],
        "emphasis": {
            "shadowBlur": 10,
            "shadowOffsetX": 0,
            "shadowColor": "rgba(0, 0, 0, 0.5)"
        },
        "label": {
            "normal": {
                "show": true,
                "position": "outside",
                "formatter": "{b} : {d}%"
            }
        },
        "itemStyle": {
            "normal": {
                "color": function(params) {
                    var index;
                    if (params.dataIndex >= colorListPie.length) {
                        index = params.dataIndex - colorListPie.length;
                        return colorListPie[index];
                    }
                    return colorListPie[params.dataIndex];
                }
            }
        }
    }]
}