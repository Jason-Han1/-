var heightTexture  = "/asset/get/s/data-1630294324392-McCHv6-EM.jpg";

var baseTexture = "/asset/get/s/data-1630294313345-I6p3k_A84.jpg";

var uploadedDataURL = "/asset/get/s/data-1630294261201-pwFPhVtSm.json";

$.getJSON(uploadedDataURL, function(data) {

    function getAirportCoord(idx) {
        return [data.airports[idx][3], data.airports[idx][4]];
    }
    var routes = data.routes.map(function(airline) {
        return [
            getAirportCoord(airline[1]),
            getAirportCoord(airline[2])
        ];
    });

    myChart.setOption({
        backgroundColor: '#000',
        globe: {
            baseTexture: baseTexture, 
            heightTexture: heightTexture,

            shading: 'lambert',

            light: {
                ambient: {
                    intensity: 0.4
                },
                main: {
                    intensity: 0.4
                }
            },

            viewControl: {
                autoRotate: false
            }
        },
        series: {

            type: 'lines3D',

            coordinateSystem: 'globe',

            blendMode: 'lighter',
            effect: {
                show: true,
                trailWidth: 1,
                trailLength: 0.15,
                trailOpacity: 1,
                trailColor: 'rgb(30, 30, 60)'
            },
            lineStyle: {
                width: 1,
                color: 'rgb(50, 50, 150)',
                opacity: 0.1
            },

            data: routes
        }
    });
});

