var legendWidth = 100;

option = {
    "color": [
        "rgba(24,144,255,0.9)",
        "rgba(47,194,91,0.9)",
        "rgba(250,204,20,0.9)",
        "rgba(34,50,115,0.9)",
        "rgba(133,67,224,0.9)",
        "rgba(19,194,194,0.9)",
        "rgba(52,54,199,0.9)",
        "rgba(240,72,100,0.9)"
    ],
    "legend": {
        "type": "scroll",
        "show": true,
        "left": "right",
        "orient": "vertical",
        align: 'left',
        icon: 'circle',
        itemGap: 10,
        itemWidth: 10,
        itemHeight: 10,
        pageButtonGap: 8,
        pageIconSize: 8,
        pageTextStyle: {
            fontSize: 10
        },
        formatter: function(name) {
            var containerWidth = legendWidth - 20;
            return echarts.format.truncateText(name, containerWidth, '12px sans-serif', '…');
        },
        tooltip: {
            show: true
        },
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
        "label": {
            "show": true,
            "fontSize": 12,
            "fontStyle": "normal",
            "fontWeight": "normal",
            "position": "outside"
        },
        "datasetIndex": 0,
        "encode": {
            "value": 1,
            "tooltip": [1],
            "itemName": [0]
        },
        right: legendWidth,
    }],
    "dataset": [{
        "source": [
            ["福建1", "l_tmp"],
            ["湖北", 46849],
            ["重庆", 3336],
            ["山东", 39195],
            ["河南", 44786],
            ["江苏", 34109],
            ["河北", 22162],
            ["北京北京北京北京北京", 2115],
            ["浙江", 32220],
            ["江西", 34913],
            ["天津", 2407],
            ["四川", 55601],
            ["西藏", 2886],
            ["宁夏", 7417],
            ["澳门", 3915],
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
            ["福建", 34510],
            ["香港", 3967],
            ["台湾", 11924],
            ["广西", 52201],
            ["黑龙江", 4714],
            ["甘肃", 15828],
            ["安徽", 42941],
            ["山西", 17539],
            ["广东", 78260],
            ["内蒙古", 7576]
        ]
    }],
}