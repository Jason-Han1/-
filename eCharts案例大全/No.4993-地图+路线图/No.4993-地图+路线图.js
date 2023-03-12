var busLinesJson = "/asset/get/s/data-1605853143935-Y5HfEEL1S.json";

var busLinesJson = "/asset/get/s/data-1605854399666-LnnDTJC97.json";

var uploadedDataURL = "/asset/get/s/data-1605853253903-nBvERZAPV.json";

// 路线坐标点使用 高德-折线 获取

$.getJSON(busLinesJson, function(data) {
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
            coords: points
        }
    }))
    console.log(busLines)
    myChart.showLoading();
    $.getJSON(uploadedDataURL, function(geoJson) {
        echarts.registerMap('beijing', geoJson);
        myChart.hideLoading();

        option = {
            backgroundColor: '#fff',
            geo: {
                map: 'beijing',
                label: {
                    normal: {
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        areaColor: '#2AB8FF'
                    },
                    emphasis: {
                        areaColor: '#8FF'
                    }
                }
            },
            series: [{
                type: 'lines',
                coordinateSystem: 'geo',
                polyline: true,
                data: busLines,
                silent: true,
                lineStyle: {
                    color: 'rgb(200, 35, 45)',
                    opacity: 1,
                    width: 2
                },
                progressiveThreshold: 500,
                progressive: 200
            }, {
                type: "scatter",
                coordinateSystem: 'geo',
                data: [[116.4134, 40.0892]],
                symbol: "pin",
                symbolSize: 1,
                label: {
                    show: true,
                    formatter: (param) => {
                        return 'G4'
                    },
                    position: [-18, -10],
                    fontSize: 12,
                    color: "#ff0",
                },
            }]
        };

        myChart.setOption(option);
    });
})