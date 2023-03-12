var directionMap = {};
echarts.util.each(
    ['W', 'WSW', 'SW', 'SSW', 'S', 'SSE', 'SE', 'ESE', 'E', 'ENE', 'NE', 'NNE', 'N', 'NNW', 'NW', 'WNW'],
    function (name, index) {
        directionMap[name] = Math.PI / 8 * index;
    }
);

var dims = {
    time: 0,
    windSpeed: 1,
    R: 2,
    waveHeight: 3,
    weatherIcon: 2,
    minTemp: 3,
    maxTemp: 4
};
var arrowSize = 18;
var weatherIconSize = 45;

function renderArrow(param, api) {
    var point = api.coord([
        api.value(dims.time),
        api.value(dims.windSpeed)
    ]);

    return {
        type: 'path',
        shape: {
            pathData: 'M31 16l-15-15v9h-26v12h26v9z',
            x: -arrowSize / 2,
            y: -arrowSize / 2,
            width: arrowSize,
            height: arrowSize
        },
        rotation: directionMap[api.value(dims.R)],
        position: point,
        style: api.style({
            stroke: '#555',
            lineWidth: 1
        })
    };
}

option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, {
            value:800,
            symbol:'image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7',
            symbolRotate:'20',
            symbolSize:85
        }],
        type: 'line'
    }]
};