option = {
    "legend": {
        "type": "scroll",
        "show": true,
        "align": "left",
        "icon": "circle",
        "itemGap": 10,
        "itemWidth": 10,
        "itemHeight": 10,
        "pageButtonGap": 8,
        "pageIconSize": 8,
        "pageTextStyle": {
            "fontSize": 12
        },
        formatter(name) {
            return echarts.format.truncateText(name, 80, undefined, '…');
        },
        "tooltip": {
            "show": true
        },
        "textStyle": {
            "padding": [3, 0, 0, 0]
        },
        "left": "left",
        "orient": "vertical"
    },
    "label": {
        "showValue": false,
        "showSeriesName": false,
        "show": true,
        "fontSize": 12,
        "position": "outside",
        "fontStyle": "",
        "separator": " ",
        "fontWeight": "",
        "showItemName": true
    },
    "tooltip": {
        "confine": true,
        "trigger": "item"
    },
    "series": [{
        "type": "pie",
        "left": 100,
        "label": {
            "show": true,
            "position": "outside",
            formatter: '{b}: {d}',
            "fontSize": 12,
            "fontStyle": "normal",
            "fontWeight": "normal"
        },
        "datasetIndex": 0,
        "encode": {
            "value": 1,
            "tooltip": [1],
            "itemName": [0]
        },

        avoidLabelOverlap: true
    }],
    "dataset": [{
        "source": [
            ["province", "l_tmp"],
            ["湖北", 46849],
            ["重庆", 3336],
            ["山东", 39195],
            ["河南", 44786],
            ["河北", 22162],
            ["江苏", 34109],
            ["北京", 2115],
            ["浙江", 32220],
            ["江西", 34913],
            ["天津", 2407],
            ["四川", 55601],
            ["西藏", 2886],
            ["澳门", 3915],
            ["宁夏", 7417],
            ["上海", 2954],
            ["云南", 34769],
            ["吉林", 7157],
            ["辽宁", 20968],
            ["陕西", 22992],
            ["湖南", 40693],
            ["新疆", 19627],
            ["贵州", 12894],
            ["海南", 81849],
            ["青海", 1640],
            ["福建123福建456福建789超长测试测试测试测试", 34510],
            ["香港", 3967],
            ["台湾", 11924],
            ["广西", 52201],
            ["甘肃", 15828],
            ["黑龙江", 4714],
            ["安徽", 42941],
            ["山西", 17539],
            ["广东", 78260],
            ["内蒙古", 7576]
        ]
    }],
    "title": [{
        "show": false,
        "left": "50%",
        "textAlign": "center",
        "textStyle": {
            "fontSize": 12
        }
    }]
};

console.log(echarts);