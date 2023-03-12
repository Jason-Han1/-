option = {
    "title": {
        "text": "风速风向玫瑰图",
        "left": "center",
        "top": "10"
    },
    "legend": {
        "show": true,
        "top": "30",
        "right": "right",
        "data": ["<1(m/s)", "1-2(m/s)", "2-4(m/s)", "4-6(m/s)", "6-8(m/s)", "8-10(m/s)", ">10(m/s)"],
        "orient": "vertical"
    },
    "tooltip": {
        "formatter": "{a}<br/>{b}：{c}%"
    },
    "color": ["#f45a5a", "#8185e9", "#8d4654", "#7699bf", "#aeeeee", "#ff0066", "#edafee"],
    "angleAxis": {
        "type": "category",
        "data": ["北", "西北", "西", "西南", "南", "东南", "东", "东北"],
        "z": 0,
        "boundaryGap": false,
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": "#ddd",
                "type": "solid"
            }
        },
        "axisLine": {
            "show": false
        }
    },
    "radiusAxis": {
        "name": "频率(%)",
        "nameLocation": "middle",
        splitArea: {
            show: true,
            areaStyle: {
                color: ["rgba(0,0,0,.01)", "rgba(0,0,0,.2)"]
            }

        },
    },
    "polar": {},
    "series": [{
        "type": "bar",
        "data": ["0.00", "1.22", "0.00", "0.00", "0.00", "0.00", "1.22", "0.00"],
        "coordinateSystem": "polar",
        "name": "<1(m/s)",
        "stack": "a"
    }, {
        "type": "bar",
        "data": ["0.00", "3.66", "4.88", "1.22", "0.00", "0.00", "1.22", "0.00"],
        "coordinateSystem": "polar",
        "name": "1-2(m/s)",
        "stack": "a"
    }, {
        "type": "bar",
        "data": ["0.00", "0.00", "9.76", "0.00", "0.00", "3.66", "25.61", "1.22"],
        "coordinateSystem": "polar",
        "name": "2-4(m/s)",
        "stack": "a"
    }, {
        "type": "bar",
        "data": ["0.00", "0.00", "10.98", "0.00", "0.00", "8.54", "7.32", "0.00"],
        "coordinateSystem": "polar",
        "name": "4-6(m/s)",
        "stack": "a"
    }, {
        "type": "bar",
        "data": ["0.00", "0.00", "14.63", "0.00", "0.00", "1.22", "1.22", "0.00"],
        "coordinateSystem": "polar",
        "name": "6-8(m/s)",
        "stack": "a"
    }, {
        "type": "bar",
        "data": ["0.00", "0.00", "2.44", "0.00", "0.00", "0.00", "0.00", "0.00"],
        "coordinateSystem": "polar",
        "name": "8-10(m/s)",
        "stack": "a"
    }, {
        "type": "bar",
        "data": ["0.00", "0.00", "0.00", "0.00", "0.00", "0.00", "0.00", "0.00"],
        "coordinateSystem": "polar",
        "name": ">10(m/s)",
        "stack": "a"
    }]
}