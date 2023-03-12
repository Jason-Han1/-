
var AIRPORT_IMG_SRC = '/asset/get/s/data-1525239162280-H1GFpTIaM.png';
var COORD_WIDTH = 8000;
var COORD_HEIGHT = 3680;

echarts.registerMap('airport', {
    type: 'FeatureCollection',
    features: [{
        geometry: {
            type: 'Polygon',
            coordinates: [[[0, 0], [COORD_WIDTH, 0], [COORD_WIDTH, COORD_HEIGHT], [0, COORD_HEIGHT]]]
        },
        properties: {name: 'Afghanistan', childNum: 1}
    }]
});

option = {
    tooltip: {
        backgroundColor: 'rgba(255,255,255,0.8)',
        borderColor: '#333',
        borderWidth: 1,
        textStyle: {
            color: '#333'
        }
    },
    geo: {
        map: 'airport',
        roam: true,
        itemStyle: {
            normal: {
                areaColor: 'transparent',
                borderColor: 'transparent'
            },
            emphasis: {
                areaColor: 'transparent'
            }
        }
    },
    series: [{
        type: 'custom',
        id: 'airport',
        coordinateSystem: 'geo',
        renderItem: function (params, api) {
            var lt = api.coord([0,0]);
            var rb = api.coord([COORD_WIDTH, COORD_HEIGHT]);
            
            return {
                type: 'image',
                style: {
                    image: AIRPORT_IMG_SRC,
                    x: lt[0],
                    y: lt[1],
                    width: rb[0] - lt[0],
                    height: rb[1] - lt[1]
                }
            };
        },
        data: [[0,0]]
    }]
};

