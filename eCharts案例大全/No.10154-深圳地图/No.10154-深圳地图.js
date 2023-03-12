var uploadedDataURL = "/asset/get/s/data-1567393803363-qAD2AI9zJ.json";

var uploadedDataURL1 = "/asset/get/s/data-1567393796204-pP-kiz5Bl.json";

$.getJSON(uploadedDataURL, function(val) {
    var data = val['data']
    var hStep = 300 / (data.length - 1);
    var busLines = [].concat.apply([], data.map(function(busLine, idx) {
        var prevPt;
        var points = [];
        for (var i = 0; i < busLine.length; i += 2) {
            var pt = [busLine[i], busLine[i + 1]];
            if (i > 0) {
                pt = [
                    prevPt[0] + pt[0],
                    prevPt[1] + pt[1]
                ];
            }
            prevPt = pt;

            points.push([pt[0] / 1e4, pt[1] / 1e4]);
        }
        return {
            coords: points,
            lineStyle: {
                normal: {
                    color: echarts.color.modifyHSL('#5A94DF', Math.round(hStep * idx))
                }
            }
        };
    }))
    $.getJSON(uploadedDataURL1, function(geoJson) {
        echarts.registerMap('shenzhenpart', geoJson);
        myChart.setOption(option = {
            "title": {
                "show": true,
                "text": "深圳地图",
                "textStyle": {
                    "color": "#fff"
                }
            },
            "tooltip": {},
            "backgroundColor": "#000",
            "visualMap": {
                "show": false,
                "min": 0,
                "max": 200,
                "left": "left",
                "top": "bottom",
                "text": [
                    "",
                    ""
                ],
                "calculable": false,
                "seriesIndex": [
                    1
                ],
                "inRange": {
                    "color": [
                        "#00467F",
                        "#A5CC82"
                    ]
                }
            },
            "geo": {
                "show": true,
                "map": "shenzhenpart",
                "label": {},
                "roam": true,
                "itemStyle": {
                    "normal": {
                        "areaColor": "#031525",
                        "borderColor": "#3B5077",
                        "shadowColor": "",
                        "borderWidth": 1,
                        "shadowBlur": 1
                    },
                    "emphasis": {
                        "areaColor": "#031525"
                    }
                }
            },
            "series": [

                {
                    "type": "map",
                    "map": "shenzhenpart",
                    "geoIndex": 0,
                    "aspectScale": 0.75,
                    "data": []
                },
                {
                    "type": "lines",
                    "coordinateSystem": "geo",
                    "polyline": true,
                    "data": busLines,
                    "silent": false,
                    "lineStyle": {
                        "normal": {

                            "opacity": 0.2,
                            "width": 1
                        }
                    },
                    "progressiveThreshold": 500,
                    "progressive": 200
                }, {
                    "type": "lines",
                    "coordinateSystem": "geo",
                    "polyline": true,
                    "data": busLines,
                    "lineStyle": {
                        "normal": {
                            "width": 0
                        }
                    },
                    "effect": {
                        "constantSpeed": 20,
                        "show": true,
                        "trailLength": 0.1,
                        "symbolSize": 1.5
                    },
                    "zlevel": 1
                }
            ]
        })
    })
})