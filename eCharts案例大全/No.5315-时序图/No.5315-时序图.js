option = {
    "title": {
        "text": "时序图",
        "subtext": "时序图"
    },
    "tooltip": {
        "axisPointer": {
            "type": "cross"
        }
    },
    "freezeTooltip": true,
    "legend": {
        "data": ["公司110", "公司116"]
    },
    "dataZoom": [{
        "xAxisIndex": [0],
        "start": 0,
        "end": 100,
        "realtime": true,
        "show": true
    }],
    "xAxis": [{
        "nameLocation": "center",
        "type": "category",
        "name": "time",
        "nameGap": 25,
        "data": ["2019-04-01 00:05:00.0", "2019-04-01 00:10:00.0", "2019-04-01 00:15:00.0", "2019-04-01 00:20:00.0", "2019-04-01 00:25:00.0", "2019-04-01 00:30:00.0", "2019-04-01 00:35:00.0", "2019-04-01 00:40:00.0", "2019-04-01 00:45:00.0", "2019-04-01 00:50:00.0", "2019-04-01 00:55:00.0", "2019-04-01 01:00:00.0", "2019-04-01 01:05:00.0", "2019-04-01 01:10:00.0", "2019-04-01 01:15:00.0", "2019-04-01 01:20:00.0", "2019-04-01 01:25:00.0", "2019-04-01 01:30:00.0", "2019-04-01 01:35:00.0", "2019-04-01 01:40:00.0", "2019-04-01 01:45:00.0", "2019-04-01 01:50:00.0", "2019-04-01 01:55:00.0", "2019-04-01 02:00:00.0", "2019-04-01 02:05:00.0", "2019-04-01 02:10:00.0", "2019-04-01 02:15:00.0", "2019-04-01 02:20:00.0", "2019-04-01 02:25:00.0", "2019-04-01 02:30:00.0", "2019-04-01 02:35:00.0", "2019-04-01 02:40:00.0", "2019-04-01 02:45:00.0", "2019-04-01 02:50:00.0", "2019-04-01 02:55:00.0", "2019-04-01 03:00:00.0", "2019-04-01 03:05:00.0", "2019-04-01 03:10:00.0", "2019-04-01 03:15:00.0", "2019-04-01 03:20:00.0", "2019-04-01 03:25:00.0", "2019-04-01 03:30:00.0", "2019-04-01 03:35:00.0", "2019-04-01 03:40:00.0", "2019-04-01 03:45:00.0", "2019-04-01 03:50:00.0", "2019-04-01 03:55:00.0", "2019-04-01 04:00:00.0", "2019-04-01 04:05:00.0", "2019-04-01 04:10:00.0", "2019-04-01 04:15:00.0", "2019-04-01 04:20:00.0", "2019-04-01 04:25:00.0", "2019-04-01 04:30:00.0", "2019-04-01 04:35:00.0", "2019-04-01 04:40:00.0", "2019-04-01 04:45:00.0"]
    }],
    "yAxis": [{
        "type": "value"
    }],
    "series": [{
        "name": "公司110",
        "type": "scatter",
        "tooltip": {
            "formatter": "{a} (真实值) <br/>{c}",
            "show": true
        },
        "itemStyle": {
            "color": "#7ACA96"
        },
        "symbol": "circle",
        "symbolSize": 10,
        "data": [
            ["2019-04-01 00:05:00.0", " 6630.676"],
            ["2019-04-01 00:10:00.0", " 6877.133"],
            ["2019-04-01 00:30:00.0", " 7528.891"],
            ["2019-04-01 00:35:00.0", " 6991.147"],
            ["2019-04-01 00:45:00.0", " 6953.505"],
            ["2019-04-01 00:50:00.0", " 6358.404"],
            ["2019-04-01 00:55:00.0", " 5953.230"],
            ["2019-04-01 01:05:00.0", " 5552.405"],
            ["2019-04-01 01:25:00.0", " 6388.378"],
            ["2019-04-01 01:30:00.0", " 6270.277"],
            ["2019-04-01 01:40:00.0", " 7282.743"],
            ["2019-04-01 01:50:00.0", " 6638.701"],
            ["2019-04-01 02:00:00.0", " 7457.304"],
            ["2019-04-01 02:15:00.0", " 7805.951"],
            ["2019-04-01 02:25:00.0", " 8178.608"],
            ["2019-04-01 02:35:00.0", " 7925.693"],
            ["2019-04-01 02:40:00.0", " 8124.978"],
            ["2019-04-01 02:50:00.0", " 7976.587"],
            ["2019-04-01 02:55:00.0", " 7328.865"],
            ["2019-04-01 03:05:00.0", " 7368.911"],
            ["2019-04-01 03:15:00.0", " 7262.398"],
            ["2019-04-01 03:25:00.0", " 7587.206"]
        ]
    }, {
        "name": "公司110",
        "type": "line",
        "tooltip": {
            "formatter": "{a} (拟合值) <br/>{c}",
            "show": true
        },
        "itemStyle": {
            "color": "#7ACA96"
        },
        "showSymbol": false,
        "data": [
            ["2019-04-01 00:05:00.0", null],
            ["2019-04-01 00:10:00.0", null],
            ["2019-04-01 00:30:00.0", " 7529.008"],
            ["2019-04-01 00:35:00.0", " 7196.885"],
            ["2019-04-01 00:45:00.0", " 7571.052"],
            ["2019-04-01 00:50:00.0", " 6678.443"],
            ["2019-04-01 00:55:00.0", " 6655.387"],
            ["2019-04-01 01:05:00.0", " 5486.534"],
            ["2019-04-01 01:25:00.0", " 6180.506"],
            ["2019-04-01 01:30:00.0", " 6603.444"],
            ["2019-04-01 01:40:00.0", " 7477.771"],
            ["2019-04-01 01:50:00.0", " 7000.340"],
            ["2019-04-01 02:00:00.0", " 6494.195"],
            ["2019-04-01 02:15:00.0", " 8222.545"],
            ["2019-04-01 02:25:00.0", " 8018.077"],
            ["2019-04-01 02:35:00.0", " 8042.447"],
            ["2019-04-01 02:40:00.0", " 8053.977"],
            ["2019-04-01 02:50:00.0", " 8036.947"],
            ["2019-04-01 02:55:00.0", " 8123.243"],
            ["2019-04-01 03:05:00.0", " 7119.622"],
            ["2019-04-01 03:15:00.0", " 7672.158"],
            ["2019-04-01 03:25:00.0", " 7459.097"],
            ["2019-04-01 03:35:00.0", " 7873.662"]
        ]
    }, {
        "lineStyle": {
            "type": "dashed"
        },
        "name": "公司110",
        "type": "line",
        "tooltip": {
            "formatter": "{a} (预测值) <br/>{c}",
            "show": true
        },
        "itemStyle": {
            "color": "#7ACA96"
        },
        "symbolSize": 10,
        "showAllSymbol": true,
        "data": [
            ["2019-04-01 03:35:00.0", " 7873.662"],
            ["2019-04-01 03:45:00.0", " 7933.878"],
            ["2019-04-01 03:55:00.0", " 8164.299"],
            ["2019-04-01 04:05:00.0", " 8358.183"],
            ["2019-04-01 04:15:00.0", " 8418.400"],
            ["2019-04-01 04:25:00.0", " 8648.821"],
            ["2019-04-01 04:35:00.0", " 8842.705"],
            ["2019-04-01 04:45:00.0", " 8902.921"]
        ]
    }, {
        "renderItem": function renderItem(params, api) {
            var points = [];
            for (var i = 0; i < params.dataInsideLength; i++) {
                points.push(api.coord([api.value(0, i), api.value(1, i)]));
            }
            var rectShape = {
                points: echarts.graphic.clipPointsByRect(points, {
                    x: params.coordSys.x,
                    y: params.coordSys.y,
                    width: params.coordSys.width,
                    height: params.coordSys.height
                })
            };
            return rectShape && {
                type: 'polygon',
                shape: {
                    points: echarts.graphic.clipPointsByRect(points, {
                        x: params.coordSys.x,
                        y: params.coordSys.y,
                        width: params.coordSys.width,
                        height: params.coordSys.height
                    })
                },
                style: api.style({
                    fill: '#ccc'
                })
            };
        },
        "name": "公司110",
        "type": "custom",
        "data": [
            ["2019-04-01 00:05:00.0", null],
            ["2019-04-01 00:05:00.0", null],
            ["2019-04-01 00:10:00.0", null],
            ["2019-04-01 00:10:00.0", null]
        ]
    }, {
        "renderItem": function renderItem(params, api) {
            var points = [];
            for (var i = 0; i < params.dataInsideLength; i++) {
                points.push(api.coord([api.value(0, i), api.value(1, i)]));
            }
            var rectShape = {
                points: echarts.graphic.clipPointsByRect(points, {
                    x: params.coordSys.x,
                    y: params.coordSys.y,
                    width: params.coordSys.width,
                    height: params.coordSys.height
                })
            };
            return rectShape && {
                type: 'polygon',
                shape: {
                    points: echarts.graphic.clipPointsByRect(points, {
                        x: params.coordSys.x,
                        y: params.coordSys.y,
                        width: params.coordSys.width,
                        height: params.coordSys.height
                    })
                },
                style: api.style({
                    fill: '#ccc'
                })
            };
        },
        "name": "公司110",
        "type": "custom",
        "data": [
            ["2019-04-01 00:10:00.0", null],
            ["2019-04-01 00:10:00.0", null],
            ["2019-04-01 00:30:00.0", " 8671.877"],
            ["2019-04-01 00:30:00.0", " 6386.139"]
        ]
    }, {
        "renderItem": function renderItem(params, api) {
            var points = [];
            for (var i = 0; i < params.dataInsideLength; i++) {
                points.push(api.coord([api.value(0, i), api.value(1, i)]));
            }
            var rectShape = {
                points: echarts.graphic.clipPointsByRect(points, {
                    x: params.coordSys.x,
                    y: params.coordSys.y,
                    width: params.coordSys.width,
                    height: params.coordSys.height
                })
            };
            return rectShape && {
                type: 'polygon',
                shape: {
                    points: echarts.graphic.clipPointsByRect(points, {
                        x: params.coordSys.x,
                        y: params.coordSys.y,
                        width: params.coordSys.width,
                        height: params.coordSys.height
                    })
                },
                style: api.style({
                    fill: '#ccc'
                })
            };
        },
        "name": "公司110",
        "type": "custom",
        "data": [
            ["2019-04-01 00:30:00.0", " 6386.139"],
            ["2019-04-01 00:30:00.0", " 8671.877"],
            ["2019-04-01 00:35:00.0", " 8339.754"],
            ["2019-04-01 00:35:00.0", " 6054.016"]
        ]
    }, {
        "renderItem": function renderItem(params, api) {
            var points = [];
            for (var i = 0; i < params.dataInsideLength; i++) {
                points.push(api.coord([api.value(0, i), api.value(1, i)]));
            }
            var rectShape = {
                points: echarts.graphic.clipPointsByRect(points, {
                    x: params.coordSys.x,
                    y: params.coordSys.y,
                    width: params.coordSys.width,
                    height: params.coordSys.height
                })
            };
            return rectShape && {
                type: 'polygon',
                shape: {
                    points: echarts.graphic.clipPointsByRect(points, {
                        x: params.coordSys.x,
                        y: params.coordSys.y,
                        width: params.coordSys.width,
                        height: params.coordSys.height
                    })
                },
                style: api.style({
                    fill: '#ccc'
                })
            };
        },
        "name": "公司110",
        "type": "custom",
        "data": [
            ["2019-04-01 00:35:00.0", " 6054.016"],
            ["2019-04-01 00:35:00.0", " 8339.754"],
            ["2019-04-01 00:45:00.0", " 8713.921"],
            ["2019-04-01 00:45:00.0", " 6428.183"]
        ]
    }, {
        "renderItem": function renderItem(params, api) {
            var points = [];
            for (var i = 0; i < params.dataInsideLength; i++) {
                points.push(api.coord([api.value(0, i), api.value(1, i)]));
            }
            var rectShape = {
                points: echarts.graphic.clipPointsByRect(points, {
                    x: params.coordSys.x,
                    y: params.coordSys.y,
                    width: params.coordSys.width,
                    height: params.coordSys.height
                })
            };
            return rectShape && {
                type: 'polygon',
                shape: {
                    points: echarts.graphic.clipPointsByRect(points, {
                        x: params.coordSys.x,
                        y: params.coordSys.y,
                        width: params.coordSys.width,
                        height: params.coordSys.height
                    })
                },
                style: api.style({
                    fill: '#ccc'
                })
            };
        },
        "name": "公司110",
        "type": "custom",
        "data": [
            ["2019-04-01 00:45:00.0", " 6428.183"],
            ["2019-04-01 00:45:00.0", " 8713.921"],
            ["2019-04-01 00:50:00.0", " 7821.312"],
            ["2019-04-01 00:50:00.0", " 5535.574"]
        ]
    }, {
        "renderItem": function renderItem(params, api) {
            var points = [];
            for (var i = 0; i < params.dataInsideLength; i++) {
                points.push(api.coord([api.value(0, i), api.value(1, i)]));
            }
            var rectShape = {
                points: echarts.graphic.clipPointsByRect(points, {
                    x: params.coordSys.x,
                    y: params.coordSys.y,
                    width: params.coordSys.width,
                    height: params.coordSys.height
                })
            };
            return rectShape && {
                type: 'polygon',
                shape: {
                    points: echarts.graphic.clipPointsByRect(points, {
                        x: params.coordSys.x,
                        y: params.coordSys.y,
                        width: params.coordSys.width,
                        height: params.coordSys.height
                    })
                },
                style: api.style({
                    fill: '#ccc'
                })
            };
        },
        "name": "公司110",
        "type": "custom",
        "data": [
            ["2019-04-01 00:50:00.0", " 5535.574"],
            ["2019-04-01 00:50:00.0", " 7821.312"],
            ["2019-04-01 00:55:00.0", " 7798.256"],
            ["2019-04-01 00:55:00.0", " 5512.518"]
        ]
    }, {
        "renderItem": function renderItem(params, api) {
            var points = [];
            for (var i = 0; i < params.dataInsideLength; i++) {
                points.push(api.coord([api.value(0, i), api.value(1, i)]));
            }
            var rectShape = {
                points: echarts.graphic.clipPointsByRect(points, {
                    x: params.coordSys.x,
                    y: params.coordSys.y,
                    width: params.coordSys.width,
                    height: params.coordSys.height
                })
            };
            return rectShape && {
                type: 'polygon',
                shape: {
                    points: echarts.graphic.clipPointsByRect(points, {
                        x: params.coordSys.x,
                        y: params.coordSys.y,
                        width: params.coordSys.width,
                        height: params.coordSys.height
                    })
                },
                style: api.style({
                    fill: '#ccc'
                })
            };
        },
        "name": "公司110",
        "type": "custom",
        "data": [
            ["2019-04-01 00:55:00.0", " 5512.518"],
            ["2019-04-01 00:55:00.0", " 7798.256"],
            ["2019-04-01 01:05:00.0", " 6629.403"],
            ["2019-04-01 01:05:00.0", " 4343.665"]
        ]
    }, {
        "renderItem": function renderItem(params, api) {
            var points = [];
            for (var i = 0; i < params.dataInsideLength; i++) {
                points.push(api.coord([api.value(0, i), api.value(1, i)]));
            }
            var rectShape = {
                points: echarts.graphic.clipPointsByRect(points, {
                    x: params.coordSys.x,
                    y: params.coordSys.y,
                    width: params.coordSys.width,
                    height: params.coordSys.height
                })
            };
            return rectShape && {
                type: 'polygon',
                shape: {
                    points: echarts.graphic.clipPointsByRect(points, {
                        x: params.coordSys.x,
                        y: params.coordSys.y,
                        width: params.coordSys.width,
                        height: params.coordSys.height
                    })
                },
                style: api.style({
                    fill: '#ccc'
                })
            };
        },
        "name": "公司110",
        "type": "custom",
        "data": [
            ["2019-04-01 01:05:00.0", " 4343.665"],
            ["2019-04-01 01:05:00.0", " 6629.403"],
            ["2019-04-01 01:25:00.0", " 7323.375"],
            ["2019-04-01 01:25:00.0", " 5037.636"]
        ]
    }, {
        "renderItem": function renderItem(params, api) {
            var points = [];
            for (var i = 0; i < params.dataInsideLength; i++) {
                points.push(api.coord([api.value(0, i), api.value(1, i)]));
            }
            var rectShape = {
                points: echarts.graphic.clipPointsByRect(points, {
                    x: params.coordSys.x,
                    y: params.coordSys.y,
                    width: params.coordSys.width,
                    height: params.coordSys.height
                })
            };
            return rectShape && {
                type: 'polygon',
                shape: {
                    points: echarts.graphic.clipPointsByRect(points, {
                        x: params.coordSys.x,
                        y: params.coordSys.y,
                        width: params.coordSys.width,
                        height: params.coordSys.height
                    })
                },
                style: api.style({
                    fill: '#ccc'
                })
            };
        },
        "name": "公司110",
        "type": "custom",
        "data": [
            ["2019-04-01 01:25:00.0", " 5037.636"],
            ["2019-04-01 01:25:00.0", " 7323.375"],
            ["2019-04-01 01:30:00.0", " 7746.314"],
            ["2019-04-01 01:30:00.0", " 5460.575"]
        ]
    }, {
        "renderItem": function renderItem(params, api) {
            var points = [];
            for (var i = 0; i < params.dataInsideLength; i++) {
                points.push(api.coord([api.value(0, i), api.value(1, i)]));
            }
            var rectShape = {
                points: echarts.graphic.clipPointsByRect(points, {
                    x: params.coordSys.x,
                    y: params.coordSys.y,
                    width: params.coordSys.width,
                    height: params.coordSys.height
                })
            };
            return rectShape && {
                type: 'polygon',
                shape: {
                    points: echarts.graphic.clipPointsByRect(points, {
                        x: params.coordSys.x,
                        y: params.coordSys.y,
                        width: params.coordSys.width,
                        height: params.coordSys.height
                    })
                },
                style: api.style({
                    fill: '#ccc'
                })
            };
        },
        "name": "公司110",
        "type": "custom",
        "data": [
            ["2019-04-01 01:30:00.0", " 5460.575"],
            ["2019-04-01 01:30:00.0", " 7746.314"],
            ["2019-04-01 01:40:00.0", " 8620.640"],
            ["2019-04-01 01:40:00.0", " 6334.902"]
        ]
    }, {
        "renderItem": function renderItem(params, api) {
            var points = [];
            for (var i = 0; i < params.dataInsideLength; i++) {
                points.push(api.coord([api.value(0, i), api.value(1, i)]));
            }
            var rectShape = {
                points: echarts.graphic.clipPointsByRect(points, {
                    x: params.coordSys.x,
                    y: params.coordSys.y,
                    width: params.coordSys.width,
                    height: params.coordSys.height
                })
            };
            return rectShape && {
                type: 'polygon',
                shape: {
                    points: echarts.graphic.clipPointsByRect(points, {
                        x: params.coordSys.x,
                        y: params.coordSys.y,
                        width: params.coordSys.width,
                        height: params.coordSys.height
                    })
                },
                style: api.style({
                    fill: '#ccc'
                })
            };
        },
        "name": "公司110",
        "type": "custom",
        "data": [
            ["2019-04-01 01:40:00.0", " 6334.902"],
            ["2019-04-01 01:40:00.0", " 8620.640"],
            ["2019-04-01 01:50:00.0", " 8143.209"],
            ["2019-04-01 01:50:00.0", " 5857.471"]
        ]
    }, {
        "renderItem": function renderItem(params, api) {
            var points = [];
            for (var i = 0; i < params.dataInsideLength; i++) {
                points.push(api.coord([api.value(0, i), api.value(1, i)]));
            }
            var rectShape = {
                points: echarts.graphic.clipPointsByRect(points, {
                    x: params.coordSys.x,
                    y: params.coordSys.y,
                    width: params.coordSys.width,
                    height: params.coordSys.height
                })
            };
            return rectShape && {
                type: 'polygon',
                shape: {
                    points: echarts.graphic.clipPointsByRect(points, {
                        x: params.coordSys.x,
                        y: params.coordSys.y,
                        width: params.coordSys.width,
                        height: params.coordSys.height
                    })
                },
                style: api.style({
                    fill: '#ccc'
                })
            };
        },
        "name": "公司110",
        "type": "custom",
        "data": [
            ["2019-04-01 01:50:00.0", " 5857.471"],
            ["2019-04-01 01:50:00.0", " 8143.209"],
            ["2019-04-01 02:00:00.0", " 7637.064"],
            ["2019-04-01 02:00:00.0", " 5351.326"]
        ]
    }, {
        "renderItem": function renderItem(params, api) {
            var points = [];
            for (var i = 0; i < params.dataInsideLength; i++) {
                points.push(api.coord([api.value(0, i), api.value(1, i)]));
            }
            var rectShape = {
                points: echarts.graphic.clipPointsByRect(points, {
                    x: params.coordSys.x,
                    y: params.coordSys.y,
                    width: params.coordSys.width,
                    height: params.coordSys.height
                })
            };
            return rectShape && {
                type: 'polygon',
                shape: {
                    points: echarts.graphic.clipPointsByRect(points, {
                        x: params.coordSys.x,
                        y: params.coordSys.y,
                        width: params.coordSys.width,
                        height: params.coordSys.height
                    })
                },
                style: api.style({
                    fill: '#ccc'
                })
            };
        },
        "name": "公司110",
        "type": "custom",
        "data": [
            ["2019-04-01 02:00:00.0", " 5351.326"],
            ["2019-04-01 02:00:00.0", " 7637.064"],
            ["2019-04-01 02:15:00.0", " 9365.414"],
            ["2019-04-01 02:15:00.0", " 7079.676"]
        ]
    }, {
        "renderItem": function renderItem(params, api) {
            var points = [];
            for (var i = 0; i < params.dataInsideLength; i++) {
                points.push(api.coord([api.value(0, i), api.value(1, i)]));
            }
            var rectShape = {
                points: echarts.graphic.clipPointsByRect(points, {
                    x: params.coordSys.x,
                    y: params.coordSys.y,
                    width: params.coordSys.width,
                    height: params.coordSys.height
                })
            };
            return rectShape && {
                type: 'polygon',
                shape: {
                    points: echarts.graphic.clipPointsByRect(points, {
                        x: params.coordSys.x,
                        y: params.coordSys.y,
                        width: params.coordSys.width,
                        height: params.coordSys.height
                    })
                },
                style: api.style({
                    fill: '#ccc'
                })
            };
        },
        "name": "公司110",
        "type": "custom",
        "data": [
            ["2019-04-01 02:15:00.0", " 7079.676"],
            ["2019-04-01 02:15:00.0", " 9365.414"],
            ["2019-04-01 02:25:00.0", " 9160.946"],
            ["2019-04-01 02:25:00.0", " 6875.208"]
        ]
    }, {
        "renderItem": function renderItem(params, api) {
            var points = [];
            for (var i = 0; i < params.dataInsideLength; i++) {
                points.push(api.coord([api.value(0, i), api.value(1, i)]));
            }
            var rectShape = {
                points: echarts.graphic.clipPointsByRect(points, {
                    x: params.coordSys.x,
                    y: params.coordSys.y,
                    width: params.coordSys.width,
                    height: params.coordSys.height
                })
            };
            return rectShape && {
                type: 'polygon',
                shape: {
                    points: echarts.graphic.clipPointsByRect(points, {
                        x: params.coordSys.x,
                        y: params.coordSys.y,
                        width: params.coordSys.width,
                        height: params.coordSys.height
                    })
                },
                style: api.style({
                    fill: '#ccc'
                })
            };
        },
        "name": "公司110",
        "type": "custom",
        "data": [
            ["2019-04-01 02:25:00.0", " 6875.208"],
            ["2019-04-01 02:25:00.0", " 9160.946"],
            ["2019-04-01 02:35:00.0", " 9185.316"],
            ["2019-04-01 02:35:00.0", " 6899.578"]
        ]
    }, {
        "renderItem": function renderItem(params, api) {
            var points = [];
            for (var i = 0; i < params.dataInsideLength; i++) {
                points.push(api.coord([api.value(0, i), api.value(1, i)]));
            }
            var rectShape = {
                points: echarts.graphic.clipPointsByRect(points, {
                    x: params.coordSys.x,
                    y: params.coordSys.y,
                    width: params.coordSys.width,
                    height: params.coordSys.height
                })
            };
            return rectShape && {
                type: 'polygon',
                shape: {
                    points: echarts.graphic.clipPointsByRect(points, {
                        x: params.coordSys.x,
                        y: params.coordSys.y,
                        width: params.coordSys.width,
                        height: params.coordSys.height
                    })
                },
                style: api.style({
                    fill: '#ccc'
                })
            };
        },
        "name": "公司110",
        "type": "custom",
        "data": [
            ["2019-04-01 02:35:00.0", " 6899.578"],
            ["2019-04-01 02:35:00.0", " 9185.316"],
            ["2019-04-01 02:40:00.0", " 9196.847"],
            ["2019-04-01 02:40:00.0", " 6911.108"]
        ]
    }, {
        "renderItem": function renderItem(params, api) {
            var points = [];
            for (var i = 0; i < params.dataInsideLength; i++) {
                points.push(api.coord([api.value(0, i), api.value(1, i)]));
            }
            var rectShape = {
                points: echarts.graphic.clipPointsByRect(points, {
                    x: params.coordSys.x,
                    y: params.coordSys.y,
                    width: params.coordSys.width,
                    height: params.coordSys.height
                })
            };
            return rectShape && {
                type: 'polygon',
                shape: {
                    points: echarts.graphic.clipPointsByRect(points, {
                        x: params.coordSys.x,
                        y: params.coordSys.y,
                        width: params.coordSys.width,
                        height: params.coordSys.height
                    })
                },
                style: api.style({
                    fill: '#ccc'
                })
            };
        },
        "name": "公司110",
        "type": "custom",
        "data": [
            ["2019-04-01 02:40:00.0", " 6911.108"],
            ["2019-04-01 02:40:00.0", " 9196.847"],
            ["2019-04-01 02:50:00.0", " 9179.816"],
            ["2019-04-01 02:50:00.0", " 6894.078"]
        ]
    }, {
        "renderItem": function renderItem(params, api) {
            var points = [];
            for (var i = 0; i < params.dataInsideLength; i++) {
                points.push(api.coord([api.value(0, i), api.value(1, i)]));
            }
            var rectShape = {
                points: echarts.graphic.clipPointsByRect(points, {
                    x: params.coordSys.x,
                    y: params.coordSys.y,
                    width: params.coordSys.width,
                    height: params.coordSys.height
                })
            };
            return rectShape && {
                type: 'polygon',
                shape: {
                    points: echarts.graphic.clipPointsByRect(points, {
                        x: params.coordSys.x,
                        y: params.coordSys.y,
                        width: params.coordSys.width,
                        height: params.coordSys.height
                    })
                },
                style: api.style({
                    fill: '#ccc'
                })
            };
        },
        "name": "公司110",
        "type": "custom",
        "data": [
            ["2019-04-01 02:50:00.0", " 6894.078"],
            ["2019-04-01 02:50:00.0", " 9179.816"],
            ["2019-04-01 02:55:00.0", " 9266.112"],
            ["2019-04-01 02:55:00.0", " 6980.374"]
        ]
    }, {
        "renderItem": function renderItem(params, api) {
            var points = [];
            for (var i = 0; i < params.dataInsideLength; i++) {
                points.push(api.coord([api.value(0, i), api.value(1, i)]));
            }
            var rectShape = {
                points: echarts.graphic.clipPointsByRect(points, {
                    x: params.coordSys.x,
                    y: params.coordSys.y,
                    width: params.coordSys.width,
                    height: params.coordSys.height
                })
            };
            return rectShape && {
                type: 'polygon',
                shape: {
                    points: echarts.graphic.clipPointsByRect(points, {
                        x: params.coordSys.x,
                        y: params.coordSys.y,
                        width: params.coordSys.width,
                        height: params.coordSys.height
                    })
                },
                style: api.style({
                    fill: '#ccc'
                })
            };
        },
        "name": "公司110",
        "type": "custom",
        "data": [
            ["2019-04-01 02:55:00.0", " 6980.374"],
            ["2019-04-01 02:55:00.0", " 9266.112"],
            ["2019-04-01 03:05:00.0", " 8262.491"],
            ["2019-04-01 03:05:00.0", " 5976.753"]
        ]
    }, {
        "renderItem": function renderItem(params, api) {
            var points = [];
            for (var i = 0; i < params.dataInsideLength; i++) {
                points.push(api.coord([api.value(0, i), api.value(1, i)]));
            }
            var rectShape = {
                points: echarts.graphic.clipPointsByRect(points, {
                    x: params.coordSys.x,
                    y: params.coordSys.y,
                    width: params.coordSys.width,
                    height: params.coordSys.height
                })
            };
            return rectShape && {
                type: 'polygon',
                shape: {
                    points: echarts.graphic.clipPointsByRect(points, {
                        x: params.coordSys.x,
                        y: params.coordSys.y,
                        width: params.coordSys.width,
                        height: params.coordSys.height
                    })
                },
                style: api.style({
                    fill: '#ccc'
                })
            };
        },
        "name": "公司110",
        "type": "custom",
        "data": [
            ["2019-04-01 03:05:00.0", " 5976.753"],
            ["2019-04-01 03:05:00.0", " 8262.491"],
            ["2019-04-01 03:15:00.0", " 8815.027"],
            ["2019-04-01 03:15:00.0", " 6529.289"]
        ]
    }, {
        "renderItem": function renderItem(params, api) {
            var points = [];
            for (var i = 0; i < params.dataInsideLength; i++) {
                points.push(api.coord([api.value(0, i), api.value(1, i)]));
            }
            var rectShape = {
                points: echarts.graphic.clipPointsByRect(points, {
                    x: params.coordSys.x,
                    y: params.coordSys.y,
                    width: params.coordSys.width,
                    height: params.coordSys.height
                })
            };
            return rectShape && {
                type: 'polygon',
                shape: {
                    points: echarts.graphic.clipPointsByRect(points, {
                        x: params.coordSys.x,
                        y: params.coordSys.y,
                        width: params.coordSys.width,
                        height: params.coordSys.height
                    })
                },
                style: api.style({
                    fill: '#ccc'
                })
            };
        },
        "name": "公司110",
        "type": "custom",
        "data": [
            ["2019-04-01 03:15:00.0", " 6529.289"],
            ["2019-04-01 03:15:00.0", " 8815.027"],
            ["2019-04-01 03:25:00.0", " 8601.966"],
            ["2019-04-01 03:25:00.0", " 6316.228"]
        ]
    }, {
        "renderItem": function renderItem(params, api) {
            var points = [];
            for (var i = 0; i < params.dataInsideLength; i++) {
                points.push(api.coord([api.value(0, i), api.value(1, i)]));
            }
            var rectShape = {
                points: echarts.graphic.clipPointsByRect(points, {
                    x: params.coordSys.x,
                    y: params.coordSys.y,
                    width: params.coordSys.width,
                    height: params.coordSys.height
                })
            };
            return rectShape && {
                type: 'polygon',
                shape: {
                    points: echarts.graphic.clipPointsByRect(points, {
                        x: params.coordSys.x,
                        y: params.coordSys.y,
                        width: params.coordSys.width,
                        height: params.coordSys.height
                    })
                },
                style: api.style({
                    fill: '#ccc'
                })
            };
        },
        "name": "公司110",
        "type": "custom",
        "data": [
            ["2019-04-01 03:25:00.0", " 6316.228"],
            ["2019-04-01 03:25:00.0", " 8601.966"],
            ["2019-04-01 03:35:00.0", " 9016.531"],
            ["2019-04-01 03:35:00.0", " 6730.793"]
        ]
    }, {
        "renderItem": function renderItem(params, api) {
            var points = [];
            for (var i = 0; i < params.dataInsideLength; i++) {
                points.push(api.coord([api.value(0, i), api.value(1, i)]));
            }
            var rectShape = {
                points: echarts.graphic.clipPointsByRect(points, {
                    x: params.coordSys.x,
                    y: params.coordSys.y,
                    width: params.coordSys.width,
                    height: params.coordSys.height
                })
            };
            return rectShape && {
                type: 'polygon',
                shape: {
                    points: echarts.graphic.clipPointsByRect(points, {
                        x: params.coordSys.x,
                        y: params.coordSys.y,
                        width: params.coordSys.width,
                        height: params.coordSys.height
                    })
                },
                style: api.style({
                    fill: '#ccc'
                })
            };
        },
        "name": "公司110",
        "type": "custom",
        "data": [
            ["2019-04-01 03:35:00.0", " 6730.793"],
            ["2019-04-01 03:35:00.0", " 9016.531"],
            ["2019-04-01 03:45:00.0", " 9725.048"],
            ["2019-04-01 03:45:00.0", " 6142.708"]
        ]
    }, {
        "renderItem": function renderItem(params, api) {
            var points = [];
            for (var i = 0; i < params.dataInsideLength; i++) {
                points.push(api.coord([api.value(0, i), api.value(1, i)]));
            }
            var rectShape = {
                points: echarts.graphic.clipPointsByRect(points, {
                    x: params.coordSys.x,
                    y: params.coordSys.y,
                    width: params.coordSys.width,
                    height: params.coordSys.height
                })
            };
            return rectShape && {
                type: 'polygon',
                shape: {
                    points: echarts.graphic.clipPointsByRect(points, {
                        x: params.coordSys.x,
                        y: params.coordSys.y,
                        width: params.coordSys.width,
                        height: params.coordSys.height
                    })
                },
                style: api.style({
                    fill: '#ccc'
                })
            };
        },
        "name": "公司110",
        "type": "custom",
        "data": [
            ["2019-04-01 03:45:00.0", " 6142.708"],
            ["2019-04-01 03:45:00.0", " 9725.048"],
            ["2019-04-01 03:55:00.0", " 10502.142"],
            ["2019-04-01 03:55:00.0", " 5826.456"]
        ]
    }, {
        "renderItem": function renderItem(params, api) {
            var points = [];
            for (var i = 0; i < params.dataInsideLength; i++) {
                points.push(api.coord([api.value(0, i), api.value(1, i)]));
            }
            var rectShape = {
                points: echarts.graphic.clipPointsByRect(points, {
                    x: params.coordSys.x,
                    y: params.coordSys.y,
                    width: params.coordSys.width,
                    height: params.coordSys.height
                })
            };
            return rectShape && {
                type: 'polygon',
                shape: {
                    points: echarts.graphic.clipPointsByRect(points, {
                        x: params.coordSys.x,
                        y: params.coordSys.y,
                        width: params.coordSys.width,
                        height: params.coordSys.height
                    })
                },
                style: api.style({
                    fill: '#ccc'
                })
            };
        },
        "name": "公司110",
        "type": "custom",
        "data": [
            ["2019-04-01 03:55:00.0", " 5826.456"],
            ["2019-04-01 03:55:00.0", " 10502.142"],
            ["2019-04-01 04:05:00.0", " 11137.163"],
            ["2019-04-01 04:05:00.0", " 5579.203"]
        ]
    }, {
        "renderItem": function renderItem(params, api) {
            var points = [];
            for (var i = 0; i < params.dataInsideLength; i++) {
                points.push(api.coord([api.value(0, i), api.value(1, i)]));
            }
            var rectShape = {
                points: echarts.graphic.clipPointsByRect(points, {
                    x: params.coordSys.x,
                    y: params.coordSys.y,
                    width: params.coordSys.width,
                    height: params.coordSys.height
                })
            };
            return rectShape && {
                type: 'polygon',
                shape: {
                    points: echarts.graphic.clipPointsByRect(points, {
                        x: params.coordSys.x,
                        y: params.coordSys.y,
                        width: params.coordSys.width,
                        height: params.coordSys.height
                    })
                },
                style: api.style({
                    fill: '#ccc'
                })
            };
        },
        "name": "公司110",
        "type": "custom",
        "data": [
            ["2019-04-01 04:05:00.0", " 5579.203"],
            ["2019-04-01 04:05:00.0", " 11137.163"],
            ["2019-04-01 04:15:00.0", " 11520.797"],
            ["2019-04-01 04:15:00.0", " 5316.002"]
        ]
    }, {
        "renderItem": function renderItem(params, api) {
            var points = [];
            for (var i = 0; i < params.dataInsideLength; i++) {
                points.push(api.coord([api.value(0, i), api.value(1, i)]));
            }
            var rectShape = {
                points: echarts.graphic.clipPointsByRect(points, {
                    x: params.coordSys.x,
                    y: params.coordSys.y,
                    width: params.coordSys.width,
                    height: params.coordSys.height
                })
            };
            return rectShape && {
                type: 'polygon',
                shape: {
                    points: echarts.graphic.clipPointsByRect(points, {
                        x: params.coordSys.x,
                        y: params.coordSys.y,
                        width: params.coordSys.width,
                        height: params.coordSys.height
                    })
                },
                style: api.style({
                    fill: '#ccc'
                })
            };
        },
        "name": "公司110",
        "type": "custom",
        "data": [
            ["2019-04-01 04:15:00.0", " 5316.002"],
            ["2019-04-01 04:15:00.0", " 11520.797"],
            ["2019-04-01 04:25:00.0", " 12095.861"],
            ["2019-04-01 04:25:00.0", " 5201.780"]
        ]
    }, {
        "renderItem": function renderItem(params, api) {
            var points = [];
            for (var i = 0; i < params.dataInsideLength; i++) {
                points.push(api.coord([api.value(0, i), api.value(1, i)]));
            }
            var rectShape = {
                points: echarts.graphic.clipPointsByRect(points, {
                    x: params.coordSys.x,
                    y: params.coordSys.y,
                    width: params.coordSys.width,
                    height: params.coordSys.height
                })
            };
            return rectShape && {
                type: 'polygon',
                shape: {
                    points: echarts.graphic.clipPointsByRect(points, {
                        x: params.coordSys.x,
                        y: params.coordSys.y,
                        width: params.coordSys.width,
                        height: params.coordSys.height
                    })
                },
                style: api.style({
                    fill: '#ccc'
                })
            };
        },
        "name": "公司110",
        "type": "custom",
        "data": [
            ["2019-04-01 04:25:00.0", " 5201.780"],
            ["2019-04-01 04:25:00.0", " 12095.861"],
            ["2019-04-01 04:35:00.0", " 12602.932"],
            ["2019-04-01 04:35:00.0", " 5082.478"]
        ]
    }, {
        "renderItem": function renderItem(params, api) {
            var points = [];
            for (var i = 0; i < params.dataInsideLength; i++) {
                points.push(api.coord([api.value(0, i), api.value(1, i)]));
            }
            var rectShape = {
                points: echarts.graphic.clipPointsByRect(points, {
                    x: params.coordSys.x,
                    y: params.coordSys.y,
                    width: params.coordSys.width,
                    height: params.coordSys.height
                })
            };
            return rectShape && {
                type: 'polygon',
                shape: {
                    points: echarts.graphic.clipPointsByRect(points, {
                        x: params.coordSys.x,
                        y: params.coordSys.y,
                        width: params.coordSys.width,
                        height: params.coordSys.height
                    })
                },
                style: api.style({
                    fill: '#ccc'
                })
            };
        },
        "name": "公司110",
        "type": "custom",
        "data": [
            ["2019-04-01 04:35:00.0", " 5082.478"],
            ["2019-04-01 04:35:00.0", " 12602.932"],
            ["2019-04-01 04:45:00.0", " 12908.099"],
            ["2019-04-01 04:45:00.0", " 4897.743"]
        ]
    }, {
        "renderItem": function renderItem(params, api) {
            var points = [];
            for (var i = 0; i < params.dataInsideLength; i++) {
                points.push(api.coord([api.value(0, i), api.value(1, i)]));
            }
            var rectShape = {
                points: echarts.graphic.clipPointsByRect(points, {
                    x: params.coordSys.x,
                    y: params.coordSys.y,
                    width: params.coordSys.width,
                    height: params.coordSys.height
                })
            };
            return rectShape && {
                type: 'polygon',
                shape: {
                    points: echarts.graphic.clipPointsByRect(points, {
                        x: params.coordSys.x,
                        y: params.coordSys.y,
                        width: params.coordSys.width,
                        height: params.coordSys.height
                    })
                },
                style: api.style({
                    fill: '#ccc'
                })
            };
        },
        "name": "公司110",
        "type": "custom",
        "data": [
            ["2019-04-01 04:45:00.0", " 4897.743"],
            ["2019-04-01 04:45:00.0", " 12908.099"]
        ]
    }, {
        "lineStyle": {
            "type": "dashed"
        },
        "name": "公司110",
        "type": "line",
        "tooltip": {
            "formatter": "{a} (预测值下限) <br/>{c}",
            "show": true
        },
        "itemStyle": {
            "color": "#7ACA96"
        },
        "symbolSize": 5,
        "showAllSymbol": true,
        "data": [
            ["2019-04-01 00:05:00.0", null],
            ["2019-04-01 00:10:00.0", null],
            ["2019-04-01 00:30:00.0", " 6386.139"],
            ["2019-04-01 00:35:00.0", " 6054.016"],
            ["2019-04-01 00:45:00.0", " 6428.183"],
            ["2019-04-01 00:50:00.0", " 5535.574"],
            ["2019-04-01 00:55:00.0", " 5512.518"],
            ["2019-04-01 01:05:00.0", " 4343.665"],
            ["2019-04-01 01:25:00.0", " 5037.636"],
            ["2019-04-01 01:30:00.0", " 5460.575"],
            ["2019-04-01 01:40:00.0", " 6334.902"],
            ["2019-04-01 01:50:00.0", " 5857.471"],
            ["2019-04-01 02:00:00.0", " 5351.326"],
            ["2019-04-01 02:15:00.0", " 7079.676"],
            ["2019-04-01 02:25:00.0", " 6875.208"],
            ["2019-04-01 02:35:00.0", " 6899.578"],
            ["2019-04-01 02:40:00.0", " 6911.108"],
            ["2019-04-01 02:50:00.0", " 6894.078"],
            ["2019-04-01 02:55:00.0", " 6980.374"],
            ["2019-04-01 03:05:00.0", " 5976.753"],
            ["2019-04-01 03:15:00.0", " 6529.289"],
            ["2019-04-01 03:25:00.0", " 6316.228"],
            ["2019-04-01 03:35:00.0", " 6730.793"],
            ["2019-04-01 03:45:00.0", " 6142.708"],
            ["2019-04-01 03:55:00.0", " 5826.456"],
            ["2019-04-01 04:05:00.0", " 5579.203"],
            ["2019-04-01 04:15:00.0", " 5316.002"],
            ["2019-04-01 04:25:00.0", " 5201.780"],
            ["2019-04-01 04:35:00.0", " 5082.478"],
            ["2019-04-01 04:45:00.0", " 4897.743"]
        ]
    }, {
        "lineStyle": {
            "type": "dashed"
        },
        "name": "公司110",
        "type": "line",
        "tooltip": {
            "formatter": "{a} (预测值上限) <br/>{c}",
            "show": true
        },
        "itemStyle": {
            "color": "#7ACA96"
        },
        "symbolSize": 5,
        "showAllSymbol": true,
        "data": [
            ["2019-04-01 00:05:00.0", null],
            ["2019-04-01 00:10:00.0", null],
            ["2019-04-01 00:30:00.0", " 8671.877"],
            ["2019-04-01 00:35:00.0", " 8339.754"],
            ["2019-04-01 00:45:00.0", " 8713.921"],
            ["2019-04-01 00:50:00.0", " 7821.312"],
            ["2019-04-01 00:55:00.0", " 7798.256"],
            ["2019-04-01 01:05:00.0", " 6629.403"],
            ["2019-04-01 01:25:00.0", " 7323.375"],
            ["2019-04-01 01:30:00.0", " 7746.314"],
            ["2019-04-01 01:40:00.0", " 8620.640"],
            ["2019-04-01 01:50:00.0", " 8143.209"],
            ["2019-04-01 02:00:00.0", " 7637.064"],
            ["2019-04-01 02:15:00.0", " 9365.414"],
            ["2019-04-01 02:25:00.0", " 9160.946"],
            ["2019-04-01 02:35:00.0", " 9185.316"],
            ["2019-04-01 02:40:00.0", " 9196.847"],
            ["2019-04-01 02:50:00.0", " 9179.816"],
            ["2019-04-01 02:55:00.0", " 9266.112"],
            ["2019-04-01 03:05:00.0", " 8262.491"],
            ["2019-04-01 03:15:00.0", " 8815.027"],
            ["2019-04-01 03:25:00.0", " 8601.966"],
            ["2019-04-01 03:35:00.0", " 9016.531"],
            ["2019-04-01 03:45:00.0", " 9725.048"],
            ["2019-04-01 03:55:00.0", " 10502.142"],
            ["2019-04-01 04:05:00.0", " 11137.163"],
            ["2019-04-01 04:15:00.0", " 11520.797"],
            ["2019-04-01 04:25:00.0", " 12095.861"],
            ["2019-04-01 04:35:00.0", " 12602.932"],
            ["2019-04-01 04:45:00.0", " 12908.099"]
        ]
    }, {
        "name": "公司116",
        "type": "scatter",
        "tooltip": {
            "formatter": "{a} (真实值) <br/>{c}",
            "show": true
        },
        "itemStyle": {
            "color": "#DB98B1"
        },
        "symbol": "circle",
        "symbolSize": 10,
        "data": [
            ["2019-04-01 00:15:00.0", " 7254.368"],
            ["2019-04-01 00:20:00.0", " 6896.465"],
            ["2019-04-01 00:25:00.0", " 7155.374"],
            ["2019-04-01 00:40:00.0", " 7188.819"],
            ["2019-04-01 01:00:00.0", " 5724.407"],
            ["2019-04-01 01:10:00.0", " 6080.208"],
            ["2019-04-01 01:15:00.0", " 6323.188"],
            ["2019-04-01 01:20:00.0", " 5923.899"],
            ["2019-04-01 01:35:00.0", " 7378.518"],
            ["2019-04-01 01:45:00.0", " 6928.570"],
            ["2019-04-01 01:55:00.0", " 6318.037"],
            ["2019-04-01 02:05:00.0", " 7444.258"],
            ["2019-04-01 02:10:00.0", " 7970.131"],
            ["2019-04-01 02:20:00.0", " 7929.341"],
            ["2019-04-01 02:30:00.0", " 8013.229"],
            ["2019-04-01 02:45:00.0", " 7990.608"],
            ["2019-04-01 03:00:00.0", " 7014.336"],
            ["2019-04-01 03:10:00.0", " 7596.602"],
            ["2019-04-01 03:20:00.0", " 7430.435"],
            ["2019-04-01 03:30:00.0", " 7691.617"]
        ]
    }, {
        "name": "公司116",
        "type": "line",
        "tooltip": {
            "formatter": "{a} (拟合值) <br/>{c}",
            "show": true
        },
        "itemStyle": {
            "color": "#DB98B1"
        },
        "showSymbol": false,
        "data": [
            ["2019-04-01 00:15:00.0", null],
            ["2019-04-01 00:20:00.0", " 6714.610"],
            ["2019-04-01 00:25:00.0", " 7126.334"],
            ["2019-04-01 00:40:00.0", " 7254.766"],
            ["2019-04-01 01:00:00.0", " 6341.490"],
            ["2019-04-01 01:10:00.0", " 5731.851"],
            ["2019-04-01 01:15:00.0", " 6326.063"],
            ["2019-04-01 01:20:00.0", " 6097.000"],
            ["2019-04-01 01:35:00.0", " 6066.408"],
            ["2019-04-01 01:45:00.0", " 7480.598"],
            ["2019-04-01 01:55:00.0", " 6758.077"],
            ["2019-04-01 02:05:00.0", " 7335.382"],
            ["2019-04-01 02:10:00.0", " 7485.577"],
            ["2019-04-01 02:20:00.0", " 7761.796"],
            ["2019-04-01 02:30:00.0", " 8346.023"],
            ["2019-04-01 02:45:00.0", " 8231.688"],
            ["2019-04-01 03:00:00.0", " 7512.469"],
            ["2019-04-01 03:10:00.0", " 7358.416"],
            ["2019-04-01 03:20:00.0", " 7464.659"],
            ["2019-04-01 03:30:00.0", " 7582.636"],
            ["2019-04-01 03:40:00.0", " 7922.038"]
        ]
    }, {
        "lineStyle": {
            "type": "dashed"
        },
        "name": "公司116",
        "type": "line",
        "tooltip": {
            "formatter": "{a} (预测值) <br/>{c}",
            "show": true
        },
        "itemStyle": {
            "color": "#DB98B1"
        },
        "symbolSize": 10,
        "showAllSymbol": true,
        "data": [
            ["2019-04-01 03:40:00.0", " 7922.038"],
            ["2019-04-01 03:50:00.0", " 8115.923"],
            ["2019-04-01 04:00:00.0", " 8176.139"],
            ["2019-04-01 04:10:00.0", " 8406.560"],
            ["2019-04-01 04:20:00.0", " 8600.444"],
            ["2019-04-01 04:30:00.0", " 8660.660"],
            ["2019-04-01 04:40:00.0", " 8891.081"]
        ]
    }, {
        "renderItem": function renderItem(params, api) {
            var points = [];
            for (var i = 0; i < params.dataInsideLength; i++) {
                points.push(api.coord([api.value(0, i), api.value(1, i)]));
            }
            var rectShape = {
                points: echarts.graphic.clipPointsByRect(points, {
                    x: params.coordSys.x,
                    y: params.coordSys.y,
                    width: params.coordSys.width,
                    height: params.coordSys.height
                })
            };
            return rectShape && {
                type: 'polygon',
                shape: {
                    points: echarts.graphic.clipPointsByRect(points, {
                        x: params.coordSys.x,
                        y: params.coordSys.y,
                        width: params.coordSys.width,
                        height: params.coordSys.height
                    })
                },
                style: api.style({
                    fill: '#ccc'
                })
            };
        },
        "name": "公司116",
        "type": "custom",
        "data": [
            ["2019-04-01 00:15:00.0", null],
            ["2019-04-01 00:15:00.0", null],
            ["2019-04-01 00:20:00.0", " 7857.479"],
            ["2019-04-01 00:20:00.0", " 5571.741"]
        ]
    }, {
        "renderItem": function renderItem(params, api) {
            var points = [];
            for (var i = 0; i < params.dataInsideLength; i++) {
                points.push(api.coord([api.value(0, i), api.value(1, i)]));
            }
            var rectShape = {
                points: echarts.graphic.clipPointsByRect(points, {
                    x: params.coordSys.x,
                    y: params.coordSys.y,
                    width: params.coordSys.width,
                    height: params.coordSys.height
                })
            };
            return rectShape && {
                type: 'polygon',
                shape: {
                    points: echarts.graphic.clipPointsByRect(points, {
                        x: params.coordSys.x,
                        y: params.coordSys.y,
                        width: params.coordSys.width,
                        height: params.coordSys.height
                    })
                },
                style: api.style({
                    fill: '#ccc'
                })
            };
        },
        "name": "公司116",
        "type": "custom",
        "data": [
            ["2019-04-01 00:20:00.0", " 5571.741"],
            ["2019-04-01 00:20:00.0", " 7857.479"],
            ["2019-04-01 00:25:00.0", " 8269.203"],
            ["2019-04-01 00:25:00.0", " 5983.465"]
        ]
    }, {
        "renderItem": function renderItem(params, api) {
            var points = [];
            for (var i = 0; i < params.dataInsideLength; i++) {
                points.push(api.coord([api.value(0, i), api.value(1, i)]));
            }
            var rectShape = {
                points: echarts.graphic.clipPointsByRect(points, {
                    x: params.coordSys.x,
                    y: params.coordSys.y,
                    width: params.coordSys.width,
                    height: params.coordSys.height
                })
            };
            return rectShape && {
                type: 'polygon',
                shape: {
                    points: echarts.graphic.clipPointsByRect(points, {
                        x: params.coordSys.x,
                        y: params.coordSys.y,
                        width: params.coordSys.width,
                        height: params.coordSys.height
                    })
                },
                style: api.style({
                    fill: '#ccc'
                })
            };
        },
        "name": "公司116",
        "type": "custom",
        "data": [
            ["2019-04-01 00:25:00.0", " 5983.465"],
            ["2019-04-01 00:25:00.0", " 8269.203"],
            ["2019-04-01 00:40:00.0", " 8397.635"],
            ["2019-04-01 00:40:00.0", " 6111.897"]
        ]
    }, {
        "renderItem": function renderItem(params, api) {
            var points = [];
            for (var i = 0; i < params.dataInsideLength; i++) {
                points.push(api.coord([api.value(0, i), api.value(1, i)]));
            }
            var rectShape = {
                points: echarts.graphic.clipPointsByRect(points, {
                    x: params.coordSys.x,
                    y: params.coordSys.y,
                    width: params.coordSys.width,
                    height: params.coordSys.height
                })
            };
            return rectShape && {
                type: 'polygon',
                shape: {
                    points: echarts.graphic.clipPointsByRect(points, {
                        x: params.coordSys.x,
                        y: params.coordSys.y,
                        width: params.coordSys.width,
                        height: params.coordSys.height
                    })
                },
                style: api.style({
                    fill: '#ccc'
                })
            };
        },
        "name": "公司116",
        "type": "custom",
        "data": [
            ["2019-04-01 00:40:00.0", " 6111.897"],
            ["2019-04-01 00:40:00.0", " 8397.635"],
            ["2019-04-01 01:00:00.0", " 7484.359"],
            ["2019-04-01 01:00:00.0", " 5198.621"]
        ]
    }, {
        "renderItem": function renderItem(params, api) {
            var points = [];
            for (var i = 0; i < params.dataInsideLength; i++) {
                points.push(api.coord([api.value(0, i), api.value(1, i)]));
            }
            var rectShape = {
                points: echarts.graphic.clipPointsByRect(points, {
                    x: params.coordSys.x,
                    y: params.coordSys.y,
                    width: params.coordSys.width,
                    height: params.coordSys.height
                })
            };
            return rectShape && {
                type: 'polygon',
                shape: {
                    points: echarts.graphic.clipPointsByRect(points, {
                        x: params.coordSys.x,
                        y: params.coordSys.y,
                        width: params.coordSys.width,
                        height: params.coordSys.height
                    })
                },
                style: api.style({
                    fill: '#ccc'
                })
            };
        },
        "name": "公司116",
        "type": "custom",
        "data": [
            ["2019-04-01 01:00:00.0", " 5198.621"],
            ["2019-04-01 01:00:00.0", " 7484.359"],
            ["2019-04-01 01:10:00.0", " 6874.720"],
            ["2019-04-01 01:10:00.0", " 4588.981"]
        ]
    }, {
        "renderItem": function renderItem(params, api) {
            var points = [];
            for (var i = 0; i < params.dataInsideLength; i++) {
                points.push(api.coord([api.value(0, i), api.value(1, i)]));
            }
            var rectShape = {
                points: echarts.graphic.clipPointsByRect(points, {
                    x: params.coordSys.x,
                    y: params.coordSys.y,
                    width: params.coordSys.width,
                    height: params.coordSys.height
                })
            };
            return rectShape && {
                type: 'polygon',
                shape: {
                    points: echarts.graphic.clipPointsByRect(points, {
                        x: params.coordSys.x,
                        y: params.coordSys.y,
                        width: params.coordSys.width,
                        height: params.coordSys.height
                    })
                },
                style: api.style({
                    fill: '#ccc'
                })
            };
        },
        "name": "公司116",
        "type": "custom",
        "data": [
            ["2019-04-01 01:10:00.0", " 4588.981"],
            ["2019-04-01 01:10:00.0", " 6874.720"],
            ["2019-04-01 01:15:00.0", " 7468.932"],
            ["2019-04-01 01:15:00.0", " 5183.194"]
        ]
    }, {
        "renderItem": function renderItem(params, api) {
            var points = [];
            for (var i = 0; i < params.dataInsideLength; i++) {
                points.push(api.coord([api.value(0, i), api.value(1, i)]));
            }
            var rectShape = {
                points: echarts.graphic.clipPointsByRect(points, {
                    x: params.coordSys.x,
                    y: params.coordSys.y,
                    width: params.coordSys.width,
                    height: params.coordSys.height
                })
            };
            return rectShape && {
                type: 'polygon',
                shape: {
                    points: echarts.graphic.clipPointsByRect(points, {
                        x: params.coordSys.x,
                        y: params.coordSys.y,
                        width: params.coordSys.width,
                        height: params.coordSys.height
                    })
                },
                style: api.style({
                    fill: '#ccc'
                })
            };
        },
        "name": "公司116",
        "type": "custom",
        "data": [
            ["2019-04-01 01:15:00.0", " 5183.194"],
            ["2019-04-01 01:15:00.0", " 7468.932"],
            ["2019-04-01 01:20:00.0", " 7239.870"],
            ["2019-04-01 01:20:00.0", " 4954.131"]
        ]
    }, {
        "renderItem": function renderItem(params, api) {
            var points = [];
            for (var i = 0; i < params.dataInsideLength; i++) {
                points.push(api.coord([api.value(0, i), api.value(1, i)]));
            }
            var rectShape = {
                points: echarts.graphic.clipPointsByRect(points, {
                    x: params.coordSys.x,
                    y: params.coordSys.y,
                    width: params.coordSys.width,
                    height: params.coordSys.height
                })
            };
            return rectShape && {
                type: 'polygon',
                shape: {
                    points: echarts.graphic.clipPointsByRect(points, {
                        x: params.coordSys.x,
                        y: params.coordSys.y,
                        width: params.coordSys.width,
                        height: params.coordSys.height
                    })
                },
                style: api.style({
                    fill: '#ccc'
                })
            };
        },
        "name": "公司116",
        "type": "custom",
        "data": [
            ["2019-04-01 01:20:00.0", " 4954.131"],
            ["2019-04-01 01:20:00.0", " 7239.870"],
            ["2019-04-01 01:35:00.0", " 7209.277"],
            ["2019-04-01 01:35:00.0", " 4923.539"]
        ]
    }, {
        "renderItem": function renderItem(params, api) {
            var points = [];
            for (var i = 0; i < params.dataInsideLength; i++) {
                points.push(api.coord([api.value(0, i), api.value(1, i)]));
            }
            var rectShape = {
                points: echarts.graphic.clipPointsByRect(points, {
                    x: params.coordSys.x,
                    y: params.coordSys.y,
                    width: params.coordSys.width,
                    height: params.coordSys.height
                })
            };
            return rectShape && {
                type: 'polygon',
                shape: {
                    points: echarts.graphic.clipPointsByRect(points, {
                        x: params.coordSys.x,
                        y: params.coordSys.y,
                        width: params.coordSys.width,
                        height: params.coordSys.height
                    })
                },
                style: api.style({
                    fill: '#ccc'
                })
            };
        },
        "name": "公司116",
        "type": "custom",
        "data": [
            ["2019-04-01 01:35:00.0", " 4923.539"],
            ["2019-04-01 01:35:00.0", " 7209.277"],
            ["2019-04-01 01:45:00.0", " 8623.467"],
            ["2019-04-01 01:45:00.0", " 6337.729"]
        ]
    }, {
        "renderItem": function renderItem(params, api) {
            var points = [];
            for (var i = 0; i < params.dataInsideLength; i++) {
                points.push(api.coord([api.value(0, i), api.value(1, i)]));
            }
            var rectShape = {
                points: echarts.graphic.clipPointsByRect(points, {
                    x: params.coordSys.x,
                    y: params.coordSys.y,
                    width: params.coordSys.width,
                    height: params.coordSys.height
                })
            };
            return rectShape && {
                type: 'polygon',
                shape: {
                    points: echarts.graphic.clipPointsByRect(points, {
                        x: params.coordSys.x,
                        y: params.coordSys.y,
                        width: params.coordSys.width,
                        height: params.coordSys.height
                    })
                },
                style: api.style({
                    fill: '#ccc'
                })
            };
        },
        "name": "公司116",
        "type": "custom",
        "data": [
            ["2019-04-01 01:45:00.0", " 6337.729"],
            ["2019-04-01 01:45:00.0", " 8623.467"],
            ["2019-04-01 01:55:00.0", " 7900.946"],
            ["2019-04-01 01:55:00.0", " 5615.208"]
        ]
    }, {
        "renderItem": function renderItem(params, api) {
            var points = [];
            for (var i = 0; i < params.dataInsideLength; i++) {
                points.push(api.coord([api.value(0, i), api.value(1, i)]));
            }
            var rectShape = {
                points: echarts.graphic.clipPointsByRect(points, {
                    x: params.coordSys.x,
                    y: params.coordSys.y,
                    width: params.coordSys.width,
                    height: params.coordSys.height
                })
            };
            return rectShape && {
                type: 'polygon',
                shape: {
                    points: echarts.graphic.clipPointsByRect(points, {
                        x: params.coordSys.x,
                        y: params.coordSys.y,
                        width: params.coordSys.width,
                        height: params.coordSys.height
                    })
                },
                style: api.style({
                    fill: '#ccc'
                })
            };
        },
        "name": "公司116",
        "type": "custom",
        "data": [
            ["2019-04-01 01:55:00.0", " 5615.208"],
            ["2019-04-01 01:55:00.0", " 7900.946"],
            ["2019-04-01 02:05:00.0", " 8478.252"],
            ["2019-04-01 02:05:00.0", " 6192.513"]
        ]
    }, {
        "renderItem": function renderItem(params, api) {
            var points = [];
            for (var i = 0; i < params.dataInsideLength; i++) {
                points.push(api.coord([api.value(0, i), api.value(1, i)]));
            }
            var rectShape = {
                points: echarts.graphic.clipPointsByRect(points, {
                    x: params.coordSys.x,
                    y: params.coordSys.y,
                    width: params.coordSys.width,
                    height: params.coordSys.height
                })
            };
            return rectShape && {
                type: 'polygon',
                shape: {
                    points: echarts.graphic.clipPointsByRect(points, {
                        x: params.coordSys.x,
                        y: params.coordSys.y,
                        width: params.coordSys.width,
                        height: params.coordSys.height
                    })
                },
                style: api.style({
                    fill: '#ccc'
                })
            };
        },
        "name": "公司116",
        "type": "custom",
        "data": [
            ["2019-04-01 02:05:00.0", " 6192.513"],
            ["2019-04-01 02:05:00.0", " 8478.252"],
            ["2019-04-01 02:10:00.0", " 8628.446"],
            ["2019-04-01 02:10:00.0", " 6342.708"]
        ]
    }, {
        "renderItem": function renderItem(params, api) {
            var points = [];
            for (var i = 0; i < params.dataInsideLength; i++) {
                points.push(api.coord([api.value(0, i), api.value(1, i)]));
            }
            var rectShape = {
                points: echarts.graphic.clipPointsByRect(points, {
                    x: params.coordSys.x,
                    y: params.coordSys.y,
                    width: params.coordSys.width,
                    height: params.coordSys.height
                })
            };
            return rectShape && {
                type: 'polygon',
                shape: {
                    points: echarts.graphic.clipPointsByRect(points, {
                        x: params.coordSys.x,
                        y: params.coordSys.y,
                        width: params.coordSys.width,
                        height: params.coordSys.height
                    })
                },
                style: api.style({
                    fill: '#ccc'
                })
            };
        },
        "name": "公司116",
        "type": "custom",
        "data": [
            ["2019-04-01 02:10:00.0", " 6342.708"],
            ["2019-04-01 02:10:00.0", " 8628.446"],
            ["2019-04-01 02:20:00.0", " 8904.665"],
            ["2019-04-01 02:20:00.0", " 6618.927"]
        ]
    }, {
        "renderItem": function renderItem(params, api) {
            var points = [];
            for (var i = 0; i < params.dataInsideLength; i++) {
                points.push(api.coord([api.value(0, i), api.value(1, i)]));
            }
            var rectShape = {
                points: echarts.graphic.clipPointsByRect(points, {
                    x: params.coordSys.x,
                    y: params.coordSys.y,
                    width: params.coordSys.width,
                    height: params.coordSys.height
                })
            };
            return rectShape && {
                type: 'polygon',
                shape: {
                    points: echarts.graphic.clipPointsByRect(points, {
                        x: params.coordSys.x,
                        y: params.coordSys.y,
                        width: params.coordSys.width,
                        height: params.coordSys.height
                    })
                },
                style: api.style({
                    fill: '#ccc'
                })
            };
        },
        "name": "公司116",
        "type": "custom",
        "data": [
            ["2019-04-01 02:20:00.0", " 6618.927"],
            ["2019-04-01 02:20:00.0", " 8904.665"],
            ["2019-04-01 02:30:00.0", " 9488.892"],
            ["2019-04-01 02:30:00.0", " 7203.154"]
        ]
    }, {
        "renderItem": function renderItem(params, api) {
            var points = [];
            for (var i = 0; i < params.dataInsideLength; i++) {
                points.push(api.coord([api.value(0, i), api.value(1, i)]));
            }
            var rectShape = {
                points: echarts.graphic.clipPointsByRect(points, {
                    x: params.coordSys.x,
                    y: params.coordSys.y,
                    width: params.coordSys.width,
                    height: params.coordSys.height
                })
            };
            return rectShape && {
                type: 'polygon',
                shape: {
                    points: echarts.graphic.clipPointsByRect(points, {
                        x: params.coordSys.x,
                        y: params.coordSys.y,
                        width: params.coordSys.width,
                        height: params.coordSys.height
                    })
                },
                style: api.style({
                    fill: '#ccc'
                })
            };
        },
        "name": "公司116",
        "type": "custom",
        "data": [
            ["2019-04-01 02:30:00.0", " 7203.154"],
            ["2019-04-01 02:30:00.0", " 9488.892"],
            ["2019-04-01 02:45:00.0", " 9374.558"],
            ["2019-04-01 02:45:00.0", " 7088.819"]
        ]
    }, {
        "renderItem": function renderItem(params, api) {
            var points = [];
            for (var i = 0; i < params.dataInsideLength; i++) {
                points.push(api.coord([api.value(0, i), api.value(1, i)]));
            }
            var rectShape = {
                points: echarts.graphic.clipPointsByRect(points, {
                    x: params.coordSys.x,
                    y: params.coordSys.y,
                    width: params.coordSys.width,
                    height: params.coordSys.height
                })
            };
            return rectShape && {
                type: 'polygon',
                shape: {
                    points: echarts.graphic.clipPointsByRect(points, {
                        x: params.coordSys.x,
                        y: params.coordSys.y,
                        width: params.coordSys.width,
                        height: params.coordSys.height
                    })
                },
                style: api.style({
                    fill: '#ccc'
                })
            };
        },
        "name": "公司116",
        "type": "custom",
        "data": [
            ["2019-04-01 02:45:00.0", " 7088.819"],
            ["2019-04-01 02:45:00.0", " 9374.558"],
            ["2019-04-01 03:00:00.0", " 8655.338"],
            ["2019-04-01 03:00:00.0", " 6369.600"]
        ]
    }, {
        "renderItem": function renderItem(params, api) {
            var points = [];
            for (var i = 0; i < params.dataInsideLength; i++) {
                points.push(api.coord([api.value(0, i), api.value(1, i)]));
            }
            var rectShape = {
                points: echarts.graphic.clipPointsByRect(points, {
                    x: params.coordSys.x,
                    y: params.coordSys.y,
                    width: params.coordSys.width,
                    height: params.coordSys.height
                })
            };
            return rectShape && {
                type: 'polygon',
                shape: {
                    points: echarts.graphic.clipPointsByRect(points, {
                        x: params.coordSys.x,
                        y: params.coordSys.y,
                        width: params.coordSys.width,
                        height: params.coordSys.height
                    })
                },
                style: api.style({
                    fill: '#ccc'
                })
            };
        },
        "name": "公司116",
        "type": "custom",
        "data": [
            ["2019-04-01 03:00:00.0", " 6369.600"],
            ["2019-04-01 03:00:00.0", " 8655.338"],
            ["2019-04-01 03:10:00.0", " 8501.285"],
            ["2019-04-01 03:10:00.0", " 6215.547"]
        ]
    }, {
        "renderItem": function renderItem(params, api) {
            var points = [];
            for (var i = 0; i < params.dataInsideLength; i++) {
                points.push(api.coord([api.value(0, i), api.value(1, i)]));
            }
            var rectShape = {
                points: echarts.graphic.clipPointsByRect(points, {
                    x: params.coordSys.x,
                    y: params.coordSys.y,
                    width: params.coordSys.width,
                    height: params.coordSys.height
                })
            };
            return rectShape && {
                type: 'polygon',
                shape: {
                    points: echarts.graphic.clipPointsByRect(points, {
                        x: params.coordSys.x,
                        y: params.coordSys.y,
                        width: params.coordSys.width,
                        height: params.coordSys.height
                    })
                },
                style: api.style({
                    fill: '#ccc'
                })
            };
        },
        "name": "公司116",
        "type": "custom",
        "data": [
            ["2019-04-01 03:10:00.0", " 6215.547"],
            ["2019-04-01 03:10:00.0", " 8501.285"],
            ["2019-04-01 03:20:00.0", " 8607.528"],
            ["2019-04-01 03:20:00.0", " 6321.790"]
        ]
    }, {
        "renderItem": function renderItem(params, api) {
            var points = [];
            for (var i = 0; i < params.dataInsideLength; i++) {
                points.push(api.coord([api.value(0, i), api.value(1, i)]));
            }
            var rectShape = {
                points: echarts.graphic.clipPointsByRect(points, {
                    x: params.coordSys.x,
                    y: params.coordSys.y,
                    width: params.coordSys.width,
                    height: params.coordSys.height
                })
            };
            return rectShape && {
                type: 'polygon',
                shape: {
                    points: echarts.graphic.clipPointsByRect(points, {
                        x: params.coordSys.x,
                        y: params.coordSys.y,
                        width: params.coordSys.width,
                        height: params.coordSys.height
                    })
                },
                style: api.style({
                    fill: '#ccc'
                })
            };
        },
        "name": "公司116",
        "type": "custom",
        "data": [
            ["2019-04-01 03:20:00.0", " 6321.790"],
            ["2019-04-01 03:20:00.0", " 8607.528"],
            ["2019-04-01 03:30:00.0", " 8725.505"],
            ["2019-04-01 03:30:00.0", " 6439.767"]
        ]
    }, {
        "renderItem": function renderItem(params, api) {
            var points = [];
            for (var i = 0; i < params.dataInsideLength; i++) {
                points.push(api.coord([api.value(0, i), api.value(1, i)]));
            }
            var rectShape = {
                points: echarts.graphic.clipPointsByRect(points, {
                    x: params.coordSys.x,
                    y: params.coordSys.y,
                    width: params.coordSys.width,
                    height: params.coordSys.height
                })
            };
            return rectShape && {
                type: 'polygon',
                shape: {
                    points: echarts.graphic.clipPointsByRect(points, {
                        x: params.coordSys.x,
                        y: params.coordSys.y,
                        width: params.coordSys.width,
                        height: params.coordSys.height
                    })
                },
                style: api.style({
                    fill: '#ccc'
                })
            };
        },
        "name": "公司116",
        "type": "custom",
        "data": [
            ["2019-04-01 03:30:00.0", " 6439.767"],
            ["2019-04-01 03:30:00.0", " 8725.505"],
            ["2019-04-01 03:40:00.0", " 9424.443"],
            ["2019-04-01 03:40:00.0", " 6419.633"]
        ]
    }, {
        "renderItem": function renderItem(params, api) {
            var points = [];
            for (var i = 0; i < params.dataInsideLength; i++) {
                points.push(api.coord([api.value(0, i), api.value(1, i)]));
            }
            var rectShape = {
                points: echarts.graphic.clipPointsByRect(points, {
                    x: params.coordSys.x,
                    y: params.coordSys.y,
                    width: params.coordSys.width,
                    height: params.coordSys.height
                })
            };
            return rectShape && {
                type: 'polygon',
                shape: {
                    points: echarts.graphic.clipPointsByRect(points, {
                        x: params.coordSys.x,
                        y: params.coordSys.y,
                        width: params.coordSys.width,
                        height: params.coordSys.height
                    })
                },
                style: api.style({
                    fill: '#ccc'
                })
            };
        },
        "name": "公司116",
        "type": "custom",
        "data": [
            ["2019-04-01 03:40:00.0", " 6419.633"],
            ["2019-04-01 03:40:00.0", " 9424.443"],
            ["2019-04-01 03:50:00.0", " 10240.644"],
            ["2019-04-01 03:50:00.0", " 5991.202"]
        ]
    }, {
        "renderItem": function renderItem(params, api) {
            var points = [];
            for (var i = 0; i < params.dataInsideLength; i++) {
                points.push(api.coord([api.value(0, i), api.value(1, i)]));
            }
            var rectShape = {
                points: echarts.graphic.clipPointsByRect(points, {
                    x: params.coordSys.x,
                    y: params.coordSys.y,
                    width: params.coordSys.width,
                    height: params.coordSys.height
                })
            };
            return rectShape && {
                type: 'polygon',
                shape: {
                    points: echarts.graphic.clipPointsByRect(points, {
                        x: params.coordSys.x,
                        y: params.coordSys.y,
                        width: params.coordSys.width,
                        height: params.coordSys.height
                    })
                },
                style: api.style({
                    fill: '#ccc'
                })
            };
        },
        "name": "公司116",
        "type": "custom",
        "data": [
            ["2019-04-01 03:50:00.0", " 5991.202"],
            ["2019-04-01 03:50:00.0", " 10240.644"],
            ["2019-04-01 04:00:00.0", " 10709.236"],
            ["2019-04-01 04:00:00.0", " 5643.042"]
        ]
    }, {
        "renderItem": function renderItem(params, api) {
            var points = [];
            for (var i = 0; i < params.dataInsideLength; i++) {
                points.push(api.coord([api.value(0, i), api.value(1, i)]));
            }
            var rectShape = {
                points: echarts.graphic.clipPointsByRect(points, {
                    x: params.coordSys.x,
                    y: params.coordSys.y,
                    width: params.coordSys.width,
                    height: params.coordSys.height
                })
            };
            return rectShape && {
                type: 'polygon',
                shape: {
                    points: echarts.graphic.clipPointsByRect(points, {
                        x: params.coordSys.x,
                        y: params.coordSys.y,
                        width: params.coordSys.width,
                        height: params.coordSys.height
                    })
                },
                style: api.style({
                    fill: '#ccc'
                })
            };
        },
        "name": "公司116",
        "type": "custom",
        "data": [
            ["2019-04-01 04:00:00.0", " 5643.042"],
            ["2019-04-01 04:00:00.0", " 10709.236"],
            ["2019-04-01 04:10:00.0", " 11351.691"],
            ["2019-04-01 04:10:00.0", " 5461.428"]
        ]
    }, {
        "renderItem": function renderItem(params, api) {
            var points = [];
            for (var i = 0; i < params.dataInsideLength; i++) {
                points.push(api.coord([api.value(0, i), api.value(1, i)]));
            }
            var rectShape = {
                points: echarts.graphic.clipPointsByRect(points, {
                    x: params.coordSys.x,
                    y: params.coordSys.y,
                    width: params.coordSys.width,
                    height: params.coordSys.height
                })
            };
            return rectShape && {
                type: 'polygon',
                shape: {
                    points: echarts.graphic.clipPointsByRect(points, {
                        x: params.coordSys.x,
                        y: params.coordSys.y,
                        width: params.coordSys.width,
                        height: params.coordSys.height
                    })
                },
                style: api.style({
                    fill: '#ccc'
                })
            };
        },
        "name": "公司116",
        "type": "custom",
        "data": [
            ["2019-04-01 04:10:00.0", " 5461.428"],
            ["2019-04-01 04:10:00.0", " 11351.691"],
            ["2019-04-01 04:20:00.0", " 11906.654"],
            ["2019-04-01 04:20:00.0", " 5294.235"]
        ]
    }, {
        "renderItem": function renderItem(params, api) {
            var points = [];
            for (var i = 0; i < params.dataInsideLength; i++) {
                points.push(api.coord([api.value(0, i), api.value(1, i)]));
            }
            var rectShape = {
                points: echarts.graphic.clipPointsByRect(points, {
                    x: params.coordSys.x,
                    y: params.coordSys.y,
                    width: params.coordSys.width,
                    height: params.coordSys.height
                })
            };
            return rectShape && {
                type: 'polygon',
                shape: {
                    points: echarts.graphic.clipPointsByRect(points, {
                        x: params.coordSys.x,
                        y: params.coordSys.y,
                        width: params.coordSys.width,
                        height: params.coordSys.height
                    })
                },
                style: api.style({
                    fill: '#ccc'
                })
            };
        },
        "name": "公司116",
        "type": "custom",
        "data": [
            ["2019-04-01 04:20:00.0", " 5294.235"],
            ["2019-04-01 04:20:00.0", " 11906.654"],
            ["2019-04-01 04:30:00.0", " 12243.000"],
            ["2019-04-01 04:30:00.0", " 5078.320"]
        ]
    }, {
        "renderItem": function renderItem(params, api) {
            var points = [];
            for (var i = 0; i < params.dataInsideLength; i++) {
                points.push(api.coord([api.value(0, i), api.value(1, i)]));
            }
            var rectShape = {
                points: echarts.graphic.clipPointsByRect(points, {
                    x: params.coordSys.x,
                    y: params.coordSys.y,
                    width: params.coordSys.width,
                    height: params.coordSys.height
                })
            };
            return rectShape && {
                type: 'polygon',
                shape: {
                    points: echarts.graphic.clipPointsByRect(points, {
                        x: params.coordSys.x,
                        y: params.coordSys.y,
                        width: params.coordSys.width,
                        height: params.coordSys.height
                    })
                },
                style: api.style({
                    fill: '#ccc'
                })
            };
        },
        "name": "公司116",
        "type": "custom",
        "data": [
            ["2019-04-01 04:30:00.0", " 5078.320"],
            ["2019-04-01 04:30:00.0", " 12243.000"],
            ["2019-04-01 04:40:00.0", " 12775.715"],
            ["2019-04-01 04:40:00.0", " 5006.447"]
        ]
    }, {
        "renderItem": function renderItem(params, api) {
            var points = [];
            for (var i = 0; i < params.dataInsideLength; i++) {
                points.push(api.coord([api.value(0, i), api.value(1, i)]));
            }
            var rectShape = {
                points: echarts.graphic.clipPointsByRect(points, {
                    x: params.coordSys.x,
                    y: params.coordSys.y,
                    width: params.coordSys.width,
                    height: params.coordSys.height
                })
            };
            return rectShape && {
                type: 'polygon',
                shape: {
                    points: echarts.graphic.clipPointsByRect(points, {
                        x: params.coordSys.x,
                        y: params.coordSys.y,
                        width: params.coordSys.width,
                        height: params.coordSys.height
                    })
                },
                style: api.style({
                    fill: '#ccc'
                })
            };
        },
        "name": "公司116",
        "type": "custom",
        "data": [
            ["2019-04-01 04:40:00.0", " 5006.447"],
            ["2019-04-01 04:40:00.0", " 12775.715"]
        ]
    }, {
        "lineStyle": {
            "type": "dashed"
        },
        "name": "公司116",
        "type": "line",
        "tooltip": {
            "formatter": "{a} (预测值下限) <br/>{c}",
            "show": true
        },
        "itemStyle": {
            "color": "#DB98B1"
        },
        "symbolSize": 5,
        "showAllSymbol": true,
        "data": [
            ["2019-04-01 00:15:00.0", null],
            ["2019-04-01 00:20:00.0", " 5571.741"],
            ["2019-04-01 00:25:00.0", " 5983.465"],
            ["2019-04-01 00:40:00.0", " 6111.897"],
            ["2019-04-01 01:00:00.0", " 5198.621"],
            ["2019-04-01 01:10:00.0", " 4588.981"],
            ["2019-04-01 01:15:00.0", " 5183.194"],
            ["2019-04-01 01:20:00.0", " 4954.131"],
            ["2019-04-01 01:35:00.0", " 4923.539"],
            ["2019-04-01 01:45:00.0", " 6337.729"],
            ["2019-04-01 01:55:00.0", " 5615.208"],
            ["2019-04-01 02:05:00.0", " 6192.513"],
            ["2019-04-01 02:10:00.0", " 6342.708"],
            ["2019-04-01 02:20:00.0", " 6618.927"],
            ["2019-04-01 02:30:00.0", " 7203.154"],
            ["2019-04-01 02:45:00.0", " 7088.819"],
            ["2019-04-01 03:00:00.0", " 6369.600"],
            ["2019-04-01 03:10:00.0", " 6215.547"],
            ["2019-04-01 03:20:00.0", " 6321.790"],
            ["2019-04-01 03:30:00.0", " 6439.767"],
            ["2019-04-01 03:40:00.0", " 6419.633"],
            ["2019-04-01 03:50:00.0", " 5991.202"],
            ["2019-04-01 04:00:00.0", " 5643.042"],
            ["2019-04-01 04:10:00.0", " 5461.428"],
            ["2019-04-01 04:20:00.0", " 5294.235"],
            ["2019-04-01 04:30:00.0", " 5078.320"],
            ["2019-04-01 04:40:00.0", " 5006.447"]
        ]
    }, {
        "lineStyle": {
            "type": "dashed"
        },
        "name": "公司116",
        "type": "line",
        "tooltip": {
            "formatter": "{a} (预测值上限) <br/>{c}",
            "show": true
        },
        "itemStyle": {
            "color": "#DB98B1"
        },
        "symbolSize": 5,
        "showAllSymbol": true,
        "data": [
            ["2019-04-01 00:15:00.0", null],
            ["2019-04-01 00:20:00.0", " 7857.479"],
            ["2019-04-01 00:25:00.0", " 8269.203"],
            ["2019-04-01 00:40:00.0", " 8397.635"],
            ["2019-04-01 01:00:00.0", " 7484.359"],
            ["2019-04-01 01:10:00.0", " 6874.720"],
            ["2019-04-01 01:15:00.0", " 7468.932"],
            ["2019-04-01 01:20:00.0", " 7239.870"],
            ["2019-04-01 01:35:00.0", " 7209.277"],
            ["2019-04-01 01:45:00.0", " 8623.467"],
            ["2019-04-01 01:55:00.0", " 7900.946"],
            ["2019-04-01 02:05:00.0", " 8478.252"],
            ["2019-04-01 02:10:00.0", " 8628.446"],
            ["2019-04-01 02:20:00.0", " 8904.665"],
            ["2019-04-01 02:30:00.0", " 9488.892"],
            ["2019-04-01 02:45:00.0", " 9374.558"],
            ["2019-04-01 03:00:00.0", " 8655.338"],
            ["2019-04-01 03:10:00.0", " 8501.285"],
            ["2019-04-01 03:20:00.0", " 8607.528"],
            ["2019-04-01 03:30:00.0", " 8725.505"],
            ["2019-04-01 03:40:00.0", " 9424.443"],
            ["2019-04-01 03:50:00.0", " 10240.644"],
            ["2019-04-01 04:00:00.0", " 10709.236"],
            ["2019-04-01 04:10:00.0", " 11351.691"],
            ["2019-04-01 04:20:00.0", " 11906.654"],
            ["2019-04-01 04:30:00.0", " 12243.000"],
            ["2019-04-01 04:40:00.0", " 12775.715"]
        ]
    }]
}