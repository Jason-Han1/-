app.title = '堆叠柱状图';

option = {
    "title": {
        "show": false,
        "text": "趋势",
        "left": "center",
        "textStyle": {
            "color": "#fffcf3"
        }
    },
    "color": [
        "#F8C6BB",
        "#EF7056",
        "#95A5F9",
        "#F19247",
        "#EF7DC1",
        "#66CEE5"
    ],
    "legend": {
        "right": "5%",
        "data": [
            "已处理",
            "SOS",
            "倒地",
            "脱帽",
            "未受控",
            "低电量"
        ],
        "textStyle": {
            "color": "#787878"
        }
    },
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow"
        },
        "position": "top",
        "formatter": function(params) {
            console.log(41, params);
            var title = [
                "已处理SOS", "SOS",
                "已处理倒地", "倒地",
                "已处理脱帽", "脱帽",
                "已处理未受控", "未受控",
                "已处理低电量", "低电量"
            ];
            var content = "";
            for (var i = 0; i < params.length; i++) {
                content += '<br>' + params[i].marker + title[i] + ': ' + params[i].data;
            }
            var div = '<div>' + params[0].axisValueLabel + content + '</div>';
            return div;
        }
    },
    "grid": {
        "left": "3%",
        "right": "4%",
        "bottom": "20%",
        "containLabel": true
    },
    "xAxis": [{
        "type": "category",
        "data": [
            "2019-6-12",
            "2019-6-13",
            "2019-6-14",
            "2019-6-15",
            "2019-6-16",
            "2019-6-17",
            "2019-6-18"
        ],
        "axisTick": {
            "alignWithLabel": true
        },
        "axisPointer": {
            "type": "shadow"
        },
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "#4B4B4B"
            }
        },
        "axisLine": {
            "lineStyle": {
                "color": "#E8E8E8",
                "width": 2
            }
        },
        "splitLine": {
            "show": false
        }
    }],
    "yAxis": [{
        "minInterval": 1,
        "axisTick": {
            "alignWithLabel": true
        },
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "#4B4B4B"
            }
        },
        "splitLine": {
            "show": false
        },
        "axisLine": {
            "lineStyle": {
                "color": "transparent",
                "width": 2
            }
        }
    }],
    "dataZoom": [{
            "show": true,
            "realtime": true,
            "start": 0,
            "end": 100,
            "textStyle": {
                "color": "#3897c5"
            },
            "handleStyle": {
                "color": "#008acd"
            },
            "borderColor": "#3897c5",
            "bottom": 0,
            "height": 15
        },
        {
            "type": "inside",
            "realtime": true,
            "start": 0,
            "end": 100
        }
    ],
    "series": [{
            "name": "已处理",
            "type": "bar",
            "stack": "SOS",
            "data": [
                0,
                0,
                0,
                0,
                0,
                48,
                0
            ],
            "color": "#F8C6BB"
        },
        {
            "name": "SOS",
            "type": "bar",
            "stack": "SOS",
            "data": [
                0,
                0,
                0,
                0,
                0,
                50,
                0
            ],
            "color": "#EF7056"
        },
        {
            "name": "已处理",
            "type": "bar",
            "stack": "倒地",
            "data": [
                0,
                0,
                0,
                0,
                0,
                2,
                0
            ],
            "color": "#F8C6BB"
        },
        {
            "name": "倒地",
            "type": "bar",
            "stack": "倒地",
            "data": [
                0,
                0,
                0,
                0,
                0,
                2,
                0
            ],
            "color": "#95A5F9"
        },
        {
            "name": "已处理",
            "type": "bar",
            "stack": "脱帽",
            "data": [
                0,
                0,
                0,
                0,
                0,
                16,
                1
            ],
            "color": "#F8C6BB"
        },
        {
            "name": "脱帽",
            "type": "bar",
            "stack": "脱帽",
            "data": [
                0,
                0,
                0,
                0,
                0,
                16,
                5
            ],
            "color": "#F19247"
        },
        {
            "name": "已处理",
            "type": "bar",
            "stack": "未受控",
            "data": [
                0,
                0,
                0,
                0,
                0,
                4,
                0
            ],
            "color": "#F8C6BB"
        },
        {
            "name": "未受控",
            "type": "bar",
            "stack": "未受控",
            "data": [
                0,
                0,
                0,
                0,
                0,
                4,
                9
            ],
            "color": "#EF7DC1"
        },
        {
            "name": "已处理",
            "type": "bar",
            "stack": "低电量",
            "data": [
                0,
                0,
                0,
                0,
                0,
                1,
                0
            ],
            "color": "#F8C6BB"
        },
        {
            "name": "低电量",
            "type": "bar",
            "stack": "低电量",
            "data": [
                0,
                0,
                0,
                0,
                0,
                1,
                1
            ],
            "color": "#66CEE5"
        }
    ]
};