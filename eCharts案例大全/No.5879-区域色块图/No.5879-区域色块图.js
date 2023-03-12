var uploadedDataURL = "/asset/get/s/data-1594281065688-80dQTMwuL.json";

$.get(uploadedDataURL, function(geoJson) {
    echarts.registerMap('china', geoJson)
    
    myChart.setOption({
        geo: {
            map: 'china',
            label: {
                show: true
            },
            roam: true,
            itemStyle: {
                areaColor: '#76b1ff',
                borderColor: '#eee',
                shadowColor: '#76b1ff',
                shadowBlur: 10,
                borderWidth: 1
            },
            emphasis: {
                itemStyle: {
                    areaColor: '#409EFF',
                    borderWidth: 0
                }
            }
        },
        series: [{
            type: 'custom',
            coordinateSystem: 'geo',
            renderItem: function(params, api) {
                var coords = [
                    [116.7, 39.53],
                    [103.73, 36.03],
                    [112.91, 27.87],
                    [120.65, 28.01],
                    [119.57, 39.95]
                ];
                var points = [];
                for (var i = 0; i < coords.length; i++) {
                    points.push(api.coord(coords[i]));
                }
                var color = api.visual('color');
                
                return {
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
                        fill: color,
                        stroke: echarts.color.lift(color)
                    })
                };
            },
            itemStyle: {
                opacity: 0.5
            },
            animation: false,
            silent: true,
            data: [0],
            z: -10
        }]
    });
});